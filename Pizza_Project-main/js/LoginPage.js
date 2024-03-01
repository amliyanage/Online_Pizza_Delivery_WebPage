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


//---------------------------------------------- set item in local storage ----------------------------------------------

let item1 = new Item('Large Pizza', 'Cheese Burst', '500', 1);
let item2 = new Item('Medium Pizza', 'Cheese Burst', '400', 1);
let item3 = new Item('Small Pizza', 'Cheese Burst', '300', 1);
let item4 = new Item('Large Pizza', 'Cheese Burst', '500', 1);
let item5 = new Item('Medium Pizza', 'Cheese Burst', '400', 1);

var items = [item1, item2, item3, item4, item5];

const setItems = document.getElementById('setItems');

// Loop through items
for (let i = 0; i < items.length; i += 4) {
    // Create a new row for every three items
    const row = document.createElement('div');
    row.classList.add('row'); // Add a class for styling

    // Iterate over the next three items or less if there are fewer than three items remaining
    for (let j = i; j < i + 4 && j < items.length; j++) {
        const item = items[j];

        // Create div for item
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const button = document.createElement('button');
        const brake = document.createElement('br');

        //-----------------------------------------increment
        let cart = 0;
        const increment = document.createElement('div');
        const inButton = document.createElement('button');
        const deButton = document.createElement('button');
        const input = document.createElement('input');
        increment.classList.add('increment');
        inButton.textContent = '+';
        deButton.textContent = '-';

        input.type = 'number';
        input.value = 1;
        input.min = 0;
        input.disabled = true;

        inButton.onclick = function() {
            cart++;
            input.value = cart;
        };

        deButton.onclick = function() {
            if (cart <= 0) {
                brake;
            }
            else{
                cart--;
                input.value = cart;
            }
        }

        increment.appendChild(inButton);
        increment.appendChild(input);
        increment.appendChild(deButton);

        //==============================end of increment

        div.classList.add('item');
        h1.textContent = item.getname();
        h2.textContent = item.getdis();
        h3.textContent = item.getprice();
        h4.textContent = item.getqty();
        img.src = 'img/pizza-margherita-with-tomatoes-mushrooms-white-isolated-background_565470-1868.avif';
        button.textContent = 'Add to Cart';

        button.onclick = function() {
            addToCart(item, cart);
        };

        button.classList.add('btn');
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(increment);
        div.appendChild(brake);
        div.appendChild(button);

        row.appendChild(div);
    }

    setItems.appendChild(row);
}

