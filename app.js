// const board = document.querySelector('.fullboard');
// const peg = document.querySelector('.pegs');
// const secret = document.querySelector('.code');


// for (let i = 1; i <= 44; i++) {

// board.innerHTML += `<div class = "circle ${i}" ></div>`

//     peg.innerHTML += `<div class="pegcircle ${i}"></div>`
// }


$(document).ready(function () {

    var current = "white";
    var currentBoardCircles = ["board41", "board42", "board43", "board44"];
    var currentPegCircles = ["peg41", "peg42", "peg43", "peg44"];
    var currentRow = 11;
    var possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

    var circle1Color, circle2Color, circle3Color, circle4Color;


    var colors = {
        "rgb(0, 0, 255)": "blue",
        "rgb(0, 128, 0)": "green",
        "rgb(255, 0, 0)": "red",
        "rgb(255, 255, 0)": "yellow",
        "rgb(255, 165, 0)": "orange",
        "rgb(255, 192, 203)": "pink",
    }

    const currentSecrets = [];
    $(".secretcolor").each(function () {

        const secret = possibleColors[Math.floor(Math.random() * 6)];

        $(this).css("background-color", secret)

        currentSecrets.push(secret);
    });

    for (let i = 1; i <= 44; i++) {
        let circle = `<div class="circle" id="board${i}" ></div>`;
        $('.fullboard').append(circle);
    }

    for (let i = 1; i <= 44; i++) {
        let pegcircle = `<div class="pegcircle" id="peg${i}"></div>`;
        $('.pegs').append(pegcircle);
    }

    $('.fullboard').css('grid-template-rows', 'repeat(11, 1fr)');
    $('.fullboard').css('grid-template-columns', 'repeat(4, 1fr)');

    $('.pegs').css('grid-template-rows', 'repeat(11, 1fr)');
    $('.pegs').css('grid-template-columns', 'repeat(4, 1fr)');


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
        let getColor = $(this).attr("id");

        if (isValid(getColor)) {
            $(this).css("background-color", currentcolor);
        }

        // circleColorCreat.push(karbar);
    });

    $("button").click(function(){
        // updatePegs();
        checkWin();
        changeCurrentRow();
    });


    function changeCurrentRow() {

        currentRow -= 1;

        var circleNumber = 4;

        currentBoardCircles = [
            "board" + ("currentRow" * circleNumber - 4),
            "board" + ("currentRow" * circleNumber - 3),
            "board" + ("currentRow" * circleNumber - 2),
            "board" + ("currentRow" * circleNumber - 1),
        ];

        currentPegCircles = [
            "peg" + ("currentRow" * circleNumber - 4),
            "peg" + ("currentRow" * circleNumber - 3),
            "peg" + ("currentRow" * circleNumber - 2),
            "peg" + ("currentRow" * circleNumber - 1),
        ];
    }


    function isValid(getColor) {

        if (currentBoardCircles.includes(getColor) && hasWon === false) {
            return true;
        }
        return false;
    }

    function checkWin() {

        if(currentSecrets[0] === circle1Color &&
            currentSecrets[1] === circle2Color &&
            currentPegCircles[2] === circle3Color &&
            currentSecrets[3] === circle4Color){
                hasWon = true;
                alert("Congratulation, You have Won\nThe code will now be displayed");
                $(".color1").css("background-color", currentSecrets[0]);
                $(".color2").css("background-color", currentSecrets[1]);
                $(".color3").css("background-color", currentSecrets[2]);
                $(".color4").css("background-color", currentSecrets[3]);
            }

            return hasWon;

    }

    // var codeColor = $(".secretcolor.color1");
    //   var backColor = codeColor.css("background-color");
    //   console.log(backColor)

    // var circleColor = $(".circle.41");
    // var backColor2 = circleColor.css("background-color");
    // console.log(backColor2)

    // $("button").click(function () {

    // let color1 = $(".secretcolor.color1").css("background-color", circleColorCreat[0]);
    // let color2 = $('.color2').css("background", secret);
    // let color3 = $('.color3').css("background", secret);
    // let color4 = $('.color4').css("background", secret);

    //     console.log(color1)

    //     if (backColor2 == currentSecrets[0]) {

    //         $(".pegcircle.41").css("background-color", "black")
    //     }



    // })

})




