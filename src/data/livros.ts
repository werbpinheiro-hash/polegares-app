export interface Livro {
  titulo: string;
  autor: string;
  temas: string;
  resumo: string;
  problema: string;
}

export function normalizar(texto: string): string {
  return String(texto)
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const livros: Livro[] = [
  {
    titulo: '100 Minutos para Entender Nietzsche',
    autor: 'Coleção Astral Cultural',
    temas: 'Nietzsche, moral, valores, verdade, niilismo',
    resumo:
      'Introdução ao pensamento de Nietzsche e sua crítica aos valores tradicionais.',
    problema: 'Como podemos questionar os valores que orientam nossa vida?',
  },
  {
    titulo: '100 Minutos para Entender Aristóteles',
    autor: 'Coleção Astral Cultural',
    temas: 'ética, política, virtude, felicidade, lógica',
    resumo:
      'Apresentação das principais ideias de Aristóteles sobre conhecimento, ética e vida coletiva.',
    problema: 'O que significa viver bem?',
  },
  {
    titulo: '100 Minutos para Entender Platão',
    autor: 'Coleção Astral Cultural',
    temas: 'Platão, verdade, conhecimento, justiça, educação',
    resumo:
      'Introdução às ideias de Platão sobre conhecimento, realidade e justiça.',
    problema: 'Aquilo que percebemos corresponde à realidade?',
  },
  {
    titulo: '100 Minutos para Entender Jung',
    autor: 'Coleção Astral Cultural',
    temas: 'Jung, psicologia, inconsciente, identidade',
    resumo:
      'Introdução às ideias de Carl Gustav Jung sobre a psique e o inconsciente.',
    problema: 'Conhecemos completamente nossa própria identidade?',
  },
  {
    titulo: '100 Minutos para Entender Freud',
    autor: 'Coleção Astral Cultural',
    temas: 'Freud, inconsciente, desejo, comportamento',
    resumo:
      'Introdução ao pensamento de Freud e à importância do inconsciente.',
    problema: 'Somos plenamente conscientes das razões de nossas escolhas?',
  },
  {
    titulo: '100 Minutos para Entender Lacan',
    autor: 'Coleção Astral Cultural',
    temas: 'Lacan, linguagem, desejo, sujeito, psicanálise',
    resumo:
      'Apresentação introdutória de conceitos associados à psicanálise lacaniana.',
    problema: 'Como a linguagem participa da formação de quem somos?',
  },
  {
    titulo: 'A Ideologia Alemã',
    autor: 'Karl Marx e Friedrich Engels',
    temas: 'ideologia, sociedade, trabalho, história, política',
    resumo:
      'Investiga as relações entre condições materiais, organização social e produção das ideias.',
    problema: 'Como a sociedade influencia nossa maneira de pensar?',
  },
  {
    titulo: 'O Ente e a Essência',
    autor: 'Tomás de Aquino',
    temas: 'metafísica, existência, essência, filosofia medieval',
    resumo:
      'Examina conceitos fundamentais da metafísica, especialmente ente e essência.',
    problema: 'O que significa dizer que alguma coisa existe?',
  },
  {
    titulo: 'Discurso sobre o Método',
    autor: 'René Descartes',
    temas: 'razão, dúvida, ciência, método, conhecimento',
    resumo:
      'Apresenta reflexões sobre o método e a busca de conhecimentos seguros.',
    problema: 'Como distinguir uma opinião de um conhecimento fundamentado?',
  },
  {
    titulo: 'A Desobediência Civil',
    autor: 'Henry David Thoreau',
    temas: 'liberdade, justiça, estado, política, resistência',
    resumo:
      'Discute a consciência individual e a resistência diante de leis injustas.',
    problema: 'É correto desobedecer a uma lei considerada injusta?',
  },
  {
    titulo: 'Carta sobre a Tolerância',
    autor: 'John Locke',
    temas: 'tolerância, religião, liberdade, política, direitos',
    resumo:
      'Defende a tolerância religiosa e discute os limites da autoridade política.',
    problema: 'Como conviver com pessoas que possuem crenças diferentes?',
  },
  {
    titulo: 'Sobre Como Lidar Consigo Mesmo',
    autor: 'Arthur Schopenhauer',
    temas: 'vida, sofrimento, autoconhecimento, felicidade',
    resumo:
      'Reflexões filosóficas sobre a relação do indivíduo consigo mesmo.',
    problema: 'O autoconhecimento pode nos ajudar a viver melhor?',
  },
  {
    titulo: 'Sobre a Brevidade da Vida',
    autor: 'Sêneca',
    temas: 'tempo, vida, morte, felicidade, estoicismo',
    resumo:
      'Reflete sobre a maneira como utilizamos o tempo de nossa existência.',
    problema: 'A vida é curta ou desperdiçamos o tempo disponível?',
  },
  {
    titulo: 'O Mito da Caverna',
    autor: 'Platão',
    temas: 'verdade, conhecimento, aparência, educação, realidade',
    resumo:
      'Alegoria que permite refletir sobre aparência, ignorância e conhecimento.',
    problema: 'Como reconhecer que nossas certezas podem estar equivocadas?',
  },
  {
    titulo: 'Mitos Gregos',
    autor: 'Nathaniel Hawthorne',
    temas: 'mitologia, cultura, deuses, narrativa, tradição',
    resumo:
      'Reconta narrativas da mitologia grega, permitindo investigar seus significados culturais.',
    problema:
      'O que os mitos revelam sobre a maneira humana de compreender o mundo?',
  },
  {
    titulo: 'Édipo Rei',
    autor: 'Sófocles',
    temas: 'destino, liberdade, verdade, tragédia, responsabilidade',
    resumo:
      'Tragédia grega que aborda destino, conhecimento e responsabilidade humana.',
    problema:
      'Somos responsáveis por consequências que não conseguimos prever?',
  },
  {
    titulo: 'Filosofia Bantu',
    autor: 'Placide Tempels',
    temas: 'filosofia africana, cultura, existência, ontologia',
    resumo:
      'Apresenta uma interpretação da ontologia bantu, cuja abordagem também pode ser analisada criticamente.',
    problema:
      'Quem possui autoridade para interpretar o pensamento de outra cultura?',
  },
  {
    titulo: 'Platão e a Teoria das Ideias',
    autor: 'A confirmar no exemplar',
    temas: 'Platão, ideias, realidade, conhecimento, metafísica',
    resumo: 'Estudo introdutório sobre a teoria das Ideias de Platão.',
    problema: 'Existe uma realidade que ultrapassa aquilo que percebemos?',
  },
  {
    titulo: 'Breve História da Ciência Moderna',
    autor: 'A confirmar no exemplar',
    temas: 'ciência, história, conhecimento, método, modernidade',
    resumo:
      'Estudo histórico sobre a formação e o desenvolvimento da ciência moderna.',
    problema:
      'Como os critérios para produzir conhecimento científico mudaram ao longo da história?',
  },
  {
    titulo: 'O Príncipe',
    autor: 'Nicolau Maquiavel',
    temas: 'poder, política, estado, governo, autoridade',
    resumo:
      'Analisa a conquista, a manutenção e os desafios do poder político.',
    problema: 'Quais limites éticos devem orientar o exercício do poder?',
  },
  {
    titulo: 'A Divina Comédia - Paraíso',
    autor: 'Dante Alighieri',
    temas: 'religião, justiça, virtude, transcendência, literatura',
    resumo: 'Parte final da jornada poética de Dante, dedicada ao Paraíso.',
    problema:
      'Como diferentes concepções de justiça se relacionam com a ideia de uma vida boa?',
  },
  {
    titulo: 'A Divina Comédia - Purgatório',
    autor: 'Dante Alighieri',
    temas: 'moral, transformação, liberdade, responsabilidade, literatura',
    resumo:
      'Parte da jornada de Dante que explora transformação moral e purificação.',
    problema:
      'É possível transformar nossa maneira de agir e de compreender o bem?',
  },
  {
    titulo: 'Filosofia',
    autor: 'Gabriel Chalita',
    temas: 'filosofia, ética, pensamento, conhecimento, sociedade',
    resumo:
      'Obra introdutória voltada ao estudo de questões e temas filosóficos.',
    problema: 'Por que precisamos filosofar sobre nossa realidade?',
  },
];
