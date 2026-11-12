(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const settings = window.PORTFOLIO_SETTINGS || {};
  const lexicon = window.PORTFOLIO_TEXT || {};
  let lang = settings.defaultLanguage === 'pt' ? 'pt' : 'en';
  let activeFilter = 'all';
  let activeCaseId = null;
  let lastFocused = null;
  let observer;
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const esc = value => String(value || '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character]));
  const t = key => (lexicon[lang] || {})[key] || key;

  const cover = (kind) => {
    const header = '<div class="mini-app-bar"><span></span><span></span><span></span></div>';
    const bg = '<div class="cover-grid" aria-hidden="true"></div><span class="cover-decoration deco-1" aria-hidden="true">✳</span><span class="cover-decoration deco-2" aria-hidden="true">✧</span>';
    const label = '<span class="cover-floating-label">a little behind the scenes ✿</span>';
    let art = '';
    if(kind === 'chat') art = `<div class="mini-app chat-ui"><div class="chat-sidebar"><div class="mini-avatar"></div><i></i><i></i><i></i></div><div class="chat-content"><div class="mock-line"></div><div class="mock-line short"></div><div class="chat-bubble"></div><div class="chat-bubble right"></div><div class="mock-line medium"></div></div></div><span class="chat-caption">✦ thoughtful conversations</span>`;
    if(kind === 'tablet') art = `<div class="tablet-frame"><div class="tablet-side"><i></i><i></i><i></i><i></i></div><div class="tablet-main"><div class="tablet-heading"></div><div class="tablet-grid"><b></b><b></b><b></b></div><div class="tablet-bottom"></div><div class="tablet-bottom" style="width:60%"></div></div></div><span class="tablet-caption">✳ designed for doing</span>`;
    if(kind === 'accessibility') art = `<div class="mini-app access-ui">${header}<div class="access-content"><div class="access-check">✓</div><div class="access-lines"><i></i><i></i><i></i><i></i></div></div></div><span class="access-badge">♡ inclusive by default</span>`;
    if(kind === 'checkout') art = `<div class="mini-app flight-ui">${header}<div class="flight-route"><div class="flight-city">AAA<small>origin</small></div><span class="flight-path"></span><div class="flight-city">BBB<small>destination</small></div></div><div class="flight-fields"><span></span><span></span></div><div class="flight-button"></div></div><span class="flight-floating">✈ a smoother journey</span>`;
    if(kind === 'ai') art = `<div class="mini-app ai-ui">${header}<div class="ai-blob">✳</div><div class="ai-center-text">what if we could...?</div><div class="ai-pill-row"><i></i><i></i><i></i></div></div><span class="ai-orbit">✧</span>`;
    if(kind === 'finance') art = `<div class="mini-app finance-ui">${header}<div class="finance-content"><div class="finance-title"></div><div class="finance-row"><b></b><i></i></div><div class="finance-row"><b></b><i></i></div><div class="finance-row"><b></b><i></i></div></div><div class="finance-chart"><i></i><i></i><i></i></div></div>`;
    return `<div class="project-cover cover-${esc(kind)}" aria-hidden="true">${bg}${label}${art}</div>`;
  };

  function refreshReveal() {
    if(!observer) return;
    $$('.reveal:not(.in-view)').forEach(element => observer.observe(element));
  }

  function renderProjects() {
    const container = $('#projectsGrid');
    if(!container) return;
    const visible = projects.filter(project => activeFilter === 'all' || project.type.includes(activeFilter));
    if(!visible.length) { container.innerHTML = `<p>${esc(t('empty'))}</p>`; return; }
    container.innerHTML = visible.map((project) => {
      const content = project[lang];
      const num = String(projects.indexOf(project) + 1).padStart(2, '0');
      const tags = project.tags.slice(0, 3).map(tag => `<span class="tag">${esc(tag)}</span>`).join('');
      return `<article class="project-card reveal"><button class="project-open" type="button" data-project="${esc(project.id)}" aria-label="${esc(t('projectExplore'))}: ${esc(content.title)}">${cover(project.visual)}<div class="card-bottom"><span class="card-index">${num} / 0${projects.length}</span><h3 class="card-title">${esc(content.title)}</h3><p class="card-summary">${esc(content.summary)}</p><div class="card-footer"><div class="card-tags">${tags}</div><span class="card-arrow" aria-hidden="true">↗</span></div></div></button></article>`;
    }).join('');
    $$('[data-project]', container).forEach(button => button.addEventListener('click', () => {
      lastFocused = button;
      window.location.hash = `project/${button.dataset.project}`;
    }));
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.project-card', container).forEach(el => el.classList.add('in-view'));
    } else refreshReveal();
  }

  function renderCase() {
    if(!activeCaseId) return;
    const project = projects.find(p => p.id === activeCaseId);
    if(!project) return;
    const content = project[lang];
    const index = projects.indexOf(project);
    const next = projects[(index + 1) % projects.length];
    const layoutSection = (key, value) => `<div class="case-section"><h3>${esc(t(key))}</h3><p>${esc(value)}</p></div>`;
    $('#caseContent').innerHTML = `<div class="case-inner"><div class="case-eyebrow">${String(index + 1).padStart(2, '0')} / 0${projects.length} &nbsp; ✳ &nbsp; ${esc(t('caseLabel'))}</div><h2 id="caseTitle">${esc(content.title)}</h2><p class="case-subtitle">${esc(content.subtitle)}</p><p class="case-summary">${esc(content.summary)}</p><div class="case-art">${cover(project.visual)}</div>${layoutSection('caseContext',content.context)}${layoutSection('caseFocus',content.focus)}${layoutSection('caseRole',content.role)}<div class="case-section full"><h3>${esc(t('caseHighlights'))}</h3><div class="case-highlights">${content.highlights.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><p class="case-note">✿ ${esc(t('caseNote'))}</p><button class="case-next" type="button" id="nextCase" data-next="${esc(next.id)}"><span><small>${esc(t('caseNext'))}</small><strong>${esc(next[lang].title)}</strong></span><span class="next-arrow" aria-hidden="true">↗</span></button></div>`;
    $('#nextCase').addEventListener('click', event => { window.location.hash = `project/${event.currentTarget.dataset.next}`; });
  }

  function openCase(id) {
    if(!projects.some(p=>p.id === id)) return;
    activeCaseId = id;
    renderCase();
    const overlay = $('#caseOverlay');
    if(overlay.hidden) { lastFocused = document.activeElement; overlay.hidden = false; document.body.classList.add('modal-open'); }
    $('#casePanel').scrollTop = 0;
    $('.case-close').focus({preventScroll:true});
  }
  function closeCase(changeHash = true) {
    if($('#caseOverlay').hidden) return;
    $('#caseOverlay').hidden = true;
    document.body.classList.remove('modal-open');
    activeCaseId = null;
    if(changeHash && window.location.hash.startsWith('#project/')) window.location.hash = 'work';
    if(lastFocused && document.contains(lastFocused)) lastFocused.focus({preventScroll:true});
  }
  function syncRoute() {
    const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/);
    if(match) openCase(match[1]); else closeCase(false);
  }
  function setLanguage(value) {
    lang = value === 'pt' ? 'pt' : 'en';
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    $('#currentLang').textContent = lang.toUpperCase();
    $('#langSwitch').setAttribute('aria-label',lang === 'en' ? 'Change language to Portuguese' : 'Mudar idioma para inglês');
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if(['workTitle','approachTitle','aboutTitle','contactTitle'].includes(key)) el.innerHTML = t(key);
      else el.textContent = t(key);
    });
    renderProjects(); renderCase(); renderContact();
    document.title = lang === 'en' ? 'Caroline Pierozan · Product Designer & UX Researcher' : 'Caroline Pierozan · Product Designer e UX Researcher';
  }
  function renderContact() {
    const container = $('#contactActions');
    const buttons = [];
    if(settings.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(settings.email)) buttons.push(`<a class="button button-dark" href="mailto:${encodeURIComponent(settings.email)}"><span>${esc(t('emailMe'))}</span><span aria-hidden="true">↗</span></a>`);
    if(settings.linkedin && /^https:\/\/(www\.)?linkedin\.com\//i.test(settings.linkedin)) buttons.push(`<a class="button button-dark" target="_blank" rel="noopener noreferrer" href="${esc(settings.linkedin)}"><span>${esc(t('linkedin'))}</span><span aria-hidden="true">↗</span></a>`);
    if(!buttons.length) buttons.push(`<a class="button button-dark" href="${esc(settings.notion)}" target="_blank" rel="noopener noreferrer"><span>${esc(t('getInTouch'))}</span><span aria-hidden="true">↗</span></a>`);
    container.innerHTML = buttons.join('');
  }

  document.addEventListener('DOMContentLoaded',() => {
    $('#year').textContent = new Date().getFullYear();
    if('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}), {threshold:.09,rootMargin:'0px 0px 50px 0px'});
      refreshReveal();
    } else $$('.reveal').forEach(el=>el.classList.add('in-view'));

    $('#langSwitch').addEventListener('click',()=>setLanguage(lang === 'en' ? 'pt' : 'en'));
    $$('.filter-chip').forEach(button => button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      $$('.filter-chip').forEach(chip => {const active = chip === button;chip.classList.toggle('active',active);chip.setAttribute('aria-pressed',String(active));});
      renderProjects();
    }));
    const menu = $('#mobileNav');
    const menuButton = $('#menuButton');
    menuButton.addEventListener('click',()=>{let open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});
    $$('a',menu).forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}));
    $$('[data-close]').forEach(element => element.addEventListener('click',()=>closeCase()));
    document.addEventListener('keydown',event=>{
      if($('#caseOverlay').hidden) return;
      if(event.key==='Escape'){event.preventDefault();closeCase();return;}
      if(event.key==='Tab'){
        const focusable=$$('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',$('#casePanel')).filter(el=>!el.disabled && el.getClientRects().length);
        if(!focusable.length)return;
        const first=focusable[0],last=focusable[focusable.length-1];
        if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
        else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
      }
    });
    window.addEventListener('hashchange',syncRoute);
    setLanguage(lang);
    syncRoute();
  });
})();