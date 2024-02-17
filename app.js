const board = document.querySelector('.fullboard');
const peg = document.querySelector('.pegs');
const secret = document.querySelector('.code');

for (var i = 0; i < 44; i++) {

    board.innerHTML += `<div class = "circle"></div>`

    peg.innerHTML += `<div class="pegcircle"></div>`
}






$(document).ready(function () {

    const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"]

    const colors = {

        "rgb(0, 128, 0)": "green",
        "rgb(255, 255, 0)": "yellow",
        "rgb(0, 0, 255)": "blue",
        "rgb(255, 0, 0)": "red",
        "rgb(0, 192, 203)": "pink",
        "rgb(255, 165, 0)": "green"
    }

    const code = [
        possibleColors[Math.floor(Math.random() * 6)],
        possibleColors[Math.floor(Math.random() * 6)],
        possibleColors[Math.floor(Math.random() * 6)],
        possibleColors[Math.floor(Math.random() * 6)]
];

    $(".color").each(function () {
        let color = $(this).attr("id");
        $(this).css("background-color", color);
    });


    $(".color").click(function () {
        let color = $(this).attr("id");
        currentcolor = color;

        $(".currentcolor").css("background-color", color)

    });



    $(".circle").click(function () {
        let color = $(this).attr("id");
        $(this).css("background-color", currentcolor)

    });


    // for(var i = 0 ; i <= 4 ; i++){
    //     $(".code").each(function () {

    //         const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

    //         const code = [
    //             possibleColors[Math.floor(Math.random() * 6)],
    //             possibleColors[Math.floor(Math.random() * 6)],
    //             possibleColors[Math.floor(Math.random() * 6)],
    //             possibleColors[Math.floor(Math.random() * 6)]
    //     ];

      
    //         $(this).css("background-color", code[i]);
    //     });
    // }


    
    $(".code").each(function () {
        let color = $(".color").attr("id");
        $(this).css("background-color", color);
    });
   

})














