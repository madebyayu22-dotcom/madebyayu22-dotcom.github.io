/* =========================================================
   Made by Ayu — scripts do site
   (filtros do portfólio, blog, formulário, menu e animações)
   ========================================================= */

/* ---------- Pasta base das imagens do portfólio ---------- */
const PASTA = 'assets/images/portfolio';

/* ---------- Categorias (abas do portfólio) ---------- */
const categorias = [
  { id: 'todos',      nome: 'Tudo',                      icone: 'shapes',       cor: 'bg-white',
    nota: 'Uma mistura de tudo que eu amo criar: identidades, logotipos, carrosséis e thumbnails ✦' },
  { id: 'clube',      nome: 'Clube "O Que Elas Leem"',   icone: 'book-open',    cor: 'bg-creme-300',
    nota: 'Carrosséis que eu criei para o @clube.oqueelasleem — arraste cada post para o lado e role para ver mais!' },
  { id: 'teacher',    nome: 'Teacher Jess',              icone: 'languages',    cor: 'bg-turquesa-200',
    nota: 'Conteúdo para a @teacherjessmorais: inglês com cultura pop e posts para datas comemorativas. Arraste cada post e role para ver mais!' },
  { id: 'tabi',       nome: 'Tabi Nakazato',             icone: 'droplets',     cor: 'bg-pink-200',
    nota: 'Identidade visual completa e thumbnails para o canal de skincare da Tabi Nakazato.' },
  { id: 'jana',       nome: 'JANA Vet',                  icone: 'paw-print',    cor: 'bg-jana',
    nota: 'Identidade visual completa da JANA, veterinária em domicílio: logo, manual da marca e stickers dos pacientes ♡' },
  { id: 'ayu',        nome: '@made.by._ayu',             icone: 'instagram',    cor: 'bg-creme-300',
    nota: 'Meu próprio Instagram: posts em que eu conto quem sou e mostro como posso ajudar a sua marca ✦' },
  { id: 'identidade', nome: 'Identidade Visual & Logos', icone: 'pen-tool',     cor: 'bg-turquesa-400',
    nota: 'Logotipos que eu criei para pequenos negócios — e para a minha própria marca ✦' },
];

/* ---------- Projetos ----------
   Cada projeto puxa a imagem da pasta da sua categoria:
     assets/images/portfolio/<pasta>/<arquivo>
   Basta salvar sua arte com o MESMO nome indicado em "img".
   Se o arquivo ainda não existir, o card mostra uma ilustração reserva.
   Vídeos: "link" é opcional (URL do YouTube/Instagram).               */
const projetos = [
  // 🎬 Vídeos: a aba volta quando houver vídeos reais (copie o formato dos outros projetos com cat: 'video').

  // 📚 Clube do Livro → carrosséis do Instagram
  //    Cada carrossel tem sua subpasta: assets/images/portfolio/clube-do-livro/<carrossel>/01.jpg, 02.jpg...
  //    Para adicionar um carrossel novo: crie a subpasta, salve os slides numerados
  //    e copie um destes blocos mudando "pasta", "total" e os textos.
  { cat: 'clube', carrossel: true, pasta: 'frases-leitura',
    bastidor: 'Quis que cada frase parecesse um recorte guardado no caderno: prancheta, papel pautado e estrelas bordadas no vinho que virou a cor-assinatura do clube.', total: 5,
    titulo: '5 frases sobre leitura que mudaram a química do meu cérebro',
    desc: 'Carrossel de frases com estética de colagem: prancheta, papel pautado, recortes em P&B e estrelas bordadas em vinho.',
    tags: ['Carrossel', 'Colagem', 'Frases'], icone: 'quote', fundo: 'bg-creme-300' },
  { cat: 'clube', carrossel: true, pasta: 'livro-setembro',
    bastidor: 'A capa laranja brilha sobre o vinho amassado. Os balões escritos à mão e o gatinho deixam o anúncio curioso — e o meme no fim puxa os comentários.', total: 4,
    titulo: 'Livro de setembro: Matéria Escura',
    desc: 'Anúncio da leitura do mês com capa, sinopse e perguntas para o debate — e um meme no final para puxar os comentários.',
    tags: ['Leitura do mês', 'Sinopse', 'Engajamento'], icone: 'book-open', fundo: 'bg-turquesa-100' },
  { cat: 'clube', carrossel: true, pasta: 'leitura-agosto', total: 4,
    bastidor: 'Para um romance que atravessa 53 anos, montei uma colagem de cartas antigas, pena, selo de lacre e camélias brancas. O “53 anos, 7 meses e 11 dias” em destaque é o coração do post — e a pergunta final chama a leitora para comentar.',
    titulo: 'Leitura de agosto: O Amor nos Tempos do Cólera',
    desc: 'Anúncio da leitura do mês com capa, sinopse, contexto da obra e uma pergunta para abrir o debate nos comentários.',
    tags: ['Leitura do mês', 'Sinopse', 'Colagem'], icone: 'book-heart', fundo: 'bg-creme-300' },
  { cat: 'clube', carrossel: true, pasta: 'sinais-clube',
    bastidor: 'Cada slide é um “sinal” com um meme que a leitora reconhece na hora. A risada vem antes do convite: o último slide leva direto para as inscrições.', total: 5,
    titulo: 'Sinais de que você precisa sair da sua bolha literária',
    desc: 'Série de identificação com humor e memes, fechando com chamada para as inscrições do clube.',
    tags: ['Humor', 'Identificação', 'CTA'], icone: 'globe', fundo: 'bg-coral/70' },
  { cat: 'clube', carrossel: true, pasta: 'coisas-chique',
    bastidor: 'Adaptei a trend com pinturas clássicas e letras amarelas suaves, para o clube parecer elegante e atemporal sem perder o humor.', total: 5,
    titulo: 'Coisas que eu acho chique — versão clube do livro',
    desc: 'A trend do momento adaptada ao universo literário, com pinturas clássicas e tipografia amarela delicada.',
    tags: ['Trend', 'Arte clássica', 'Carrossel'], icone: 'sparkles', fundo: 'bg-creme-200' },

  // 🗣️ Teacher Jess → carrosséis em assets/images/portfolio/teacher-jess/<carrossel>/01.jpg…
  { cat: 'teacher', carrossel: true, pasta: 'olivia-rodrigo', total: 6,
    bastidor: 'Transformei a capa num player de música, para a aluna sentir que está dando play numa aula. Cada slide desmonta um verso da Olivia Rodrigo (poison, bloodstream, suck ’em out, stitch me up) e o último devolve a pergunta para os comentários.',
    titulo: 'Song & Vocabulary: o que a Olivia Rodrigo quis dizer?',
    desc: 'Inglês com cultura pop: vocabulário, phrasal verbs e sentido figurado a partir de uma música atual.',
    tags: ['Cultura pop', 'Vocabulário', 'Phrasal verbs'], icone: 'music', fundo: 'bg-creme-100' },
  { cat: 'teacher', carrossel: true, pasta: 'dia-dos-professores', total: 7,
    bastidor: 'Para o Dia dos Professores, usei as fotos da viagem da Jess pelo Peru e títulos em serifa fina sobre faixas translúcidas. A capa imita o menu “recortar, copiar, colar” para provocar: são opiniões que muita gente vai querer copiar.',
    titulo: 'Dia dos Professores: opiniões impopulares de uma professora de idiomas',
    desc: 'Post de data comemorativa com posicionamento forte: cada slide é uma opinião sobre como aprender idiomas de verdade.',
    tags: ['Data comemorativa', 'Posicionamento', 'Fotografia'], icone: 'graduation-cap', fundo: 'bg-turquesa-100' },

  // 🧴 Tabi Nakazato → thumbnails em assets/images/portfolio/tabi-skin-care/thumbnails/01.jpg…
  { cat: 'tabi', carrossel: true, prancha: true, aspecto: 'aspect-video', pasta: 'apresentacao', total: 14,
    cliente: 'Tabi Nakazato', rotuloCard: 'Apresentação de marca · 14 páginas',
    bastidor: 'Montei a identidade “Skincare da Vida Real” do zero: conceito, valores, objetivos, o monograma TN em versões primária, secundária e sobre fundos diferentes, paleta rosa e roxo, tipografia e um moodboard de posts. É o guia que deixa todo o conteúdo dela coerente.',
    titulo: 'Identidade visual: Skincare da Vida Real',
    desc: 'Apresentação de marca com logotipo, paleta, tipografia e direção de conteúdo.',
    tags: ['Identidade visual', 'Logotipo', 'Paleta'], icone: 'palette', fundo: 'bg-pink-200' },
  { cat: 'tabi', youtube: true, img: `${PASTA}/tabi-skin-care/thumbnails/01.jpg`,
    bastidor: 'Recortei cada produto japonês e espalhei em volta do rosto da Tabi, como uma vitrine. O título em duas faixas rosa ocupa a metade de baixo para ser lido mesmo na miniatura do celular.',
    titulo: 'Skincare direto do Japão',
    desc: 'Thumbnail de recebidos com produtos recortados em volta da apresentadora e título em faixas rosa.',
    tags: ['Thumbnail', 'Recorte de produtos', 'Tipografia'], icone: 'droplets', fundo: 'bg-pink-200' },
  { cat: 'tabi', youtube: true, img: `${PASTA}/tabi-skin-care/thumbnails/02.jpg`,
    bastidor: 'Comparação pede simetria: um produto de cada lado com contorno brilhante, a Tabi no centro e o “X” no título para dizer em um segundo que é um duelo.',
    titulo: 'Retinol X Retinal',
    desc: 'Thumbnail de comparação com composição simétrica e título forte com sombra lilás.',
    tags: ['Thumbnail', 'Comparação', 'Composição'], icone: 'sparkles', fundo: 'bg-pink-100' },
  { cat: 'tabi', youtube: true, img: `${PASTA}/tabi-skin-care/thumbnails/03.jpg`,
    bastidor: 'O antes e depois em círculos, com setas desenhadas à mão, mostra o resultado antes de qualquer clique. As estrelinhas amarelas deixam o tema de pele leve e acolhedor.',
    titulo: 'Rotina de Skincare: antes e depois',
    desc: 'Thumbnail de resultado com recortes circulares de antes e depois e anotações à mão.',
    tags: ['Thumbnail', 'Antes e depois', 'Letra de mão'], icone: 'flower-2', fundo: 'bg-pink-200' },

  // 🐾 JANA Vet → assets/images/portfolio/jana-vet/<pasta>/01.jpg…
  { cat: 'jana', carrossel: true, prancha: true, aspecto: 'aspect-video', pasta: 'manual', total: 16,
    cliente: 'JANA · Veterinária em domicílio', rotuloCard: 'Manual de identidade · 16 páginas',
    bastidor: 'A JANA nasceu de uma ideia simples: o melhor lugar para cuidar de um bicho é a casa dele. Montei o manual inteiro em volta dessa promessa: posicionamento, missão, público, tom de voz, paleta verde e azul, as três fontes e como tudo aparece no feed.',
    titulo: 'Manual de identidade visual',
    desc: 'Ideia da marca, posicionamento, tom de voz, cores, tipografia, versões do logo e aplicação no feed.',
    tags: ['Identidade visual', 'Manual da marca', 'Posicionamento'], icone: 'book-open', fundo: 'bg-jana' },
  { cat: 'jana', carrossel: true, prancha: true, aspecto: 'aspect-video', pasta: 'logos', total: 6,
    cliente: 'Logo JANA e variações', rotuloCard: 'Logotipo · 6 versões',
    bastidor: 'Cada detalhe conta uma parte da história: o telhado é o lar, o coração com brilhos é o afeto, a patinha no “A” são os pacientes de quatro patas e o gatinho lembra os gatos, que são os que mais sofrem com o transporte. O “A” com o gatinho virou o ícone para avatar e favicon.',
    titulo: 'Logotipo, versões e ícone',
    desc: 'Logo principal, versões em creme e azul névoa, marca sem slogan e o ícone do gatinho.',
    tags: ['Logotipo', 'Ícone', 'Variações de cor'], icone: 'heart', fundo: 'bg-jana' },
  { cat: 'jana', carrossel: true, prancha: true, aspecto: 'aspect-square', pasta: 'stickers', total: 7,
    cliente: 'Stickers dos pacientes', rotuloCard: 'Stickers · 6 personagens',
    bastidor: 'Criei seis bichinhos com os nomes mais brasileiros que existem: Caramelo, Fiapo de Manga, Frajola, Laranjinha, Pretinho e Salsicha. Os aros alternam o verde oliva e o azul ardósia da marca, e o @ da JANA em volta faz cada sticker virar divulgação na geladeira do tutor.',
    titulo: 'Stickers: Caramelo, Frajola & cia.',
    desc: 'Cartela de adesivos redondos com cães e gatos ilustrados nas cores da marca.',
    tags: ['Stickers', 'Ilustração', 'Brinde'], icone: 'paw-print', fundo: 'bg-jana' },

  // ✦ Meu Instagram → assets/images/portfolio/made-by-ayu/<carrossel>/01.jpg…
  { cat: 'ayu', carrossel: true, pasta: 'por-que-designer', total: 4,
    bastidor: 'Usei a Tiana, que trabalha sem parar no filme, para conversar com quem se divide entre o próprio negócio e a produção de conteúdo. O post mostra o que eu faço, o plano de ação em 4 passos e termina com o convite para o direct.',
    titulo: 'Ei, você tem que trabalhar e ainda produzir conteúdo?',
    desc: 'Carrossel de venda dos meus serviços, com cultura pop, lista do que eu faço e plano de ação.',
    tags: ['Venda de serviço', 'Cultura pop', 'Chamada para o direct'], icone: 'star', fundo: 'bg-turquesa-200' },
  { cat: 'ayu', carrossel: true, pasta: 'transformar-identidade', total: 1,
    bastidor: 'Um esqueleto acenando sobre papel amassado chama atenção no feed sem precisar de foto minha. A chamada pede uma palavra-chave no direct, “MARCA”, que deixa fácil começar a conversa.',
    titulo: 'Quer transformar sua identidade em algo memorável?',
    desc: 'Post único de chamada para o direct, com humor e palavra-chave.',
    tags: ['Chamada para o direct', 'Humor', 'Papel amassado'], icone: 'sparkles', fundo: 'bg-creme-200' },
  { cat: 'ayu', carrossel: true, pasta: 'minha-historia', total: 5,
    bastidor: 'Contei minha história com fotos reais e etiquetas brancas no estilo dos stories: da criança arteira à página de 100 mil curtidas e ao primeiro cliente aos 14 anos. A capa imita o botão “arrasta para o lado” para puxar o próximo slide.',
    titulo: 'Como surgiu a ideia de ser designer gráfico',
    desc: 'Storytelling pessoal com fotos de infância, conquistas e o meu foco hoje: marcas de mulheres empreendedoras.',
    tags: ['Storytelling', 'Fotos pessoais', 'Estilo stories'], icone: 'heart', fundo: 'bg-creme-200' },
  { cat: 'ayu', carrossel: true, pasta: 'prazer-ayu', total: 4,
    bastidor: 'Uma apresentação montada como scrapbook: papel amassado, selo postal, crachá de “funcionária nova” e setinhas à mão. Cada slide mostra um pedaço da minha personalidade, e o último abre a conversa com quem chegou agora.',
    titulo: 'Prazer, Ayuri AKA Ayu',
    desc: 'Post de apresentação com colagem, crachá, setas desenhadas e curiosidades sobre mim.',
    tags: ['Apresentação', 'Scrapbook', 'Personalidade'], icone: 'sparkles', fundo: 'bg-turquesa-100' },

  // ✏️ Identidade Visual & Logos → assets/images/portfolio/logotipos/<marca>/01.jpg…
  { cat: 'identidade', carrossel: true, prancha: true, aspecto: 'aspect-square', pasta: 'made-by-ayu', total: 3,
    cliente: 'Made by Ayu', rotuloCard: 'Logotipo · minha marca',
    bastidor: 'Minha própria marca: lettering retrô em script gordinho com sombra deslocada, como um adesivo antigo. Testei a logo no selo amarelo, no fundo creme e no preto para garantir leitura em qualquer lugar.',
    titulo: 'Made by Ayu', desc: 'Logotipo em lettering retrô com três variações de fundo.',
    tags: ['Lettering', 'Variações de fundo', 'Minha marca'], icone: 'star', fundo: 'bg-creme-300' },
  { cat: 'identidade', carrossel: true, prancha: true, aspecto: 'aspect-square', pasta: 'guia-no-japao', total: 1,
    cliente: 'Guia no Japão', rotuloCard: 'Logotipo · turismo',
    bastidor: 'O “G” vira a inicial e, com o pingo, também forma o “i” de guia. O avião cortando a letra diz “viagem” sem precisar de palavra, e o vinho dá um ar sério e confiável.',
    titulo: 'Guia no Japão', desc: 'Monograma com ícone de avião para um guia de viagens no Japão.',
    tags: ['Monograma', 'Ícone', 'Turismo'], icone: 'plane', fundo: 'bg-coral/70' },
  { cat: 'identidade', carrossel: true, prancha: true, aspecto: 'aspect-square', pasta: 'neide-barbosa', total: 1,
    cliente: 'Neide Barbosa', rotuloCard: 'Logotipo · beleza',
    bastidor: 'Para uma designer de sobrancelhas, escolhi um monograma NB em serifa alta e fina, que lembra o traço de uma sobrancelha bem desenhada, sobre tons de pele terrosos.',
    titulo: 'Neide Barbosa', desc: 'Monograma elegante para designer de sobrancelhas.',
    tags: ['Monograma', 'Serifa fina', 'Beleza'], icone: 'gem', fundo: 'bg-creme-200' },
  { cat: 'identidade', carrossel: true, prancha: true, aspecto: 'aspect-square', pasta: 'yu-fitness', total: 1,
    cliente: 'Yu Fitness', rotuloCard: 'Logotipo · fitness',
    bastidor: 'Um selo serrilhado com o nome girando em volta, o “yu” com contorno e sombra deslocada e um haltere em rosa e azul: fitness com cara leve e divertida.',
    titulo: 'Yu Fitness', desc: 'Selo com haltere e tipografia contornada para marca fitness.',
    tags: ['Selo', 'Tipografia', 'Fitness'], icone: 'zap', fundo: 'bg-pink-200' },
];

/* ---------- Ferramentas (seção "Meu processo") ---------- */
const ferramentas = [
  { nome: 'Canva', icone: 'layout-template', cor: 'bg-turquesa-300', giro: '-rotate-3', forma: 'rounded-[2rem]',
    texto: 'Para design ágil e layouts modernos.', nota: 'templates & agilidade' },
  { nome: 'Photoshop', icone: 'wand-sparkles', cor: 'bg-creme-300', giro: 'rotate-2', forma: 'rounded-full',
    texto: 'Para manipulação de imagem avançada e identidades visuais exclusivas.', nota: 'magia nos detalhes' },
  { nome: 'CapCut', icone: 'film', cor: 'bg-coral', giro: '-rotate-2', forma: 'rounded-2xl',
    texto: 'Para edições de vídeo dinâmicas, cortes precisos e ritmados para as redes sociais.', nota: 'cortes no beat ♪' },
];

/* ---------- Posts do blog (capas de carrossel) ----------
   Opcional: adicione  img: 'assets/images/...'  para usar a capa real.   */
const posts = [
  { titulo: '5 livros escritos por mulheres para ler este ano', resumo: 'Curadoria afetiva com autoras que marcaram o clube.', data: '2026-10-08', tema: 'Leitura', icone: 'book-heart', slides: 7, capa: 'bg-turquesa-500', texto: 'text-tinta', destaque: 'bg-creme-300' },
  { titulo: 'Como escolher a paleta da sua marca', resumo: 'Psicologia das cores aplicada a pequenos negócios.', data: '2026-09-25', tema: 'Design', icone: 'palette', slides: 8, capa: 'bg-creme-300', texto: 'text-tinta', destaque: 'bg-turquesa-300' },
  { titulo: 'Skin care de outono: o que muda?', resumo: 'Ajustes simples na troca de estação.', data: '2026-09-12', tema: 'Autocuidado', icone: 'droplets', slides: 6, capa: 'bg-pink-200', texto: 'text-tinta', destaque: 'bg-white' },
  { titulo: 'Como edito um Reels em 20 minutos', resumo: 'Meu fluxo no CapCut, do corte à legenda animada.', data: '2026-08-30', tema: 'Vídeo', icone: 'film', slides: 9, capa: 'bg-tinta', texto: 'text-creme-100', destaque: 'bg-coral' },
  { titulo: '10 expressões em inglês para soar natural', resumo: 'Frases do cotidiano que o livro não ensina.', data: '2026-08-14', tema: 'Idiomas', icone: 'message-square-quote', slides: 10, capa: 'bg-turquesa-100', texto: 'text-tinta', destaque: 'bg-creme-300' },
  { titulo: 'Bastidores: um logotipo do zero', resumo: 'Do briefing aos esboços até a versão final.', data: '2026-07-29', tema: 'Bastidores', icone: 'pencil-ruler', slides: 8, capa: 'bg-coral', texto: 'text-tinta', destaque: 'bg-white' },
];

const servicos = ['Identidade visual', 'Carrosséis', 'Vídeo YouTube', 'Reels / Shorts', 'Outro'];
const palavrasLetreiro = ['Identidade visual', 'Carrosséis', 'Logotipos', 'Thumbnails', 'Branding', 'Canva', 'Photoshop', 'CapCut', 'Colagens'];

/* ---------- Utilitários ---------- */
const $ = (s) => document.querySelector(s);
const icones = () => window.lucide && lucide.createIcons();
const giros = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-[0.5deg]', '-rotate-[1.5deg]'];
const fitas = ['', 'tq', 'listrada'];
const formatarData = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

/* ---------- Letreiro rolante ---------- */
const itensLetreiro = palavrasLetreiro
  .map(p => `<span>${p}</span><span class="text-turquesa-400">✦</span>`).join('');
$('#letreiroConteudo').innerHTML = itensLetreiro;
$('#letreiroCopia').innerHTML = itensLetreiro;

/* =========================================================
   PORTFÓLIO — filtros por categoria
   ========================================================= */
let categoriaAtiva = 'todos';

function renderFiltros() {
  $('#filtros').innerHTML = categorias.map((c, i) => {
    const ativo = c.id === categoriaAtiva;
    const qtd = c.id === 'todos' ? projetos.length : projetos.filter(p => p.cat === c.id).length;
    return `
      <button role="tab" aria-selected="${ativo}" data-cat="${c.id}"
        class="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border-2 border-tinta px-4 py-2.5 font-display text-sm font-bold transition-all duration-200
        ${ativo
          ? `${c.cor} -translate-y-1 shadow-duro ${i % 2 ? 'rotate-1' : '-rotate-1'}`
          : 'bg-white shadow-duro-sm hover:-translate-y-0.5 hover:bg-creme-100 hover:shadow-duro'}">
        <i data-lucide="${c.icone}" class="h-4 w-4"></i>
        ${c.nome}
        <span class="rounded-md border-2 border-tinta bg-white px-1.5 text-xs leading-4">${qtd}</span>
      </button>`;
  }).join('');
}

function renderNota() {
  const c = categorias.find(c => c.id === categoriaAtiva);
  $('#descCategoria').innerHTML =
    `<span class="fita tq -top-3 right-6 rotate-3 !h-6 !w-16"></span>✎ ${c.nota}`;
}

/* Capa do card: ilustração reserva por baixo + imagem real por cima.
   Se a imagem não existir na pasta, ela some e a ilustração aparece. */
function capaProjeto(p) {
  const reserva = `
    <div class="quadriculado absolute inset-0 opacity-50"></div>
    <div class="absolute inset-0 grid place-items-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
      <i data-lucide="${p.icone}" class="h-16 w-16 stroke-[1.5]"></i>
    </div>`;

  const imagem = p.img
    ? `<img src="${p.img}" alt="${p.titulo}" loading="lazy"
         class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
         onerror="this.remove()" />`
    : '';

  const play = p.video
    ? `<span class="absolute left-1/2 top-1/2 z-[2] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-tinta bg-white shadow-duro-sm transition-transform duration-300 group-hover:scale-110">
         <i data-lucide="play" class="ml-1 h-7 w-7 fill-tinta"></i>
       </span>`
    : '';

  return reserva + imagem + play;
}

/* =========================================================
   CARROSSÉIS — posts estilo Instagram
   ========================================================= */

/* Pasta de cada categoria dentro de assets/images/portfolio/ */
const pastaCategoria = {
  clube: 'clube-do-livro', teacher: 'teacher-jess', tabi: 'tabi-skin-care', jana: 'jana-vet', ayu: 'made-by-ayu',
  identidade: 'logotipos', video: 'videos',
};

/* Perfil do Instagram exibido no topo do feed de cada cliente */
const perfis = {
  clube: {
    handle: 'clube.oqueelasleem',
    nome: 'O que elas leem • clube do livro',
    avatar: `${PASTA}/clube-do-livro/avatar-clube.jpg`,
    bio: 'Um clube para mulheres que amam livros e boas conversas — leitoras de todo canto do mundo 🌎',
    link: 'https://instagram.com/clube.oqueelasleem',
    fiz: ['Identidade dos posts', 'Carrosséis', 'Leitura do mês', 'Trends'],
    paleta: [
      { nome: 'vinho', hex: '#8A1328' }, { nome: 'bordô', hex: '#4A0E17' },
      { nome: 'papel', hex: '#F1E4C8' },
    ],
    tipos: 'serifada itálica + sem serifa marcante + letra de mão',
    tema: 'mesa-clube',
    numero: '01', legenda: 'o que elas leem',
    pasta: '#E9C98F', tinta: '#4A0E17', botao: '#8A1328', botaoTexto: '#FBE7A1',
  },
  teacher: {
    handle: 'teacherjessmorais',
    nome: 'Jéss Morais Idiomas • professora de inglês e espanhol',
    avatar: `${PASTA}/teacher-jess/avatar-teacher.jpg`,
    bio: 'Aulas de idiomas com propósito, intencionalidade e estrutura pedagógica — e muita cultura pop no meio do caminho.',
    link: 'https://instagram.com/teacherjessmorais',
    fiz: ['Carrosséis educativos', 'Cultura pop', 'Datas comemorativas', 'Tratamento de fotos'],
    paleta: [
      { nome: 'marinho', hex: '#090B3C' }, { nome: 'vermelho', hex: '#BA0007' },
      { nome: 'creme', hex: '#FAF7EC' },
    ],
    tipos: 'serifada fina + sem serifa geométrica',
    tema: 'mesa-teacher',
    numero: '02', legenda: 'teacher jess',
    pasta: '#FAF7EC', tinta: '#090B3C', botao: '#BA0007', botaoTexto: '#FAF7EC',
  },
  tabi: {
    handle: 'TabiNakazato', nomeCurto: 'Tabi Nakazato',
    nome: 'Skincare da vida real • YouTube e redes',
    avatar: `${PASTA}/tabi-skin-care/avatar-tabi.jpg`,
    foto: `${PASTA}/tabi-skin-care/foto-tabi.jpg`,
    bio: 'Rotinas, comparações de ativos e recebidos de skincare — com destaque para produtos japoneses.',
    link: '',
    fiz: ['Identidade visual', 'Logotipo', 'Thumbnails', 'Recorte de produtos'],
    paleta: [
      { nome: 'rosa', hex: '#F2BDBD' }, { nome: 'chiclete', hex: '#D96FA6' },
      { nome: 'roxo', hex: '#7B4A86' }, { nome: 'brilho', hex: '#FBE38A' },
    ],
    tipos: 'monograma serifado + Helvetica Now Display',
    tema: 'mesa-tabi',
    numero: '03', legenda: 'tabi nakazato', unidade: 'trabalhos',
    pasta: '#FFF4F7', tinta: '#8E5C93', botao: '#E58AB5', botaoTexto: '#FFFFFF',
  },
  jana: {
    handle: 'vet.janainabez', nomeCurto: 'JANA Vet',
    nome: 'JANA • veterinária em domicílio em São Paulo',
    avatar: `${PASTA}/jana-vet/logo-jana-verde.jpg`,
    bio: 'Cuidado com jeito de quem é de casa: atendimento completo, calmo e carinhoso para cães e gatos, até a porta de casa.',
    link: 'https://instagram.com/vet.janainabez',
    fiz: ['Identidade visual completa', 'Logotipo', 'Manual da marca', 'Stickers'],
    paleta: [
      { nome: 'oliva', hex: '#5E6B45' }, { nome: 'sálvia', hex: '#A3AE8B' },
      { nome: 'ardósia', hex: '#4C6A85' }, { nome: 'névoa', hex: '#B9C8D4' },
      { nome: 'creme', hex: '#F3ECDC' }, { nome: 'floresta', hex: '#2E3A2C' },
    ],
    tipos: 'Cherry Bomb One + Quicksand + Nunito',
    tema: 'mesa-jana',
    numero: '04', legenda: 'jana vet', unidade: 'trabalhos',
    pasta: '#F3ECDC', tinta: '#2E3A2C', botao: '#5E6B45', botaoTexto: '#F3ECDC',
  },
  ayu: {
    handle: 'made.by._ayu',
    nome: 'Ayuri • designer gráfica no Japão',
    avatar: 'assets/images/logo-made-by-ayu.png',
    bio: 'Crio marcas fortes e destaco o negócio de mulheres empreendedoras. Amante de livros, séries, culinária e corgis.',
    link: 'https://instagram.com/made.by._ayu',
    fiz: ['Meu conteúdo', 'Storytelling', 'Venda de serviço', 'Colagem'],
    paleta: [
      { nome: 'turquesa', hex: '#4FC8CF' }, { nome: 'amarelo', hex: '#FFED00' },
      { nome: 'creme', hex: '#FFFAE8' }, { nome: 'azul', hex: '#0098FC' },
    ],
    tipos: 'sem serifa bem pesada + sans de etiqueta',
    tema: 'mesa-ayu',
    numero: '05', legenda: 'made by ayu', rotulo: 'minha pasta', unidade: 'posts',
    pasta: '#FFFAE8', tinta: '#1C2B2A', botao: '#FFED00', botaoTexto: '#1C2B2A',
  },
  identidade: {
    handle: '', nomeCurto: 'Logotipos & identidade visual',
    nome: 'Trabalhos avulsos para pequenos negócios',
    avatar: 'assets/images/logo-made-by-ayu.png',
    bio: 'Cada logo nasce do jeito do negócio: um guia de viagens no Japão, uma designer de sobrancelhas, uma marca fitness e a minha própria.',
    link: '',
    fiz: ['Logotipo', 'Monograma', 'Lettering', 'Variações de fundo'],
    tema: 'mesa-logos',
    numero: '06', legenda: 'logotipos', rotulo: 'minha prancheta', unidade: 'logotipos',
    pasta: '#FFFDF6', tinta: '#5B3A1E', botao: '#2EC4BA', botaoTexto: '#1C2B2A',
  },
};

const slidesDe = (p) => Array.from({ length: p.total }, (_, k) =>
  `${PASTA}/${pastaCategoria[p.cat]}/${p.pasta}/${String(k + 1).padStart(2, '0')}.jpg`);

/* Trilho deslizante (arrastar no celular, setas no computador) */
function carrosselHTML(p, dica = false) {
  const slides = slidesDe(p);
  return `
    <div class="relative overflow-hidden bg-tinta">
      <div class="car-trilho flex snap-x snap-mandatory overflow-x-auto" tabindex="0"
           aria-roledescription="carrossel" aria-label="${p.titulo}">
        ${slides.map((src, k) => `
          <img src="${src}" alt="${p.titulo} — slide ${k + 1} de ${slides.length}"
               class="${p.aspecto || 'aspect-[4/5]'} w-full shrink-0 snap-center snap-always object-cover"
               loading="${k === 0 ? 'eager' : 'lazy'}" draggable="false" />`).join('')}
      </div>
      ${dica ? `<span class="dica-arraste pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border-2 border-black bg-creme-300 px-3 py-1 font-display text-xs font-extrabold uppercase shadow-[3px_3px_0_#000]">arraste ➜</span>` : ''}
      <span class="car-contador pointer-events-none absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-bold text-white">1/${slides.length}</span>
      <button type="button" data-car="prev" aria-label="Slide anterior" disabled
        class="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_#000] transition hover:scale-110 disabled:opacity-0 sm:grid">
        <i data-lucide="chevron-left" class="h-5 w-5"></i>
      </button>
      <button type="button" data-car="next" aria-label="Próximo slide" ${slides.length < 2 ? 'disabled' : ''}
        class="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_#000] transition hover:scale-110 disabled:opacity-0 sm:grid">
        <i data-lucide="chevron-right" class="h-5 w-5"></i>
      </button>
    </div>`;
}

const pontosHTML = (n) => `
  <div class="car-pontos flex items-center justify-center gap-1.5" aria-hidden="true">
    ${Array.from({ length: n }, (_, k) =>
      `<span class="h-1.5 rounded-full transition-all duration-300 ${k === 0 ? 'w-4 bg-turquesa-600' : 'w-1.5 bg-tinta/30'}"></span>`).join('')}
  </div>`;

/* Cabeçalho "pasta do cliente" (topo do feed) */
function perfilHTML(cat) {
  const pf = perfis[cat];
  if (!pf) return '';
  const qtd = projetos.filter(p => p.cat === cat).length;
  return `
    <header class="card-enter relative mx-auto w-full max-w-3xl">
      <!-- aba da pasta -->
      <span class="relative z-[1] ml-6 inline-block rounded-t-lg border-[3px] border-b-0 border-black px-4 py-1 font-display text-xs font-extrabold uppercase tracking-widest" style="background:${pf.pasta}">
        ${pf.rotulo || 'pasta do cliente'} · nº ${pf.numero}
      </span>
      <div class="relative -mt-[3px] border-[3px] border-black p-5 sm:p-7" style="background:${pf.pasta}; box-shadow:8px 8px 0 ${pf.tinta}">
        <span class="washi washi-listrada -right-5 -top-3 rotate-[20deg]" aria-hidden="true"></span>

        <div class="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          <div class="relative mx-auto w-fit -rotate-3 border-[3px] border-black bg-white p-2 pb-7 shadow-[4px_4px_0_#000] sm:mx-0">
            <img src="${pf.foto || pf.avatar}" alt="${pf.nomeCurto || pf.handle}" class="h-28 w-28 object-cover" />
            <span class="absolute inset-x-0 bottom-1 text-center font-mao text-lg leading-5">${pf.legenda}</span>
          </div>
          <div class="text-center sm:text-left">
            <p class="font-display text-2xl font-extrabold leading-tight sm:text-3xl">${pf.handle ? '@' + pf.handle : pf.nomeCurto}</p>
            <p class="mt-1 text-sm font-medium text-tinta/75">${pf.nome}</p>
            <p class="mt-3 text-sm leading-relaxed">${pf.bio}</p>
            <div class="mt-3 flex flex-wrap justify-center gap-1.5 sm:justify-start">
              ${pf.fiz.map(f => `<span class="rounded-full border-2 border-black bg-white px-2.5 py-0.5 text-xs font-bold">${f}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- paleta + tipografia, como amostras coladas -->
        ${pf.paleta ? `<div class="mt-6 grid gap-4 border-t-2 border-dashed border-black/40 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p class="font-mao text-2xl leading-6" style="color:${pf.tinta}">paleta do projeto</p>
            <div class="mt-2 flex flex-wrap gap-2">
              ${pf.paleta.map((c, k) => `
                <div class="${k % 2 ? 'rotate-2' : '-rotate-2'} border-2 border-black bg-white p-1 pb-0.5 shadow-[2px_2px_0_#000]">
                  <span class="block h-10 w-14 border border-black/20" style="background:${c.hex}"></span>
                  <span class="block text-center text-[10px] font-bold uppercase leading-4">${c.nome}</span>
                </div>`).join('')}
            </div>
            <p class="mt-3 text-xs font-bold uppercase tracking-wide text-tinta/70">tipografia: <span class="normal-case">${pf.tipos}</span></p>
          </div>
          ${pf.link ? `<a href="${pf.link}" target="_blank" rel="noopener"
             class="inline-flex items-center justify-center gap-2 rounded-lg border-[3px] border-black px-5 py-2.5 font-display text-sm font-bold shadow-[4px_4px_0_#000] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000]" style="background:${pf.botao}; color:${pf.botaoTexto}">
            <i data-lucide="instagram" class="h-4 w-4"></i> Ver o perfil real
          </a>` : ''}
        </div>` : ''}

        <span class="carimbo absolute -bottom-5 left-6 rotate-[-4deg]">${qtd} ${pf.unidade || 'carrosséis'} ✦</span>
      </div>
    </header>`;
}

/* Prancha de trabalho (logotipos e apresentações de marca) */
function pranchaHTML(p, i) {
  const largo = p.aspecto === 'aspect-video';
  return `
    <article data-post class="relative w-full ${largo ? 'max-w-[36rem]' : 'max-w-[28rem]'} shrink-0 border-[3px] border-black bg-white shadow-[8px_8px_0_#000] ${i % 2 ? 'rotate-[0.8deg]' : '-rotate-[0.8deg]'}">
      <span class="washi ${i % 2 ? 'washi-turquesa -right-6 rotate-[30deg]' : 'washi-amarela -left-6 -rotate-[30deg]'} -top-2 !h-7 !w-24" aria-hidden="true"></span>
      <div class="flex items-center justify-between gap-3 border-b-[3px] border-black px-3 py-2.5">
        <p class="min-w-0 truncate font-display text-xs font-extrabold uppercase tracking-widest">${p.rotuloCard || ''}</p>
        ${p.total > 1 ? `<span class="shrink-0 font-mao text-lg leading-none text-tinta/70">arraste ➜</span>` : ''}
      </div>
      ${carrosselHTML(p, i === 0 && p.total > 1)}
      <div class="border-t-[3px] border-black px-3 py-3">
        ${p.total > 1 ? `<div class="mb-2">${pontosHTML(p.total)}</div>` : ''}
        <p class="font-display text-lg font-extrabold leading-tight">${p.cliente || p.titulo}</p>
        <p class="mt-1 text-sm text-tinta/75">${p.desc}</p>
        <p class="mt-2 font-mao text-lg leading-5 text-tinta/70">design por @made.by._ayu ✦</p>
      </div>
    </article>`;
}

/* Vídeo estilo YouTube (para thumbnails 16:9) */
function videoYoutubeHTML(p, pf, i) {
  return `
    <article class="relative w-full max-w-[34rem] shrink-0 border-[3px] border-black bg-white shadow-[8px_8px_0_#000] ${i % 2 ? 'rotate-[0.8deg]' : '-rotate-[0.8deg]'}">
      <span class="washi ${i % 2 ? 'washi-amarela -right-6 rotate-[30deg]' : 'washi-listrada -left-6 -rotate-[30deg]'} -top-2 !h-7 !w-24" aria-hidden="true"></span>
      <div class="relative aspect-video overflow-hidden border-b-[3px] border-black bg-black">
        <img src="${p.img}" alt="Thumbnail: ${p.titulo}" loading="lazy" class="h-full w-full object-cover" />
        <span class="absolute left-2 top-2 border-2 border-black bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide">thumbnail</span>
        <span class="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0_#000]" aria-hidden="true">
          <i data-lucide="play" class="ml-0.5 h-4 w-4 fill-current"></i>
        </span>
        <div class="absolute inset-x-0 bottom-0 h-1.5 bg-white/40" aria-hidden="true"><div class="h-full w-1/3" style="background:${pf.botao || '#E11'}"></div></div>
      </div>
      <div class="flex items-start gap-3 p-3">
        ${pf.avatar ? `<img src="${pf.avatar}" alt="" class="h-10 w-10 shrink-0 rounded-full border-2 border-black object-cover" />` : ''}
        <div class="min-w-0 flex-1">
          <p class="font-display text-base font-extrabold leading-snug">${p.titulo}</p>
          <p class="mt-0.5 text-xs text-tinta/60">${pf.nomeCurto || pf.handle} · thumbnail para YouTube</p>
          <p class="mt-2 font-mao text-lg leading-5 text-tinta/70">design por @made.by._ayu ✦</p>
        </div>
        <i data-lucide="more-horizontal" class="h-5 w-5 shrink-0"></i>
      </div>
    </article>`;
}

/* Post do Instagram + nota de bastidores ao lado (zigue-zague no computador) */
function postInstagramHTML(p, i) {
  const pf = perfis[p.cat] || {};
  const n = String(i + 1).padStart(2, '0');
  const post = p.youtube ? videoYoutubeHTML(p, pf, i) : p.prancha ? pranchaHTML(p, i) : `
    <article data-post class="relative w-full max-w-[28rem] shrink-0 border-[3px] border-black bg-white shadow-[8px_8px_0_#000] ${i % 2 ? 'rotate-[0.8deg]' : '-rotate-[0.8deg]'}">
      <span class="washi ${i % 2 ? 'washi-turquesa -right-6 rotate-[30deg]' : 'washi-amarela -left-6 -rotate-[30deg]'} -top-2 !h-7 !w-24" aria-hidden="true"></span>
      <div class="flex items-center gap-3 border-b-[3px] border-black px-3 py-2.5">
        ${pf.avatar ? `<img src="${pf.avatar}" alt="" class="h-9 w-9 rounded-full border-2 border-black object-cover" />` : ''}
        <div class="min-w-0 flex-1 leading-tight">
          <p class="truncate text-sm font-bold">${pf.handle || ''}</p>
          <p class="text-xs text-tinta/60">${p.total > 1 ? `Carrossel · ${p.total} slides` : 'Post'}</p>
        </div>
        <i data-lucide="more-horizontal" class="h-5 w-5"></i>
      </div>
      ${carrosselHTML(p, i === 0)}
      <div class="relative flex items-center gap-4 border-t-[3px] border-black px-3 py-3">
        <i data-lucide="heart" class="h-6 w-6"></i>
        <i data-lucide="message-circle" class="h-6 w-6"></i>
        <i data-lucide="send" class="h-6 w-6"></i>
        <div class="absolute left-1/2 -translate-x-1/2">${pontosHTML(p.total)}</div>
        <i data-lucide="bookmark" class="ml-auto h-6 w-6"></i>
      </div>
      <div class="px-3 pb-4 text-sm leading-relaxed">
        <p><strong>${pf.handle || ''}</strong> <span class="font-display font-bold">${p.titulo}</span></p>
        <p class="mt-2 font-medium text-turquesa-700">${p.tags.map(t => '#' + t.toLowerCase().replace(/\s+/g, '')).join(' ')}</p>
      </div>
    </article>`;

  const nota = `
    <aside class="relative w-full max-w-[28rem] lg:max-w-sm">
      <div class="pautado relative ${i % 2 ? '-rotate-2' : 'rotate-2'} border-[3px] border-black bg-creme-50 px-5 pb-6 pt-7" style="box-shadow:6px 6px 0 ${pf.tinta || '#000'}">
        <!-- clipe de papel -->
        <svg class="absolute -top-6 left-8 h-14 w-6" viewBox="0 0 24 56" fill="none" aria-hidden="true">
          <path d="M8 40V10a4 4 0 0 1 8 0v34a7 7 0 0 1-14 0V14" stroke="#1C2B2A" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        <p class="font-display text-5xl font-extrabold leading-none" style="color:${pf.botao || '#8A1328'}">nº ${n}</p>
        <p class="mt-2 font-display text-lg font-extrabold leading-tight">${p.titulo}</p>
        <p class="mt-3 font-mao text-[1.45rem] leading-7 text-tinta/90">
          <span class="text-turquesa-700">bastidores ✎</span> ${p.bastidor || p.desc}
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${p.tags.map(t => `<span class="border-2 border-black bg-white px-2 py-0.5 text-[11px] font-bold uppercase">${t}</span>`).join('')}
        </div>
      </div>
      <!-- seta desenhada apontando para o post (computador) -->
      <svg class="absolute top-1/2 hidden h-12 w-16 -translate-y-1/2 lg:block ${i % 2 ? '-right-16 -scale-x-100' : '-left-16'}" viewBox="0 0 64 48" fill="none" aria-hidden="true">
        <path d="M60 10C44 8 24 14 10 32" stroke="#1C2B2A" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M6 22l3 12 12-2" stroke="#1C2B2A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </aside>`;

  return `
    <div class="card-enter flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-20 ${i % 2 ? 'lg:flex-row-reverse' : ''}"
         style="animation-delay:${i * 80}ms">
      ${post}${nota}
    </div>`;
}

/* Card de colagem padrão (grade). Se for carrossel, a capa vira deslizante. */
function cardColagemHTML(p, i) {
  const nomeCat = categorias.find(c => c.id === p.cat).nome;
  const tag = p.link ? 'a' : 'article';
  const attrs = p.link ? `href="${p.link}" target="_blank" rel="noopener"` : '';
  const capa = p.carrossel
    ? `<div class="relative overflow-hidden border-2 border-tinta">${carrosselHTML(p)}</div>
       <div class="pt-3">${pontosHTML(p.total)}</div>`
    : `<div class="relative ${p.youtube ? 'aspect-video' : 'aspect-[4/5]'} overflow-hidden border-2 border-tinta ${p.fundo}">
         ${capaProjeto(p)}
         <span class="absolute left-2 top-2 z-[3] border-2 border-tinta bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide">
           ${p.video ? '▶ ' + p.formato : p.youtube ? '▶ thumbnail · ' + nomeCat : nomeCat}
         </span>
       </div>`;
  return `
    <${tag} ${attrs} ${p.carrossel ? 'data-post' : ''} class="card-enter group relative block ${giros[i % giros.length]} border-2 border-tinta bg-white p-3 shadow-duro transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-duro-lg"
         style="animation-delay:${i * 60}ms">
      <span class="fita ${fitas[i % 3]} -top-3 ${i % 2 ? 'right-6 rotate-6' : 'left-6 -rotate-6'} !w-20"></span>
      ${capa}
      <div class="px-1 pb-1 pt-4">
        ${p.carrossel ? `<p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-turquesa-700">${nomeCat} · carrossel</p>` : ''}
        <h3 class="font-display text-xl font-extrabold leading-tight">${p.titulo}</h3>
        <p class="mt-1.5 text-sm leading-relaxed text-tinta/75">${p.desc}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          ${p.tags.map((t, j) => `<span class="rounded-full border-2 border-tinta ${j === 0 ? 'bg-creme-200' : 'bg-white'} px-2.5 py-0.5 text-xs font-bold">${t}</span>`).join('')}
        </div>
      </div>
    </${tag}>`;
}

function renderProjetos() {
  const lista = categoriaAtiva === 'todos' ? projetos : projetos.filter(p => p.cat === categoriaAtiva);
  const grid = $('#gridProjetos');
  const modoFeed = lista.length > 0 && lista.every(p => p.carrossel || p.youtube);

  if (modoFeed) {
    // Feed vertical estilo Instagram: um post embaixo do outro
    const tema = (perfis[categoriaAtiva] || {}).tema || '';
    grid.className = `mt-14 flex flex-col gap-20 ${tema} -mx-4 px-4 py-12 sm:mx-0 sm:px-8 sm:py-16`;
    grid.innerHTML = perfilHTML(categoriaAtiva) + lista.map(postInstagramHTML).join('') + `
      <p class="text-center font-mao text-3xl text-[#FBE7A1]">fim da pasta… por enquanto ♡</p>`;
  } else {
    grid.className = 'mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3';
    grid.innerHTML = lista.map(cardColagemHTML).join('');
  }
}

/* Atualiza contador, pontinhos e setas conforme o slide visível */
function atualizarCarrossel(trilho) {
  const post = trilho.closest('[data-post]');
  if (!post) return;
  const total = trilho.children.length;
  const idx = Math.round(trilho.scrollLeft / trilho.clientWidth);
  post.querySelector('.dica-arraste')?.remove();
  post.querySelector('.car-contador').textContent = `${idx + 1}/${total}`;
  post.querySelectorAll('.car-pontos span').forEach((d, k) => {
    d.className = `h-1.5 rounded-full transition-all duration-300 ${k === idx ? 'w-4 bg-turquesa-600' : 'w-1.5 bg-tinta/30'}`;
  });
  post.querySelector('[data-car="prev"]').disabled = idx === 0;
  post.querySelector('[data-car="next"]').disabled = idx >= total - 1;
}

document.addEventListener('scroll', (e) => {
  if (e.target.classList && e.target.classList.contains('car-trilho')) atualizarCarrossel(e.target);
}, true);

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-car]');
  if (!btn) return;
  e.preventDefault();
  const trilho = btn.closest('[data-post]').querySelector('.car-trilho');
  trilho.scrollBy({ left: (btn.dataset.car === 'next' ? 1 : -1) * trilho.clientWidth, behavior: 'smooth' });
});

function atualizarPortfolio() {
  renderFiltros();
  renderNota();
  renderProjetos();
  icones();
}

$('#filtros').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-cat]');
  if (!btn || btn.dataset.cat === categoriaAtiva) return;
  categoriaAtiva = btn.dataset.cat;
  atualizarPortfolio();
});

// Botões com data-ir-cat (ex.: seção de vídeos) abrem direto um filtro
document.querySelectorAll('[data-ir-cat]').forEach(a => a.addEventListener('click', () => {
  categoriaAtiva = a.dataset.irCat;
  atualizarPortfolio();
}));

/* =========================================================
   FERRAMENTAS — adesivos
   ========================================================= */
$('#gridFerramentas').innerHTML = ferramentas.map(f => `
  <div class="group relative flex flex-col items-center text-center">
    <div class="${f.giro} ${f.forma} grid h-32 w-32 place-items-center border-[3px] border-tinta ${f.cor} shadow-duro outline outline-[6px] outline-white transition-all duration-300 group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-duro-lg">
      <i data-lucide="${f.icone}" class="h-14 w-14 stroke-[1.75]"></i>
    </div>
    <span class="mt-5 -rotate-2 border-2 border-tinta bg-white px-4 py-1 font-display text-2xl font-extrabold shadow-duro-sm">${f.nome}</span>
    <p class="mt-3 max-w-[16rem] text-sm leading-relaxed text-tinta/80">${f.texto}</p>
    <p class="mt-1 font-mao text-xl text-turquesa-700">${f.nota}</p>
  </div>`).join('');

/* =========================================================
   BLOG — capas estilo carrossel do Instagram
   ========================================================= */
if ($('#gridBlog')) $('#gridBlog').innerHTML = posts.map((p, i) => `
  <article class="group relative cursor-pointer">
    <span class="fita ${fitas[(i + 1) % 3]} -top-3 left-1/2 -translate-x-1/2 ${i % 2 ? 'rotate-3' : '-rotate-3'}"></span>
    <div class="${giros[(i + 2) % giros.length]} relative aspect-[4/5] overflow-hidden border-2 border-tinta ${p.capa} p-5 shadow-duro transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-duro-lg">
      ${p.img ? `<img src="${p.img}" alt="${p.titulo}" loading="lazy" class="absolute inset-0 z-[1] h-full w-full object-cover" onerror="this.remove()" />` : ''}
      <div class="quadriculado absolute inset-0 opacity-30"></div>
      <div class="relative flex items-center justify-between ${p.texto}">
        <span class="border-2 border-tinta ${p.destaque} px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-tinta">${p.tema}</span>
        <span class="relative z-[2] flex items-center gap-1 rounded-full border-2 border-tinta bg-white px-2 py-0.5 text-xs font-bold text-tinta">
          <i data-lucide="copy" class="h-3 w-3"></i> 1/${p.slides}
        </span>
      </div>
      <div class="absolute inset-x-5 top-1/2 -translate-y-1/2 ${p.texto}">
        <span class="grid h-12 w-12 -rotate-6 place-items-center rounded-full border-2 border-tinta ${p.destaque} text-tinta"><i data-lucide="${p.icone}" class="h-6 w-6"></i></span>
        <h3 class="mt-4 font-display text-[1.65rem] font-extrabold leading-[1.1]">${p.titulo}</h3>
      </div>
      <div class="absolute inset-x-5 bottom-5 flex items-center justify-between text-xs font-bold ${p.texto}">
        <span>@made.by._ayu</span>
        <span class="flex items-center gap-1 transition-transform group-hover:translate-x-1">arraste <i data-lucide="arrow-right" class="h-4 w-4"></i></span>
      </div>
      <svg class="absolute -right-3 top-12 h-10 w-10 fill-creme-400 opacity-90"><use href="#estrela"/></svg>
    </div>
    <div class="mt-5 px-1">
      <time datetime="${p.data}" class="font-mao text-xl text-turquesa-700">${formatarData(p.data)}</time>
      <h4 class="font-display text-lg font-bold leading-snug">${p.titulo}</h4>
      <p class="mt-1 text-sm text-tinta/75">${p.resumo}</p>
    </div>
  </article>`).join('');

/* =========================================================
   FORMULÁRIO DE CONTATO
   ========================================================= */
if ($('#formContato')) {
const escolhidos = new Set();
$('#opcoesServico').innerHTML = servicos.map(s => `
  <button type="button" data-servico="${s}" aria-pressed="false"
    class="rounded-full border-2 border-tinta bg-white px-3 py-1.5 text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-duro-sm">${s}</button>`).join('');

$('#opcoesServico').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-servico]');
  if (!b) return;
  const s = b.dataset.servico;
  escolhidos.has(s) ? escolhidos.delete(s) : escolhidos.add(s);
  const on = escolhidos.has(s);
  b.setAttribute('aria-pressed', on);
  b.classList.toggle('bg-turquesa-300', on);
  b.classList.toggle('bg-white', !on);
  b.classList.toggle('shadow-duro-sm', on);
});

$('#formContato').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = $('#nome').value.trim();
  const email = $('#email').value.trim();
  const msg = $('#mensagem').value.trim();
  const erro = $('#erroForm');

  let problema = '';
  if (!nome) problema = '✎ Me conta seu nome?';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) problema = '✎ Esse e-mail parece incompleto.';
  else if (msg.length < 10) problema = '✎ Escreve um pouquinho mais sobre o projeto (mín. 10 caracteres).';

  if (problema) {
    erro.textContent = problema;
    erro.classList.remove('hidden');
    return;
  }
  erro.classList.add('hidden');

  // Envio real via FormSubmit (formsubmit.co) — chega no e-mail abaixo.
  const botao = $('#formContato button[type="submit"]');
  botao.disabled = true;
  botao.style.opacity = '.6';
  fetch('https://formsubmit.co/ajax/madebyayu22@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      _subject: `Novo contato pelo site — ${nome}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      Nome: nome,
      'E-mail': email,
      Servicos: [...escolhidos].join(', ') || '—',
      Mensagem: msg,
    }),
  })
    .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
    .then(({ ok, d }) => {
      if (!ok || String(d.success) !== 'true') throw new Error(d.message || 'falha');
      $('#camposForm').classList.add('hidden');
      $('#sucessoForm').classList.remove('hidden');
    })
    .catch(() => {
      erro.textContent = '✎ Ops, não consegui enviar agora. Tenta de novo ou me chama no Instagram / e-mail ♡';
      erro.classList.remove('hidden');
    })
    .finally(() => {
      botao.disabled = false;
      botao.style.opacity = '';
    });
});
}

/* =========================================================
   MENU MOBILE, BOTÃO TOPO E ANIMAÇÕES
   ========================================================= */
const btnMenu = $('#btnMenu');
const menuMobile = $('#menuMobile');

function alternarMenu(abrir) {
  menuMobile.classList.toggle('hidden', !abrir);
  btnMenu.setAttribute('aria-expanded', abrir);
  btnMenu.innerHTML = `<i data-lucide="${abrir ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
  icones();
}
btnMenu.addEventListener('click', () => alternarMenu(menuMobile.classList.contains('hidden')));
menuMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => alternarMenu(false)));

const btnTopo = $('#btnTopo');
window.addEventListener('scroll', () => {
  const mostrar = window.scrollY > 600;
  btnTopo.classList.toggle('opacity-0', !mostrar);
  btnTopo.classList.toggle('translate-y-24', !mostrar);
}, { passive: true });

const observador = new IntersectionObserver((entradas) => entradas.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('visivel');
    observador.unobserve(e.target);
  }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observador.observe(el));

/* ---------- Copiar e-mail ---------- */
const btnCopiar = $('#btnCopiarEmail');
if (btnCopiar) btnCopiar.addEventListener('click', async () => {
  const email = $('#emailTexto').textContent.trim();
  try {
    await navigator.clipboard.writeText(email);
    btnCopiar.textContent = 'copiado ✓';
  } catch (e) {
    // se o navegador não deixar copiar, seleciona o texto para a pessoa copiar
    const r = document.createRange(); r.selectNodeContents($('#emailTexto'));
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    btnCopiar.textContent = 'copie ↑';
  }
  setTimeout(() => { btnCopiar.textContent = 'copiar'; }, 2000);
});

/* ---------- Início ---------- */
$('#ano').textContent = new Date().getFullYear();
atualizarPortfolio();
icones();
