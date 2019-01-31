
## Build Setup

```bash
# install dependencies
$ npm install # Or yarn

# serve with hot reload at localhost:3000/vue-shop
$ npm run dev

# generate static project, get ready for launch on app services
$ npm run generate
```

- After `generate` , you can put 'dist' folder on a server and rename this folder as 'vue-shop'


# Réalisation d'une SPA e-commerce

## Description
Réalisation d'une single page application ayant pour but de proposer un catalogue de produits et un système de gestion de panier
Les aspects HTML, CSS et JS seront évalués distinctement

## Objectifs

### Fonctionnalités attendues
Chaque produit doit pouvoir être ajouté au panier
Chaque produit doit présenter une ou plusieurs listes d'options permettant de le configurer
De plus, chaque produit doit présenter une ou plusieurs images (si les images changent en fonction des options choisis), un titre, un prix.
Le panier doit permettre un affichage des produits ajoutés, de leur titres, leurs options, leur Quantity, leur prix et faire le total.
Depuis le panier, nous devons pouvoir retirer des produits ou en modifier la Quantity.
Le panier présentera un bouton de validation de commande qui devra renvoyer les données formatées vers l’extérieur.
Ces données devront contenir à minima l'id de chaque produit contenu dans le panier, sa Quantity, son prix, ses options et le total.

### HTML
Le HTML devra pouvoir être autonome, ce qui implique l'utilisation de formulaires standards pour gérer les produits et le panier.
Évidemment, le HTML, sans JS ni scripts coté serveur ne sera pas pleinement fonctionnel mais l'objectif est d'utiliser les formulaires HTML en veillant à ce qu'ils soient complètement indépendant de javascript et en imaginant que les données envoyées puissent être traités par la suite par n'importe quel langage serveur.

### CSS
Le premier objectif est de produire une page complètement responsive et parfaitement lisible.
Le second objectif réside dans tous les apports de confort que vous fournirez à l'utilisateur (animations, etc...)
L'usage de framework est possible, s'en passer serait un plus.

### JS
Libre à vous de travailler en natif, ou avec des outils tels que jQuery et ses plugins, ou voir Vue.js ou un autre framework de votre choix.

