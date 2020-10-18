/* Cargar desde el inicio consulta Canvas */
$(document).ready(function(){
  consultaAPI("pikachu")
  canvas()  
  })

/* sacar informacion con boton */

$("button").click(function(){
  let pokemon = $("#input").val()
  alert("pokemon" + pokemon)

$("#muestranumero h2").append( `<br>${pokemon}` );

  consultaAPI(pokemon)
})







/*
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
              let defensa = data.stats[2].base_stat
              canvas(defensa)
          },
          dataType: 'json'
      });
  }
  
  
  
  
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
  






















/*
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})



$("#titulotrabajos1").click(function(){
    $("#titulotrabajos1").addClass('letra')    ;
  })


  $("#titulotrabajos2").click(function(){
    $("#titulotrabajos2").addClass('letra')    ;
  })

  $("#titulotrabajos3").click(function(){
    $("#titulotrabajos3").addClass('letra')    ;
  })

  $("#titulotrabajos4").click(function(){
    $("#titulotrabajos4").addClass('letra')    ;
  })

  $("#titulotrabajos5").click(function(){
    $("#titulotrabajos5").addClass('letra')    ;
  })

  $("#titulotrabajos6").click(function(){
    $("#titulotrabajos6").addClass('letra')    ;
  })


  $("#tarjeta1").click(function(){

    $("#contenido1").toggle('slow')    ;
  
  })


  $("#tarjeta2").click(function(){

    $("#contenido2").toggle('slow')    ;
  
  })


  $("#tarjeta3").click(function(){

    $("#contenido3").toggle('slow')    ;
  
  })


*/

