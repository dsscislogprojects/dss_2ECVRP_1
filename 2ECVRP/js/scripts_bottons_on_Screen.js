

/******* CheckBoxs *********/
// Checkbox - Mostrar Markes?
function change_show_full_markes(cb){
	// Se está marcado - Altera variáveis em js/maps_function.js
	
	SHOW_FULL_MARKERS = cb.checked;// true or false
	show_specific_route(SELECTED_ROUTE);
}