$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var gender = $('input[name=gender]:checked').val();
    var agerange = $('input[name=agerange]:checked').val();
    var eggs = $('input[name=eggs]:checked').val();

    if (gender === "female") {
      if (agerange === ("30" || "45")) {
        $("#paltrow").show();
      } else if (agerange === "65"){
        $("#oprah").show();
      } else {
        $("#airbud").show();
      }
    } else if (gender === "male") {
        if (agerange === "30") {
          $("#gosling").show();
        } else if (agerange === "45") {
          $("#cage").show();
        } else {
          $("#airbud").show();
        }
    } else if (gender === "either") {
        if (agerange === "20") {
          $("#airbud").show();
        } else if (agerange === "30") {
            if (eggs === "fertilized") {
              $("#gosling").show();
            } else if (eggs === "applesauce") {
              $("#paltrow").show();
            } else {
              $("#airbud").show();
            }
        } else if (agerange === "45") {
          $("#cage").show();
        } else if (agerange === "65") {
          $("#oprah").show();
        }
    };


    $("#gif").show();
    event.preventDefault();
  })


});
