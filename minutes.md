# Meeting Minutes

## Minutes for the June 18th weelky meeting

### Pierre Nodet présence à Agro ParisTech

27-28 juin -> 26-27 juillet
22-23 aout -> …

### 1er sujet : Premier sujet de Vincent

Un chapitre de thèse par grande catégories de ML appliquées à la fraude

Chapitre 1 : Classification supervisée avec classes déséquilibrées
Chapitre 2 : Detection d’outlier
Chapitre 3 : Active Learning

### 2ème sujet : Classification supervisée de données transactionnelles dans le cadre de la fraude

Ici les données transactionnelles ne sont pas des données temporelles :
Données transactionnelles -> Données temporelles non alignées et sparse -> Données temporelles alignées

Données transactionnelles : Deux tables dans une base relationnelle en relation 1-N

ID	Y
ID1	0
ID2	1
ID3	0

DO	RECEIVE	VALEUR
ID1	ID2	+1
ID1	ID3	+10
ID3	ID2	-5

Chapitre 1 : Fraudes à Orange point communs
	- motivation pour les données transactionnelles

Chapitre 2 : Impact des données transactionnelles
	- apprentissage d’une représentation

Chapitre 3 : Active Learning
	- comment faire de l’AL quand on doit construire une représentation ?
	- ref Slides Vincent

Chapitre 4 : Détection de drift sur des données transactionnelles
	- chercher une distance entre deux jeux de regèles MODL de construction de représentation (on analyse f(X) plutôt que P(y|X)
	- ref à l’ILP (inductive logic programming), SRL (statistical relational learning), MISERE (Prof)

Dans ce sujet on a du mal à voir le rapport avec la fraude (classification supervisée = on pert le côté inattendu)

On pourrait considérer nos labels 0 comme non fiables et nos labels 1 comme rares.
	- one class avec peu d’exemples ?
	- comment gérer les 0 non fiables (thèse Christophe Magrant)

On pourrait aussi regarder du côté du transfer learning (ref Dilan)
	- apprendre le plus rapidement possible un modèle

### 3ème sujet : Drift Forecasting

☠️

### 4ème sujet : Detection d’outlier sur des données transactionnelles

Détection d’outlier -> inattendu de la fraude -> nécessite de faire une hypothèse sur les données

Chapitre 1 : Anomalies sur des DT
Chapitre 2 : Detection de nouveauté
Chapitre 3 : Detection de Drift
Chapitre 4 : AL pour outlier (cf Vincent)

On a les mêmes hypothèses que dans le cas précédent (0 pas fiables, données déséquilibrées, …)

### 5ème sujet : AL pour la fraude et DT

Chapitre 1 : Calibration des probabilités
	- classes déséquilibrées
Chapitre 2 : AL et Feature Learning
	- slides Vincent
Chapitre 3 : Estimateur non biaisé de l’erreur généralisé
	- RF OOB
Chapitre 4 : Impact qualité des labels

### Pistes :

Problème de présélection des individus étiquetés (phénomène du survivant)

Problème de biais dans l’étiquetage (habitude de labélisation)

Comment nettoyer les outliers ? (Cf Romain Trinquart)

Regarder les travaux de Olivier Caelen (Orange Belgique, Chercheur sur la Fraude)

### Réfléchir à un sujet de stage qui aide la thèse

## Minutes for the August 2nd weelky meeting

Contact romain trinquart pour  sur le sujet des 0 non fiables

Continuer à regarder la formalisation du sujet 2 (graph streams)

Faire un word hebdomadaire avec avancement

## Minutes for the August 8th weelky meeting

Thèse Pierre

Dire à Antoine de me faire passer l’entretien avec le gars de l’X, il faut être pushy !

On commencer à rédiger : bullet points + plan d’experiences exhaustif

Trouver une définition de données transactionnelles

Proposer un nouveau sujet soit étendre/completer les sujets actuels

Penser à donner les articles que je lis à Vincent

Sujet de stages pour la thèse

Envoyer stream graphs a Vincent

Mettre dans outlook le temps de thèse

## Minutes for the August 30th weelky meeting

Si on faisait vraiment un gbm sans paramètre, pourquoi pas faire un critère modèle d’arbre de regression ?
Bah ouais c’est l’étape de base -> améliorer le regresseur avant le GBM

Pour un GBM sans paramètre i faut un weak learner sans paramètres et qui sait s’abstenir
S’il en existe pas dans la nature, faut il en faire un nouveau ? Faut-il utiliser le SNB ?

**TODO** : retravailler le plan d’overleaf pour aller dans le sens là

Etat de l’art -> regresseur sans paramètres et qui savent d’abstenir
Les decisions tree sont sensibles aux paramètres (ont peut pas les choisir au hasard et voilà)

Je fais une classification bruit vs résidus -> test stat même distribution ou pas, est-ce qu’on s’arrête au même moment ?

Quand on lit un article interessant, on en fait une fiche de lecture avec résumé avantages inconvénient et une partie si j’avais du temps qu’est-ce que je fais ?
Sur un un papier mathématique, il faut pas se poser la question de qu’est-ce que c’est ? Mais plutôt a quoi ça me sert ?

**TODO** Vincent : Lire article Pierre + Plan thèse weakly supervised

## Minutes for the September 6th weelky meeting

**TODO** : Voir avec Romain pour la collaboration avec Pierre
**TODO** : Valider le sujet avec Antoine et faire l’intro pour fin décembre

## Minutes for the September 13th weelky meeting

**TODO** : Trouver un outil pour partager ce que je fais à la semaine
**TODO** : mail à Antoine
**TODO** : Commencer à faire le chapitre 1 en français pour s’approprier le weakly supervised learning et la rédaction

## Minutes for the October 14th weelky meeting

Inscription Pierre à l’école doctorale, Antoine m’envoie le mail de la personne à contacter.

J’envoie un mail rappelant le contexte à la personne et j’essaie d’obtenir un rendez vous avant mes vacances qui commencent le 25 Octobre et finissent le 25 Novembre.

Pour l’entretient je prévois une copie de mon diplôme de master ainsi que mes notes.

Vincent rédige une lettre exprimant la volonté d’Orange d’accompagner la thèse et l’envoie à Antoine.

Une fois toutes les démarches faites et les contrats 4-partites pour Agro sont signé, Vincent rédige le contrat d’encadrement de thèse (CET), les 4 ans sont visés mais ça sera probablement 3 dans le premier CET.

Mise en place d’une réunion mensuelle en physique à Agro avec Antoine, Pierre et selon dispo Vincent ou Alexis (où même les deux).

Antoine me partage son calendrier sur l’adresse gmail : nodet.pierre@gmail.com, pour que je puisse avoir des dispo plus courtes entre deux réunion mensuelles.

Prochaine réunion mensuelle vendredi 29 Novembre toute la journée avec Vincent, Pierre et Antoine (demander à Alexis si dispo éventuellement).

Pour le début de l’état de l’art du sujet de thèse sur le Weakly Supervised Learning, Vincent envoie une photo de « l’arbre » à Antoine pour qu’on puisse en discuter le 29.

Deux stages sont lancés sur le sujet, les sujets sont envoyés à Antoine par mail de Vincent.

## Minutes for the December 13th weelky meeting

Pierre et Alexis :

Pour le 18 décembre à Agro, on pars avec moi qui refait les demonstrations pour chacun des setups du workshop d’ACML, je fais des slides récapitulatives du setup et du résultat final, les demos au tableau

Vincent : Retour des discussions avec Fabrice

Les slides sont bien mais pour le moment c’est à l’instinct, refaire ça avec un formalisme général -> les demos de Pierre peuvent être un point de départ

Pour la correction du SNB par tranche par la propensité :
 - Fabrice pense qu’il faut mieux corriger dans la cellule de la grille multivariée
 - Si on fait ça par chaque interval univarié, on risque de corriger K fois (si K variable) la meme zone de l’espace X (variables explicatives), problèmes numériques
-> déroulons d’abord les calculs puis on verra

Attention quand la propensité est trop faible dans un interval, dans l’état de l’art d’autres techniques sont appliquées

RAPPEL Pierre :

Ne plus être dispo après le mercredi midi pour donner un rythme et une habitude aux collègues et à Bruno sur le fait que c’est du temps thèse dédié, ne plus venir à OG.

## Minutes for the December 18th Agro meeting

Vincent : finit les slides de la review sur le PUL, et étendre au Self Training
Estimer la propensité par interval en MAR pour revenir a du MCAR par morceaux

Pierre et Alexis : Deux demos facile et carrée adapter ça au PUL/SSL

Pierre : revoir la 3eme et l’adapter au CoTraining
Scanner les feuilles
Etat de l’art
Mettre fiche de lecture et debut these et cr sur GitHub

Antoine : Donner une ref d’un bouquin sur le statisctical learning d’un point de vue très théorique stat probablement théorie de la mesure

## Minutes for the February 7th Agro meeting

Pierre : Aller au bout de l'idée PU = RLL
	* Estiamtion de e dans le cas MCAR
	* Plan d'experience
	* Ecrire les demos au propre
	* Benchmark estimation e PUL vs zone pures du papier d'origine

Pierre : Envoyer le papier sur la distilation

Antoine et Vincent : Lire le papier sur Biquality Data

Antoine : Envoyer a Pierre son compte github pour acces au repo
