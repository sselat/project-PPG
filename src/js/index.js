const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () =>{
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        
        personagem.classList.add('selecionado')

        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');

        imagemJogador1.src = `src/img/${idSelecionado}.png`

        const nome = document.getElementById('nome-jogador-1');

        nome.innerHTML = idSelecionado;
    })
})