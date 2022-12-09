<?php

namespace App\DataFixtures;

use App\Entity\Role;
use App\Entity\User;
use App\Repository\RoleRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{

    protected UserPasswordHasherInterface $passwordHasher;
    protected RoleRepository $roles_repo;
    protected EntityManagerInterface $objectManager;

    public function __construct(UserPasswordHasherInterface $passwordHasher, RoleRepository $roles_repo, EntityManagerInterface $objectManager)
    {
        $this->passwordHasher = $passwordHasher;
        $this->roles_repo = $roles_repo;
        $this->objectManager = $objectManager;
    }

    public function load(ObjectManager $manager)
    {
        $roles = [
            'ROLE_USER',
            'ROLE_ADMIN',
            'ROLE_SUPER_ADMIN'
        ];
        $names = [
            'Utitlisateur',
            'Administrateur',
            'Super Administrateur'
        ];

        foreach ($roles as $key => $role) {
            $role = new Role();
            $user = new User();

            $role->setName($names[$key]);
            $role->setValue($roles[$key]);

            $user->setEmail("user@$key.com");
            $plaintextPassword = "password$key";

            $hashedPassword = $this->passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );
            $user->setPassword($hashedPassword);
            $user->setRoles([$role]);

            $manager->persist($role);
            $manager->persist($user);
        }

        $manager->flush();
    }
}
