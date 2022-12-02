/** =============================================================================================================================
 * Fichier				: index.js
 * Objectif(s)			: JavaScript de la page d'accueil du site
 * Auteur 				: Equipe SEXIO
 * Date de création		: 01 décembre 2022
 * ==============================================================================================================================
 */
// ===================================================
// Retourn la date du jours actuelle sous la forme Jours-Mois-Années
// ===================================================
function currentDate(){
	
	const date = new Date();
	
	var d = new Date();
	var mydate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate().toString().padStart(2, '0');
	
	DOMBirthday.setAttribute("max", mydate);
	DOMBirthday.setAttribute("value", mydate);
	
}

// ===================================================
// Valider les caractères des zones nom prenom
// ===================================================
function validerCaractere(codeAscii) {
	
	var caractereAutorise = false;
	
	// ===============================================================================================================
	// Cas général : on accepte les lettres en majuscule, en minuscule
	// ===============================================================================================================
	if (codeAscii >= 65 && codeAscii <= 90) { // lettre en majuscule
		caractereAutorise = true;
	}else if (codeAscii >= 97 && codeAscii <= 122) { // lettre en minuscule
		caractereAutorise = true;
	}
	return caractereAutorise;
}

// ===================================================
// Afficher les erreurs dans un bloc d'erreur
// ===================================================
function getValue() {
	// Sélec tionner l'élément input et récupérer sa valeur
	var input = document.getElementById("in").value;
	// Afficher la valeur
	alert(input);
}



// ===================================================
// Deplacer le bouton d'envoie avec le controle de saisie
// ===================================================
function deplacer(){
	
	
}

