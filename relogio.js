function Relogio(){
	var data = new Date ();
    var hr = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    var tempo_total = hr + ":" + min + ":" + seg;
    var tempo = window.document.getElementById('divRelogio');
    tempo.innerHTML = tempo_total;
    
}

setInterval(Relogio,500)



function carConteudo(){
    document.getElementById("divRelogio").classList.toggle('relogio2');
}
