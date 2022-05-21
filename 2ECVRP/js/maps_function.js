

// Funções para editar eventos no map

/* Variáveis vindas de outros arquivos:
	routes_List - Lista de rotas ativas vinda de js/maps.js
	markers - Lista de pontos a serem inseridos - vinda de js/maps.js
*/


var SHOW_FULL_MARKERS = true; // Se true imprime na tela o icone do local, False apresenta apenas um ponto (Circulo) colorido
var SELECTED_ROUTE = "All"; // Rota selecionada
var FLAG_show_specific_route_WORKING = false;

function show_specific_route(i_route){
	//console.log(i_route);
	if (!FLAG_show_specific_route_WORKING){
		FLAG_show_specific_route_WORKING = true;
		SELECTED_ROUTE = i_route;
		routes_List.forEach(function (route_dic, i){
			
			// Remover layer do Map
			route_dic.layer.spliceWaypoints(0, route_dic.length)
			map.removeLayer(route_dic.layer);
			
			// Adiciona a Rota desejada
			if (route_dic.id == i_route | i_route == "All"){
				routes_List[i].layer.setWaypoints(routes_List[i].waypoints);
				routes_List[i].layer.addTo(map);
			}
		});
		
		show_specific_markes(i_route);
		FLAG_show_specific_route_WORKING = false;
	}
}

function show_specific_markes(i_route){
	
	// Se for plotar markers de uma rota específica:
	if (i_route != "All"){
		routes_List.forEach(function (route_dic, i){
			if (route_dic.id == i_route){
				pontos_visitados = route_dic.pontos_Visitados;
			}
		});
	}
	
	// Adicionar Markers
	markers.forEach(function(mark, i){
		map.removeLayer(mark.MarkerLayer);//Elimina do Mapa se existir
		map.removeLayer(mark.MarkerLayer_Point);//Elimina do Mapa se existir
		
		if (i_route == "All"){
			if (SHOW_FULL_MARKERS){mark.MarkerLayer.addTo(map);}
			else {mark.MarkerLayer_Point.addTo(map);}
			
		}
		else{
			pontos_visitados.forEach(function(id, i){		
				if (mark.id == id){
					if (SHOW_FULL_MARKERS){mark.MarkerLayer.addTo(map);}
					else {mark.MarkerLayer_Point.addTo(map);}
					//console.log(mark.id);
				}
			});
		}
	});
}