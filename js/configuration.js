/**  ==============================================================================================================================
*		Fichier				: configuration.js
*		Objectif(s)			: Configuration général = variable globales, appel des fonctions, ...
*		Auteur 				: Equipe SEXIO
*		Date de création		: 01 décembre 2022
	*=============================================================================================================================
*/

//==============================================================================================================================
//	Déclaration des variables globales relatives aux blocs
//==============================================================================================================================
	
var DOMBody;
var DOMBirthday;
var DOMName;

//==============================================================================================================================
//	Déclaration des variables globales relatives au paramétrage des pages
//==============================================================================================================================
var pictureFolder		="../picture/";		//le dossier des images

//==============================================================================================================================
//	Initialisations/traitements apres que le DOM ait été complétement chargé"
//==============================================================================================================================
document.addEventListener("DOMContentLoaded", function(){
	
	//==============================================================================================================================
	//	Initialisation des variables globales représentant les différents blocs des pages
	//==============================================================================================================================
	initializeGeneral();
	
	//==============================================================================================================================
	//	Ajout de la date courante 
	//==============================================================================================================================
	currentDate();
	validerCaractere(codeAscii);
	
})

function initializeGeneral(){
	DOMBody					=window.document.getElementsByTagName("body")[0];
	DOMBirthday				=window.document.getElementById("birthday");
	DOMName					=window.document.getElementById("name");
}




