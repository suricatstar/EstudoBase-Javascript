function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minute = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minute} horas`;
    
    if (0 <= hora && hora < 12) {
        //bom dia
        img.src = '../Imagens/manhaC.png';
        document.body.style.background = '#9fafd3';
    } 
    else if (12 <=hora && hora < 18) {
        //Boa tarde
        img.src = '../Imagens/tardeC.png';
        document.body.style.background = '#e5b569';
    } 
    else {
        //Boa noite
        img.src = '../Imagens/noiteC.png';
        document.body.style.background = '#2c2128';
    }
}