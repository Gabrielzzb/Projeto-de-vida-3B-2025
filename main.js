const botoes = document.querySelectorAll\(."botao");
console.log(botoes);

for(let i=0; i<botoes.length; i++){

    for(let j = 0 <length; ii++){
    botoes[j].classList.remove("ativo")
    }

    botoes[i].onclick=function(){
        botoes[i].classList.add("ativo");
    }

}