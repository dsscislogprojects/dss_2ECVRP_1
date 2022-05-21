
// Algoritmo para criar escalas de cores

function Gerar_Escara_Cores(n_cores, Cor_RGB_Inicio, Cor_RGB_Final){
	// Esta função visa gerar uma palera de cores para diferentes rotas, se tenho 5 rotas, devo ter 5 cores diferentes.
	
	var Lista_Cores = [];
	
	// Converter Cor RGB para HSV - Linguagem de cor natural que varia de 0 a 1.
	HSV_inicio = RGBtoHSV(Cor_RGB_Inicio);
	HSV_final = RGBtoHSV(Cor_RGB_Final);
	
	// Primeira cor:
	Lista_Cores.push(HSVtoRGB(HSV_inicio));
	
	// Cores intermediarias
	h_ = (HSV_final.h - HSV_inicio.h) / (n_cores - 1); // Taxa de variacao
	s_ = (HSV_final.s - HSV_inicio.s) / (n_cores - 1); // Taxa de variacao
	v_ = (HSV_final.v - HSV_inicio.v) / (n_cores - 1); // Taxa de variacao
	
	for (var i = 1; i < n_cores-1; i++){ // Tenho 7 rotas / cores -> i = 1 to 5
		Lista_Cores.push(HSVtoRGB({'h': HSV_inicio.h + (h_ * i), 's': HSV_inicio.s + (s_ * i), 'v': HSV_inicio.v + (v_ * i)}));
	}
	
	// Última cor:
	Lista_Cores.push(HSVtoRGB(HSV_final));
	
	return Lista_Cores;
}
function RGBtoHSV(r, g, b) {
    if (arguments.length === 1) {
        g = r.g, b = r.b, r = r.r;
    }
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return {
        h: h,
        s: s,
        v: v
    };
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
	//console.log({h:h, s:s, v:v});
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        'r': Math.round(r * 255),
        'g': Math.round(g * 255),
        'b': Math.round(b * 255)
    };
}