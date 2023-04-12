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

/* obtener y comparar valor del input */
function valueInput() {
    /* transition clock*/
    let transitionclock = document.getElementById('transitionclock')
    let line = document.getElementById('line')


    let OptionOne = document.getElementById('OptionOne')

    let searchBox = document.getElementById('searchBox')

    // ids 
    let id1927 = document.getElementById('id1927')
    let id1928 = document.getElementById('id1928')
    let id1929 = document.getElementById('id1929')
    let id1938 = document.getElementById('id1930')

    // console.log(id1927.textContent);

    let optionTwo = document.getElementById('optionTwo')
    let optionTwo2 = document.getElementById('optionTwo2')
    let OptionOneInter = document.getElementById('OptionOneInter')

    let OptionThree = document.getElementById('OptionThree')
    let OptionThree2 = document.getElementById('OptionThree2')

    let OptionFour = document.getElementById('OptionFour')
    let OptionFour2 = document.getElementById('OptionFour2')

    let OptionFive = document.getElementById('OptionFive')
    let OptionFive2 = document.getElementById('OptionFive2')

    /* selected for 1927 */
    if (searchBox.value == id1927.textContent) {

        transitionclock.classList.toggle('contPageTransitionClock')
        transitionclock.classList.toggle('contPageTransitionClockVisible')
        line.classList.toggle('line')
        
        setTimeout(() => {
            line.classList.toggle('line')
        }, 8000);

        setTimeout(() => {
            transitionclock.classList.toggle('contPageTransitionClockVisible')
            transitionclock.classList.toggle('contPageTransitionClock')
        }, 5000);

        setTimeout(() => {
            ScrollFunction()
            let instrucciones = document.getElementById('instrucciones')
            instrucciones.classList.remove('selected')
            OptionOne.classList.remove('selected')
            OptionOneInter.classList.remove('selected')
            id1928.classList.remove('selected')
            OptionThree.classList.remove('selected')
            OptionThree2.classList.remove('selected')

            // remove 
            id1927.classList.add('selected')
            optionTwo.classList.remove('optionTwo')
            optionTwo.classList.add('selected')
            optionTwo2.classList.add('selected')
            OptionFour.classList.remove('selected')
            OptionFour2.classList.remove('selected') 
            OptionFive.classList.remove('selected')
            OptionFive2.classList.remove('selected')
        }, 5000);
        
    }
    /* select for 1928 */
    else if (searchBox.value == id1928.textContent) {

        transitionclock.classList.toggle('contPageTransitionClock')
        transitionclock.classList.toggle('contPageTransitionClockVisible')
        line.classList.toggle('line')

        setTimeout(() => {
            line.classList.toggle('line')
        }, 8000);

        setTimeout(() => {
            transitionclock.classList.toggle('contPageTransitionClockVisible')
            transitionclock.classList.toggle('contPageTransitionClock')
        }, 5000);

        setTimeout(() => {
            ScrollFunction()
            let instrucciones = document.getElementById('instrucciones')
            instrucciones.classList.remove('selected')

            OptionOne.classList.remove('selected')
            OptionOneInter.classList.remove('selected')

            // add 
            id1928.classList.add('selected')
            OptionThree.classList.remove('OptionThree')
            OptionThree.classList.add('selected')
            OptionThree2.classList.add('selected')

            // remove
            id1927.classList.remove('selected')
            id1929.classList.remove('selected')
            optionTwo.classList.remove('selected')
            optionTwo2.classList.remove('selected')
            OptionFour.classList.remove('selected')
            OptionFour2.classList.remove('selected')
        }, 5000);

    }
    /* select for 1929 */
    else if (searchBox.value == id1929.textContent) {

        transitionclock.classList.toggle('contPageTransitionClock')
        transitionclock.classList.toggle('contPageTransitionClockVisible')
        line.classList.toggle('line')

        setTimeout(() => {
            line.classList.toggle('line')
        }, 8000);

        setTimeout(() => {
            transitionclock.classList.toggle('contPageTransitionClockVisible')
            transitionclock.classList.toggle('contPageTransitionClock')
        }, 5000);

        setTimeout(() => {
            ScrollFunction()
            let instrucciones = document.getElementById('instrucciones')
            instrucciones.classList.remove('selected')

            OptionOne.classList.remove('selected')
            OptionOneInter.classList.remove('selected')

            // add 
            id1929.classList.add('selected')
            OptionFour.classList.remove('OptionFour')
            OptionFour.classList.add('selected')
            OptionFour2.classList.add('selected')

            // remove
            id1927.classList.remove('selected')
            optionTwo.classList.remove('selected')
            optionTwo2.classList.remove('selected')

            id1928.classList.remove('selected')
            OptionThree.classList.remove('selected')
            OptionThree2.classList.remove('selected')

            id1938.classList.remove('selected')
            OptionFive.classList.remove('selected')
            OptionFive2.classList.remove('selected')

        }, 5000);
        
    }
    /* select for 1938 */
    else if (searchBox.value == id1938.textContent) {

        let instrucciones = document.getElementById('instrucciones')
        instrucciones.classList.remove('selected')

        OptionOne.classList.remove('selected')
        OptionOneInter.classList.remove('selected')

        // add
        id1938.classList.add('selected')
        OptionFive.classList.remove('OptionFive')
        OptionFive.classList.add('selected')
        OptionFive2.classList.add('selected')

        // remove
        id1927.classList.remove('selected')
        optionTwo.classList.remove('selected')
        optionTwo2.classList.remove('selected')

        id1928.classList.remove('selected')
        OptionThree.classList.remove('selected')
        OptionThree2.classList.remove('selected')

        id1929.classList.remove('selected')
        OptionFour.classList.remove('selected')
        OptionFour2.classList.remove('selected')
    }
    else if (searchBox.value == '') {
        Swal.fire({
            title: 'Oops!',
            text: 'Debes ingresar un año en el buscador para consultar la historia de dicha epoca.',
            confirmButtonColor: 'red',
            icon: 'question',
            width: 500,
            customClass: {
                confirmButton: 'custom-button',
            }
        })
    }
    else {
        Swal.fire({
            title: 'Oops!',
            text: 'El año que haz escrito no se encuentra en nuestra linea del tiempo.',
            confirmButtonColor: 'red',
            width: 400,
            icon: 'error',
            imageAlt: 'Custom image',
            customClass: {
                confirmButton: 'custom-button',
            }
        })
    }

}