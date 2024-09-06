function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Inicializa uma variável para armazenar os resultados da pesquisa
    let resultados = "";

    // Se o campo de pesquisa estiver vazio, exibe a mensagem "Nada foi encontrado"
    if (!campoPesquisa) {
        section.innerHTML = "<p>Insira alguma informação antes de pesquisar.</p>";
        return;
    }

    // Itera sobre cada piloto no array 'dados'
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || 
            dado.descricao.toLowerCase().includes(campoPesquisa) || 
            dado.pais.toLowerCase().includes(campoPesquisa) || 
            dado.equipe.toLowerCase().includes(campoPesquisa) || 
            (dado.tags && dado.tags.some(tag => tag.toLowerCase().includes(campoPesquisa)))) {
            
            // Concatena os resultados em HTML
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado, exibe a mensagem "Nada foi encontrado"
    if (!resultados) {
        section.innerHTML = "<p>Nada foi encontrado</p>";
    } else {
        // Se houver resultados, exibe-os na seção
        section.innerHTML = resultados;
    }
}
