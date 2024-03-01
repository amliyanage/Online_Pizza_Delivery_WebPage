import Item from './Item.js';

const data = [
    {
        imgsrc : 'img/png.png'
    },
    {
        imgsrc : 'img/pizza-margherita-with-tomatoes-mushrooms-white-isolated-background_565470-1868.avif'
    }
];

let index = 0;

setInterval(() => {
    document.getElementById('ChangeImg').src = data[index].imgsrc;
    index = (index + 1) % data.length;
}, 4000);


