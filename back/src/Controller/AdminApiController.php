<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/admin", name="app_admin_api")
 */

class AdminApiController extends AbstractController
{
    /**
     * @Route("/", methods={"GET"})
     */
    public function index(): Response
    {
        $user = $this->getUser();

        if ($user->getRoles()[0] !== 'ROLE_ADMIN') {
            $response = new JsonResponse("Not an admin user", 400);
            return $response->send();
        }

        return $this->json([
            'message' => "Yep, you're an admin user",
            'user' => $user->getUserIdentifier(),
            'roles' => $user->getRoles()]
        );
    }
}