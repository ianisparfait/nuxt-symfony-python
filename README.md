# Le projet

Le projet est basé sur la technologie de Vuejs. <br>
Étant donné l'ennoncé de base qui obligeait à évoluer avec Next.js j'ai du trouver une alternative avec Vuejs et non React. <br>
L'alternative se nomme Nuxtjs.

En raison du manque de stabilité de la version 3, j'ai choisi nuxtjs qui est donc basé sur la version 2 de Vuejs.

Avec Nuxt, il existe nombreux plugins tiers directement développé ou aprouvé par les équipes de Nuxt.
Parmi eux on retrouve notamment [Nuxt/Storybook](https://storybook.nuxtjs.org/).

Il est donc très facile d'intégrer une logique de storybook au sein d'un projet Nuxt, en revanche je ne m'en suis pas servi étant donné qu'il était demandé d'avoir une librairie à part, en dehors du projet.

La solution la plus simple qui s'est présentée à moi était donc de créer un projet Vuejs à part en tant que package, et de l'intégrer au projet Nuxt.

### Technologies
[Vue](https://vuejs.org/) est un framework javascript qui permet de créer des applications web.  
[Nuxtjs](https://nuxtjs.org/) est basé sur Vue, il est donc nécessaire de connaître les bases de Vuejs pour pouvoir comprendre le projet.

### Pourquoi ?
#### Entre conviction personnelle et tests de benchmark.
React est, à tort, le framework aujourd'hui le plus utilisé dans le monde professionel. Je dis à tort pour deux raisons principales;

La puissance ainsi que la facilité d'apprentissage. Effectivement, d'après [JS Benchmark](https://krausest.github.io/js-framework-benchmark/) React est en dessous des performances annoncé pour Vue. De nombreux article Medium ont également démontré la capacité de Vue à faire mieux que son concurrent.

Pour l'apprentissage, il est inconsevable que React soit priviligié. Vue reposant sur le système de base HTML/JS avec son système de templating transparent et sa partie script. Bien que les deux parties soit dans le même fichier (ce qui est également le cas de React), dans Vue, la partie script est à part entière et n'a pas besoin d'éxister pour que pouvoir lancer un projet vuejs.

### Run le projet
Run ``` yalc publish --private  ``` from /storybook

Run ``` yalc update storybook ``` in /app

And then, run ``` npm run dev ``` to see changements in your application
