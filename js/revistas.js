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
    titulo: "Lagarto - História e Cultura",
    area: "historia",
    areaNome: "História",
    volume: "Especial 01",
    arquivo: "pdfs/Lagarto_Hitória_e_Cultura_em_Quadrinhos.pdf",
    descricao: "Lagarto: História e Cultura em Quadrinho: Embarque em uma viagem pelas histórias, tradições e memórias de Lagarto! Nesta edição especial, os quadrinhos ganham vida para apresentar o patrimônio, a cultura popular, os personagens históricos, a literatura, as festas, os sabores e os lugares que fazem de Lagarto uma cidade tão especial. Uma experiência educativa e divertida para conhecer, valorizar e preservar as nossas raízes. Conheça Lagarto. Conheça nossa história. Valorize nossa cultura. 👇 Clique abaixo e leia a revista completa.",
    icone: "",
    cor1: "#1266c0",
    cor2: "#092d69",
    capa: "assets/LagaartoCol1.png"
  },
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
    descricao: "Embarque em mais uma jornada imperdível da Coleção História da Matemática e da Ciência! Nesta edição em mangá, viaje até a Grécia Antiga para conhecer a mente brilhante de Arquimedes de Siracusa, um dos maiores matemáticos, físicos e inventores de todos os tempos.",
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
    descricao: "Acompanhe a trajetória do pai da ciência moderna em mais um volume imperdível da Coleção História da Matemática e da Ciência! Nesta envolvente edição em mangá, viaje até a Itália do Renascimento para descobrir como Galileu Galilei desafiou as visões tradicionais de sua época e mudou para sempre a nossa relação com o cosmos.",
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
    descricao: "Mergulhe no universo da física moderna em mais um volume imperdível da Coleção História da Matemática e da Ciência! Nesta emocionante edição em mangá, acompanhe a vida e o pensamento rebelde de Albert Einstein, o gênio que desafiou os conceitos da física clássica e revolucionou para sempre nossas noções sobre o tempo, a luz e a gravidade.",
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
    descricao: "Viaje no tempo até a antiga Alexandria para conhecer a vida e o legado de Euclides, o mestre imortalizado como o Pai da Geometria! Em mais um volume imperdível da Coleção História da Matemática e da Ciência, descubra em formato mangá como o raciocínio lógico e as formas fundamentais moldaram a arquitetura, a arte e a ciência de toda a humanidade.",
    icone: "◇",
    cor1: "#1477bc",
    cor2: "#0c3d74",
    capa: "assets/Euclides.png"
  }
];
