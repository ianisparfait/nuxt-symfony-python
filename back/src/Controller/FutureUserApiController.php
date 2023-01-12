<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/future-users", name="future_users", methods={"POST"})
*/

class FutureUserApiController extends AbstractController {

  /**
   * @Route("/", name="", methods={"GET"})
  */
  public function index(): JsonResponse
  {

  }
}