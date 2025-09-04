let amigos = []; 

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();

    if( nome !== ""){
        amigos.push(nome);
        input.value = "";
        input.focus();

        atualizarLista();
    }

}  

// Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    // Para percorrer o array e adicionar cada amigo como <li>
    for (let indice = 0; indice < amigos.length; indice++) {
        lista.innerHTML += `<li>${amigos[indice]}</li>`;
    }
}

// Função para sortear um Amigo Secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo foi adicionado');
        return;
    }

    let sorteado = amigos[Math.floor(Math.random()*amigos.length)];
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    //Limpar a lista de amigos
    let limparLista = document.querySelector('#listaAmigos');
    limparLista.innerHTML = "";

    // Limpar a lista de amigos na interface e no array 

    amigos = []
    atualizarLista();

}

