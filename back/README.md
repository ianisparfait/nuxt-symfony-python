# Symfony_Auth_API

## Install Project

1. RUn `composer install`
3. Open and run local server for database (laragon, wamp, xamp, mamp ...)
4. `php bin/console doctrine:database:create`
5. `php bin/console make:migration`
6. `php bin/console doctrine:migrations:migrate`
7. Run the symfony server with the command: `symfony server:start`  
  ***/!\ If you does'nt use symfony CLI, Open project with laragon, mamp, xamp, wamp...***
7. Create a **jwt** folder into config folder  
8. In terminal run: `openssl genrsa -out config/jwt/private.pem -aes256 4096` and follow instructions (SAVE PASSPHRASE)  
9. Still in your terminal, run: `openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem` and follow instructions with same passphrase than private key.  
10. Create .env.local file at the rot of the project, paste this in and replace `your_pass_phrase` with the passphrase used for keys generation:  
  ```
    ###> lexik/jwt-authentication-bundle ###
    JWT_PASSPHRASE=your_pass_phrase
    ###< lexik/jwt-authentication-bundle ###
  ```  
11. Finally, run `yarn run watch` at the root and go to `127.0.0.1:{port}/` || `http://localhost:{port}/`  

## Install Database
Run ``` php bin/console doctrine:fixtures:load ``` to add user fixtures

## API route Documentation  
`127.0.0.1:{port}/api` || `http://localhost:{port}/api`
