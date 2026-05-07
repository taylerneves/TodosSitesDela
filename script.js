const botaoTema = document.getElementById('botao-tema');
const body = document.body;

/* =========================
   TEMA
========================= */

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    body.classList.add('escuro');
}

function atualizarIconeTema() {

    if (body.classList.contains('escuro')) {
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

atualizarIconeTema();

botaoTema.addEventListener('click', () => {

    body.classList.toggle('escuro');

    localStorage.setItem(
        'tema',
        body.classList.contains('escuro')
            ? 'escuro'
            : 'claro'
    );

    atualizarIconeTema();
});

/* =========================
   SCROLL SUAVE
========================= */

const links = document.querySelectorAll('.link');

links.forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const alvo = document.querySelector(
            link.getAttribute('href')
        );

        if (alvo) {

            window.scrollTo({
                top: alvo.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

/* =========================
   TEMPO DE NAMORO
========================= */

const dataNamoro = new Date('2025-03-09T00:00:00');

function atualizarTempoNamoro() {

    const agora = new Date();

    const diferenca = agora - dataNamoro;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = (dias % 365) % 30;

    document.getElementById('tempo-namoro').innerHTML =
        `${anos} anos, ${meses} meses e ${diasRestantes} dias 💖`;
}

atualizarTempoNamoro();
/* =========================
   CONTADOR ANIVERSÁRIO ANUAL
========================= */

function atualizarContador() {

    const agora = new Date();

    // DATA DO ANIVERSÁRIO
    let proximoAniversario = new Date(
        agora.getFullYear(),
        2, // Março = 2
        9,
        0,
        0,
        0
    );

    // SE JÁ PASSOU ESSE ANO,
    // VAI PARA O PRÓXIMO
    if (agora > proximoAniversario) {

        proximoAniversario = new Date(
            agora.getFullYear() + 1,
            2,
            9,
            0,
            0,
            0
        );
    }

    const diferenca = proximoAniversario - agora;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById('dias').innerText =
        String(dias).padStart(2, '0');

    document.getElementById('horas').innerText =
        String(horas).padStart(2, '0');

    document.getElementById('minutos').innerText =
        String(minutos).padStart(2, '0');

    document.getElementById('segundos').innerText =
        String(segundos).padStart(2, '0');
}

setInterval(atualizarContador, 1000);

atualizarContador();