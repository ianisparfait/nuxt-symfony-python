<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\FutureUser;
use App\Repository\FutureUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppController extends AbstractController
{
    private EntityManagerInterface $em;
    private FutureUserRepository $futurUser_repo;
    private UserPasswordHasherInterface $userPasswordHasher;

    public function __construct(EntityManagerInterface $em, FutureUserRepository $futur_u_r, UserPasswordHasherInterface $userPasswordHasher) {
        $this->em = $em;
        $this->futurUser_repo = $futur_u_r;
        $this->userPasswordHasher = $userPasswordHasher;
    }

    /**
     * @Route("/", name="app_app")
     */
    public function index(): Response
    {
        return $this->render('app/index.html.twig');
    }

    /**
     * @Route("/api/register", name="app_register", methods={"POST"})
     */
    public function registerUser(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $newUser = new FutureUser();

        $newUser->setEmail($data["email"]);
        $newUser->setIsValid(false);

        $this->em->persist($newUser);
        $this->em->flush();

        return $this->json([
            "code" => 200,
            "message" => "New user added!",
        ]);
    }

    /**
     * @Route("/api/register/valid-user/{id}", name="app_valid_user", methods={"POST"})
     */
    public function validUser($id): Response
    {
        $futurU = $this->futurUser_repo->findOneBy(["id" => $id]);

        $this->passFutureUserToUser($futurU);

        return $this->json([
            "code" => 200,
            "message" => "Futur user accepted with success!"
        ]);
    }

    private function passFutureUserToUser(FutureUser $futurUser) {
        $user = new User();

        $user->setEmail($futurUser->getEmail());
        $user->setRoles(["ROLE_USER"]);

        $plainTextPassword = $this->getParameter('defaultPassword');
        $user->setPassword(
            $this->userPasswordHasher->hashPassword(
                $user,
                $plainTextPassword,
            ),
        );

        $futurUser->setIsValid(true);

        $this->em->persist($futurUser);
        $this->em->persist($user);

        $this->em->flush();
    }
}
