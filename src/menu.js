import removeContent from "./remove.js";

function createMenu() {
    removeContent();
    let contain = document.querySelector('.content');
    let cut = document.createElement('div');
    cut.classList.add('cut');
        let title = document.createElement('h1');
        title.textContent='Menu';
        cut.appendChild(title);

        let tiles = document.createElement('div');
        tiles.classList.add('tileCont');
            let d1 = document.createElement('div');
                let h1 = document.createElement('h3');
                h1.innerHTML='Drinks';
                d1.appendChild(h1);

                let p1 = document.createElement('p');
                p1.innerHTML='Water - $1.00<br><br>Lemonade - $2.50<br><br>Orange Juice - $2.00<br><br>Coffee - $4.00<br><br>Tea $2.00<br><br>Matcha $4.00<br><br></br>';
                d1.appendChild(p1);
            tiles.appendChild(d1);

            let d2 = document.createElement('div');
                let h2 = document.createElement('h3');
                h2.innerHTML='Appetizers';
                d2.appendChild(h2);

                let p2 = document.createElement('p');
                p2.innerHTML='Deviled Eggs - $5.00<br><br>Biscuits - $3.00<br><br>Raisin Muffins - $6.00<br><br>Blueberry Scones - $6.00<br><br>Banana Bread - $5.00<br><br>Bacon Strips - $4.50<br><br></br>';
                d2.appendChild(p2);
            tiles.appendChild(d2);

            let d3 = document.createElement('div');
                let h3 = document.createElement('h3');
                h3.innerHTML='Mains';
                d3.appendChild(h3);

                let p3 = document.createElement('p');
                p3.innerHTML='Eggs and Toast - $8.50<br><br>French Toast - $8.00<br><br>Souffle Pancakes - $9.50<br><br>Everything Bagel - $7.00<br><br>Loaded Waffles - $8.00<br><br>Combo Meal - $12.50<br><br></br>';
                d3.appendChild(p3);
            tiles.appendChild(d3);
        cut.appendChild(tiles);
    contain.appendChild(cut);
}

export default createMenu;