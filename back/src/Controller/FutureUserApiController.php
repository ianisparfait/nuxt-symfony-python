<?php

namespace App\Controller;

use App\Repository\FutureUserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/future-users", name="future_users", methods={"POST"})
*/

class FutureUserApiController extends AbstractController {

  private FutureUserRepository $futur_users_r;

  public function __construct(FutureUserRepository $fu) {
    $this->futur_users_r = $fu;
  }

  /**
   * @Route("/", name="", methods={"GET"})
  */
  public function index(): JsonResponse
  {
    $fu = $this->futur_users_r->findAll();

    return $this->json($fu);
  }
}