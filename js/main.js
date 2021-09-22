//--------------VARIABLES---------------
let win = false;
//-------------WIN FUNCTION-------------
let showHorizontal = i => {
    win = true;
    for (let j = 1; j <= 3; j++)
        $(`.f${i}${j}`).css('background-color', 'lightgreen');
    $('.restartBtn').css('animation', 'pulse 2s infinite');
}

let showVertical = i => {
    win = true;
    for (let j = 1; j <= 3; j++)
        $(`.f${j}${i}`).css('background-color', 'lightgreen');
    $('.restartBtn').css('animation', 'pulse 2s infinite');
}

let showSlash = () => {
    win = true;
    for (let j = 1; j <= 3; j++)
        $(`.f${j}${j}`).css('background-color', 'lightgreen');
    $('.restartBtn').css('animation', 'pulse 2s infinite');
}

let showBSlash = () => {
    win = true;
    for (let j = 1; j <= 3; j++)
        $(`.f${j}${4-j}`).css('background-color', 'lightgreen');
    $('.restartBtn').css('animation', 'pulse 2s infinite');
}
//-------------GAME LOGIC-------------
$(function () {
    let char = 'X';

    $('.field-wrapper').slideDown({
        start: function () {
            $(this).css({
                display: "flex"
            })
        },
        duration: 900
    });

    $('.field-wrapper').click(event => {
        if (win) 
            return;
        if ($(event.target).text() == '') {
            $(event.target).text(char);
            for (let i = 1; i <= 3; i++)
                $(`.f${i}1`).text() == $(`.f${i}2`).text() &&
                $(`.f${i}1`).text() == $(`.f${i}3`).text() &&
                $(`.f${i}1`).text() != '' ?
                showHorizontal(i) :
                '';
            for (let i = 1; i <= 3; i++)
                $(`.f1${i}`).text() == $(`.f2${i}`).text() &&
                $(`.f2${i}`).text() == $(`.f3${i}`).text() &&
                $(`.f1${i}`).text() != '' ?
                showVertical(i) :
                '';
            $(`.f11`).text() == $(`.f22`).text() &&
                $(`.f11`).text() == $(`.f33`).text() &&
                $(`.f11`).text() != '' ?
                showSlash() :
                '';

            $(`.f13`).text() == $(`.f22`).text() &&
                $(`.f13`).text() == $(`.f31`).text() &&
                $(`.f13`).text() != '' ?
                showBSlash() :
                '';
            char = char == 'X' ? 'O' : 'X';
        }a
    });

    $(".field").on('mouseover', function () {
        if (!win)
            $(this).css('background-color', 'rgba(80, 80, 80, 0.1)');
     }).on('mouseout', function () {
        if (!win)
            $(this).css('background', '');
     });
})
//-------------PAGE ROLOAD-------------
$('.restartBtn').click(() => location.reload());
//-------------------------------------