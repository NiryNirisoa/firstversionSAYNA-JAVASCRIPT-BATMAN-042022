var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var btn5 = document.getElementById('button5');
var btn6 = document.getElementById('button6');

function myOverbtn1() {
    btn1.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(25, 88, 125, 1)';
    btn1.style.color = '#fff';
    btn1.style.fontWeight = 'bold';
}

function myLeavebtn1() {
    btn1.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn1.style.color = '#fff';
}

function myOverbtn2() {
    btn2.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(25, 88, 125, 1)';
    btn2.style.color = '#fff';
    btn2.style.fontWeight = 'bold';
}

function myLeavebtn2() {
    btn2.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn2.style.color = '#fff';
}

function myOverbtn3() {
    btn3.style.border = 'solid 2px white';
    btn3.style.color = '#fff';
    btn3.style.fontWeight = 'bold';
}

function myLeavebtn3() {
    btn3.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn3.style.color = '#fff';

}

function myOverbtn4() {
    btn4.style.border = 'solid 2px white';
    btn4.style.color = '#fff';
    btn4.style.fontWeight = 'bold';
}

function myLeavebtn4() {
    btn4.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn4.style.color = '#fff';

}

function myOverbtn5() {
    btn5.style.border = 'solid 2px white';
    btn5.style.color = '#fff';
    btn5.style.fontWeight = 'bold';
}

function myLeavebtn5() {
    btn5.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(25, 88, 125, 0.4)';
    btn5.style.color = '#fff';

}

function myOverbtn6() {
    btn6.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 1), rgba(137, 0, 8, 1)';
    btn6.style.color = '#fff';
    btn6.style.fontWeight = 'bold';
}

function myLeavebtn6() {
    btn6.style.backgroundImage = 'linear-gradient(to right, rgba(237, 222, 191, 0.4), rgba(137, 0, 8, 0.6)';
    btn6.style.color = '#fff';
}

let footericones = document.getElementsByClassName('footer-icones');

for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'yellow';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'white';

    });
}

let headericones = document.getElementsByClassName('header-icones');

for (let i = 0; i < headericones.length; i++) {
    headericones[i].addEventListener('mouseover', () => {
        headericones[i].style.color = 'yellow';
    });
    headericones[i].addEventListener('mouseout', () => {
        headericones[i].style.color = 'white';

    });
}

let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'underline';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });

});


//page heros

var slide = new Array("Batslider1.png", "Batslider2.png", "Batslider3.png", "Batslider4.png", "Batslider5.png", "Batslider6.png", "Batslider7.png", "Batslider8.png", "Batslider9.png", "Batslider10.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    setInterval("ChangeSlide(1)", 4000);
}

//page bonus

// Set the date we're counting down to
var countDownDate = new Date("May 7, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

/*$('.arrow').click(function() {
    $(this).css({
            backgroundColor: 'blue'

        },

    )
})

$('.arrow').hover(function() {
    $(this).css({
            backgroundColor: 'red'

        },
        function() {
            $(this).css({
                backgroundColor: 'white'
            })
        }
    )
})*/

$(document).ready(function() {
    $(".box").animate({
        'left': '40px'
    })

})

var actor = document.getElementById('st1');
var actor2 = document.getElementById('st2');

function myOverst1() {
    actor.style.display = 'block';
    actor.style.width = '150px';
    actor.style.height = '150px';

}

function myLeavest1() {
    actor.style.display = 'none';

}