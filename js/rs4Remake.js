let horas = 0;
let minutos = 10;
let segundos = 0;
cargarSegundo();

//Definimos y ejecutamos los segundos
function cargarSegundo(){
    let txtSegundos;
    
    
    if(segundos < 0){
        segundos = 59; 
    }

    //Mostrar Segundos en pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }
    else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() =>{
            minutos = 00;
        },500)
    }
    else if (segundos == 0 && minutos == 0) {
        setTimeout(() =>{
            minutos = 00;
            segundos = 00
        },500)
    }

    //Mostrar Minutos en pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos);
    render(minutos, segundos)
}

//Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() =>{
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() =>{
            horas = 2;
        },500)
    }

    //Mostrar Horas en pantalla
    if(horas < 10){
        txtHoras = `0${horas}`;
    }else{
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
setInterval(cargarSegundo,1000);

// funciones de scroll 
window.addEventListener('load', ()=> {
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


})