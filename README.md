# PilotosF1
Código criado durante a Imersão Dev com Gemini da Alura

# Pesquisa de Pilotos de Fórmula 1

Este é um projeto simples de pesquisa de pilotos de Fórmula 1, onde o usuário pode pesquisar informações sobre alguns pilotos famosos, como sua equipe, país, status na Fórmula 1, além de uma breve descrição. O projeto usa HTML, CSS e JavaScript para exibir os resultados com base na entrada do usuário.

## Funcionalidades

- Pesquisa dinâmica de pilotos de Fórmula 1 por nome, equipe, país ou qualquer informação relacionada aos pilotos.
- Os resultados da pesquisa são exibidos em tempo real, sem necessidade de recarregar a página.
- Exibe um link com mais informações sobre cada piloto, redirecionando para sua página correspondente na Wikipedia.

## Como funciona

A pesquisa é realizada com base nos dados armazenados em um array de objetos chamado `dados`, onde cada objeto contém informações detalhadas sobre um piloto, como:
- Nome (`titulo`)
- Descrição (`descricao`)
- Link para a página da Wikipedia do piloto (`link`)
- Equipe de F1 do piloto (`equipe`)
- País de origem (`pais`)
- Status atual do piloto (ativo, aposentado, falecido)
- Tags adicionais para facilitar a pesquisa

O usuário pode inserir palavras-chave no campo de pesquisa, e o sistema filtra os resultados que correspondem ao nome do piloto, descrição, equipe, país ou tags.


## Adicional

O código foi feito para estudo durante a Imersão Dev e para aprender sobre o básico de JavaScript, não é um projeto com intenção de haver melhorias futuras.
