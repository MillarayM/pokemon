
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
      $("#pesoPokemon").html(data.weight / 10)
      $("#alturapokemon").html(data.height / 10)
      $("#tipopokemon").html(data.types[0].type.name)

 // variable tipo Pokemon
 var tipoPokemon = data.types[0].type.name

 if(tipoPokemon =="bug" ){$("#datosPokemon").css("background-color", tipoPokemonArray[0].colorTipo)
 } else if (tipoPokemon =="dark" ){
   $("#datosPokemon").css("background-color", tipoPokemonArray[1].colorTipo)
 }
 else if (tipoPokemon =="dragon" ){
   $("#datosPokemon").css("background-color", tipoPokemonArray[2].colorTipo)}
   else if (tipoPokemon =="electric" ){
     $("#datosPokemon").css("background-color", tipoPokemonArray[3].colorTipo)}
     else if (tipoPokemon =="fairy" ){
       $("#datosPokemon").css("background-color", tipoPokemonArray[4].colorTipo)}
       else if (tipoPokemon =="fighting" ){
         $("#datosPokemon").css("background-color", tipoPokemonArray[5].colorTipo)}
         else if (tipoPokemon =="fire" ){
           $("#datosPokemon").css("background-color", tipoPokemonArray[6].colorTipo)}
           else if (tipoPokemon =="flying" ){
             $("#datosPokemon").css("background-color", tipoPokemonArray[7].colorTipo)}
             else if (tipoPokemon =="ghost" ){
               $("#datosPokemon").css("background-color", tipoPokemonArray[8].colorTipo)}
               else if (tipoPokemon =="grass" ){
                 $("#datosPokemon").css("background-color", tipoPokemonArray[9].colorTipo)}
                 else if (tipoPokemon =="ground" ){
                   $("#datosPokemon").css("background-color", tipoPokemonArray[10].colorTipo)}
                   else if (tipoPokemon =="ice" ){
                     $("#datosPokemon").css("background-color", tipoPokemonArray[11].colorTipo)}
                     else if (tipoPokemon =="normal" ){
                       $("#datosPokemon").css("background-color", tipoPokemonArray[12].colorTipo)}
                       else if (tipoPokemon =="poison" ){
                         $("#datosPokemon").css("background-color", tipoPokemonArray[13].colorTipo)}
                         else if (tipoPokemon =="psychic" ){
                           $("#datosPokemon").css("background-color", tipoPokemonArray[14].colorTipo)}
                           else if (tipoPokemon =="rock" ){
                             $("#datosPokemon").css("background-color", tipoPokemonArray[15].colorTipo)}
                             else if (tipoPokemon =="steel" ){
                               $("#datosPokemon").css("background-color", tipoPokemonArray[16].colorTipo)}
                               else if (tipoPokemon =="water" ){
                                 $("#datosPokemon").css("background-color", tipoPokemonArray[17].colorTipo)}



      // variable imagenes
      var imagensvg = data.sprites.other.dream_world.front_default
      var imagenpng = data.sprites.other["official-artwork"].front_default
      var imagenbaila = data.sprites.versions['generation-v']['black-white'].animated.front_default
      


      // imagen svg
      if (imagensvg !== null) {
        $("#imagenFrente").attr("src", data.sprites.other.dream_world.front_default);

      } else if (imagenpng !== null) {
         $("#imagenFrente").attr("src", data.sprites.other["official-artwork"].front_default) }
      else {
        $("#imagenFrente").attr("src", data.sprites.front_default)
      }

      // imagen oficial
      if (imagenpng !== null) {
        $("#imagenOficial").attr("src", data.sprites.other["official-artwork"].front_default)
      }
      else { $("#imagenOficial").attr("src", data.sprites.front_default) }

      // imagen baila
   if (imagenbaila !== null) {
     $("#imagenBaila").attr("src", data.sprites.versions['generation-v']['black-white'].animated.front_default);

     } else { $("#imagenBaila").attr("src", data.sprites.front_default) }

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


// tipos para clases para iconos
var tipoPokemonArray = [

  { idTipoPokemon: 0,    nombreTipo: "bug",    nombreTipoEsp: "bicho",    colorTipo: "#A8B820",    imagenTipo: "assets/img/tiposicono/Bug.png"  },
  { idTipoPokemon: 1,    nombreTipo: "dark",    nombreTipoEsp: "siniestro",    colorTipo: "#7A5848",    imagenTipo: "assets/img/tiposicono/Dark.png"  },
  { idTipoPokemon: 2,    nombreTipo: "dragon",    nombreTipoEsp: "dragón",    colorTipo: "#7860E0",    imagenTipo: "assets/img/tiposicono/Dragon.png"  },
  { idTipoPokemon: 3,    nombreTipo: "electric",    nombreTipoEsp: "eléctrico",    colorTipo: "#F8D030",    imagenTipo: "assets/img/tiposicono/Electric.png"  },
  { idTipoPokemon: 4,    nombreTipo: "fairy",    nombreTipoEsp: "hada",    colorTipo: "#E79FE7",    imagenTipo: "assets/img/tiposicono/Fairy.png"  },
  { idTipoPokemon: 5,    nombreTipo: "fighting",    nombreTipoEsp: "lucha",    colorTipo: "#A05038",    imagenTipo: "assets/img/tiposicono/Fighting.png"  },
  { idTipoPokemon: 6,    nombreTipo: "fire",    nombreTipoEsp: "fuego",    colorTipo: "#F05030",    imagenTipo: "assets/img/tiposicono/Fire.png"  },
  { idTipoPokemon: 7,    nombreTipo: "flying",    nombreTipoEsp: "volador",    colorTipo: "#98A8F0",    imagenTipo: "assets/img/tiposicono/Flying.png"  },
  { idTipoPokemon: 8,    nombreTipo: "ghost",    nombreTipoEsp: "fantasma",    colorTipo: "#6060B0",    imagenTipo: "assets/img/tiposicono/Ghost.png"  },
  { idTipoPokemon: 9,    nombreTipo: "grass",    nombreTipoEsp: "planta",    colorTipo: "#78C850",    imagenTipo: "assets/img/tiposicono/Grass.png"  },
  { idTipoPokemon: 10,    nombreTipo: "ground",    nombreTipoEsp: "tierra",    colorTipo: "#E9D6A4",    imagenTipo: "assets/img/tiposicono/Ground.png"  },
  { idTipoPokemon: 11,    nombreTipo: "ice",    nombreTipoEsp: "hielo",    colorTipo: "#58C8E0",    imagenTipo: "assets/img/tiposicono/Ice.png"  },
  { idTipoPokemon: 12,    nombreTipo: "normal",    nombreTipoEsp: "normal",    colorTipo: "#A8A090",    imagenTipo: "assets/img/tiposicono/Normal.png"  },
  { idTipoPokemon: 13,    nombreTipo: "poison",    nombreTipoEsp: "veneno",    colorTipo: "#B058A0",    imagenTipo: "assets/img/tiposicono/Poison.png"  },
  { idTipoPokemon: 14,    nombreTipo: "psychic",    nombreTipoEsp: "psíquico",    colorTipo: "#F870A0",    imagenTipo: "assets/img/tiposicono/Psychic.png"  },
  { idTipoPokemon: 15,    nombreTipo: "rock",    nombreTipoEsp: "roca",    colorTipo: "#B8A058",    imagenTipo: "assets/img/tiposicono/Rock.png"  },
  { idTipoPokemon: 16,    nombreTipo: "steel",    nombreTipoEsp: "acero",    colorTipo: "#A8A8C0",    imagenTipo: "assets/img/tiposicono/Steel.png"  },
  { idTipoPokemon: 17,    nombreTipo: "water",    nombreTipoEsp: "agua",    colorTipo: "#3899F8",    imagenTipo: "assets/img/tiposicono/Water.png"  },
];

var iterador = 0

// cambiar modal colores segun tipo de pokemon
$(document).ready(function () {
  $("#botonTipoPokemon").click(function tipoPokemonModal() {
   
   $("#nombreTipoEng").html(data.types[0].type.name)  
   // $("#nombreTipoEng").html(`${tipoPokemon}`)  
  //  $("#nombreTipoEng").html(tipoPokemonArray[iterador].nombreTipo)    
    $("#imagenTipoPokemon").attr("src", tipoPokemonArray[iterador].imagenTipo)
    $("#nombreTipoEsp").html(tipoPokemonArray[iterador].nombreTipoEsp)
    $("#colorFondoTipoPokemon").css("background-color", tipoPokemonArray[iterador].colorTipo)
  
  })
})


