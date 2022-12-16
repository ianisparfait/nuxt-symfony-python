<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    protected UserPasswordHasherInterface $password_hasher;

    public function __construct(UserPasswordHasherInterface $password_hasher)
    {
        $this->password_hasher = $password_hasher;
    }

    public function load(ObjectManager $manager)
    {
        $roles = [
            'ROLE_USER',
            'ROLE_ADMIN',
            'ROLE_SUPER_ADMIN'
        ];

        foreach ($roles as $key => $role) {
            $user = new User();
            $user->setEmail('user' . $key .'@gmail.com');

            $plainTextPassword = 'password' . $key;
            $hasher = $this->password_hasher->hashPassword($user, $plainTextPassword);
            $user->setPassword($hasher);

            $user->setRoles([$role]);

            $manager->persist($user);
        }

        $manager->flush();
    }
}
