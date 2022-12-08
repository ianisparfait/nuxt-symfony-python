<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RickAndMortyApi
{
  private $em;
  private $client;

  public function __construct(EntityManagerInterface $em, HttpClientInterface $client)
  {
    $this->em = $em;
    $this->client = $client;
  }

  public function getAll(): Response {
    $characters = $this->client->request(
      'GET',
      'https://rickandmortyapi.com/api/character'
    );

    dd($characters);

    $response = new Response();
    $response->setContent($characters->getContent());
    $response->headers->set('Content-Type', 'application/json');
    return $response;
  }
}