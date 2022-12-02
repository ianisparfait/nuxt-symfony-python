# Le projet

Le projet est basé sur la technologie de Vuejs. Étant donné l'ennoncé de base qui obligeait à évoluer avec Next j'ai du trouver une alternative avec Vuejs et non React.
L'alternative se nomme Nuxtjs.

En raison du manque de stabilité de la version 3, j'ai choisi nuxtjs qui est donc basé sur la version 2 de Vuejs.

Avec Nuxt, il existe nombreux plugins tiers directement développé ou aprouvé par les équipes de Nuxt.
Parmi eux on retrouve notamment nuxt/storybook.  
[Nuxt/Storybook](https://storybook.nuxtjs.org/)  

Il est donc très facile d'intégrer une logique de storybook au sein d'un projet Nuxt, en revanche je ne m'en suis pas servi étant donné qu'il était demandé d'avoir une librairie à part, en dehors du projet.

La solution la plus simple qui s'est présentée à moi était donc de créer un projet Vuejs à part en tant que package, et de l'intégrer au projet Nuxt.

### Technologie
[Nuxt](https://nuxtjs.org/)  
Nuxtjs est basé sur Vuejs, il est donc nécessaire de connaître les bases de Vuejs pour pouvoir comprendre le projet.  
[Vuejs](https://vuejs.org/)  
Vuejs est un framework javascript qui permet de créer des applications web.  

### Run le projet
Run ``` yalc publish --private  ``` from /storybook

Run ``` yalc update storybook ``` in /app

And then, run ``` npm run dev ``` to see changements in your application
