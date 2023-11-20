var card = window.document.getElementById('card')
var icon1 = window.document.getElementById('icon1')
var icon2 = window.document.getElementById('icon2')


function Nada(){
    imagemsport.src = 'imagens/nada.svg'
    icon1.setAttribute("onclick","Pedala()")
    icon2.setAttribute("onclick","Corre()")
}

function Pedala(){
    imagemsport.src = 'imagens/pedala.svg'
    icon1.setAttribute("onclick","Corre()")
    icon2.setAttribute("onclick","Nada()")
}

function Corre(){
    imagemsport.src = 'imagens/corre.svg'
    icon1.setAttribute("onclick","Nada()")
    icon2.setAttribute("onclick","Pedala()")
}
