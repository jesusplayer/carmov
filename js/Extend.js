
/*
	Ce module est pour gérer l'Héritage. 
	- GetHis permet d'obtenir l'objet Fils qui à commencer son instantiation, 
	sachant que son this seras propagé dans toutes les sous méthodes parentes.
	si thisChild est true, alors l'objet appelant est le premier fils(celui qui veut être instancié)
*/
var GetThis = function (newThis,thisChild) {
	return thisChild===true?newThis:thisChild;
}
var Extend = function (child,parent,thisChild){
	for(var k in parent){
		if(parent.hasOwnProperty(k) && (typeof parent[k]=="function")){
			parent[k] = parent[k].bind(thisChild||child);
		}
	}
	$.extend(child,parent);
}

