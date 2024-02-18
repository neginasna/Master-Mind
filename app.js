const board = document.querySelector('.fullboard');
const peg = document.querySelector('.pegs');
const secret = document.querySelector('.code');

for (var i = 0; i < 44; i++) {

    board.innerHTML += `<div class = "circle"></div>`

    peg.innerHTML += `<div class="pegcircle"></div>`
}


$(document).ready(function () {

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


    $(".secretcolor").each(function(){
        const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

        const secret = [
            possibleColors[Math.floor(Math.random() * 6)],
    ];

        $(this).css("background-color", secret)
    });

})














