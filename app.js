$(document).ready(function () {
    var current = "white";
    var currentBoardCircles = ["board41", "board42", "board43", "board44"];
    var currentPegCircles = ["peg41", "peg42", "peg43", "peg44"];
    var currentRow = 11;
    var possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];

    let currentColor = undefined;
    const userChoices = [];
    const pegArray = [];


    var colors = {
        "rgb(0, 0, 255)": "blue",
        "rgb(0, 128, 0)": "green",
        "rgb(255, 0, 0)": "red",
        "rgb(255, 255, 0)": "yellow",
        "rgb(255, 165, 0)": "orange",
        "rgb(255, 192, 203)": "pink",
    }

    const currentSecrets = [];

    function handlePegCircles(row, indexNo) {
        if (indexNo === 0) {
            targetArrayIndex = 3;
        } else {
            targetArrayIndex = indexNo - 1;
        }

        if (userChoices[targetArrayIndex] === currentSecrets[targetArrayIndex]) {
            pegArray[targetArrayIndex] = 'black';
        }// else {
        //     pegArray[targetArrayIndex] = 'white';
        // }

        const targetPegNumber = indexNo ? (row - 1) * 4 + indexNo : row * 4;
        $('.pegcircle#peg' + targetPegNumber).css('background-color', pegArray[targetArrayIndex]);
    }

    function continueGame(targetNode) {
        const id = targetNode.id;
        const nodeNumber = id.substring(5);
        const targetRow = Math.ceil(nodeNumber / 4);
        console.log(9999, nodeNumber);
        $(targetNode).css('background-color', currentColor);

        const targetIndex = nodeNumber % 4;

        if (currentColor) {
            if (targetIndex === 0) {
                userChoices[3] = currentColor;
            } else {
                userChoices[targetIndex - 1] = currentColor;
            }

            handlePegCircles(targetRow, targetIndex);
        }
    }

    $(".secretcolor").each(function () {

        const secret = possibleColors[Math.floor(Math.random() * 6)];

        $(this).css("background-color", secret)

        currentSecrets.push(secret);
    });

    for (let i = 1; i <= 44; i++) {
        let circle = $(`<div class="circle" id="board${i}" ></div>`);
        $('.fullboard').append(circle);
        circle.on('click', function () {
            console.log(this);
            continueGame(this);
        })
        // console.log(circle);
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
        currentColor = color;

        $(".currentcolor").css("background-color", color)

    });

    $(".circle").dblclick(function () {
        $(this).css("background-color", 'white');
    })

    $(".btn-submit").click(function () {
        if (userChoices.length !== 4) {
            alert('fill out a row at least!');
            return;
        }

        // compare
        let flag = false;
        userChoices.forEach((item, index) => {
            if (item !== currentSecrets[index]) {
                flag = true;
            }
        })

        $('.secret-cover').css('display', 'none')

        if (!flag) {
            $('.modal').css('display', 'flex')
        } else {
            alert('failed');
        }

    })

})
