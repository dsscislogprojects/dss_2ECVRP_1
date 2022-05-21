


id = ['map'];
zoom = 8;

var Local_Centro_Brasil = [-13.6992162, -61.333077]
var Local_Centro_SP = [-23.557005,-46.733926]

var markers = []; // Adiciono as Layers em um vetor para facilitar processo de inserir e remover posteriormente
var routes_List = []; // Adiciono as Layers em um vetor para facilitar processo de inserir e remover posteriormente

/****** Criar Markers *******/
json_locals.locais.forEach(function (loc, i) {
	
	if (loc.type == 'satellites'){
		colorIcon = icon_Define_by_Img('./imgs/icons/satellites.png', "satellites");
		colorIcon_Point = icon_Define_by_Img('./imgs/icons/satellites_Point.png', "satellites");
	}
	else if (loc.type == 'warehouse'){
		colorIcon = icon_Define_by_Img('./imgs/icons/warehouse.png', "warehouse");
		colorIcon_Point = icon_Define_by_Img('./imgs/icons/warehouse_Point.png', "warehouse");
	}
	else if (loc.type == 'customer'){
		colorIcon = icon_Define_by_Img('./imgs/icons/customer.png', "customer");
		colorIcon_Point = icon_Define_by_Img('./imgs/icons/customer_Point.png', "customer");
	}
	
	markers.push({  'MarkerLayer': L.marker(loc.coordinates, {icon:colorIcon}),
					'MarkerLayer_Point': L.marker(loc.coordinates, {icon:colorIcon_Point}),
					'id': loc.id});
	//markers[i].MarkerLayer.addTo(map);
	// Impressao de Markers no Mapa ocorre quando está plotando Rotas dentro do for principal
})

/****** criar layers de Plotagem de Rotas ******
	n_cores = routes.length;
	Cor_RGB_Inicio = {'r': 0, 'g': 0,'b': 255};
	Cor_RGB_Final = {'r': 255, 'g': 255,'b': 0};
	lista_cores = Gerar_Escara_Cores(n_cores, Cor_RGB_Inicio, Cor_RGB_Final);// Funcao presente em js/scriptAlgoritmoEscalaCores.js
	
	routes.forEach(function (route, i){
		waypoints_route = [];
		pontos_visitados_rota = [];
		route.waypoints.forEach(function(id, idx){
			waypoints_route.push(L.latLng(json_locals.locais[id].coordinates));
			pontos_visitados_rota.push(id);
		})
		
		//vetor de cores de rotas
		cor = lista_cores[i];
		
		cor_rota = [{color: 'black', opacity: 0.15, weight: 9}, {color: 'white', opacity: 0.8, weight: 6}, {color: "RGB(" + cor['r'] + ", " + cor['g'] + ", " + cor['b'] + ")", opacity: 1, weight: 5}]
		routes_List.push({'waypoints': waypoints_route,
						  'layer': L.Routing.control({
									  waypoints: waypoints_route,
									  waypointMode: 'snap',
									  autoRoute:true,
									  routeWhileDragging:false,
									  lineOptions:{'styles':cor_rota},
									  createMarker:function(i, wp, nWps){
										// Essa propriedade é usada para definir o icone do marker, caso nao usada, fica invisivel
									  }
									}),
						  'length': waypoints_route.length,
						  'id':route.id,
						  'pontos_Visitados': pontos_visitados_rota
		});
		//routes_List[i].layer.addTo(map);
		// Plotagem de rota ocorrem dentro do for principal
	})
*/

Preparar_Layers_de_Rotas();// Função que gerar layers das rotas - in: js/routes.js

/****** For main (Principal) *******/
for (let i = 0; i < id.length; i = i + 1) {
	
	/****** Iniciar Tipo de Mapa *******/
	var map = L.map(id[i], setView_Config).setView(Local_Centro_SP, zoom);
	map.addLayer(MapStreetLayer);
	L.control.scale().addTo(map); // Adiciona estala no mapa
	
	// Ajusta zoom no mapa // bounds é preparado aqui / inicialmente considerando todos os pontos do mapa
	bounds_all = L.latLngBounds(function (x){
		bounds_ = [];
		json_locals.locais.forEach(function (l, idx){
			bounds_.push(L.latLng(l.coordinates));
		})
		return bounds_;
	}());
	
	map.fitBounds(bounds_all); 
	
	
	//show_specific_route("All"); // Funcao Proveniente em js/maps_functions.js para plotar todas("all") as rotas
	show_specific_markes("All");
	//<img class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive leaflet-marker-draggable" 
}

