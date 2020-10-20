
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

      // variable tipo Pokemon
      var tipoPokemon = data.types[0].type.name




      // variable imagenes
      var imagensvg = data.sprites.other.dream_world.front_default
      var imagenpng = data.sprites.other["official-artwork"].front_default
      var imagenbaila = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`)

      // data.sprites.versions["generation-v[1]"].animated.front_default


      // imagen svg
      if (imagensvg !== null) {
        $("#imagenFrente").attr("src", data.sprites.other.dream_world.front_default);

      } else if (imagenpng !== null) { $("#imagenFrente").attr("src", data.sprites.other["official-artwork"].front_default) }
      else {
        $("#imagenFrente").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)
      }

      // imagen oficial
      if (imagenpng !== null) {
        $("#imagenOficial").attr("src", data.sprites.other["official-artwork"].front_default)
      }
      else { $("#imagenOficial").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`) }

      // imagen baila
      if (imagenbaila !== "") {
        $("#imagenBaila").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`);

      } else { $("#imagenBaila").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`) }




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
var tipoPokemonArray = [

  {
    nombreTipo: "bug",
    nombreTipoEsp: "bicho",
    colorTipo: "#A8B820",
    imagenTipo: "tiposicono/Bug.png"
  },

  {
    nombreTipo: "dark",
    nombreTipoEsp: "siniestro",
    colorTipo: "#7A5848",
    imagenTipo: "tiposicono/Dark.png"
  },

  {
    nombreTipo: "dragon",
    nombreTipoEsp: "dragón",
    colorTipo: "#7860E0",
    imagenTipo: "tiposicono/Dragon.png"
  },

  {
    nombreTipo: "electric",
    nombreTipoEsp: "eléctrico",
    colorTipo: "#F8D030",
    imagenTipo: "tiposicono/Electric.png"
  },

  {
    nombreTipo: "fairy",
    nombreTipoEsp: "hada",
    colorTipo: "#E79FE7",
    imagenTipo: "tiposicono/Fairy.png"
  },

  {
    nombreTipo: "fighting",
    nombreTipoEsp: "lucha",
    colorTipo: "#A05038",
    imagenTipo: "tiposicono/Fighting.png"
  },


  {
    nombreTipo: "fire",
    nombreTipoEsp: "fuego",
    colorTipo: "#F05030",
    imagenTipo: "tiposicono/Firepng"
  },

  {
    nombreTipo: "flying",
    nombreTipoEsp: "volador",
    colorTipo: "#98A8F0",
    imagenTipo: "tiposicono/Flying.png"
  },

  {
    nombreTipo: "ghost",
    nombreTipoEsp: "fantasma",
    colorTipo: "#6060B0",
    imagenTipo: "tiposicono/Ghost.png"
  },

  {
    nombreTipo: "grass",
    nombreTipoEsp: "planta",
    colorTipo: "#78C850",
    imagenTipo: "tiposicono/Grass.png"
  },

  {
    nombreTipo: "ground",
    nombreTipoEsp: "tierra",
    colorTipo: "#E9D6A4",
    imagenTipo: "tiposicono/Ground.png"
  },
  {
    nombreTipo: "ice",
    nombreTipoEsp: "hielo",
    colorTipo: "#58C8E0",
    imagenTipo: "tiposicono/Ice.png"
  },

  {
    nombreTipo: "normal",
    nombreTipoEsp: "normal",
    colorTipo: "#A8A090",
    imagenTipo: "tiposicono/Normal.png"
  },

  {
    nombreTipo: "poison",
    nombreTipoEsp: "veneno",
    colorTipo: "#B058A0",
    imagenTipo: "tiposicono/Poison.png"
  },

  {
    nombreTipo: "psychic",
    nombreTipoEsp: "psíquico",
    colorTipo: "#F870A0",
    imagenTipo: "tiposicono/Psychic.png"
  },

  {
    nombreTipo: "rock",
    nombreTipoEsp: "roca",
    colorTipo: "#B8A058",
    imagenTipo: "tiposicono/Rock.png"
  },

  {
    nombreTipo: "steel",
    nombreTipoEsp: "acero",
    colorTipo: "#A8A8C0",
    imagenTipo: "tiposicono/Steel.png"
  },


  {
    nombreTipo: "water",
    nombreTipoEsp: "agua",
    colorTipo: "#3899F8",
    imagenTipo: "tiposicono/Water.png"
  },
];



// cambiar colore segun tipo de pokemon
function tipoPokemonModal(){


  $("#colorFondoTipoPokemon").ccs("background-color", "colorTipo")
  $("#imagenTipoPokemon").attr("src", tipoPokemonArray.imagenTipo)
}