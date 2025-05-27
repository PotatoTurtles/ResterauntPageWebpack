import removeContent from "./remove.js";

function createContact() {
    removeContent();
    let contain = document.querySelector('.content');
    let cut = document.createElement('div');
    cut.classList.add('cut');
        let title = document.createElement('h1');
        title.textContent='Contact';
        cut.appendChild(title);

        let tiles = document.createElement('div');
        tiles.classList.add('tileCont');
            let d1 = document.createElement('div');
                let h1 = document.createElement('h3');
                h1.innerHTML='Jonesville Location <br> Main Location';
                d1.appendChild(h1);

                let p1 = document.createElement('p');
                p1.innerHTML='Email <br> jones@morningfoodyum.com<br><br>Phone Number <br> +1(699)420-6699<br><br></br>';
                d1.appendChild(p1);
            tiles.appendChild(d1);

            let d2 = document.createElement('div');
                let h2 = document.createElement('h3');
                h2.innerHTML='Thomasville Location <br> Sub Location';
                d2.appendChild(h2);

                let p2 = document.createElement('p');
                p2.innerHTML='Email <br> thomas@morningfoodyum.com<br><br>Phone Number <br> +1(699)420-6699<br><br>';
                d2.appendChild(p2);
            tiles.appendChild(d2);

            let d3 = document.createElement('div');
                let h3 = document.createElement('h3');
                h3.innerHTML='Bucknerville Location <br> Sub Location';
                d3.appendChild(h3);

                let p3 = document.createElement('p');
                p3.innerHTML='Email <br> buckner@morningfoodyum.com<br><br>Phone Number <br> +1(699)420-6699<br><br>';
                d3.appendChild(p3);
            tiles.appendChild(d3);
        cut.appendChild(tiles);
    contain.appendChild(cut);
}

export default createContact;