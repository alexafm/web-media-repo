'use strict';

//Recipe Card exersce

var lemonPay= {
    titulo: 'Pay de limon',
    ingredientes: {
        'Leche condensada': 6, 'limon': 12, 'Galletas'
    }
    ,
    nivelDeDificultad: 'avanzado',
    instruciones: 'Se licua la leche y los limones se acomodan las galletas en un molde y se vierte la mezcla. '
}

console.log(lemonPay);

//Contact Data Base exercise

var contacts=[ {
    name: 'Gerardo',
    homeTelephone: 53937205,
    workTelephone: 5436798,
    cellPhone: 5541817602,
    address: {
        street: 'Fernando Gonzales Roa', number: 17, country: 'Mexico'
    }
}

,
{
    name: 'Vanessa',
    homeTelephone: 16598020,
    workTelephone: 647475769,
    cellPhone: 5534343526,
    address: {
        street: 'Ampliacion', number: 101, country: 'Mexico'
    }
}

,
{
    name: 'Paulina',
    homeTelephone: 55852090,
    workTelephone: 55789076,
    cellPhone: 5518413833,
    address: {
        street: 'Villa Verdun', number: 20, country: 'Mexico'
    }
}

,
{
    name: 'Rocio',
    homeTelephone: 55853040,
    workTelephone: 56350070,
    cellPhone: 5530897654,
    address: {
        street: 'Desierto de los leones', number: 5500, country: 'Mexico'
    }
}

,
{
    name: 'Patricia',
    homeTelephone: 55678548,
    workTelephone: 56789036,
    cellPhone: 5512491284,
    address: {
        street: 'eje central', number: 2809, country: 'Mexico'
    }
}

,
{
    name: 'Maria',
    homeTelephone: 16598028,
    workTelephone: 16598030,
    cellPhone: 5563193128,
    address: {
        street: '2da cda', number: 3, country: 'Mexico'
    }
}

] function filter (contacts, letter) {
    var result=[];
    for (var i=0;
    i < contacts.length;
    i++) {
        if(letter==contacts[i].name.charAt(0)) {
            result.push(contacts[i].name);
        }
    }
    ;
    console.log(result);
}

filter(contacts, 'P');
filter(contacts, 'M');
filter(contacts, 'V');


//Points exercise

function distanceTo(p1, p2, p3) {
    if ( p1.x==p2.x && p1.y==p2.y) {
        console.log('the point 1 and the poin2 to are equal');
    }
    else if (p2.x==p3.x && p2.y==p3.y) {
        console.log('the point 2 and the poin 3 to are equal');
    }
    else if (p1.x==p3.x && p1.y==p3.y) {
        console.log('the point 1 and the poin 3 to are equal');
    }
    else {
        console.log('none of this vectors are equal');
    }
    ;
}