/*
  COMO ADICIONAR UMA NOVA REVISTA
  --------------------------------
  1. Coloque o arquivo PDF dentro da pasta: pdfs/
     Exemplo: pdfs/newton-volume-2.pdf

  2. Adicione um novo bloco dentro do array REVISTAS abaixo.

  3. Se quiser usar uma capa personalizada, coloque a imagem em assets/capas/
     e informe o caminho no campo "capa". Se deixar capa: "", o site cria
     automaticamente uma capa colorida com o ícone da área.

  IMPORTANTE: o botão "Ler revista" abre o PDF em OUTRA GUIA automaticamente.
*/

const REVISTAS = [
  {
    titulo: "Pitágoras - A aventura dos números",
    area: "matematica",
    areaNome: "Matemática",
    volume: "Volume 1",
    arquivo: "pdfs/RavistaPitagoras.pdf",
    descricao: "Mergulhe na Coleção História da Matemática, uma série de revistas em mangá que transforma o aprendizado em uma jornada visual, histórica e divertida. Na Edição 1, conheça a fascinante trajetória de Pitágoras: O jovem sábio em busca do conhecimento.",
    icone: "",
    cor1: "#1266c0",
    cor2: "#092d69",
    capa: "assets/Pitagoras.png"
  },
  {
    titulo: "Isaac Newton - Forças que mudaram o mundo",
    area: "fisica",
    areaNome: "Física",
    volume: "Volume 2 - Em breve",
    arquivo: "",
    descricao: "Dando continuidade à incrível Coleção História da Matemática e da Ciência, prepare-se para viajar no tempo e explorar a mente de um dos maiores gênios que a humanidade já conheceu. Nesta edição especial, acompanhe a trajetória de Isaac Newton, o cientista que revolucionou a nossa compreensão do cosmos.",
    icone: "⚛",
    cor1: "#58b73b",
    cor2: "#236b2f",
    capa: "assets/IsaacNewton.png"
  },
  {
    titulo: "Arquimedes - Eureka!",
    area: "matematica",
    areaNome: "Matemática",
    volume: "Volume 3 - Em breve",
    arquivo: "",
    descricao: "Descobertas, invenções e problemas que atravessaram séculos em uma narrativa em quadrinhos.",
    icone: "△",
    cor1: "#1182bf",
    cor2: "#153b86",
    capa: "assets/Arquimedes.png"
  },
  {
    titulo: "Galileu Galilei - Olhos para o Universo",
    area: "fisica",
    areaNome: "Física",
    volume: "Volume 4 - Em breve",
    arquivo: "",
    descricao: "Ciência, observação e coragem em uma história sobre uma nova forma de olhar para o céu.",
    icone: "✦",
    cor1: "#6542a4",
    cor2: "#271d63",
    capa: "assets/GalileuGalilei.png"
  },
  {
    titulo: "Albert Einstein - Ideias em movimento",
    area: "fisica",
    areaNome: "Física",
    volume: "Volume 5 - Em breve",
    arquivo: "",
    descricao: "Uma introdução visual ao cientista, ao contexto histórico e às ideias que marcaram a Física moderna.",
    icone: "E=mc²",
    cor1: "#f1a800",
    cor2: "#f16400",
    capa: "assets/AlbertEinsten.png"
  },
  {
    titulo: "Euclides - O mundo da Geometria",
    area: "matematica",
    areaNome: "Matemática",
    volume: "Volume 6 - Em breve",
    arquivo: "",
    descricao: "Formas, demonstrações e raciocínio lógico apresentados por meio de uma aventura em quadrinhos.",
    icone: "◇",
    cor1: "#1477bc",
    cor2: "#0c3d74",
    capa: "assets/Euclides.png"
  }
];
