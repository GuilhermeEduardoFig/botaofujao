        function fuja(){
    var botao = document.getElementById("nao");
    var painel = document.querySelector(".painel");

    var larguraPainel = painel.clientWidth;
    var alturaPainel = painel.clientHeight;

    var maxX = larguraPainel - botao.offsetWidth;
    var maxY = alturaPainel - botao.offsetHeight;

    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    botao.style.left = x + "px";
    botao.style.top = y + "px";
}

let musicaTocando = false;

function abrirCarta(el){
    if(!el.classList.contains("aberta")){
        el.classList.add("aberta");
        iniciarCarta();

        // 🎶 toca exatamente no clique
        if(!musicaTocando){
            tocarMusica();
            musicaTocando = true;
        }
    }
}

function tocarMusica(){
    const audio = document.getElementById("musica");

    audio.currentTime = 0;
    audio.volume = 0;

    audio.play().catch(()=>{});

    let vol = 0;
    const fade = setInterval(()=>{
        if(vol < 1){
            vol += 0.05;
            audio.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

const audio = document.getElementById("musica");

document.addEventListener("click", () => {
    audio.play();
}, { once: true });

const texto = `É Minha gata o momento que vc tanto esperou chegou, quando vc ler isso mto provavelmente eu já coloquei uma linda aliança em seu dedo. No momento em que estou escrevendo isso a gente tem 6 meses e 19 dias juntos e eu só sei que  a cada dia e hora que passe eu só fico mais apaixonado por vc e sinceramente só tenho mais certeza que vc é a mulher que eu quero me casar e levar para a vida toda.   Muito Obrigada por ser tão atenciosa, carinhosa e muitooooo paciente comigo, sei que demorei bastante até fazer isso acontecer, porém não significa que eu não te amo ou não queira um futuro ao seu lado, pois na verdade tudo que eu mais quero é viver essa vida ao seu lado e te amar cada vez mais e a partir de agora eu declaro que seu contrato comigo foi renovado pra toda a eternidade e ele não pode ser revogado, muito obrigado de coração minha gatinha, eu prometo te amar pra toda eternidade e em todas as vidas minha princesa ❤️💞`;

let paginas = [];
let paginaAtual = 0;

function dividirTexto(){
    const limite = 394; // quantidade de caracteres por página
    for(let i = 0; i < texto.length; i += limite){
        paginas.push(texto.substring(i, i + limite));
    }
}

function mostrarPagina(){
    document.getElementById("paginas").innerText = paginas[paginaAtual];
}

function proximaPagina(){
    if(paginaAtual < paginas.length - 1){
        paginaAtual++;
        mostrarPagina();
    }
}

function iniciarCarta(){
    dividirTexto();
    mostrarPagina();
}

function abrirCarta(el){
    el.classList.add("aberta");
    iniciarCarta();
}