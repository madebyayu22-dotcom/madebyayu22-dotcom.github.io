/* =========================================================
   Made by Ayu — Briefing completo
   As perguntas são as mesmas do Google Forms "✦ Vamos criar sua marca? ✦"
   e as respostas são enviadas direto para ele (aparecem em Respostas).
   Se mudar uma pergunta no Google Forms, o número "entry" muda também:
   peça para atualizar aqui.
   ========================================================= */
(function () {
  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeBxFWZBZjTwOaLVkjq0KTNfmbsz8XbLdZ513nUJr1hizOvKQ/formResponse';

  // tipo: texto | paragrafo | unica | multipla | data
  // pagina = número da seção no Google Forms (0 = primeira)
  const ETAPAS = [
    {
      pagina: 0, titulo: 'Pra gente se conhecer ♡',
      desc: 'Seus contatos, para eu conseguir falar com você.',
      perguntas: [
        { id: 605571942, tipo: 'texto', titulo: 'Seu nome', obrig: true, auto: 'name' },
        { id: 585402141, tipo: 'texto', titulo: 'E-mail', obrig: true, input: 'email', auto: 'email' },
        { id: 1608807078, tipo: 'texto', titulo: 'WhatsApp (com DDD)', obrig: true, input: 'tel', auto: 'tel' },
        { id: 530344708, tipo: 'texto', titulo: 'Instagram ou site da marca (se já tiver)', ajuda: 'Pode deixar em branco se ainda não existir.' },
      ],
    },
    {
      pagina: 1, titulo: 'Sobre a sua marca',
      desc: 'Me conta um pouquinho sobre o seu negócio, mesmo que ele ainda seja só uma ideia.',
      perguntas: [
        { id: 1145063906, tipo: 'texto', titulo: 'Qual é o nome da marca?', obrig: true, ajuda: "Se ainda não tiver um nome definido, escreva 'ainda não tenho'." },
        { id: 2128720132, tipo: 'paragrafo', titulo: 'O que a sua marca faz ou vende? Em poucas linhas.', obrig: true },
        { id: 798460756, tipo: 'unica', titulo: 'Em que momento a sua marca está hoje?', obrig: true, momento: true, opcoes: [
          'Ainda é só uma ideia, não tenho nome nem logo',
          'Já tenho o nome, mas ainda não tenho logo',
          'Já tenho um logo, mas não tenho uma identidade visual completa',
          'Já tenho logo e identidade, mas quero renovar (rebranding)',
          'Já tenho tudo, preciso de materiais (posts, carrosséis, embalagem...)',
        ] },
      ],
    },
    {
      pagina: 2, titulo: 'Sobre a sua identidade atual', soComLogo: true,
      desc: 'Como você já tem um logo, quero entender o que funciona e o que não funciona mais.',
      perguntas: [
        { id: 550886406, tipo: 'paragrafo', titulo: 'O que você gosta na sua marca atual e quer manter?', ajuda: 'Pode ser uma cor, o nome, a logo, um símbolo, a sensação que ela passa...' },
        { id: 1515139085, tipo: 'paragrafo', titulo: 'O que te incomoda ou não representa mais o seu negócio?', obrig: true },
      ],
    },
    {
      pagina: 3, titulo: 'O que você procura',
      desc: 'Antes de responder, uma explicação rápida ✦',
      explica: [
        ['Logotipo', 'é a “assinatura” da sua marca: o nome escrito de um jeito especial, com ou sem um símbolo.'],
        ['Identidade visual', 'é tudo o que faz as pessoas reconhecerem a sua marca de longe: o logo, as cores, as fontes e o estilo dos posts, embalagens e materiais. O logo é só uma parte dela.'],
        ['Criar uma marca do zero', 'antes do visual, a gente define quem é a sua marca, com quem ela fala e como ela quer ser vista.'],
        ['Rebranding', 'é dar uma renovada numa marca que já existe.'],
      ],
      perguntas: [
        { id: 492589448, tipo: 'multipla', titulo: 'O que você gostaria de fazer comigo?', obrig: true, ajuda: 'Pode marcar mais de uma opção.', outro: true, opcoes: [
          'Criar uma marca do zero (essência + identidade visual completa)',
          'Identidade visual completa',
          'Só o logotipo',
          'Renovar a marca que já tenho (rebranding)',
          'Carrosséis e posts para o Instagram',
          'Papelaria, embalagem ou etiquetas',
          'Site',
          'Criação de curso na Kiwify ou Hotmart',
          'Ainda não sei, quero ajuda para entender o que preciso',
        ] },
      ],
    },
    {
      pagina: 4, titulo: 'A essência da sua marca',
      desc: 'Quase lá! Essas respostas são as que mais me ajudam a criar algo com a sua cara.',
      perguntas: [
        { id: 1537325244, tipo: 'paragrafo', titulo: 'Quem é a sua cliente ideal?', obrig: true, ajuda: 'Idade, estilo de vida, o que ela valoriza, onde ela está...' },
        { id: 640782076, tipo: 'paragrafo', titulo: 'Qual diferencial da sua marca você acha mais relevante?', obrig: true, ajuda: 'O que faz alguém escolher você e não outra marca parecida?' },
        { id: 1153990449, tipo: 'texto', titulo: 'Se a sua marca fosse uma pessoa, quais 3 palavras a descreveriam?', obrig: true, ajuda: 'Ex.: acolhedora, divertida, elegante' },
        { id: 879234327, tipo: 'paragrafo', titulo: 'Marcas ou perfis que você admira (de qualquer área)', ajuda: 'Pode colar links ou @. Se tiver um Pinterest com referências, manda também!' },
        { id: 13840651, tipo: 'paragrafo', titulo: 'Tem algo que você NÃO quer de jeito nenhum?', ajuda: 'Cores, estilos, sensações que não combinam com você.' },
      ],
    },
    {
      pagina: 5, titulo: 'Prazo e próximos passos',
      desc: 'Última etapa ✦',
      perguntas: [
        { id: 1568893885, tipo: 'unica', titulo: 'Para quando você precisa da marca pronta?', obrig: true, opcoes: [
          'O quanto antes (até 1 mês)', 'Em 1 a 2 meses', 'Em 3 meses ou mais', 'Não tenho pressa, quero fazer com calma',
        ] },
        { id: 1953273590, tipo: 'unica', titulo: 'Qual investimento você imagina para este projeto?', ajuda: 'Isso me ajuda a montar uma proposta que caiba no seu momento.', opcoes: [
          'Até R$ 500 (≈ ¥ 10 mil a ¥ 15 mil)',
          'De R$ 500 a R$ 1.000 (≈ ¥ 15 mil a ¥ 30 mil)',
          'De R$ 1.000 a R$ 2.000 (≈ ¥ 30 mil a ¥ 60 mil)',
          'Acima de R$ 2.000 (≈ ¥ 60 mil)',
          'Prefiro conversar na reunião',
        ] },
        { id: 4700157, tipo: 'multipla', titulo: 'Qual horário fica melhor para a nossa reunião?', obrig: true, horarios: true,
          ajuda: 'Faço reuniões das 8h às 12h no horário do Japão (no horário de Brasília, das 20h à meia-noite do dia anterior). Pode marcar mais de uma opção.',
          opcoes: ['8h às 9h', '9h às 10h', '10h às 11h', '11h às 12h'] },
        { id: 2042397472, tipo: 'data', titulo: 'Qual dia seria melhor para a nossa reunião?', obrig: true, ajuda: 'É só uma preferência: confirmo o dia e o horário com você pelo WhatsApp.' },
        { id: 643855984, tipo: 'texto', titulo: 'Qual é o seu fuso horário?', obrig: true, ajuda: 'Pode colocar a cidade e o país onde você mora. Ex.: Brasília (Brasil), Tóquio (Japão), Lisboa (Portugal)' },
        { id: 1243181897, tipo: 'unica', titulo: 'Como você conheceu a Made by Ayu?', outro: true, opcoes: ['Instagram', 'Indicação', 'Pinterest', 'Site'] },
        { id: 535625516, tipo: 'paragrafo', titulo: 'Quer me contar mais alguma coisa?' },
      ],
    },
  ];

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Monta o HTML ---------- */
  function htmlPergunta(q) {
    const nome = `entry.${q.id}`;
    const obrig = q.obrig ? '<span class="bf-obrig" aria-hidden="true">*</span>' : '';
    const ajuda = q.ajuda ? `<p class="bf-ajuda" id="ajuda-${q.id}">${esc(q.ajuda)}</p>` : '';
    const descr = q.ajuda ? `aria-describedby="ajuda-${q.id}"` : '';
    const erro = `<p class="bf-msg-erro" role="alert">✎ essa aqui é obrigatória</p>`;

    if (q.tipo === 'texto' || q.tipo === 'paragrafo' || q.tipo === 'data') {
      const campo = q.tipo === 'paragrafo'
        ? `<textarea class="bf-campo" id="q${q.id}" name="${nome}" rows="4" ${descr}></textarea>`
        : `<input class="bf-campo" id="q${q.id}" name="${nome}" type="${q.tipo === 'data' ? 'date' : (q.input || 'text')}" ${q.auto ? `autocomplete="${q.auto}"` : ''} ${descr} />`;
      return `<div class="bf-q" data-q="${q.id}">
        <label class="bf-rotulo" for="q${q.id}">${esc(q.titulo)}${obrig}</label>${ajuda}${campo}${erro}</div>`;
    }

    const multi = q.tipo === 'multipla';
    const tipoInput = multi ? 'checkbox' : 'radio';
    let opcoes = q.opcoes.map((o) => `
      <label class="bf-opcao ${multi ? 'multi' : ''}">
        <input type="${tipoInput}" name="${nome}" value="${esc(o)}" />
        <span class="caixa">${esc(o)}</span>
      </label>`).join('');
    if (q.outro) {
      opcoes += `
      <label class="bf-opcao ${multi ? 'multi' : ''}">
        <input type="${tipoInput}" name="${nome}" value="__other_option__" data-outro />
        <span class="caixa">Outro:</span>
      </label>
      <input class="bf-campo bf-outro-campo" type="text" name="${nome}.other_option_response" placeholder="Escreva aqui..." aria-label="Outro" />`;
    }
    return `<div class="bf-q" data-q="${q.id}"><fieldset ${descr}>
      <legend>${esc(q.titulo)}${obrig}</legend>${ajuda}
      <div class="bf-opcoes ${q.horarios ? 'horarios' : ''}">${opcoes}</div>${erro}</fieldset></div>`;
  }

  const etapasEl = $('#bfEtapas');
  etapasEl.innerHTML = ETAPAS.map((e, i) => `
    <section class="bf-etapa" data-etapa="${i}" aria-labelledby="etapa-t-${i}">
      <h2 class="bf-etapa-titulo" id="etapa-t-${i}">${esc(e.titulo)}</h2>
      ${e.desc ? `<p class="bf-etapa-desc">${esc(e.desc)}</p>` : ''}
      ${e.explica ? `<div class="bf-explica">${e.explica.map(([t, d]) => `<div><b>${esc(t)}:</b> ${esc(d)}</div>`).join('')}</div>` : ''}
      <div class="bf-perguntas">${e.perguntas.map(htmlPergunta).join('')}</div>
    </section>`).join('');

  // Campo "Outro": ao digitar, marca a opção automaticamente
  $$('.bf-outro-campo').forEach((campo) => {
    campo.addEventListener('input', () => {
      const marcador = campo.closest('.bf-opcoes').querySelector('[data-outro]');
      if (campo.value.trim()) marcador.checked = true;
    });
  });
  // Limpa o aviso de erro assim que a pessoa responde
  etapasEl.addEventListener('input', (e) => e.target.closest('.bf-q')?.classList.remove('erro'));
  etapasEl.addEventListener('change', (e) => e.target.closest('.bf-q')?.classList.remove('erro'));

  /* ---------- Navegação entre etapas ---------- */
  let atual = 0;
  const form = $('#formBriefing');
  const btnVoltar = $('#bfVoltar');
  const btnAvancar = $('#bfAvancar');

  const temLogo = () => {
    const marcado = $('input[name="entry.798460756"]:checked');
    if (!marcado) return false;
    const idx = ETAPAS[1].perguntas[2].opcoes.indexOf(marcado.value);
    return idx >= 2; // opções 3, 4 e 5 já têm logo
  };
  const visiveis = () => ETAPAS.map((e, i) => i).filter((i) => !ETAPAS[i].soComLogo || temLogo());

  function mostrar(i, rolar = true) {
    atual = i;
    $$('.bf-etapa').forEach((el) => el.classList.toggle('ativa', Number(el.dataset.etapa) === i));
    const lista = visiveis();
    const pos = lista.indexOf(i);
    const ultima = pos === lista.length - 1;
    $('#bfBarra').style.width = `${((pos + 1) / lista.length) * 100}%`;
    $('#bfNum').textContent = `etapa ${pos + 1} de ${lista.length}`;
    $('#bfNomeEtapa').textContent = ETAPAS[i].titulo;
    btnVoltar.style.visibility = pos === 0 ? 'hidden' : 'visible';
    btnAvancar.innerHTML = ultima
      ? 'Enviar respostas <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>'
      : 'Próxima etapa <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
    if (rolar) $('#bfProgresso').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function respondida(q) {
    const nome = `entry.${q.id}`;
    if (q.tipo === 'unica' || q.tipo === 'multipla') {
      const marcados = $$(`input[name="${nome}"]:checked`);
      if (!marcados.length) return false;
      if (marcados.some((m) => m.dataset.outro !== undefined)) {
        return !!$(`input[name="${nome}.other_option_response"]`).value.trim();
      }
      return true;
    }
    const campo = $(`[name="${nome}"]`);
    if (!campo.value.trim()) return false;
    if (q.input === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());
    return true;
  }

  function validar(i) {
    let primeiro = null;
    ETAPAS[i].perguntas.forEach((q) => {
      const el = $(`.bf-q[data-q="${q.id}"]`);
      const marcouOutroVazio = q.outro && $(`input[name="entry.${q.id}"][data-outro]`).checked
        && !$(`input[name="entry.${q.id}.other_option_response"]`).value.trim();
      const ok = (q.obrig ? respondida(q) : true) && !marcouOutroVazio;
      el.classList.toggle('erro', !ok);
      if (q.input === 'email' && !ok) el.querySelector('.bf-msg-erro').textContent = '✎ confere o e-mail? parece incompleto';
      if (!ok && !primeiro) primeiro = el;
    });
    if (primeiro) {
      primeiro.scrollIntoView({ behavior: 'smooth', block: 'center' });
      primeiro.querySelector('input, textarea')?.focus({ preventScroll: true });
      return false;
    }
    return true;
  }

  btnVoltar.addEventListener('click', () => {
    const lista = visiveis();
    mostrar(lista[Math.max(0, lista.indexOf(atual) - 1)]);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validar(atual)) return;
    const lista = visiveis();
    const pos = lista.indexOf(atual);
    if (pos < lista.length - 1) { mostrar(lista[pos + 1]); return; }
    enviar(lista);
  });

  /* ---------- Envio para o Google Forms ---------- */
  function montarDados(lista) {
    const dados = new URLSearchParams();
    lista.forEach((i) => {
      ETAPAS[i].perguntas.forEach((q) => {
        const nome = `entry.${q.id}`;
        if (q.tipo === 'unica' || q.tipo === 'multipla') {
          $$(`input[name="${nome}"]:checked`).forEach((m) => dados.append(nome, m.value));
          if ($(`input[name="${nome}"][data-outro]`)?.checked) {
            dados.append(`${nome}.other_option_response`, $(`input[name="${nome}.other_option_response"]`).value.trim());
          }
        } else if (q.tipo === 'data') {
          const v = $(`[name="${nome}"]`).value; // aaaa-mm-dd
          if (v) {
            const [a, m, d] = v.split('-');
            dados.append(`${nome}_year`, a);
            dados.append(`${nome}_month`, String(Number(m)));
            dados.append(`${nome}_day`, String(Number(d)));
          }
        } else {
          const v = $(`[name="${nome}"]`).value.trim();
          if (v) dados.append(nome, v);
        }
      });
    });
    dados.append('pageHistory', lista.map((i) => ETAPAS[i].pagina).join(','));
    return dados;
  }

  function enviar(lista) {
    const erroEl = $('#bfErroEnvio');
    erroEl.classList.remove('ativa');
    btnAvancar.disabled = true;
    btnAvancar.textContent = 'Enviando...';

    fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: montarDados(lista) })
      .then(() => {
        $('#bfProgresso').style.display = 'none';
        $('#bfEtapas').style.display = 'none';
        $('#bfBotoes').style.display = 'none';
        $('#bfSucesso').classList.add('ativa');
        $('#bfSucesso').scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(() => {
        erroEl.classList.add('ativa');
        btnAvancar.disabled = false;
        mostrar(atual, false);
      });
  }

  // Exposto só para testes
  window.__briefing = { montarDados, visiveis };

  // Menu do celular
  const btnMenu = $('#btnMenu');
  const menuMobile = $('#menuMobile');
  btnMenu?.addEventListener('click', () => {
    const abrir = menuMobile.classList.contains('hidden');
    menuMobile.classList.toggle('hidden', !abrir);
    btnMenu.setAttribute('aria-expanded', abrir);
    btnMenu.innerHTML = `<i data-lucide="${abrir ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
    window.lucide && lucide.createIcons();
  });

  mostrar(0, false);
  window.lucide && lucide.createIcons();
})();
