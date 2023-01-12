<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/user", name="app_user_api")
 */

class UserApiController extends AbstractController
{

    private UserRepository $user_r;

    public function __construct(UserRepository $user_r) {
        $this->user_r = $user_r;
    }

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
     * Route("s", name="_all", methods={"GET"})
     */
    public function getAll(): JsonResponse
    {
        $users = $this->user_r->findAll();

        return $this->json($users);
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