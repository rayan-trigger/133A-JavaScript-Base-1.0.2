/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande une interprétation stricte du code

const prenom = prompt('Entrez votre prénom:');
const nom = prompt('Entrez votre nom:');
alert(`Bonjour, ${prenom} ${nom} !`);


}()); // Main IIFE

