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

         

          let defensa = data.stats[2].base_stat
          canvas(defensa)



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
    
function canvas(defensa){
  var chart = new CanvasJS.Chart("chartContainer", {
  theme: "light2", // "light1", "light2", "dark1", "dark2"
  exportEnabled: true,
  animationEnabled: true,
  title: {
      text: "Desktop Browser Market Share in 2016"
  },
  data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}",
      dataPoints: [
          { y: defensa, label: "defensa" },
      ]
  }]
});
chart.render();
}


