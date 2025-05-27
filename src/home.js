import removeContent from "./remove.js";
function createHome() {
    let contain = document.querySelector('.content');
    removeContent();
    let cut = document.createElement('div');
    cut.classList.add('cut');
        let title = document.createElement('h1');
        title.textContent='Home';
        cut.appendChild(title);

        let tiles = document.createElement('div');
        tiles.classList.add('tileCont');
            let d1 = document.createElement('div');
                let h1 = document.createElement('h3');
                h1.innerHTML='Location';
                d1.appendChild(h1);

                let p1 = document.createElement('p');
                p1.innerHTML='208 West Street,<br><br>Jonesville, New Jersey';
                d1.appendChild(p1);
            tiles.appendChild(d1);

            let d2 = document.createElement('div');
                let h2 = document.createElement('h3');
                h2.innerHTML='Hours';
                d2.appendChild(h2);

                let p2 = document.createElement('p');
                p2.innerHTML='Monday-Friday: 9am-5pm<br><br>Saturday: 10am-6pm<br><br>Sunday: 11am-7pm<br><br>';
                d2.appendChild(p2);
            tiles.appendChild(d2);

            let d3 = document.createElement('div');
                let h3 = document.createElement('h3');
                h3.innerHTML='Reviews';
                d3.appendChild(h3);

                let p3 = document.createElement('p');
                p3.innerHTML='"Best chicken katsu I have ever tried!" - James <br> <br>"I would give both of my kidneys for more of their icecream." - Morgan <br> <br>"The nachos are more akin to ambrosia and nectar than to a mexican dish." - Damian <br> <br>';
                d3.appendChild(p3);
            tiles.appendChild(d3);
        cut.appendChild(tiles);
    contain.appendChild(cut);

    console.log('made it here');
}
export default createHome;