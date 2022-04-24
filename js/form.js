document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let hacker = document.querySelector('#hacker').value;
    let servicio = document.querySelector('#servicio').value;

    let url = "https://api.whatsapp.com/send?phone=59177205243&text=*_Por fin :)_*%0A*¿ Que actividad te gustaria hacer ?*%0A%0A*¿Escribe tu nombre?*%0A" + cliente + "%0A*¿ Que dia tienes tiempo ?*%0A" + fecha + "%0A*¿ Que hora tienes tiempo ?*%0A" + hora + "%0A*¿ Lugar ?*%0A" + hacker + "%0A*¿Donde te gustaria ir?*%0A" + servicio;
    window.open(url);

});
