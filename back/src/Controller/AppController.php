<?php

namespace App\Controller;

use App\Entity\FutureUser;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AppController extends AbstractController
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em) {
        $this->em = $em;
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
        $data = json_decode($request->getContent(), true);
        $u = $data["user"];
    }
}