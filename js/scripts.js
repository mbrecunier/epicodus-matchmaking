$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var gender = $('input[name=gender]:checked').val();
    var agerange = $('input[name=agerange]:checked').val();
    var eggs = $('input[name=eggs]:checked').val();

    if (gender === "female") {
      alert("HEY");
      if (agerange === ("30" || "45")) {
        $("#paltrow").show();
      } else if (agerange === "65"){
        $("#oprah").show();
      } else {
        $("airbud").show();
      }
      // if (("#30".checked) || (("#45".checked)) {
      //   $("#paltrow").show();
      // } else {
      //   $("#airbud").show();
      // }
    };


    $("#gif").show();
    event.preventDefault();
  })



});

//
// if (gender is female) {
//   if (age is 30 || 45) {
//   show gwyneth
// } else if (age is 65) {
//   show oprah
// } else {
//   show airbud
// }
// }
//
// else if (male) {
//   if (age is #30) {
//     show gosling
//   } else if (age is #45) {
//     show cage
//   } else {
//     show airbud
//   }
// }
//
// else if (either) {
//   if (age is #20) {
//   show airbud
// } else if (age is #30) {
//     if (#fertilized) {
//       show gosling
//     } else if (applesauce) {
//       show paltrow
//     } else {
//       airbud
//     }
// } else if (age is #45) {
//   show cage
// } else if (age is #65) {
//   show oprah
// }
// }
// //
// // Gender (radio): #female, #male, #either
// //
// // Age (radio): #20, #30, #45, #65
// //
// // Occupation (checkbox): #musician, #actor, #athlete, #philanthropist, #criminal
// //
// // Eggs (radio): #fried, #fertilized, #poached, #scrambled, #applesauce
// //
// // Random (radio): #spaceship, #tiki, #cow, #hamm, #crayons
// //
// // Oprah: #female, #either, #65
// // Gosling: #male, #either, #30, #fertilized, #actor
// // Cage: #male, #either, #45, #actor, #criminal
// // Paltrow: #female, #either, #30, #45, #actor
// // airbud: #either, #athlete
