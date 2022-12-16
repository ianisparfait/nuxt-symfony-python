<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/user", name="app_user_api")
 */

class UserApiController extends AbstractController
{
    /**
     * @Route("/", methods={"GET"})
     */
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->json([
            'user' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()]
        );
    }

    /**
     * @Route("/check/role", name="_check_role", methods={"POST"})
     */
    public function checkRole(Request $request): Response {
        $user = $this->getUser();
        $data = json_decode($request->getContent(), true);
        $role = $data["role"];

        if(!$role){
            return $this->json([
                'message' => 'role missing',
            ], Response::HTTP_BAD_REQUEST);
        }
        return $this->json(in_array($role, $user->getRoles()));
    }
}