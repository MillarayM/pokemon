$(document).ready(function(){
    consultaAPI("pikachu")
    canvas()
    
    })
    
    $("button").click(function(){
        let pokemon = $("#input").val()
        consultaAPI(pokemon)
    })
  
  
  
  function consultaAPI(nombrePokemon) {
    $.ajax({
        type: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
        success: function (data) {
            
          
            $("#pokemon").html(data.name)
            $("#identificadorPokemon").html(data.id)
            $("#pesoPokemon").html(data.weight)
            $("#alturapokemon").html(data.height)
          
          
            $("#imagenFrente").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`);
            
            $("#imagenBack").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
           
            $("#imagenBaila").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`);
  
           
  
            let estadisticaPokemon =  puntosVida = data.stats[0].base_stat; puntosAtaque = data.stats[1].base_stat; puntosDefensa = data.stats[2].base_stat; ataqueEspecial = data.stats[3].base_stat; defensaEspecial = data.stats[4].base_stat; velocidad = data.stats[5].base_stat;
            canvas(estadisticaPokemon)
         
  
  
  
        },
        dataType: 'json'
    });
  }
  
  
  
  
  
  
  
  // constants and variables
  var tipoPokemon = [ 
    'normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'
  ];
  
  var tipoPokemonESP = [ 
    'normal', 'lucha', 'volador',
    'veneno', 'tierra', 'roca',
    'bicho', 'fantasma', 'acero',
    'fuego', 'agua', 'planta',
    'eléctrico', 'psíquico', 'hielo',
    'dragón', 'siniestro', 'hada'
  ];
  
  
  // Canvas
      
  function canvas(estadisticaPokemon){
    var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Estadistica"
    },
    data: [{
        type: "bar",
        startAngle: 25,
        toolTipContent: "<b>{label}</b>: {y}",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}",
        dataPoints: [
            { y: puntosVida, label: "Vida" },
            { y: puntosAtaque, label: "Ataque" },
            { y: puntosDefensa, label: "Defensa" },
            { y: ataqueEspecial, label: "Ataque Especial" },
            { y: defensaEspecial, label: "Defensa Especial" },
            { y: velocidad, label: "Velocidad" },
         
        ]
    }]
  });
  chart.render();
  }

