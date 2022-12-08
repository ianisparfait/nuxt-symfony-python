<?php

namespace App\Controller;

use App\Service\RickAndMortyApi;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/endpoint", name="api_")
 */

class ApiController extends AbstractController
{

    private $RaMAPI;

    public function __construct(RickAndMortyApi $RaMAPI)
    {
        $this->RaMAPI = $RaMAPI;
    }

    /**
     * @Route("/home", name="home")
     */
    public function home(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    /**
     * @Route("/products", name="products")
     */
    public function product(): Response
    {
        $products = $this->RaMAPI->getAll();

        dd($products);

        return $this->render('api/product.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    /**
     * @Route("/cart", name="cart")
     */
    public function cart(): Response
    {
        return $this->render('api/cart.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }
}
