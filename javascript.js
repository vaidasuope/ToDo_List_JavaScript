"use strict"

const pildytiForma = document.getElementById("formosMygtukas");
pildytiForma.addEventListener("click", uzpildytiForma);

function uzpildytiForma() {
    const forma = document.getElementById("forma");
    const pridetiUzduoti = document.getElementById("uzduotiesMygtukas");
    const lentele = document.getElementById("uzLentele");
    const rodytiForma = document.getElementById("formosMygtukas");
    if (forma.style.display === "none" && pridetiUzduoti.style.display === "none" && lentele.style.display === "none") {
        forma.style.display = "block";
        pridetiUzduoti.style.display = "block";
        lentele.style.display = "block";
        document.getElementById("formosMygtukas").value = "Slėpti formą";
        document.getElementById("formosMygtukas").style.backgroundColor = "red";
    } else {
        forma.style.display = "none";
        pridetiUzduoti.style.display = "none";
        lentele.style.display = "none";
        document.getElementById("formosMygtukas").value = "Užpildyti formą";
        document.getElementById("formosMygtukas").style.backgroundColor = "green";
    }
}

//Naujos uzduoties pridejimas po mygtuko paspaudimo

const prideti = document.getElementById("uzduotiesMygtukas");
prideti.addEventListener("click", function (e) {
    e.preventDefault();
    pridetiUzduoti();
    isvalytiForma();
}, false);

//dedam uzduoti i lentele
const kurIdetiUzduoti = document.getElementById("lentele");

function pridetiUzduoti() {
    if (temosLaukas.value === "" || pirmumas.value === "" || terminas.value === "") {
        alert("Prašau užpildykite formą!")
    } else if (progresas.value === "") {
        alert("Prašau užpildykite formą!")
    } else {
        const eilute = document.createElement("tr");
        // eilute.textContent="nauja eilute"
        kurIdetiUzduoti.appendChild(eilute);

        const checkStulpelis = document.createElement("td");
        const checkB = document.createElement("input");
        checkB.setAttribute("type", "checkbox")
        eilute.appendChild(checkStulpelis);
        checkStulpelis.appendChild(checkB);

        checkB.addEventListener("click", isbraukti);

        function isbraukti() {
            if (checkB.checked === true) {
                tema.style.textDecoration = "line-through";
                tema.style.opacity = "0.75";
            } else {
                tema.style.textDecoration = "none";
                tema.style.opacity = "1";
            }
        }

        const uzduotis = document.getElementById("temosLaukas").value;
        // console.log(uzduotis);
        const tema = document.createElement("td");
        tema.innerText = uzduotis;
        eilute.appendChild(tema);

        const pirmumas = document.getElementById("pirmumas").value;
        const vertinimasVieta = document.createElement("td");
        // const vertinimas = document.createElement("input");
        if (pirmumas === "Aukštas") {
            vertinimasVieta.innerHTML = '<p class= "text-center border rounded-pill bg-danger" >'+pirmumas+'</p>';
        } else if (pirmumas === "Normalus") {
            vertinimasVieta.innerHTML = '<p class="text-center border rounded-pill bg-primary">'+pirmumas+'</p>';
        } else if (pirmumas === "Žemas") {
            vertinimasVieta.innerHTML = '<p class="text-center border rounded-pill bg-success">'+pirmumas+'</p>';
        } else {
            vertinimasVieta.innerHTML = '<p class="text-center border rounded-pill bg-secondary">'+pirmumas+'</p>';
        }
        eilute.appendChild(vertinimasVieta);

        const data = document.getElementById("terminas").value;
        const datosLaukas = document.createElement("td");
        datosLaukas.innerText = data;
        eilute.appendChild(datosLaukas);

        const progresas = document.getElementById("progresas").value;
        const progresoLaukas = document.createElement("td");
        // progresoLaukas.innerText = progresas;
        if (isNaN(progresas) && progresas !== "") {
            if (progresas === "100%")
                progresoLaukas.innerHTML = progresas + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></span></span>';
            else if (progresas === "75%")
                progresoLaukas.innerHTML = progresas + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></span></span>';
            else if (progresas === "50%")
                progresoLaukas.innerHTML = progresas + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span></span>';
            else if (progresas === "25%")
                progresoLaukas.innerHTML = progresas + '<span class="progress"><span class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></span></span>';
            else if (progresas === "0%")
                progresoLaukas.innerHTML = progresas + '<span class="progress"><span class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">"</span></span>';
        }
        eilute.appendChild(progresoLaukas);

        const dataRedaguota = document.lastModified;
        const redaguota = document.createElement("td");
        redaguota.innerText = dataRedaguota;
        eilute.appendChild(redaguota);

        const trinti = document.createElement("td");
        const trintiMygtukas = document.createElement("input");
        trintiMygtukas.type = "button";
        trintiMygtukas.id = "deleteBTN";
        trintiMygtukas.name = "delete";
        trintiMygtukas.value = "Šalinti";
        trintiMygtukas.className = "btn btn-danger btn-md";
        eilute.appendChild(trinti);
        trinti.appendChild(trintiMygtukas);

        trintiMygtukas.addEventListener("click", function (e) {
            e.preventDefault();
            trintiEilute(e.target.parentNode.parentNode);//ant kurio elemento ivykis paspaustas,pasiekia mygtuka cia
        }, false);
    }
}

function isvalytiForma() {
    const forma = document.getElementsByTagName("form")[0];
    forma.reset();  // Isvalo visus duomenis
    return false; // Neleidzia persiskrauti puslapiui
}

//Eilutes trynimas
function trintiEilute(row) {//html elementa irasom
    kurIdetiUzduoti.removeChild(row);
}



