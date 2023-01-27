<?php

namespace App\Controller;

use App\Entity\FutureUser;
use App\Repository\FutureUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    private EntityManagerInterface $em;
    private FutureUserRepository $futurUser_repo;

    public function __construct(EntityManagerInterface $em, FutureUserRepository $futur_u_r) {
        $this->em = $em;
        $this->futurUser_repo = $futur_u_r;
    }

    /**
     * @Route("/", name="app_app")
     */
    public function index(): Response
    {
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/register", name="app_register", methods={"POST"})
     */
    public function registerUser(): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $u = $data["user"];

        if (null !== $u) {
            $newUser = new FutureUser();

            $newUser->setNom($u["name"] !== null ? $u["name"] : "");
            $newUser->setPrenom($u["prenom"] !== null ? $u["prenom"] : "");
            $newUser->setEmail($u["email"] !== null ? $u["email"] : "");
            $newUser->setTelephone($u["telephone"] !== null ? $u["telephone"] : "");
            $newUser->setNationalite($u["nationalite"] !== null ? $u["nationalite"] : "");
            $newUser->setIsValid(false);

            $this->em->persist($newUser);
            $this->em->flush();

            return $this->json([
                "code" => 200,
                "message" => "New user added!",
            ]);
        }

        return $this->json([
            "code" => 500,
            "message" => "User undefined",
        ]);
    }

    /**
     * @Route("/admin/register/valid-user/{id}", name="app_register_admin", methods={"POST"})
     */
    public function registerUserAdmin(string $id): JsonResponse
    {
        $user = $this->getUser();

        if ($user->getRoles()[0] !== 'ROLE_ADMIN') {
            $response = new JsonResponse("Not an admin user", 400);
            return $response->send();
        }

        $futurU = $this->futurUser_repo->findOneBy(["id", $id]);

        $this->passFutureUserToUser();

        return $this->json([
            "status" => 200,
            "message" => "Futur user accepted with success!"
        ]);
    }

    private function passFutureUserToUser(string $email, FutureUser $futurUser) {
        $user = new User();

        $user->setEmail($email);
        $user->setRoles(["ROLE_USER"]);

        $plainTextPassword = $this->getParameter('defaultPassword');
        $hasher = $this->password_hasher->hashPassword($user, $plainTextPassword);
        $user->setPassword($hasher);

        $futurUser->setIsValid(true);

        $this->em->persist($futurUser);
        $this->em->persist($user);

        $this->flush();
    }
}