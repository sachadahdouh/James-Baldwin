 let leMot = document.getElementById("ouvreNavigation");
let laNavigation = document.getElementById("mots");
let laCroixFermeture = document.getElementById("ferme");

// Au clic sur James Baldwin
leMot.onclick = function(){
  // On ajoute et active une classe préparée en amont dans la CSS
  // La navigatiuon va se déployer
  laNavigation.classList.add("navigationOuverte");
  // -- toutes les propriétés présentes dans la class «titreChange»
  // seront appliquées au clic
}

// Au clic sur la croix
laCroixFermeture.onclick = function(){
  laNavigation.classList.remove("navigationOuverte");
}


//-------------------------------------------
// effet jour/nuit sur le site et contenu textuel
//-------------------------------------------

//les textes supremacistes

let lestextesS=[ "«L'Etat raciste aura à réparer les dommages causés par tout ce qu'on néglige de faire aujourd'hui dans ce domaine. Il devra faire de la race le centre de la vie de la communauté; veiller à ce qu'elle reste pure; déclarer que l'enfant est le bien le plus précieux d'un peuple.» \"( Mein Kampf, 1925, Adolf Hitler )\"", 
"« La France est, et reste, l'ennemi que nous avons le plus à craindre. Ce peuple, qui tombe de plus en plus au niveau des nègres, met sourdement en danger, par l'appui qui il prête aux Juifs pour atteindre leur but de domination universelle, l'existence de la race blanche en Europe. » ( Mein Kampf, 1925, Adolf Hitler )",
"« Cite-moi un président noir qui n’est pas un trou du cul ? Mandela a foutu le pays en l’air. J’emmerde Mandela. Il n’était pas un leader. » ( propos tenu par Donald Trump paru dans Disloyal, 2020, Michael Cohen )",
"« Des Noirs qui comptent mon argent ! Je déteste ça… Je pense que ce type est un flemmard. Et ce n’est sans doute pas sa faute, car la flemme est un trait de caractère chez les Noirs. »( propos tenu par Donald Trump à l’égard d’un comptable noir d’un de ses casinos )",
"En décembre 2015, Trump a appelé à “une interdiction totale et complète de l’entrée des musulmans sur le territoire des États-Unis”, proposant même de ne pas laisser revenir dans le pays des citoyens américains de religion musulmane qui auraient effectué un voyage à l’étranger.",
"«Contrairement à ce que dit l’idéologie relativiste de gauche, pour nous, toutes les civilisations ne se valent pas. Celles qui défendent la liberté, l’égalité et la fraternité nous paraissent supérieures. En tout état de cause, nous devons protéger notre civilisation.» ( 4 Février 2012, Claude Guéant )"
]
//les textes Baldwin

let lestextesB=["« L’amour arrache les masques sans lesquels nous craignons de ne pas pouvoir vivre et derrière lesquels nous savons que nous sommes incapables de le faire. J’emploie le mot amour ici non pas seulement au sens personnel mais dans celui d’une manière d’être, ou d’un état de grâce, non pas dans l’infantile sens américain d’être rendu heureux mais dans l’austère sens universel de quête, d’audace, de progrès. » (La Prochaine fois, le feu [1963])",
"« La société tient par le besoin que nous avons d’elle ; nous la maintenons par la légende, le mythe, la coercition, sans elle nous avons peur d’être projetés dans le vide, ce vide où sont cachées, comme la Terre avant le Verbe, les fondations de la société. […] N’oublions pas que l’opprimé et l’oppresseur sont liés au sein de la même société ; ils acceptent les mêmes critères, ils partagent les mêmes croyances, ils dépendent tous deux de la même réalité. » (Chroniques d’un enfant du pays [1955])»",
"« Une des choses les plus terribles, en fait, c’est que je suis un Américain, que ça me plaise ou non. Ma véritable école a été les rues de New York. […] Cette grande maison occidentale dont je viens est une seule maison, et je suis un de ses enfants. Simplement, j’en suis l’enfant le plus méprisé. Et cela parce que les Américains sont incapables d’accepter le fait que je suis la chair de leur chair, que mes os sont les leurs, que j’ai été créé par eux. Mon sang et le sang de mon père sont dans cette terre. » ( I am not your Negro [1969])»",
"« Humainement, personnellement la couleur n’existe pas. Politiquement elle existe. Mais c’est là une distinction si subtile que l’Ouest n’a pas encore été capable de la faire. » (La Prochaine fois, le feu [1963])»",
"« Je n’étais pas boxeur, je n’étais pas beau, je n’étais pas chanteur, je n’étais pas danseur. J’étais drôlement coincé. La seule chose que j’ai pensé est que, peut-être, je pouvais devenir écrivain. » (Entretien avec Eric Laurent, France Culture, juin 1975)",
"« Le Mouvement de libération des femmes, appelons-le ainsi, n’inclut pas nombre de femmes noires, parce que les problèmes des femmes noires sont bien plus compliqués et bien plus terre-à-terre. Le Mouvement de libération des femmes est un peu comme le mouvement gay en ce qu’il est essentiellement un phénomène de la classe moyenne blanche, qui n’a aucune connexion organique réelle avec la situation noire, à quelque niveau que ce soit. Je n’ai rien du tout contre le Mouvement de libération des femmes et le mouvement gay, mais ils sont avant tout à côté1, ils ne sont pas vraiment un de mes soucis premiers. […] Les dangers que ma sœur affronte, que ma mère affronte, n’ont rien à voir avec la façon qu’a le Mouvement de libération des femmes de les voir, vraiment rien. […] Je leur souhaite bonne chance. » (Conversations with James Baldwin, University Press of Mississippi, 1989 [nous traduisons])"
]

//on récupère le conteneur principal
let lesLiens = document.getElementById("conteneur");
//on récupère les encadrés menus
let encadres = document.getElementsByClassName("cadre");
// on cible le bouton on/off
let onOff = document.getElementById("onOff");
//valeur de l'interrupteur on/off
let posOnOff=0;

//on cible le conteneur de texte
let contenuTxt=document.getElementById('citation');
//on recupère tous les mots de l'abécédaire
let tousLesMots=document.querySelectorAll("li");
//on initialise  une variable de position dans les listes de textes
let motIndex=0;

//pour tous les mots sur le click, on récupére la place du mot dans la liste des mots (son index)
tousLesMots.forEach(
  function(leMot, index) {
  leMot.onclick = function(){

        //on récupére la place du mot dans la liste des mots (son index)
          motIndex=index;
        // si la page est blanche
          if (posOnOff===0){
            //on affiche le texte supremaciste qui correspond au mot (même index)
            contenuTxt.textContent=lestextesS[motIndex];
          }
        // si la page n'est pas blanche
          else{
         //on affiche le texte Baldwin qui correspond au mot (même index)
          contenuTxt.textContent=lestextesB[motIndex];
          }
    }
  }
);




/* 
* ------------------------------
* Fonctions pré-écrites
* ------------------------------
*/

// Fonction tireNombreHasard, qui va tirer un nombre au hasard entre min et max
function tireNombreHasard(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction tireNombreEntierHasard, qui va tirer un nombre entier au hasard entre min et max
function tireNombreEntierHasard(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
* ------------------------------
* Placement des textes au hasard
* ------------------------------
*/

// On se base sur une grille de 12 colonnes et de 9 lignes (par exemple)
// Pour avoir un peu de structure dans l'aléatoire
let largeurColonneGrille = window.innerWidth / 12;
let hauteurLigneGrille = window.innerHeight / 9;

// On récupère la liste de tous les mots
let tousLesTextes = document.querySelectorAll("#textes .leMot");
// Boucle sur tous les mots
tousLesTextes.forEach(
function(texteCible) {
  // On titre des positionnements au hasard
  let positionGauche = tireNombreEntierHasard(1,9) * largeurColonneGrille;
  let positionTop = tireNombreEntierHasard(1,4) * hauteurLigneGrille;
  // On les applique aux textes
  texteCible.style.left = positionGauche + "px";
  texteCible.style.top = positionTop + "px";
}
);

/* 
* ------------------------------
* Affichage progressif
* ------------------------------
*/

let numeroTexte = 0;
let temporisation = 400; // 400ms

// Fonction qui va afficher le texte
// puis relancer la temposrisation (délai d'attente)
function afficheTexte(){
console.log("afficheTexte",numeroTexte);
// Affichage du texte
tousLesTextes[numeroTexte].style.opacity = 1;
// Passage au texte suivant
numeroTexte = numeroTexte + 1;
// Affichage du texte suivant avec temporisation aléatoire
// (ici entre 400ms et 2000ms)
temporisation = tireNombreHasard(400,3000);
if( numeroTexte <= tousLesTextes.length){
    setTimeout(afficheTexte, temporisation);
}
}

// Lancement d'une fonction après un délai d'attente de --temporisation--
setTimeout(afficheTexte, temporisation);








