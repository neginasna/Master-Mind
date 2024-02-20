const board = document.querySelector('.fullboard');
const peg = document.querySelector('.pegs');
const secret = document.querySelector('.code');

for (let i = 1; i <= 44; i++) {

    board.innerHTML += `<div class = "circle ${i}" ></div>`

    peg.innerHTML += `<div class="pegcircle ${i}"></div>`
}


$(document).ready(function () {

    let currentRow = 11;

    let colors = {

        "rgb(0, 128, 0)": "green",
        "rgb(255, 255, 0)": "yellow",
        "rgb(255, 0, 0)": "red",
        "rgb(0, 0, 255)": "blue",
        "rgb(255, 192, 203)": "pink",
        "rgb(255, 165, 0)": "orange",
    }

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



    $(".circle").dblclick(function(){
        $(this).css("background-color", "white")
    })


    $(".secretcolor").each(function(){
        const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

        const secret = [
            possibleColors[Math.floor(Math.random() * 6)],
    ];

        $(this).css("background-color", secret)
    });


    $("button").click(function(){

        let color1 = $(".secretcolor.color1").css("background-color", secret);
        // let color2 = $('.color2').css("background", secret);
        // let color3 = $('.color3').css("background", secret);
        // let color4 = $('.color4').css("background", secret);

        if($(".circle.41").css("background-color", color1)){
           
            $(".pegcircle.41").css("background-color", "black")
        }
        

    })





})