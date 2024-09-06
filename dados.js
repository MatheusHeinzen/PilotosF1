let dados = [
  {
      titulo: "Charles Leclerc",
      descricao: "O monegasco Charles Leclerc está conquistando o coração dos fãs da Fórmula 1 com sua velocidade e talento na pista. Desde sua estreia na Ferrari, ele tem mostrado por que é considerado uma das maiores promessas do automobilismo mundial. Com uma paixão pela corrida desde criança, Leclerc já acumula diversas vitórias e pódios em sua carreira. Acompanhe a trajetória desse piloto que promete marcar época!",
      link: "https://pt.wikipedia.org/wiki/Charles_Leclerc",
      equipe: "Ferrari",
      pais: "Monaco",
      status: "Ativo",
      tags: ["velocidade", "jovem talento", "promissor"],
      idade: 26,
      altura: "1,80m",
      peso: "69kg"
  },
  {
      titulo: "Carlos Sainz",
      descricao: "O espanhol Carlos Sainz Jr. é conhecido por sua consistência e habilidade em ultrapassagens. Com uma longa trajetória na Fórmula 1, ele tem se destacado como um dos pilotos mais completos da atualidade. Sua parceria com Charles Leclerc na Ferrari tem proporcionado grandes momentos para os fãs da Scuderia.",
      link: "https://pt.wikipedia.org/wiki/Carlos_Sainz_Jr.",
      equipe: "Ferrari",
      pais: "Espanha",
      status: "Ativo",
      tags: ["consistência", "habilidade em ultrapassagens", "experiente"],
      idade: 29,
      altura: "1,78m",
      peso: "66kg"
  },
  {
      titulo: "Lewis Hamilton",
      descricao: "O britânico Lewis Hamilton é considerado por muitos o maior piloto de Fórmula 1 de todos os tempos. Com sete títulos mundiais, ele revolucionou o esporte com sua velocidade e habilidade. Sua luta contra o racismo e sua defesa por causas sociais o tornaram um ícone mundial.",
      link: "https://pt.wikipedia.org/wiki/Lewis_Hamilton",
      equipe: "Mercedes",
      pais: "Reino Unido",
      status: "Ativo",
      tags: ["sete títulos mundiais", "ativismo social", "lenda"],
      idade: 39,
      altura: "1,74m",
      peso: "73kg"
  },
  {
      titulo: "Max Verstappen",
      descricao: "O holandês Max Verstappen é conhecido por seu estilo de pilotagem agressivo e habilidade em ultrapassagens. Desde sua estreia na Fórmula 1, ele tem mostrado um talento excepcional e já conquistou três títulos mundiais. Sua rivalidade com Lewis Hamilton é uma das maiores da história do esporte.",
      link: "https://pt.wikipedia.org/wiki/Max_Verstappen",
      equipe: "Red Bull Racing",
      pais: "Países Baixos",
      status: "Ativo",
      tags: ["pilotagem agressiva", "rivalidade", "tricampeão"],
      idade: 26,
      altura: "1,81m",
      peso: "72kg"
  },
  {
      titulo: "Ayrton Senna",
      descricao: "O brasileiro Ayrton Senna é considerado um dos maiores ídolos do esporte mundial. Sua habilidade e paixão pelas corridas o tornaram um ícone da Fórmula 1. Com três títulos mundiais, ele deixou um legado que inspira gerações de pilotos.",
      link: "https://pt.wikipedia.org/wiki/Ayrton_Senna",
      equipe: "McLaren",
      pais: "Brasil",
      status: "Falecido",
      tags: ["lenda", "três títulos mundiais", "ídolo"],
      idade: "1960-1994",
      altura: "1,75m",
      peso: "70kg"
  },
  {
      titulo: "Michael Schumacher",
      descricao: "O alemão Michael Schumacher é considerado um dos maiores pilotos de todos os tempos. Com sete títulos mundiais, ele dominou a Fórmula 1 por anos, conquistando recordes que levaram muito tempo para serem quebrados.",
      link: "https://pt.wikipedia.org/wiki/Michael_Schumacher",
      equipe: "Ferrari",
      pais: "Alemanha",
      status: "Aposentado",
      tags: ["sete títulos mundiais", "dominante", "recordista"],
      idade: 55,
      altura: "1,74m",
      peso: "74kg"
  },
  {
      titulo: "Fernando Alonso",
      descricao: "O espanhol Fernando Alonso é conhecido por sua habilidade e versatilidade. Com dois títulos mundiais, ele já pilotou por diversas equipes e sempre mostrou um grande talento.",
      link: "https://pt.wikipedia.org/wiki/Fernando_Alonso",
      equipe: "Aston Martin",
      pais: "Espanha",
      status: "Ativo",
      tags: ["versátil", "dois títulos mundiais", "resiliente"],
      idade: 42,
      altura: "1,71m",
      peso: "68kg"
  },
  {
      titulo: "Niki Lauda",
      descricao: "O austríaco Niki Lauda é considerado uma lenda da Fórmula 1. Com três títulos mundiais, ele marcou época com sua determinação e habilidade. Sua vida e carreira foram retratadas no filme 'Rush'.",
      link: "https://pt.wikipedia.org/wiki/Niki_Lauda",
      equipe: "Ferrari",
      pais: "Áustria",
      status: "Falecido",
      tags: ["três títulos mundiais", "determinação", "resiliência"],
      idade: "1949-2019",
      altura: "1,71m",
      peso: "69kg"
  },
  {
      titulo: "Alain Prost",
      descricao: "O francês Alain Prost é considerado um dos maiores pilotos de todos os tempos. Com quatro títulos mundiais, ele teve uma grande rivalidade com Ayrton Senna.",
      link: "https://pt.wikipedia.org/wiki/Alain_Prost",
      equipe: "McLaren",
      pais: "França",
      status: "Ativo",
      tags: ["quatro títulos mundiais", "rivalidade", "estrategista"],
      idade: 69,
      altura: "1,67m",
      peso: "63kg"
  },
  {
      titulo: "Jackie Stewart",
      descricao: "O escocês Jackie Stewart é considerado um dos pioneiros da segurança na Fórmula 1. Com três títulos mundiais, ele ajudou a transformar o esporte.",
      link: "https://pt.wikipedia.org/wiki/Jackie_Stewart",
      equipe: "Tyrrell",
      pais: "Reino Unido",
      status: "Aposentado",
      tags: ["três títulos mundiais", "pioneiro da segurança", "lenda"],
      idade: 84,
      altura: "1,63m",
      peso: "64kg"
  },
  {
      titulo: "Jim Clark",
      descricao: "O escocês Jim Clark é considerado um dos maiores talentos naturais da história da Fórmula 1. Com dois títulos mundiais, ele morreu tragicamente em um acidente.",
      link: "https://pt.wikipedia.org/wiki/Jim_Clark",
      equipe: "Lotus",
      pais: "Reino Unido",
      status: "Falecido",
      tags: ["dois títulos mundiais", "talento natural", "trágico"],
      idade: "1936-1968",
      altura: "1,73m",
      peso: "68kg"
  },
  {
      titulo: "Juan Manuel Fangio",
      descricao: "O argentino Juan Manuel Fangio é considerado um dos maiores pilotos da história da Fórmula 1. Com cinco títulos mundiais, ele dominou a década de 1950.",
      link: "https://pt.wikipedia.org/wiki/Juan_Manuel_Fangio",
      equipe: "Ferrari",
      pais: "Argentina",
      status: "Falecido",
      tags: ["cinco títulos mundiais", "dominante", "pioneiro"],
      idade: "1911-1995",
      altura: "1,75m",
      peso: "70kg"
  }
];