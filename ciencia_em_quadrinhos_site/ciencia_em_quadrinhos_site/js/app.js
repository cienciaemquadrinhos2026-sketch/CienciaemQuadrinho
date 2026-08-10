const grid = document.getElementById('magazineGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const filterButtons = [...document.querySelectorAll('.filter')];
let currentFilter = 'todas';

function normalize(text=''){
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

function renderRevistas(){
  const term = normalize(searchInput.value.trim());
  const items = REVISTAS.filter(r => {
    const matchesFilter = currentFilter === 'todas' || r.area === currentFilter;
    const matchesSearch = !term || normalize(`${r.titulo} ${r.areaNome} ${r.volume} ${r.descricao} ${r.icone}`).includes(term);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = '';
  emptyState.hidden = items.length !== 0;

  items.forEach(r => {
    const card = document.createElement('article');
    card.className = 'mag-card';

    const hasCover = Boolean(r.capa);
    const coverStyle = hasCover
      ? `background-image:url('${r.capa}')`
      : `--cover1:${r.cor1};--cover2:${r.cor2}`;

    const action = r.arquivo
      ? `<a class="read-btn" href="${r.arquivo}" target="_blank" rel="noopener noreferrer">📖 LER REVISTA</a>`
      : `<span class="read-btn" style="opacity:.55;cursor:not-allowed">EM BREVE</span>`;

    card.innerHTML = `
      <div class="mag-cover ${hasCover ? 'has-image' : ''}" style="${coverStyle}">
        <span class="mag-volume">${r.volume}</span>
        <span class="mag-area">${r.areaNome}</span>
        ${hasCover ? '' : `<span class="mag-icon">${r.icone}</span>`}
      </div>
      <div class="mag-body">
        <h3>${r.titulo}</h3>
        <p>${r.descricao}</p>
        <div class="mag-actions">
          ${action}
          <span class="info-tag">PDF</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderRevistas();
  });
});
searchInput.addEventListener('input', renderRevistas);
renderRevistas();

document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('mainNav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
}));
