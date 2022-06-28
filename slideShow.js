'use strict';

const images = [
    { 'id': '1', 'url' : './img/onePiece_yonkous.jpg'},
    { 'id': '2', 'url' : './img/onePiece_eastBlue.jpg'},
    { 'id': '3', 'url' : './img/onePiece_alabasta.jpg'},
    { 'id': '4', 'url' : './img/onePiece_skypiea.jpg'},
    { 'id': '5', 'url' : './img/onePiece_water7.jpg'},
    { 'id': '6', 'url' : './img/onePiece_thrillerBark.jpg'},
    { 'id': '7', 'url' : './img/onePiece_marineford.jpg'},
    { 'id': '8', 'url' : './img/onePiece_ilhaDosTritoes.jpg'},
    { 'id': '9', 'url' : './img/onePiece_aliancaPirata.jpg'},
]

const containerItems = document.querySelector('#container-items')

const loadImages = ( images , container ) => {

    images.forEach( image => {
        container.innerHTML += `
            <div class = 'item'>
                <img src='${image.url}'
            </div>
        `
    } )

}

loadImages( images , containerItems );

let items = document.querySelectorAll('.item');

const next = () => {

    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');

}

const previous = () => {

    const lastItem = items[items.length - 1];
    containerItems.insertBefore(  lastItem, items[0]);
    items = document.querySelectorAll('.item');

}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);