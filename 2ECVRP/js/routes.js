
// *** Funções Que trabalham com Vetores de Rotas

var routes_ = [//Modelo de exemplo de estrutura de rota
		{'id': 0, 'waypoints': [4, 6, 7, 8, 9, 10]},
		{'id': 1, 'waypoints': [4, 0, 11, 14, 13, 12, 4]},
		{'id': 2, 'waypoints': [3, 6, 7, 8, 1, 0, 4]},
		{'id': 3, 'waypoints': [2, 12, 11, 14, 10, 3, 0]}
];

var routes = [//Instancia rota vazia
		
];


/****** criar layers de Plotagem de Rotas *******/
function Preparar_Layers_de_Rotas(){
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
}