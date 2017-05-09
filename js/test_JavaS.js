/*
/!*'use strict';
var age = 25, user = 'rok', name = 'sad';
age=user;
alert(age);
alert(name);*!/

/!*
var admin="Вася";
name=admin;
alert(name);*!/

var PlanetNameEarth="Земля";
var visitedUser="Петя";*/

// alert(1/0); //infinity
//alert("sad"/0); //NaN
/*

//operatory

var apple = "5";
var banan = "7";
alert(apple + banan);*/
/*
var apple = "5";
var banan = "7";
alert(+apple + +banan);*/

/*a=b=5;
alert(a);*/
/*

var a=1;
a++;
alert(a);
var a=1;
a--;
alert(a);/**!/
var a = (5, 6);
alert(a);*/
/*
 var i = 3;
 var a = i++ ;
 alert(a);

 var i = 3;
 var a = ++i ;
 alert(a);*/
/*

var i = 0;
i++;
++i;
alert(i);

var i = 2;
++i;
alert(i);

var i = 1;
alert(2*i++);

var i = 1;
alert(2*++i);
*/
/*
var i = 1;
alert(2*i);
i++;*/
/*
alert(null == undefined);
alert (null>0);
alert(null==0);*/

var login = prompt("Login", "");
if(login == "admin") {
    var passw = prompt("Password", "");
        if (passw == "12345") {
        alert("Привет!!!");
    }   else if(passw == null) {
        alert("Как жаль, до скорой встречи!");
    }   else {
        alert("Как, ты не знаешь пароль?");
    }
} else if(login == null) {
    alert("Как, ты уже уходишь?");
} else {
    alert("ай-ай-ай, нужно знать пароль ;-)))");
}