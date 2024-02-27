// const board = document.querySelector('.fullboard');
// const peg = document.querySelector('.pegs');
// const secret = document.querySelector('.code');


// for (let i = 1; i <= 44; i++) {

    // board.innerHTML += `<div class = "circle ${i}" ></div>`

//     peg.innerHTML += `<div class="pegcircle ${i}"></div>`
// }


$(document).ready(function () {

    const current = "white";
    const currentBoardCircles = ["board41", "board42", "board43", "board44"];
    const currentPegCircles = ["peg41", "peg42", "peg43", "peg44"];
    const currentRow = 11;
    const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

    for(let i = 1 ; i <= 44 ; i++){
        let circle = `<div class="circle" id="board${i}" ></div>`;
        $('.fullboard').append(circle);
    }

    for(let i = 1 ; i <= 44 ; i++){
        let pegcircle = `<div class="pegcircle" id="peg${i}"></div>`;
        $('.pegs').append(pegcircle);
    }

    $('.fullboard').css('grid-template-rows', 'repeat(11, 1fr)');
    $('.fullboard').css('grid-template-columns', 'repeat(4, 1fr)');

    $('.pegs').css('grid-template-rows', 'repeat(11, 1fr)');
    $('.pegs').css('grid-template-columns', 'repeat(4, 1fr)');


    // const totalRows = $('.circle').length / 4;
    // let currentRow = totalRows;

    // function changeActiveRow() {
    //     return currentRow - 1;
    // }

    // function gameFlow() {
    //     // currentRow;
    //     const currentRow = changeActiveRow();
    // }

    // gameFlow();

    // let colors = {

    //     "rgb(0, 128, 0)": "green",
    //     "rgb(255, 255, 0)": "yellow",
    //     "rgb(255, 0, 0)": "red",
    //     "rgb(0, 0, 255)": "blue",
    //     "rgb(255, 192, 203)": "pink",
    //     "rgb(255, 165, 0)": "orange",
    // }

    $(".color").each(function () {
        let color = $(this).attr("id");
        $(this).css("background-color", color);
    });


    $(".color").click(function () {
        let color = $(this).attr("id");
        currentcolor = color;

        $(".currentcolor").css("background-color", color)

    });


    const circleColorCreat = [];

    $(".circle").click(function () {
        let color = $(this).attr("id");

        const karbar = $(this).css("background-color", currentcolor);

        circleColorCreat.push(karbar);

    });

    console.log(circleColorCreat);





    $(".circle").dblclick(function () {
        $(this).css("background-color", "white")
    })


    const currentSecrets = [];
    $(".secretcolor").each(function () {
        const possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

        const secret = 
            possibleColors[Math.floor(Math.random() * 6)];

        currentSecrets.push(secret);


        $(this).css("background-color", secret)
    });
    console.log(currentSecrets);

    // var codeColor = $(".secretcolor.color1");
    //   var backColor = codeColor.css("background-color");
    //   console.log(backColor)

      var circleColor = $(".circle.41");
      var backColor2 = circleColor.css("background-color");
      console.log(backColor2)

    $("button").click(function () {

        let color1 = $(".secretcolor.color1").css("background-color", circleColorCreat[0]);
        // let color2 = $('.color2').css("background", secret);
        // let color3 = $('.color3').css("background", secret);
        // let color4 = $('.color4').css("background", secret);

        console.log(color1)

        if (backColor2 == currentSecrets[0]) {

            $(".pegcircle.41").css("background-color", "black")
        }



    })

})




