
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
