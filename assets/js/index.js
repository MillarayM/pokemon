// cargar desde el inio
$(document).ready(function () {
  consultaAPI("pikachu")
  canvas()

})
// Boton    
$("button").click(function () {
  let pokemon = $("#input").val()
  consultaAPI(pokemon)
})


// funcion consulta api Ajax

function consultaAPI(nombrePokemon) {
  $.ajax({
    type: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
    success: function (data) {

      $("#pokemon").html(data.name);
      $("#identificadorPokemon").html(data.id)
      $("#pesoPokemon").html(data.weight / 100)
      $("#alturapokemon").html(data.height / 10)
      $("#tipopokemon").html(data.types[0].type.name)

      // imagenes
      var imagensvg = data.sprites.other.dream_world.front_default
      var imagenpng = data.sprites.other["official-artwork"].front_default
      var imagenbaila = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`) 
     
      // imagen svg
      if (imagensvg !== null) {$("#imagenFrente").attr("src", data.sprites.other.dream_world.front_default);
        
      } else if(imagenpng !== null){ $("#imagenFrente").attr("src", data.sprites.other["official-artwork"].front_default)}
      else {
        $("#imagenFrente").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)
      }

      // imagen oficial
      if (imagenpng !== null) {
        $("#imagenOficial").attr("src", data.sprites.other["official-artwork"].front_default)
      }
        else { $("#imagenOficial").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)}

      // imagen baila
      if (imagenbaila !== "") {
        $("#imagenBaila").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`);
        
      } else {  $("#imagenBaila").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)}



      let estadisticaPokemon = puntosVida = data.stats[0].base_stat; puntosAtaque = data.stats[1].base_stat; puntosDefensa = data.stats[2].base_stat; ataqueEspecial = data.stats[3].base_stat; defensaEspecial = data.stats[4].base_stat; velocidad = data.stats[5].base_stat;
      canvas(estadisticaPokemon)


    },
    dataType: 'json'
  });
}




// Canvas

function canvas(estadisticaPokemon) {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Características"
    },
    data: [{
      type: "bar",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: " ",
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

$("#paraToggle").click(function () {
  $("#chartContainer").slideToggle();
});

/* $("#imagenFrente").click(function(){
   $("div").animate({left: '250px'});
 }); */

// tipos para clases para iconos
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