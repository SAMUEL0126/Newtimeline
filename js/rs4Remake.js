let horas = 0;
let minutos = 10;
let segundos = 0;

setTimeout(() => {


    cargarSegundo();

    //Definimos y ejecutamos los segundos
    function cargarSegundo() {
        let txtSegundos;


        if (segundos < 0) {
            segundos = 59;
        }

        //Mostrar Segundos en pantalla
        if (segundos < 10) {
            txtSegundos = `0${segundos}`;
        }
        else {
            txtSegundos = segundos;
        }
        document.getElementById('segundos').innerHTML = txtSegundos;
        segundos--;

        cargarMinutos(segundos);
    }

    //Definimos y ejecutamos los minutos
    function cargarMinutos(segundos) {
        let txtMinutos;

        if (segundos == -1 && minutos !== 0) {
            setTimeout(() => {
                minutos--;
            }, 500)
        } else if (segundos == -1 && minutos == 0) {
            setTimeout(() => {
                minutos = 00;
            }, 500)
        }
        else if (segundos == 0 && minutos == 0) {
            setTimeout(() => {
                minutos = 00;
                segundos = 00
            }, 500)
        }

        //Mostrar Minutos en pantalla
        if (minutos < 10) {
            txtMinutos = `0${minutos}`;
        } else {
            txtMinutos = minutos;
        }
        document.getElementById('minutos').innerHTML = txtMinutos;
        cargarHoras(segundos, minutos);
        render(minutos, segundos)
    }

    //Definimos y ejecutamos las horas
    function cargarHoras(segundos, minutos) {
        let txtHoras;

        if (segundos == -1 && minutos == 0 && horas !== 0) {
            setTimeout(() => {
                horas--;
            }, 500)
        } else if (segundos == -1 && minutos == 0 && horas == 0) {
            setTimeout(() => {
                horas = 2;
            }, 500)
        }

        //Mostrar Horas en pantalla
        if (horas < 10) {
            txtHoras = `0${horas}`;
        } else {
            txtHoras = horas;
        }
        document.getElementById('horas').innerHTML = txtHoras;
    }


    function render(minutos, segundos) {
        if (minutos == 0 && segundos == 0) {
            setTimeout(() => {
                $('#darWindowLineT').addClass('darWindowLineRen')
            }, 900);
            setTimeout(() => {
                window.location.assign('/pages/presentacion.html')
            }, 2000);
        }
    }


    //Ejecutamos cada segundo
    setInterval(cargarSegundo, 1000);
    let contTime = document.getElementById('contTime')
    contTime.classList.add('positionFixedCloc')
}, 41000);

// funciones de scroll 
let año1927 = document.getElementById('id1927')
let año1928 = document.getElementById('id1928')
let año1929 = document.getElementById('id1929')
let año1930 = document.getElementById('id1930')
let año1940 = document.getElementById('id1940')
let año1958 = document.getElementById('id1958')
let año1960 = document.getElementById('id1960')
let año1974 = document.getElementById('id1974')
let año2002 = document.getElementById('id2002')
let año2016 = document.getElementById('id2016')
año1927.addEventListener('click', ScrollFunction)
año1928.addEventListener('click', ScrollFunction)
año1929.addEventListener('click', ScrollFunction)
año1930.addEventListener('click', ScrollFunction)
año1940.addEventListener('click', ScrollFunction)
año1958.addEventListener('click', ScrollFunction)
año1960.addEventListener('click', ScrollFunction)
año1974.addEventListener('click', ScrollFunction)
año2002.addEventListener('click', ScrollFunction)
año2016.addEventListener('click', ScrollFunction)

function ScrollFunction() {
    setTimeout(() => {
        window.scroll({
            top: 215,
            bottom: 0,
            behavior: 'smooth'
        })
    }, 2000);
    setTimeout(() => {
        window.scroll({
            top: 0,
            bottom: 0,
            behavior: 'smooth'
        })
    }, 40000);
}

window.addEventListener('load', () => {
    ScrollFunction();
})


/*Seccion de funcionalidad para el buscador*/

let BtnOpenSearch = document.getElementById('BtnOpenSearch')
BtnOpenSearch.addEventListener('click', openInput)


function openInput() {
    let searchBox = document.getElementById('searchBox')
    searchBox.classList.toggle('inputHidden')
    searchBox.classList.toggle('inputYearSearch')

    let BtnBuscar = document.getElementById('BtnBuscar')
    BtnBuscar.classList.toggle('Btnhidden')
    BtnBuscar.classList.toggle('Btnvisible')
}

let BtnBuscar = document.getElementById('BtnBuscar')
BtnBuscar.addEventListener('click', valueInput)

function valueInput() {
    let searchBox = document.getElementById('searchBox')
    console.log(searchBox.value);
    let id1927 = document.getElementById('id1927')
    console.log(id1927);
}