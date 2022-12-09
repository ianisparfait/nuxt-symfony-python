<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/endpoint/users", name="api_users")
 */

class UserController extends AbstractController
{

    private $user_repo;

    public function __construct(UserRepository $user_r)
    {
        $this->user_repo = $user_r;
    }

    /**
     * @Route("/", name="")
     */
    public function all(): Response
    {
        $users = $this->user_repo->findAll();
        $json_users = [];

        foreach ($users as $key => $value) {
            $json_users[$key] = [
                'id' => $value->getId(),
                'email' => $value->getEmail(),
                'password' => $value->getPassword(),
            ];
        }

        $response = new Response();
        $response->setContent(json_encode($json_users));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    /**
     * @Route("/{id}", name="_id")
     */
    public function checkRole($id): Response {
        $user = $this->user_repo->findOneBy(['id' => $id]);
        $returnStatement = false;

        if ($user) {
            if ($user->getRoles() == ['ROLE_ADMIN']) {
                $returnStatement = true;
            }
        }

        if (false === $returnStatement) {
            $response = new Response();
            $response->setContent(json_encode($returnStatement));
            $response->headers->set('Content-Type', 'application/json');
            $response->setStatusCode(400);
            return $response;
        }

        $response = new Response();
        $response->setContent(json_encode(true));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
