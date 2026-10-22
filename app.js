const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  arrows: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v14M3 7l4-4 4 4M17 21V7m4 10-4 4-4-4"/></svg>',
  pie: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21.2 15.1A9.2 9.2 0 1 1 8.9 2.8v9.5Z"/><path d="M13 2.2a8.8 8.8 0 0 1 8.8 8.8H13Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15.4-6.4L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.4 6.4L3 16"/><path d="M3 21v-5h5"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  'trend-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 15 5-5 3 3 6-7"/><path d="M14 6h5v5"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  'arrow-down-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7 7 17M7 9v8h8"/></svg>',
  'arrow-up-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m7 17 10-10M9 7h8v8"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.2-4.2"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H19v16H6a2 2 0 0 1-2-2Z"/><path d="M4 7h15v5H4"/><path d="M16 14h.01"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m12 3-1.1 4.3L7 8.5l3.9 1.2L12 14l1.1-4.3L17 8.5l-3.9-1.2L12 3ZM5 15l-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7L5 15ZM19 15l-.7 2.3L16 18l2.3.7L19 21l.7-2.3L22 18l-2.3-.7L19 15Z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 14.5A8.5 8.5 0 0 1 9.5 3.8 8.5 8.5 0 1 0 20.2 14.5Z"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="3.5"/><path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16.5H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M8 7h8M8 11h6"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8.5 21h7"/></svg>',
  'arrow-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6.5 10.5 12 5l5.5 5.5"/></svg>',
  'arrow-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6.5 13.5 12 19l5.5-5.5"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h9M19 6h1M4 12h3M13 12h7M4 18h11M19 18h1"/><circle cx="16" cy="6" r="2.2"/><circle cx="10" cy="12" r="2.2"/><circle cx="17" cy="18" r="2.2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5M8 3h8l-1 6 3 4H6l3-4-1-6Z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V5M7 9l5-5 5 5M5 20h14"/></svg>',
  grip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 7h.01M15 7h.01M9 12h.01M15 12h.01M9 17h.01M15 17h.01"/></svg>'
};

const categoryMeta = {
  'Продукты': { color:'#66b17d', icon:'bag', bg:'#e9f7eb' },
  'Кафе и рестораны': { color:'#e38f62', icon:'sparkles', bg:'#fff0e7' },
  'Транспорт': { color:'#9276dc', icon:'arrows', bg:'#f0ecfb' },
  'Подписки': { color:'#e6b343', icon:'pie', bg:'#fff8df' },
  'Здоровье': { color:'#dd7174', icon:'target', bg:'#fff0f0' },
  'Учёба': { color:'#6f8be1', icon:'sparkles', bg:'#edf1ff' },
  'Жильё': { color:'#c6875e', icon:'wallet', bg:'#fff1e8' },
  'Кредит': { color:'#cd7282', icon:'pie', bg:'#fff0f3' },
  'Покупки': { color:'#629bc6', icon:'bag', bg:'#ecf5fb' },
  'Захотелось': { color:'#b76ca6', icon:'sparkles', bg:'#f9eaf6' },
  'Другое': { color:'#89958f', icon:'grid', bg:'#eff2ef' },
  'Зарплата': { color:'#459d77', icon:'wallet', bg:'#e7f8ed' },
  'Фриланс': { color:'#4d94bf', icon:'sparkles', bg:'#e8f5fb' },
  'Подарки': { color:'#bc7dd4', icon:'target', bg:'#f8edfb' }
};

const isoDate = date => {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().slice(0, 10);
};
const dateFromToday = daysAgo => {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() - daysAgo);
  return isoDate(date);
};
const currentMonthKey = () => isoDate(new Date()).slice(0, 7);
const monthLabel = (date = new Date()) => new Intl.DateTimeFormat('ru-RU', { month:'long', year:'numeric' }).format(date).replace(' г.', '').replace(/^./, char => char.toUpperCase());

const initialState = {
  budget: 85000,
  transactions: [
    { id:'t1', type:'expense', title:'Продукты', category:'Продукты', amount:4350, date:dateFromToday(1) },
    { id:'t2', type:'expense', title:'Яндекс Музыка', category:'Подписки', amount:299, date:dateFromToday(2) },
    { id:'t3', type:'income', title:'Зарплата', category:'Зарплата', amount:120000, date:dateFromToday(3) },
    { id:'t4', type:'expense', title:'Такси', category:'Транспорт', amount:780, date:dateFromToday(3) },
    { id:'t5', type:'expense', title:'Ужин с друзьями', category:'Кафе и рестораны', amount:2400, date:dateFromToday(5) },
    { id:'t6', type:'expense', title:'Кроссовки', category:'Покупки', amount:6490, date:dateFromToday(7) },
    { id:'t7', type:'income', title:'Фриланс-проект', category:'Фриланс', amount:34000, date:dateFromToday(10) },
    { id:'t8', type:'expense', title:'Аптека', category:'Здоровье', amount:1170, date:dateFromToday(12) },
    { id:'t9', type:'expense', title:'Кофе', category:'Кафе и рестораны', amount:420, date:dateFromToday(14) },
    { id:'t10', type:'expense', title:'Метро', category:'Транспорт', amount:720, date:dateFromToday(17) },
    { id:'t11', type:'income', title:'Кэшбэк', category:'Другое', amount:1340, date:dateFromToday(20) }
  ],
  shopping: [
    {id:'s1', title:'Наушники Sony', amount:12990, category:'Покупки', priority:'high', date:dateFromToday(-3), done:false},
    {id:'s2', title:'Кроссовки для бега', amount:7990, category:'Здоровье', priority:'normal', date:dateFromToday(-12), done:false},
    {id:'s3', title:'Книга «Атомные привычки»', amount:890, category:'Учёба', priority:'low', date:'', done:false},
    {id:'s4', title:'Бумажные полотенца', amount:350, category:'Продукты', priority:'normal', date:'', done:true}
  ],
  plans: [
    {id:'p1', kind:'payment', title:'Оплатить общежитие', category:'Жильё', amount:7800, date:dateFromToday(-5), done:false},
    {id:'p2', kind:'payment', title:'Платёж по кредиту', category:'Кредит', amount:12500, date:dateFromToday(-9), done:false},
    {id:'p3', kind:'purchase', title:'Планшет для учёбы', category:'Учёба', amount:39990, date:dateFromToday(-21), done:false}
  ],
  notes: [
    {id:'n1', text:'Хочу планировать покупки заранее и оставлять место для приятных мелочей.', mood:'idea', date:dateFromToday(0)}
  ]
};

const clone = data => JSON.parse(JSON.stringify(data));
let state;
try { state = JSON.parse(localStorage.getItem('schetchik-state')); } catch { state = null; }
function normalizeState() {
  if (!state || typeof state !== 'object') state = clone(initialState);
  for (const key of ['transactions', 'shopping', 'plans', 'notes']) if (!Array.isArray(state[key])) state[key] = clone(initialState[key]);
  if (!(Number(state.budget) > 0)) state.budget = initialState.budget;
  state.shopping = state.shopping.map(item => ({ category:'Покупки', priority:'normal', date:'', ...item }));
  state.plans = state.plans.map(item => ({ ...item, kind:item.kind === 'goal' ? 'purchase' : (item.kind || 'payment') }));
  state.notes = state.notes.map((item, index) => ({ mood:'calm', pinned:false, time:'', createdAt:Number(String(item.id || '').replace(/\D/g, '')) || index, ...item }));
}
normalizeState();
let transactionType = 'expense';
let planType = 'payment';
let editingPlanId = null;
let editingNoteId = null;
let editingTransactionId = null;
let editingShoppingId = null;
let showBalance = true;
let activeFilter = 'all';
let searchText = '';

const qs = selector => document.querySelector(selector);
const qsa = selector => [...document.querySelectorAll(selector)];
const fmt = value => new Intl.NumberFormat('ru-RU', { maximumFractionDigits:0 }).format(Math.round(value)) + ' ₽';
const shortFmt = value => new Intl.NumberFormat('ru-RU', { notation:'compact', maximumFractionDigits:1 }).format(value).replace(/\s/g,'') + ' ₽';
const dateDisplay = date => new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'short' }).format(new Date(date + 'T12:00:00')).replace('.', '');
const save = () => { try { localStorage.setItem('schetchik-state', JSON.stringify(state)); } catch { /* хранилище недоступно */ } };
const monthTransactions = () => state.transactions.filter(item => item.date.startsWith(currentMonthKey()));
const sum = (items, property='amount') => items.reduce((total, item) => total + Number(item[property] || 0), 0);

function setIcons() { qsa('[data-icon]').forEach(el => { const name = el.dataset.icon; if (icons[name]) el.innerHTML = icons[name]; }); }

function iconFor(category) { return categoryMeta[category] || categoryMeta['Другое']; }
function transactionHTML(item, detailed = false) {
  const meta = iconFor(item.category);
  const sign = item.type === 'income' ? '+' : '−';
  return `<div class="transaction" data-id="${item.id}">
    <div class="transaction-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</div>
    <div class="transaction-info"><span class="transaction-title">${escapeHtml(item.title)}</span><span class="transaction-sub">${item.category} · ${dateDisplay(item.date)}</span></div>
    <span class="transaction-amount ${item.type}-amount">${sign}${fmt(item.amount)}</span>
    ${detailed ? `<button class="delete-transaction" title="Редактировать" aria-label="Редактировать" data-edit-transaction="${item.id}">${icons.edit}</button><button class="delete-transaction" title="Удалить" aria-label="Удалить" data-delete-transaction="${item.id}">${icons.trash}</button>` : ''}
  </div>`;
}
function escapeHtml(text) { const d = document.createElement('div'); d.textContent = text; return d.innerHTML; }

function renderDashboard() {
  const items = monthTransactions();
  const income = sum(items.filter(i => i.type === 'income'));
  const expenses = sum(items.filter(i => i.type === 'expense'));
  const balance = sum(state.transactions.filter(i => i.type === 'income')) - sum(state.transactions.filter(i => i.type === 'expense'));
  const progress = Math.min(100, Math.round((expenses / state.budget) * 100));
  qs('#currentBalance').textContent = showBalance ? fmt(balance) : '••••••';
  qs('#incomeTotal').textContent = fmt(income);
  qs('#expenseTotal').textContent = fmt(expenses);
  qs('#chartTotal').textContent = fmt(expenses);
  qs('#budgetProgress').textContent = progress + '%';
  qs('#budgetSubtitle').textContent = `${fmt(expenses)} из ${fmt(state.budget)}`;
  qs('#balanceMonth').textContent = monthLabel();
  qs('#chartMonth').textContent = monthLabel();
  qs('#balanceChange').textContent = `+${Math.max(1, Math.round(((income - expenses) / Math.max(income, 1)) * 100))}%`;
  const circle = qs('#progressRing .ring-value');
  circle.style.strokeDasharray = `${progress} ${100 - progress}`;
  renderCategoryChart(items.filter(i => i.type === 'expense'), expenses);
  renderBarChart();
  qs('#recentTransactions').innerHTML = state.transactions.slice().sort((a,b) => b.date.localeCompare(a.date)).slice(0,4).map(i => transactionHTML(i)).join('');
}

function renderCategoryChart(expenses, total) {
  const amounts = Object.entries(expenses.reduce((result, item) => { result[item.category] = (result[item.category] || 0) + item.amount; return result; }, {})).sort((a,b)=>b[1]-a[1]).slice(0,4);
  const palette = amounts.map(([cat]) => iconFor(cat).color);
  let at = 0;
  const stops = amounts.map(([,amount], i) => { const from = at; at += (amount / Math.max(total, 1)) * 100; return `${palette[i]} ${from.toFixed(1)}% ${at.toFixed(1)}%`; });
  qs('#donutChart').style.background = total ? `conic-gradient(${stops.join(',')})` : 'var(--line)';
  qs('#categoryLegend').innerHTML = amounts.length ? amounts.map(([cat, amount], index) => `<div class="legend-row"><i class="legend-dot" style="background:${palette[index]}"></i><span class="legend-name">${cat}</span><b class="legend-value">${shortFmt(amount)}</b><span class="legend-pct">${Math.round(amount / total * 100)}%</span></div>`).join('') : '<div class="empty-state">Пока нет расходов</div>';
}

function renderBarChart() {
  const shortMonth = offset => {
    const date = new Date();
    date.setMonth(date.getMonth() + offset);
    return new Intl.DateTimeFormat('ru-RU', { month:'short' }).format(date).replace('.', '').replace(/^./, char => char.toUpperCase()).slice(0, 3);
  };
  const periods = [
    [shortMonth(-5), 97000, 56000], [shortMonth(-4), 118000, 67000], [shortMonth(-3), 105000, 52200], [shortMonth(-2), 132000, 74000], [shortMonth(-1), 109000, 60300],
    [shortMonth(0), sum(monthTransactions().filter(i=>i.type==='income')), sum(monthTransactions().filter(i=>i.type==='expense'))]
  ];
  const max = Math.max(...periods.flatMap(x=>[x[1],x[2]]), 1);
  qs('#barChart').innerHTML = periods.map(([label, income, expense]) => `<div><div class="bar-set"><span class="bar income-bar" style="height:${Math.max(4, income/max*100)}%" title="Доходы: ${fmt(income)}"></span><span class="bar expense-bar" style="height:${Math.max(4, expense/max*100)}%" title="Расходы: ${fmt(expense)}"></span></div><div class="bar-label">${label}</div></div>`).join('');
}

function renderTransactions() {
  const filtered = state.transactions.slice().sort((a,b)=>b.date.localeCompare(a.date)).filter(item => (activeFilter === 'all' || item.type === activeFilter) && `${item.title} ${item.category}`.toLowerCase().includes(searchText));
  qs('#allTransactions').innerHTML = filtered.length ? filtered.map(i => transactionHTML(i, true)).join('') : '<div class="empty-state"><span>⌕</span>Ничего не нашлось</div>';
}

function renderBudget() {
  const expenses = monthTransactions().filter(i=>i.type==='expense'); const spent = sum(expenses); const remaining = state.budget - spent;
  qs('#budgetTotalLarge').textContent = fmt(state.budget); qs('#budgetSpentLarge').textContent = fmt(spent); qs('#budgetLeftLarge').textContent = fmt(Math.max(0, remaining));
  const weights = { 'Продукты':.22, 'Кафе и рестораны':.10, 'Транспорт':.08, 'Подписки':.05, 'Покупки':.10, 'Захотелось':.06, 'Здоровье':.06, 'Учёба':.12, 'Жильё':.12, 'Кредит':.06, 'Другое':.03 };
  qs('#budgetCategories').innerHTML = Object.entries(weights).map(([category, weight]) => {
    const limit = Math.round(state.budget * weight); const actual = sum(expenses.filter(i=>i.category===category)); const percent = Math.min(100, actual / limit * 100); const meta = iconFor(category); const overspend = actual > limit;
    return `<div class="budget-category"><div class="budget-category-top"><div class="budget-cat-label"><span class="budget-cat-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</span>${category}</div><span class="budget-numbers"><b>${fmt(actual)}</b> / ${fmt(limit)}</span></div><div class="budget-track"><div class="budget-fill" style="width:${percent}%;background:${overspend ? '#e76661' : meta.color}"></div></div><div class="budget-meta"><span>${Math.round(percent)}% использовано</span><span class="${overspend ? 'budget-warning':''}">${overspend ? 'Превышен лимит' : 'Осталось ' + fmt(limit-actual)}</span></div></div>`;
  }).join('');
}


// <parser>
/* ===== Голосовой разбор: числа, даты, намерение, категория ===== */
const VOICE_UNITS = {ноль:0,один:1,одна:1,одну:1,два:2,две:2,три:3,четыре:4,пять:5,шесть:6,семь:7,восемь:8,девять:9,десять:10,одиннадцать:11,двенадцать:12,тринадцать:13,четырнадцать:14,пятнадцать:15,шестнадцать:16,семнадцать:17,восемнадцать:18,девятнадцать:19,двадцать:20,тридцать:30,сорок:40,пятьдесят:50,шестьдесят:60,семьдесят:70,восемьдесят:80,девяносто:90,сто:100,двести:200,триста:300,четыреста:400,пятьсот:500,шестьсот:600,семьсот:700,восемьсот:800,девятьсот:900,
  первого:1,второго:2,третьего:3,четвертого:4,пятого:5,шестого:6,седьмого:7,восьмого:8,девятого:9,десятого:10,одиннадцатого:11,двенадцатого:12,тринадцатого:13,четырнадцатого:14,пятнадцатого:15,шестнадцатого:16,семнадцатого:17,восемнадцатого:18,девятнадцатого:19,двадцатого:20,тридцатого:30,
  шестое:6,седьмое:7,восьмое:8,девятое:9,десятое:10,первое:1,второе:2,третье:3,четвертое:4,пятое:5};
const VOICE_MONTHS = { января:0, январь:0, февраля:1, февраль:1, марта:2, март:2, апреля:3, апрель:3, мая:4, май:4, июня:5, июнь:5, июля:6, июль:6, августа:7, август:7, сентября:8, сентябрь:8, октября:9, октябрь:9, ноября:10, ноябрь:10, декабря:11, декабрь:11 };
const MONTH_RE = '(?:' + Object.keys(VOICE_MONTHS).join('|') + ')';
const WEEKDAYS = { воскресенье:0, понедельник:1, вторник:2, среду:3, среда:3, четверг:4, пятницу:5, пятница:5, субботу:6, суббота:6 };

function normalizeSpeech(text) {
  return String(text || '').toLowerCase().replace(/ё/g, 'е').replace(/[\u00a0\u202f]/g, ' ').replace(/\s+/g, ' ').trim();
}

/* «две тысячи пятьсот» → «2500», «3 тысячи 500» → «3500», «3,5 тыс» → «3500», «3 500» → «3500» */
function wordsToDigits(text) {
  let t = normalizeSpeech(text);
  t = t.replace(/(\d+(?:[.,]\d+)?)\s*(?:тыс\.?|тысяч[а-я]*|к)(?![а-я])(?:\s+(\d{1,3})(?!\d))?/g, (_, n, rest) => String(Math.round(parseFloat(n.replace(',', '.')) * 1000) + (rest ? Number(rest) : 0)));
  t = t.replace(/(\d+(?:[.,]\d+)?)\s*(?:млн\.?|миллион[а-я]*)/g, (_, n) => String(Math.round(parseFloat(n.replace(',', '.')) * 1e6)));
  const tokens = t.split(' '); const out = []; let total = 0, current = 0, active = false;
  const flush = () => { if (active) out.push(String(total + current)); total = 0; current = 0; active = false; };
  for (const raw of tokens) {
    const word = raw.replace(/[,.!?;:]+$/, '');
    if (Object.prototype.hasOwnProperty.call(VOICE_UNITS, word)) { current += VOICE_UNITS[word]; active = true; continue; }
    if (/^тысяч[аиу]?$|^тыс$/.test(word)) { total += (current || 1) * 1000; current = 0; active = true; continue; }
    if (/^миллион(?:а|ов)?$|^млн$/.test(word)) { total += (current || 1) * 1e6; current = 0; active = true; continue; }
    if (word === 'полторы' || word === 'полтора') { current += 1.5; active = true; continue; }
    flush(); out.push(raw);
  }
  flush();
  t = out.join(' ');
  // «3 500», «12 990» → слитно (только группы по 3 цифры)
  let prev; do { prev = t; t = t.replace(/(?<![\d.,])(\d{1,3})\s(\d{3})(?!\d)/g, '$1$2'); } while (t !== prev);
  return t;
}

function voiceDate(rawText, now = new Date()) {
  const text = wordsToDigits(rawText);
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const shift = days => { const d = new Date(base); d.setDate(d.getDate() + days); return d; };
  const iso = d => isoDate(d);
  let m;
  if (/послезавтра/.test(text)) return { date: iso(shift(2)), found: true };
  if (/завтра/.test(text)) return { date: iso(shift(1)), found: true };
  if (/позавчера/.test(text)) return { date: iso(shift(-2)), found: true };
  if (/вчера/.test(text)) return { date: iso(shift(-1)), found: true };
  if (/сегодня/.test(text)) return { date: iso(shift(0)), found: true };
  if ((m = text.match(new RegExp('(\\d{1,2})\\s+(' + MONTH_RE + ')(?:\\s+(\\d{4}))?')))) {
    const day = Number(m[1]), month = VOICE_MONTHS[m[2]];
    if (day >= 1 && day <= 31) {
      const year = m[3] ? Number(m[3]) : now.getFullYear();
      let d = new Date(year, month, day, 12);
      if (!m[3] && d < today0) d = new Date(year + 1, month, day, 12);
      return { date: iso(d), found: true };
    }
  }
  if ((m = text.match(/(?<![\d.])(\d{1,2})[.\/](\d{1,2})(?:[.\/](\d{2,4}))?(?![\d])/))) {
    const day = Number(m[1]), month = Number(m[2]) - 1;
    if (day >= 1 && day <= 31 && month >= 0 && month <= 11) {
      const year = m[3] ? Number(m[3].length === 2 ? '20' + m[3] : m[3]) : now.getFullYear();
      let d = new Date(year, month, day, 12);
      if (!m[3] && d < today0) d = new Date(year + 1, month, day, 12);
      return { date: iso(d), found: true };
    }
  }
  if ((m = text.match(/через\s+(\d+)\s*(дн[а-я]*|день|недел[а-я]*|месяц[а-я]*)/))) {
    const n = Number(m[1]), unit = m[2];
    if (/^дн|^день/.test(unit)) return { date: iso(shift(n)), found: true };
    if (/^недел/.test(unit)) return { date: iso(shift(n * 7)), found: true };
    const d = new Date(base); d.setMonth(d.getMonth() + n); return { date: iso(d), found: true };
  }
  if ((m = text.match(/через\s+(недел[а-я]*|месяц[а-я]*)/))) {
    if (/^недел/.test(m[1])) return { date: iso(shift(7)), found: true };
    const d = new Date(base); d.setMonth(d.getMonth() + 1); return { date: iso(d), found: true };
  }
  if (/на выходных|в выходные|в субботу/.test(text)) { const diff = (6 - base.getDay() + 7) % 7 || 7; return { date: iso(shift(diff)), found: true }; }
  if ((m = text.match(new RegExp('(?:в|во|на|к)\\s+(' + Object.keys(WEEKDAYS).join('|') + ')')))) {
    const diff = (WEEKDAYS[m[1]] - base.getDay() + 7) % 7 || 7; return { date: iso(shift(diff)), found: true };
  }
  if (/в конце месяца|до конца месяца/.test(text)) return { date: iso(new Date(now.getFullYear(), now.getMonth() + 1, 0, 12)), found: true };
  if ((m = text.match(/(?:^|\s)(?:до|к|на)?\s*(\d{1,2})\s*(?:-?го\s+)?числа/))) {
    const day = Number(m[1]);
    if (day >= 1 && day <= 31) {
      let d = new Date(now.getFullYear(), now.getMonth(), day, 12);
      if (d < today0) d = new Date(now.getFullYear(), now.getMonth() + 1, day, 12);
      return { date: iso(d), found: true };
    }
  }
  return { date: iso(shift(7)), found: false };
}

function stripDatePhrases(text) {
  return text
    .replace(new RegExp('(?:(?<![а-яa-z\d])(?:на|к|до|в|во)\\s+)?\\d{1,2}\\s+' + MONTH_RE + '(?:\\s+\\d{4})?', 'g'), ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:на|к|до)\s+)?(?<![\d.])\d{1,2}[.\/]\d{1,2}(?:[.\/]\d{2,4})?(?![\d])/g, ' ')
    .replace(/через\s+(?:\d+\s*)?(?:дн[а-я]*|день|недел[а-я]*|месяц[а-я]*)/g, ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:на|в|к|до)\s+)?(?<![а-яa-z\d])(?:послезавтра|позавчера|завтра|сегодня|вчера)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:на|в)\s+выходных|(?<![а-яa-z\d])в\s+выходные(?![а-яa-z\d])/g, ' ')
    .replace(new RegExp('(?<![а-яa-z\d])(?:в|во|на|к)\\s+(?:' + Object.keys(WEEKDAYS).join('|') + ')(?![а-яa-z\d])', 'g'), ' ')
    .replace(/(?<![а-яa-z\d])(?:в|до)\s+конце\s+месяца|до конца месяца/g, ' ')
    .replace(/(?:(?<![а-яa-z\d])(?:до|к|на)\s+)?\d{1,2}\s*(?:-?го\s+)?числа/g, ' ');
}

function voiceAmount(rawText) {
  const text = stripDatePhrases(wordsToDigits(rawText));
  let m = text.match(/(?:за|на сумму|стоимостью|по цене|цена|ценой|около|примерно|потратил[а]?|заплатил[а]?|оплатил[а]?|получил[а]?|заработал[а]?|пришло|пришла|минус|плюс)\s*(?:порядка\s+)?(\d+(?:[.,]\d+)?)/);
  if (!m) m = text.match(/(\d+(?:[.,]\d+)?)\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))/);
  if (!m) { const all = [...text.matchAll(/(?<![\d.])(\d+(?:[.,]\d+)?)(?![\d.])/g)]; m = all.length ? all[all.length - 1] : null; }
  const amount = m ? Math.round(parseFloat(m[1].replace(',', '.'))) : 0;
  return amount > 0 && amount < 1e9 ? amount : 0;
}

const CATEGORY_RULES = [
  ['Кредит', /кредит|ипотек|рассрочк|займ/],
  ['Жильё', /общежит|аренд|квартплат|жкх|коммунал|квартир|съем|интернет|за свет|электричеств/],
  ['Подписки', /подписк|netflix|spotify|яндекс плюс|яндекс музык|кинопоиск|youtube/],
  ['Здоровье', /аптек|лекарств|врач|стоматолог|зуб|анализ|витамин|клиник|медицин|спортзал|абонемент/],
  ['Продукты', /продукт|молок|хлеб|овощ|фрукт|мясо|мяса|пятерочк|магнит|ашан|вкусвилл|(?<![а-яa-z\d])еда(?![а-яa-z\d])|(?<![а-яa-z\d])еду(?![а-яa-z\d])/],
  ['Кафе и рестораны', /кафе|ресторан|кофе|обед|ужин|завтрак|пицц|суши|бургер|доставк[а-я]* еды/],
  ['Транспорт', /такси|метро|автобус|проезд|бензин|заправк|парковк|самокат|каршеринг|электричк/],
  ['Учёба', /учеб|курс|книг|репетитор|универ|институт|семестр|тетрад|лекци|экзамен/],
];
const INCOME_RULES = [
  ['Зарплата', /зарплат|аванс|оклад|премия|премию/],
  ['Фриланс', /фриланс|проект|заказ|подработк|гонорар/],
  ['Подарки', /подарил|подарок|подарили|подарка/],
];
function voiceCategory(text, { wish = false, kind = 'expense', isPurchase = false } = {}) {
  const t = normalizeSpeech(text);
  if (kind === 'income') { for (const [cat, re] of INCOME_RULES) if (re.test(t)) return cat; return 'Другое'; }
  for (const [cat, re] of CATEGORY_RULES) if (re.test(t)) return cat;
  if (wish) return 'Захотелось';
  return isPurchase ? 'Покупки' : 'Другое';
}

const VOICE_PAYMENT_RE = /оплат|заплат|платеж|взнос|штраф|налог|кредит|ипотек|жкх|аренд|общежит|квартплат|подписк|абонемент|интернет|за свет|коммунал/;
const VOICE_WISH_RE = /(?<![а-яa-z\d])(?:хочу|хочется|захотел[а-я]*|захотелось|мечтаю|хотел[а]?|хотелось бы|хотелка)(?![а-яa-z\d])/;
const VOICE_STRONG_PLAN_RE = /(?<![а-яa-z\d])(?:хочу|хочется|захотел[а-я]*|планирую|собираюсь|мечтаю|хотел[а]?|запланируй[а-я]*|добавь(?: в)? план[а-я]*|в планы)(?![а-яa-z\d])/;
const VOICE_WEAK_PLAN_RE = /(?<![а-яa-z\d])(?:надо|нужно|необходимо|не забыть)(?![а-яa-z\d])/;
const VOICE_PAST_EXPENSE_RE = /(?<![а-яa-z\d])(?:потратил[а-я]*|купил[а-я]*|заплатил[а-я]*|оплатил[а-я]*|отдал[а-я]*|взял[а-я]*|снял[а-я]*|минус)(?![а-яa-z\d])/;
const VOICE_PAST_INCOME_RE = /(?<![а-яa-z\d])(?:получил[а-я]*|заработал[а-я]*|пришл[аои]|перевели|вернули|кэшбэк|кешбэк|зачислили|плюс)(?![а-яa-z\d])/;
const VOICE_NOTE_RE = /^(?:новая\s+)?(?:заметк[а-я]*|запиши|записать|запись|дневник|в дневник|заметь|мысль|идея|запомни)(?![а-я])[\s,:.\-—]*/;

function titleCase(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }
function cleanTitle(s) {
  let r = s.replace(/\s{2,}/g, ' ').trim();
  r = r.replace(/^(?:[,.\-—:;]|\s|(?<![а-яa-z\d])(?:на|в|во|к|до|за|по|и|а|то|что|чтобы|мне|себе|ещё|еще)(?![а-яa-z\d]))+/g, '');
  r = r.replace(/(?:[,.\-—:;]|\s|(?<![а-яa-z\d])(?:на|в|во|к|до|за|по|и|а|то|что|чтобы|ещё|еще)(?![а-яa-z\d]))+$/g, '');
  return r.trim();
}
function detectMood(text) {
  const t = normalizeSpeech(text);
  if (/идея|придумал|а что если|можно было бы/.test(t)) return 'idea';
  if (/важно|не забыть|срочно|обязательно|запомнить/.test(t)) return 'important';
  if (/(?<![а-яa-z\d])рад(?![а-яa-z\d])|(?<![а-яa-z\d])рада(?![а-яa-z\d])|круто|классн|отличн|счастлив|прекрасн|здорово|порадовал|удалось|получилось|хорош/.test(t)) return 'good';
  return 'calm';
}

/* Главная функция: фраза → { intent, ... } */
function parseVoiceCommand(transcript, { mode = 'auto', page = 'dashboard', now = new Date() } = {}) {
  const original = String(transcript || '').replace(/\s+/g, ' ').trim();
  const text = wordsToDigits(original);
  const norm = normalizeSpeech(original);
  if (!norm) return { intent: 'empty' };
  const amount = voiceAmount(original);
  const when = voiceDate(original, now);
  const noteTrigger = VOICE_NOTE_RE.test(norm);
  const infinitive = /(?<![а-яa-z\d])(?:купить|оплатить|заплатить)(?![а-яa-z\d])/.test(norm);
  const strongPlan = VOICE_STRONG_PLAN_RE.test(norm);
  const planWords = strongPlan || VOICE_WEAK_PLAN_RE.test(norm);
  const pastIncome = VOICE_PAST_INCOME_RE.test(norm) && !planWords;
  const pastExpense = VOICE_PAST_EXPENSE_RE.test(norm) && !planWords && !infinitive;
  const futureDate = when.found && when.date > isoDate(now);
  const planish = planWords || infinitive || (futureDate && !pastExpense && !pastIncome);

  let intent = mode;
  if (mode === 'auto') {
    if (noteTrigger) intent = 'note';
    else if (strongPlan || infinitive || (planish && amount)) intent = 'plan';
    else if ((pastIncome || pastExpense) && amount) intent = 'transaction';
    else if (page === 'notes') intent = 'note';
    else if (amount) intent = 'transaction';
    else intent = 'note';
  }

  if (intent === 'note') {
    let body = original.replace(new RegExp(VOICE_NOTE_RE.source, 'i'), '').trim() || original;
    body = titleCase(body.replace(/^[,.:\-—\s]+/, ''));
    return { intent: 'note', text: body, mood: detectMood(original), date: isoDate(now), complete: body.length > 0 };
  }

  const isPaymentLike = VOICE_PAYMENT_RE.test(norm);
  const wish = VOICE_WISH_RE.test(norm);
  let title = stripDatePhrases(text);
  title = title
    .replace(/(?:за|на сумму|стоимостью|по цене|цена|ценой|около|примерно|порядка)\s*\d+(?:[.,]\d+)?\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))?/g, ' ')
    .replace(/\d+(?:[.,]\d+)?\s*(?:руб[а-я.]*|₽|р(?![а-яa-z\d]))/g, ' ')
    .replace(/(?<![\d.])\d{3,}(?![\d.])/g, ' ');
  title = title
    .replace(/(?<![а-яa-z\d])(?:я\s+)?(?:очень\s+)?(?:хочу|хочется|захотел[а-я]*|захотелось|мечтаю|планирую|собираюсь|хотел[а]?|хотелось бы)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:мне\s+)?(?:надо|нужно|необходимо|не забыть|придется)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:запланируй[а-я]*|добавь(?: в)?\s*план[а-я]*|в планы|добавить|добавь)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])(?:я\s+)?(?:потратил[а-я]*|заплатил[а-я]*|получил[а-я]*|заработал[а-я]*|отдал[а-я]*|снял[а-я]*|взял[а-я]*|купил[а-я]*)(?![а-яa-z\d])/g, ' ')
    .replace(/(?<![а-яa-z\d])купить(?![а-яa-z\d])/g, ' ');
  const payVerb = /(?<![а-яa-z\d])(?:оплатить|заплатить)(?![а-яa-z\d])/.test(norm);
  title = title.replace(/(?<![а-яa-z\d])(?:оплатить|заплатить)(?![а-яa-z\d])/g, ' ');
  title = cleanTitle(title);
  if (payVerb && title) title = 'Оплатить ' + title;
  if (!title) title = intent === 'plan' ? (isPaymentLike ? 'Платёж' : 'Покупка') : 'Операция';
  title = titleCase(title);

  if (intent === 'plan') {
    const kind = isPaymentLike ? 'payment' : 'purchase';
    const category = voiceCategory(norm, { wish, kind: 'expense', isPurchase: true });
    return { intent: 'plan', kind, title, amount, date: when.date, dateFound: when.found, category, complete: amount > 0 };
  }
  const type = pastIncome ? 'income' : 'expense';
  const category = voiceCategory(norm, { wish: false, kind: type, isPurchase: false });
  return { intent: 'transaction', type, title, amount, date: when.found ? when.date : isoDate(now), dateFound: when.found, category, complete: amount > 0 };
}
// </parser>

const plural = (n, [one, few, many]) => { const a = Math.abs(n) % 100, b = a % 10; return a > 10 && a < 20 ? many : b > 1 && b < 5 ? few : b === 1 ? one : many; };
const daysUntil = date => {
  if (!date) return Infinity;
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const due = new Date(date + 'T12:00:00'); due.setHours(0, 0, 0, 0);
  return Math.round((due - now) / 86400000);
};

/* ===== Список мелких покупок ===== */
function shoppingTiming(item) {
  if (!item.date) return { label:'Без срока', urgent:false };
  const days = daysUntil(item.date);
  if (days < 0) return { label:'Срок прошёл', urgent:true };
  if (days === 0) return { label:'Купить сегодня', urgent:true };
  if (days === 1) return { label:'Купить завтра', urgent:true };
  if (days < 8) return { label:`Через ${days} дн.`, urgent:days <= 3 };
  return { label:dateDisplay(item.date), urgent:false };
}
function shoppingItemHTML(item) {
  const meta = iconFor(item.category); const timing = shoppingTiming(item);
  const priority = item.priority === 'high' ? 'Важно' : item.priority === 'low' ? 'Можно подождать' : '';
  return `<div class="shopping-item ${item.done ? 'done':''}">
    <button class="check-control" data-toggle-shopping="${item.id}" aria-label="${item.done ? 'Вернуть в список' : 'Отметить как купленное'}">${item.done ? icons.check : ''}</button>
    <span class="shopping-icon" style="color:${meta.color};background:${meta.bg}">${icons[meta.icon]}</span>
    <div class="shopping-info"><span class="shopping-name">${escapeHtml(item.title)}</span><span class="shopping-meta ${timing.urgent ? 'urgent':''}">${item.category} · ${timing.label}</span></div>
    ${priority ? `<span class="priority-chip ${item.priority}">${priority}</span>` : ''}
    ${item.amount ? `<span class="shopping-price">${fmt(item.amount)}</span>` : ''}
    <button class="shopping-delete" data-edit-shopping="${item.id}" aria-label="Редактировать" title="Редактировать">${icons.edit}</button>
    <button class="shopping-delete" data-delete-shopping="${item.id}" aria-label="Удалить" title="Удалить">${icons.x}</button>
  </div>`;
}

/* ===== Планы ===== */
function planTiming(date) {
  const days = daysUntil(date);
  if (days === 0) return { short:'Сегодня', label:'Сегодня', urgent:true, days };
  if (days === 1) return { short:'Завтра', label:'Завтра', urgent:true, days };
  if (days > 1 && days < 8) return { short:`${days} дн.`, label:`Через ${days} дн.`, urgent:days <= 3, days };
  if (days < 0) return { short:'Просроч.', label:'Срок прошёл', urgent:true, days };
  return { short:dateDisplay(date), label:dateDisplay(date), urgent:false, days };
}
function planPreviewHTML(item) {
  const timing = planTiming(item.date);
  return `<div class="plan-preview"><span class="plan-date-badge ${timing.urgent ? 'urgent':''}">${timing.short}</span><div class="plan-preview-info"><span class="plan-preview-title">${escapeHtml(item.title)}</span><span class="plan-preview-meta">${item.category} · ${timing.label}</span></div><b class="plan-preview-amount">${fmt(item.amount)}</b></div>`;
}
function planRowHTML(item, index, total) {
  const timing = planTiming(item.date); const isPurchase = item.kind === 'purchase'; const meta = iconFor(item.category);
  return `<article class="plan-row ${timing.urgent ? 'urgent':''} ${index === 0 ? 'top':''}" data-plan-card="${item.id}" tabindex="0" aria-label="${escapeHtml(item.title)}, приоритет ${index + 1} из ${total}">
    <button class="plan-drag-handle" type="button" title="Зажмите и тяните вверх или вниз — так меняется приоритет" aria-label="Перетащить план">${icons.grip}</button>
    <span class="plan-rank" title="Место в приоритете">${index + 1}</span>
    <div class="plan-main">
      <div class="plan-tags"><span class="plan-kind ${isPurchase ? 'purchase':''}">${isPurchase ? icons.bag : icons.wallet}${isPurchase ? 'Покупка' : 'Платёж'}</span><span class="plan-cat" style="color:${meta.color};background:${meta.bg}">${item.category}</span>${index === 0 && total > 1 ? '<span class="plan-first">Первым делом</span>' : ''}</div>
      <h3>${escapeHtml(item.title)}</h3>
    </div>
    <div class="plan-when ${timing.urgent ? 'urgent':''}"><b>${timing.label}</b><small>${dateDisplay(item.date)}</small></div>
    <b class="plan-amount">${fmt(item.amount)}</b>
    <div class="plan-card-actions">
      <button class="plan-action" type="button" data-move-plan-up="${item.id}" title="Поднять выше" aria-label="Поднять выше" ${index === 0 ? 'disabled' : ''}>${icons['arrow-up']}</button>
      <button class="plan-action" type="button" data-move-plan-down="${item.id}" title="Опустить ниже" aria-label="Опустить ниже" ${index === total - 1 ? 'disabled' : ''}>${icons['arrow-down']}</button>
      <button class="plan-action" type="button" data-edit-plan="${item.id}" title="Редактировать" aria-label="Редактировать план">${icons.edit}</button>
      <button class="plan-action delete-plan" type="button" data-delete-plan="${item.id}" title="Удалить" aria-label="Удалить план">${icons.x}</button>
    </div>
    <button class="pay-plan" data-pay-plan="${item.id}">${isPurchase ? 'Купить' : 'Оплатить'}</button>
  </article>`;
}
function renderPlans() {
  const active = state.plans.filter(item => !item.done);
  qs('#plansNavCount').textContent = active.length;
  qs('#plansPendingCount').textContent = active.length;
  qs('#plansBudgetSum').textContent = `${fmt(sum(active))} ожидается`;
  qs('#plansSubtitle').textContent = active.length ? `${active.length} ${plural(active.length, ['план','плана','планов'])} · по приоритету` : 'Нет ближайших платежей';
  qs('#plansPreview').innerHTML = active.length ? active.slice(0, 3).map(planPreviewHTML).join('') : '<div class="empty-state"><span>✓</span>Планов пока нет</div>';
  qs('#plansFull').innerHTML = active.length ? active.map((item, index) => planRowHTML(item, index, active.length)).join('') : '<div class="empty-state"><span>✓</span>Ближайших трат нет. Нажмите «+» или скажите планы голосом.</div>';
  updateBell();
}
function reorderPlan(planId, targetId, after = false) {
  const from = state.plans.findIndex(item => item.id === planId); let to = state.plans.findIndex(item => item.id === targetId);
  if (from < 0 || to < 0 || from === to) return false;
  const [moved] = state.plans.splice(from, 1);
  if (from < to) to--;
  if (after) to++;
  state.plans.splice(to, 0, moved);
  save(); renderPlans(); flashPlan(planId);
  return true;
}
function flashPlan(id) { const row = qs(`[data-plan-card="${id}"]`); if (row) { row.classList.add('moved'); setTimeout(() => row.classList.remove('moved'), 900); } }
function movePlan(id, direction) {
  const active = state.plans.filter(item => !item.done); const current = active.findIndex(item => item.id === id);
  const neighbour = active[current + direction];
  if (current < 0 || !neighbour) { toast(direction < 0 ? 'Этот план уже первый' : 'Этот план уже последний'); return false; }
  const done = reorderPlan(id, neighbour.id, direction > 0);
  if (done) toast(direction < 0 ? `Поднято на место №${current}` : `Опущено на место №${current + 2}`);
  return done;
}

/* Перетаскивание мышью, пальцем и пером (Pointer Events) за иконку «точки» */
let drag = null;
document.addEventListener('pointerdown', e => {
  const handle = e.target.closest('.plan-drag-handle'); if (!handle) return;
  const row = handle.closest('[data-plan-card]'); if (!row) return;
  e.preventDefault();
  drag = { id:row.dataset.planCard, row, startY:e.clientY, startScroll:window.scrollY, pointerId:e.pointerId, target:null, after:false };
  row.classList.add('dragging'); document.body.classList.add('is-dragging');
  try { handle.setPointerCapture(e.pointerId); } catch {}
});
document.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.pointerId) return;
  if (e.clientY < 70) window.scrollBy(0, -16); else if (e.clientY > window.innerHeight - 70) window.scrollBy(0, 16);
  drag.row.style.transform = `translateY(${e.clientY - drag.startY + (window.scrollY - drag.startScroll)}px)`;
  const rows = qsa('[data-plan-card]').filter(row => row !== drag.row);
  rows.forEach(row => row.classList.remove('drop-before', 'drop-after'));
  drag.target = null;
  if (!rows.length) return;
  const first = rows[0].getBoundingClientRect(), last = rows[rows.length - 1].getBoundingClientRect();
  if (e.clientY < first.top + first.height / 2) { drag.target = rows[0]; drag.after = false; }
  else if (e.clientY > last.top + last.height / 2) { drag.target = rows[rows.length - 1]; drag.after = true; }
  else for (const row of rows) { const box = row.getBoundingClientRect(); if (e.clientY >= box.top && e.clientY <= box.bottom) { drag.target = row; drag.after = e.clientY > box.top + box.height / 2; break; } }
  drag.target?.classList.add(drag.after ? 'drop-after' : 'drop-before');
});
function finishDrag(cancelled) {
  if (!drag) return;
  const { id, row, target, after } = drag; drag = null;
  row.style.transform = ''; row.classList.remove('dragging'); document.body.classList.remove('is-dragging');
  qsa('.drop-before,.drop-after').forEach(el => el.classList.remove('drop-before', 'drop-after'));
  if (!cancelled && target && reorderPlan(id, target.dataset.planCard, after)) {
    const place = qsa('[data-plan-card]').findIndex(el => el.dataset.planCard === id) + 1;
    toast(`Приоритет обновлён: план теперь №${place}`);
  }
}
document.addEventListener('pointerup', e => { if (drag && e.pointerId === drag.pointerId) finishDrag(false); });
document.addEventListener('pointercancel', () => finishDrag(true));
document.addEventListener('keydown', e => {
  const row = e.target.closest?.('[data-plan-card]');
  if (!row || e.target !== row || !e.altKey || (e.key !== 'ArrowUp' && e.key !== 'ArrowDown')) return;
  e.preventDefault(); const id = row.dataset.planCard;
  if (movePlan(id, e.key === 'ArrowUp' ? -1 : 1)) qs(`[data-plan-card="${id}"]`)?.focus();
});

/* ===== Заметки (мини-дневник) ===== */
const noteMoods = {
  calm: { label:'Спокойно', icon:'☁', className:'calm' },
  good: { label:'Хорошо', icon:'☀', className:'good' },
  idea: { label:'Идея', icon:'✦', className:'idea' },
  important: { label:'Важно', icon:'!', className:'important' }
};
const noteQuestions = ['Что сегодня порадовало?', 'За что вы благодарны сегодня?', 'Какая трата сегодня была удачной, а какая — лишней?', 'Чему вы научились на этой неделе?', 'Какую маленькую победу хочется отметить?', 'Что бы вы улучшили в завтрашнем дне?', 'Чего вам хочется купить и зачем это вам?', 'Что сейчас беспокоит? Выпишите — станет легче.', 'Какая идея крутится в голове?', 'Кому хочется сказать спасибо?'];
let noteFilter = { mood:'all', query:'' };
function noteDateDisplay(date) { return new Intl.DateTimeFormat('ru-RU', { day:'numeric', month:'long' }).format(new Date(date + 'T12:00:00')); }
function noteGroupLabel(date) {
  const d = daysUntil(date);
  const long = new Intl.DateTimeFormat('ru-RU', { weekday:'long', day:'numeric', month:'long' }).format(new Date(date + 'T12:00:00'));
  return d === 0 ? `Сегодня · ${noteDateDisplay(date)}` : d === -1 ? `Вчера · ${noteDateDisplay(date)}` : long.replace(/^./, c => c.toUpperCase());
}
function noteBodyHTML(text) {
  return escapeHtml(text).replace(/(^|\s)#([\p{L}\d_]{2,30})/gu, (m, space, tag) => `${space}<button type="button" class="note-tag" data-note-tag="${tag.toLowerCase()}">#${tag}</button>`).replace(/\n/g, '<br>');
}
function noteHTML(item) {
  const mood = noteMoods[item.mood] || noteMoods.calm;
  return `<article class="note-card ${item.pinned ? 'pinned':''}"><div class="note-card-top"><span class="note-mood ${mood.className}" title="${mood.label}">${mood.icon}</span><span class="note-date">${item.time ? item.time + ' · ' : ''}${mood.label}</span><div class="note-actions"><button class="note-action ${item.pinned ? 'on':''}" type="button" data-pin-note="${item.id}" aria-label="${item.pinned ? 'Открепить' : 'Закрепить'}" title="${item.pinned ? 'Открепить' : 'Закрепить сверху'}">${icons.pin}</button><button class="note-action" type="button" data-edit-note="${item.id}" aria-label="Редактировать заметку" title="Редактировать">${icons.edit}</button><button class="note-action note-delete" type="button" data-delete-note="${item.id}" aria-label="Удалить заметку" title="Удалить">${icons.x}</button></div></div><p>${noteBodyHTML(item.text)}</p></article>`;
}
function noteStreak() {
  const days = new Set(state.notes.map(n => n.date)); let streak = 0; const cursor = new Date(); cursor.setHours(12, 0, 0, 0);
  if (!days.has(isoDate(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(isoDate(cursor))) { streak++; cursor.setDate(cursor.getDate() - 1); }
  return streak;
}
function renderNotes() {
  const todayKey = isoDate(new Date());
  const q = noteFilter.query.trim().toLowerCase();
  const all = state.notes.slice();
  const filtered = all.filter(n => (noteFilter.mood === 'all' || n.mood === noteFilter.mood) && (!q || (q.startsWith('#') ? new RegExp('(^|\\s)' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![\\p{L}\\d_])', 'iu').test(n.text) : n.text.toLowerCase().includes(q))));
  const order = (a, b) => b.date.localeCompare(a.date) || (b.createdAt || 0) - (a.createdAt || 0);
  const pinned = filtered.filter(n => n.pinned).sort(order);
  const rest = filtered.filter(n => !n.pinned).sort(order);
  qs('#notesTodayCount').textContent = all.filter(n => n.date === todayKey).length;
  qs('#notesTotalCount').textContent = all.length;
  const streak = noteStreak(); qs('#notesStreak').textContent = streak;
  qs('#notesSubtitle').textContent = all.length ? `Записей: ${all.length}${filtered.length !== all.length ? ` · найдено: ${filtered.length}` : ''}` : 'Запишите мысль, чтобы вернуться к ней позже.';
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const question = noteQuestions[dayOfYear % noteQuestions.length];
  qs('#notePrompt').innerHTML = `<span data-icon="sparkles"></span><div><b>Вопрос дня</b><small>${question}</small></div><button type="button" class="wide-subtle-button" data-use-prompt="${escapeHtml(question)}">Ответить</button>`;
  setIcons();
  let html = '';
  if (pinned.length) html += `<h3 class="note-group-title">Закреплённые</h3>` + pinned.map(noteHTML).join('');
  let lastDate = '';
  for (const note of rest) { if (note.date !== lastDate) { lastDate = note.date; html += `<h3 class="note-group-title">${noteGroupLabel(note.date)}</h3>`; } html += noteHTML(note); }
  qs('#notesList').innerHTML = html || (all.length ? '<div class="empty-state notes-empty"><span>⌕</span>Ничего не найдено. Сбросьте поиск или фильтр.</div>' : '<div class="empty-state notes-empty"><span>✦</span>Первая заметка уже ждёт вас</div>');
}

/* ===== Рендер списка покупок ===== */
function renderShopping() {
  const weight = { high:0, normal:1, low:2 };
  const dateOrder = item => item.date || '9999-12-31';
  const active = state.shopping.filter(i => !i.done).sort((a, b) => weight[a.priority] - weight[b.priority] || dateOrder(a).localeCompare(dateOrder(b)) || a.title.localeCompare(b.title));
  const done = state.shopping.filter(i => i.done);
  qs('#shoppingPendingCount').textContent = active.length; qs('#shoppingBudgetSum').textContent = `${fmt(sum(active))} запланировано`;
  qs('#shoppingSubtitle').textContent = active.length ? `${active.length} ${plural(active.length, ['покупка','покупки','покупок'])} · мелочи на каждый день, крупное — в планах выше` : 'Всё куплено';
  const focus = active.filter(item => item.priority === 'high' || (item.date && daysUntil(item.date) <= 7));
  qs('#purchaseFocus').innerHTML = focus.length ? `<span data-icon="target"></span><div><b>${focus.length === 1 ? 'Покупка в фокусе' : `${focus.length} ${plural(focus.length, ['покупка','покупки','покупок'])} в фокусе`}</b><small>${fmt(sum(focus))} — важные или со сроком на неделю</small></div>` : `<span data-icon="sparkles"></span><div><b>Спокойный список</b><small>Отметьте важность или дату, чтобы ничего не упустить</small></div>`;
  setIcons();
  qs('#shoppingFull').innerHTML = active.length ? active.map(shoppingItemHTML).join('') : '<div class="empty-state"><span>✓</span>Всё куплено — можно отдыхать</div>';
  const wasOpen = !qs('#completedList').hidden;
  qs('#completedCount').textContent = done.length; qs('#completedList').innerHTML = done.map(shoppingItemHTML).join('');
  qs('#completedList').hidden = !(wasOpen && done.length);
}

function renderAll() { renderDashboard(); renderTransactions(); renderBudget(); renderPlans(); renderShopping(); renderNotes(); }

/* ===== Общие утилиты интерфейса ===== */
function openModal(id) {
  const modal = qs(`#${id}`); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  if (id !== 'voiceModal' && id !== 'dataModal') setTimeout(() => qs(`#${id} input:not([type="hidden"]), #${id} textarea`)?.focus(), 150);
}
function closeModals() { stopVoice(); qsa('.modal-backdrop').forEach(el => { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }); }
let toastTimer;
function toast(message, undoFn = null) {
  const box = qs('#toast'); const button = qs('#toastUndo');
  qs('#toastText').textContent = message;
  button.hidden = !undoFn; button.onclick = undoFn ? () => { box.classList.remove('show'); undoFn(); } : null;
  box.classList.toggle('has-action', !!undoFn); box.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => box.classList.remove('show'), undoFn ? 6500 : 2800);
}
/* Любое изменение данных: снимок → правка → сохранение → перерисовка → «Отменить» */
function commit(message, mutator, { undo = true } = {}) {
  const before = JSON.stringify(state);
  mutator(); save(); renderAll();
  toast(message, undo ? () => { state = JSON.parse(before); normalizeState(); save(); renderAll(); toast('Действие отменено'); } : null);
}
function validateForm(form) {
  form.querySelectorAll('.field.invalid').forEach(field => field.classList.remove('invalid'));
  for (const control of form.querySelectorAll('[required]')) {
    const value = String(control.value || '').trim();
    const bad = !value || (control.type === 'number' && !(Number(value) > 0));
    if (bad) {
      const field = control.closest('.field'); field?.classList.add('invalid');
      const label = (field?.querySelector('span')?.textContent || 'поле').split(',')[0].replace('?', '').trim();
      toast(control.type === 'number' && value ? `«${label}» должна быть больше нуля` : `Заполните поле «${label}»`);
      control.focus(); return false;
    }
  }
  return true;
}
function updateBell() {
  const urgent = state.plans.filter(p => !p.done && daysUntil(p.date) <= 3);
  const dot = qs('.notification i'); if (dot) dot.style.display = urgent.length ? '' : 'none';
}

function activatePage(page) {
  const target = qs(`#${page}`) && qs(`#${page}`).classList.contains('page') ? page : 'dashboard';
  qsa('.page').forEach(el => el.classList.toggle('active', el.id === target));
  qsa('[data-page]').forEach(el => el.classList.toggle('active', el.dataset.page === target));
  const titles = { dashboard:'Доброе утро, Дмитрий <span class="wave">👋</span>', transactions:'Все операции', budget:'Ваш бюджет', shopping:'Планы и покупки', notes:'Заметки' };
  qs('#pageTitle').innerHTML = titles[target]; window.scrollTo({ top:0, behavior:'smooth' });
}

const expenseCategories = () => Object.keys(categoryMeta).filter(key => !['Зарплата','Фриланс','Подарки'].includes(key));
function populateCategories() { const options = expenseCategories().map(c => `<option>${c}</option>`).join(''); qs('#categorySelect').innerHTML = options; qs('#planCategorySelect').innerHTML = options; qs('#shoppingCategorySelect').innerHTML = options; }
function refreshCategorySelect() { const select = qs('#categorySelect'); const allowed = transactionType === 'income' ? ['Зарплата','Фриланс','Подарки','Другое'] : expenseCategories(); select.innerHTML = allowed.map(c => `<option>${c}</option>`).join(''); }

/* ===== Формы: операции, покупки, планы, заметки ===== */
function setTransactionType(type) {
  transactionType = type === 'income' ? 'income' : 'expense';
  qsa('.type-option').forEach(el => el.classList.toggle('active', el.dataset.type === transactionType));
  refreshCategorySelect();
}
function openTransactionForm(item = null, prefill = null) {
  const form = qs('#transactionForm'); const source = item || prefill;
  editingTransactionId = item?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  setTransactionType(source?.type || 'expense');
  qs('#transactionModalEyebrow').textContent = item ? 'Редактирование' : 'Новая запись';
  qs('#transactionModalTitle').textContent = item ? 'Изменить операцию' : 'Добавить операцию';
  qs('#transactionSubmit').innerHTML = `${item ? 'Сохранить изменения' : 'Сохранить операцию'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || isoDate(new Date());
  if (source) {
    form.elements.title.value = source.title || ''; form.elements.amount.value = source.amount || '';
    if (source.category) form.elements.category.value = source.category;
  }
  openModal('transactionModal');
}
function openShoppingForm(item = null) {
  const form = qs('#shoppingForm'); editingShoppingId = item?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  qs('#shoppingModalEyebrow').textContent = item ? 'Редактирование' : 'План покупок';
  qs('#shoppingModalTitle').textContent = item ? 'Изменить покупку' : 'Добавить в список';
  qs('#shoppingSubmit').innerHTML = `${item ? 'Сохранить изменения' : 'Добавить в список'} ${icons['arrow-right']}`;
  form.elements.date.value = item ? (item.date || '') : dateFromToday(-7);
  if (item) { form.elements.title.value = item.title; form.elements.amount.value = item.amount || ''; form.elements.category.value = item.category; form.elements.priority.value = item.priority; }
  openModal('shoppingModal');
}
const planTypeHints = {
  payment: 'Платёж — то, что нужно оплатить в срок: общежитие, кредит, подписка.',
  purchase: 'Покупка — вещь, которую хотите купить: наушники, куртка, планшет.'
};
function setPlanType(type) {
  planType = type === 'goal' ? 'purchase' : type;
  qsa('.plan-type-option').forEach(button => button.classList.toggle('active', button.dataset.planType === planType));
  qs('#planDateLabel').textContent = planType === 'purchase' ? 'Когда купить?' : 'Когда оплатить?';
  qs('#planTypeHint').textContent = planTypeHints[planType];
}
function openPlanForm(plan = null, prefill = null) {
  const form = qs('#planForm'); const source = plan || prefill;
  editingPlanId = plan?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  setPlanType(source?.kind || 'payment');
  qs('#planModalEyebrow').textContent = editingPlanId ? 'Планы и покупки' : 'Будущие траты';
  qs('#planModalTitle').textContent = editingPlanId ? 'Редактировать план' : 'Добавить план';
  qs('#planFormSubmit').innerHTML = `${editingPlanId ? 'Сохранить изменения' : 'Добавить в планы'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || dateFromToday(-7);
  if (source) {
    form.elements.title.value = source.title || ''; form.elements.amount.value = source.amount || '';
    if (source.category) form.elements.category.value = source.category;
  }
  openModal('planModal');
}
function openNoteForm(note = null, prefill = null) {
  const form = qs('#noteForm'); const source = note || prefill;
  editingNoteId = note?.id || null;
  form.reset(); form.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  qs('#noteModalTitle').textContent = editingNoteId ? 'Редактировать заметку' : 'Новая заметка';
  qs('#noteFormSubmit').innerHTML = `${editingNoteId ? 'Сохранить изменения' : 'Сохранить заметку'} ${icons['arrow-right']}`;
  form.elements.date.value = source?.date || isoDate(new Date());
  if (source) { form.elements.text.value = source.text || ''; form.elements.mood.value = source.mood || 'calm'; }
  openModal('noteModal');
}

/* ===== Голосовой помощник ===== */
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const voice = { mode:'auto', rec:null, listening:false, parsed:null, timer:null, error:null, base:'' };
function setVoiceStatus(message, kind = '') { const el = qs('#voiceStatus'); el.textContent = message; el.className = 'voice-status ' + kind; }
function currentPage() { return location.hash.slice(1) || 'dashboard'; }
function setVoiceUI() {
  qsa('.voice-button,.voice-form-button,.voice-fab').forEach(b => b.classList.toggle('listening', voice.listening));
  qs('#voiceMic').classList.toggle('listening', voice.listening);
  qs('#voiceMic').setAttribute('aria-label', voice.listening ? 'Остановить запись' : 'Начать запись');
}
function openVoice(mode = 'auto', { autoStart = true } = {}) {
  voice.mode = mode; voice.error = null;
  qsa('[data-voice-mode]').forEach(b => b.classList.toggle('active', b.dataset.voiceMode === mode));
  qs('#voiceText').value = '';
  updateVoicePreview(); openModal('voiceModal');
  if (!SpeechRec) { setVoiceStatus('Этот браузер не умеет слушать. Наберите фразу ниже — разберу её так же.', 'warn'); setTimeout(() => qs('#voiceText').focus(), 200); return; }
  if (!window.isSecureContext) setVoiceStatus('Микрофон работает только по https:// или на localhost. Пока можно набрать фразу вручную.', 'warn');
  else setVoiceStatus('Нажмите на микрофон и говорите', '');
  if (autoStart && window.isSecureContext) startListening();
}
function stopVoice() { cancelCountdown(); try { voice.rec?.abort(); } catch {} voice.rec = null; voice.listening = false; if (qs('#voiceMic')) setVoiceUI(); }
function closeVoice() { stopVoice(); const modal = qs('#voiceModal'); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
const voiceErrors = {
  'not-allowed': 'Нет доступа к микрофону. Разрешите его в настройках сайта (значок замка рядом с адресом). Если файл открыт как file:// — запустите через локальный сервер или https.',
  'service-not-allowed': 'Браузер запретил распознавание речи. Проверьте разрешения для микрофона и сайта.',
  'no-speech': 'Ничего не услышал — нажмите на микрофон и повторите.',
  'audio-capture': 'Микрофон не найден или занят другим приложением.',
  'network': 'Нет связи с сервисом распознавания (Chrome отправляет звук на сервер). Проверьте интернет или наберите фразу вручную.',
  'language-not-supported': 'Русский язык распознавания недоступен в этом браузере.'
};
function startListening() {
  if (!SpeechRec) return;
  cancelCountdown(); try { voice.rec?.abort(); } catch {}
  const rec = new SpeechRec(); voice.rec = rec; voice.error = null; voice.base = qs('#voiceText').value.trim();
  rec.lang = 'ru-RU'; rec.interimResults = true; rec.continuous = false; rec.maxAlternatives = 1;
  rec.onstart = () => { voice.listening = true; setVoiceUI(); setVoiceStatus('Слушаю… говорите обычной фразой', 'listening'); };
  rec.onresult = event => {
    let finalText = '', interim = '';
    for (let i = 0; i < event.results.length; i++) { const r = event.results[i]; if (r.isFinal) finalText += r[0].transcript + ' '; else interim += r[0].transcript + ' '; }
    qs('#voiceText').value = [voice.base, finalText, interim].join(' ').replace(/\s+/g, ' ').trim();
    updateVoicePreview();
  };
  rec.onerror = event => {
    if (event.error === 'aborted') return;
    voice.error = event.error; setVoiceStatus(voiceErrors[event.error] || `Не удалось распознать речь (${event.error}). Попробуйте ещё раз или наберите фразу.`, 'warn');
  };
  rec.onend = () => {
    if (voice.rec !== rec) return;
    voice.listening = false; setUIAfterEnd();
  };
  const setUIAfterEnd = () => {
    setVoiceUI();
    const text = qs('#voiceText').value.trim();
    if (voice.error) return;
    if (!text) { setVoiceStatus('Ничего не услышал — нажмите на микрофон и повторите', 'warn'); return; }
    updateVoicePreview();
    if (voice.parsed?.complete) { setVoiceStatus('Готово. Сейчас добавлю — можно поправить текст или отменить', 'ok'); startCountdown(); }
    else setVoiceStatus('Поправьте текст или откройте форму, чтобы дополнить', 'warn');
  };
  try { rec.start(); } catch { setVoiceStatus('Не удалось запустить микрофон. Нажмите ещё раз.', 'warn'); }
}
function voiceConfirmLabel(p) {
  if (!p || p.intent === 'empty') return 'Добавить';
  if (p.intent === 'note') return 'Сохранить заметку';
  if (!p.complete) return 'Открыть форму и указать сумму';
  if (p.intent === 'plan') return 'Добавить в планы';
  return p.type === 'income' ? 'Добавить доход' : 'Добавить расход';
}
function updateVoicePreview() {
  const text = qs('#voiceText').value.trim();
  const page = currentPage();
  const p = text ? parseVoiceCommand(text, { mode:voice.mode, page }) : null;
  voice.parsed = p;
  const row = (label, value) => `<div class="vp-row"><span>${label}</span><b>${value}</b></div>`;
  let html = '<p class="voice-empty">Здесь появится, как я понял вашу фразу.</p>';
  if (p && p.intent !== 'empty') {
    const meta = iconFor(p.category); const cat = p.category ? `<i class="vp-dot" style="background:${meta.color}"></i>${p.category}` : '';
    const amount = p.amount ? fmt(p.amount) : '<em class="warn">не указана — скажите, например, «за 3500»</em>';
    const dateText = `${dateDisplay(p.date)}${p.dateFound ? '' : ' <em>дата не названа — поставил через неделю</em>'}`;
    if (p.intent === 'plan') html = row('Что', `План · ${p.kind === 'purchase' ? 'Покупка' : 'Платёж'}`) + row('Название', escapeHtml(p.title)) + row('Сумма', amount) + row('Когда', dateText) + row('Категория', cat);
    else if (p.intent === 'transaction') html = row('Что', p.type === 'income' ? 'Доход' : 'Расход') + row('Название', escapeHtml(p.title)) + row('Сумма', amount) + row('Дата', dateDisplay(p.date)) + row('Категория', cat);
    else html = row('Что', `Заметка · ${noteMoods[p.mood].label}`) + row('Текст', escapeHtml(p.text.length > 140 ? p.text.slice(0, 140) + '…' : p.text));
  }
  qs('#voicePreview').innerHTML = html;
  const confirm = qs('#voiceConfirm'); confirm.disabled = !p || p.intent === 'empty'; confirm.innerHTML = voiceConfirmLabel(p);
  qs('#voiceEditForm').hidden = !p || p.intent === 'empty' || p.intent === 'note';
}
function cancelCountdown() { clearTimeout(voice.timer); voice.timer = null; if (voice.counting) { voice.counting = false; if (qs('#voiceConfirm')) qs('#voiceConfirm').innerHTML = voiceConfirmLabel(voice.parsed); } }
function startCountdown() {
  cancelCountdown(); voice.counting = true; let left = 3;
  const tick = () => {
    if (!voice.counting) return;
    if (left <= 0) { voice.counting = false; confirmVoice(); return; }
    qs('#voiceConfirm').innerHTML = `${voiceConfirmLabel(voice.parsed)} · ${left}`;
    left--; voice.timer = setTimeout(tick, 1000);
  };
  tick();
}
function describePlan(p) { return `«${p.title}» · ${fmt(p.amount)} · ${dateDisplay(p.date)} · ${p.category}`; }
function confirmVoice() {
  cancelCountdown();
  const p = voice.parsed; if (!p || p.intent === 'empty') return;
  const planOpen = qs('#planModal').classList.contains('open'), noteOpen = qs('#noteModal').classList.contains('open'), txOpen = qs('#transactionModal').classList.contains('open');
  if (p.intent === 'plan') {
    if (planOpen) { closeVoice(); setPlanType(p.kind); const f = qs('#planForm').elements; f.title.value = p.title; if (p.amount) f.amount.value = p.amount; f.category.value = p.category; f.date.value = p.date; toast('Поля плана заполнены голосом'); return; }
    if (!p.complete) { closeModals(); openPlanForm(null, p); toast('Укажите сумму и сохраните план'); return; }
    closeModals();
    commit(`План добавлен: ${describePlan(p)}`, () => state.plans.unshift({ id:'p' + Date.now(), kind:p.kind, title:p.title, category:p.category, amount:p.amount, date:p.date, done:false }));
  } else if (p.intent === 'transaction') {
    if (txOpen) { closeVoice(); setTransactionType(p.type); const f = qs('#transactionForm').elements; f.title.value = p.title; if (p.amount) f.amount.value = p.amount; f.category.value = p.category; f.date.value = p.date; toast('Поля операции заполнены голосом'); return; }
    if (!p.complete) { closeModals(); openTransactionForm(null, p); toast('Укажите сумму и сохраните операцию'); return; }
    closeModals();
    commit(`${p.type === 'income' ? 'Доход' : 'Расход'} добавлен: «${p.title}» · ${fmt(p.amount)} · ${p.category}`, () => state.transactions.unshift({ id:'t' + Date.now(), type:p.type, title:p.title, category:p.category, amount:p.amount, date:p.date }));
  } else if (p.intent === 'note') {
    if (noteOpen) { closeVoice(); const field = qs('#noteText'); field.value = field.value ? `${field.value.trim()} ${p.text}` : p.text; qs('#noteForm').elements.mood.value = p.mood; toast('Текст добавлен в заметку'); return; }
    closeModals();
    commit('Заметка сохранена', () => state.notes.unshift({ id:'n' + Date.now(), createdAt:Date.now(), text:p.text, mood:p.mood, date:p.date, time:timeNow(), pinned:false }));
  }
}
function editVoiceInForm() {
  const p = voice.parsed; if (!p) return; cancelCountdown(); closeModals();
  if (p.intent === 'plan') openPlanForm(null, p);
  else if (p.intent === 'transaction') openTransactionForm(null, p);
  else openNoteForm(null, p);
}
const timeNow = () => new Date().toLocaleTimeString('ru-RU', { hour:'2-digit', minute:'2-digit' });

/* ===== Тема, данные, резервные копии ===== */
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('schetchik-theme', theme); } catch {}
  const toggle = qs('#themeToggle'); const isDark = theme === 'dark';
  toggle.dataset.icon = isDark ? 'sun' : 'moon';
  toggle.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
  toggle.setAttribute('title', toggle.getAttribute('aria-label'));
  toggle.innerHTML = icons[toggle.dataset.icon];
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0b1712' : '#f8f8f5');
}
function exportData() {
  const blob = new Blob([JSON.stringify({ app:'schetchik', version:8, exportedAt:new Date().toISOString(), state }, null, 2)], { type:'application/json' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `schetchik-${isoDate(new Date())}.json`;
  document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(link.href), 1500);
  toast('Копия данных скачана');
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result); const incoming = data.state || data;
      if (!incoming || !Array.isArray(incoming.transactions)) throw new Error('bad');
      closeModals(); commit('Данные загружены из копии', () => { state = incoming; normalizeState(); });
    } catch { toast('Не удалось прочитать файл копии'); }
  };
  reader.readAsText(file);
}

/* ===== Старт ===== */
setIcons();
setTheme((() => { try { return localStorage.getItem('schetchik-theme') || 'dark'; } catch { return 'dark'; } })());
populateCategories(); renderAll();
const today = new Date();
qs('#todayLabel').textContent = new Intl.DateTimeFormat('ru-RU', { weekday:'long', day:'numeric', month:'long' }).format(today).replace(/^./, x => x.toUpperCase());
qs('#transactionDate').value = isoDate(today);
qs('#planDate').value = dateFromToday(-7);
qs('#shoppingDate').value = dateFromToday(-7);
qs('#noteDate').value = isoDate(today);
qs('#budgetPageTitle').textContent = `Бюджет на ${new Intl.DateTimeFormat('ru-RU', { month:'long' }).format(today)}`;
qsa('form').forEach(form => { form.noValidate = true; });
if (!SpeechRec) qsa('.voice-button,.voice-form-button,.voice-fab').forEach(b => b.classList.add('voice-unsupported'));

window.addEventListener('hashchange', () => activatePage(location.hash.slice(1))); activatePage(location.hash.slice(1) || 'dashboard');
qsa('[data-navigate]').forEach(btn => btn.addEventListener('click', () => { location.hash = btn.dataset.navigate; }));
qs('#openTransactionModal').addEventListener('click', () => openTransactionForm()); qs('#mobileAdd').addEventListener('click', () => openTransactionForm()); qsa('[data-open-transaction]').forEach(btn => btn.addEventListener('click', () => openTransactionForm()));
qs('#openShoppingModal').addEventListener('click', () => openShoppingForm());
qs('#openPlanModal').addEventListener('click', () => openPlanForm()); qsa('[data-open-plan]').forEach(btn => btn.addEventListener('click', () => openPlanForm()));
qs('#openNoteModal').addEventListener('click', () => openNoteForm()); qsa('[data-open-note]').forEach(btn => btn.addEventListener('click', () => openNoteForm()));
qs('#voicePlan').addEventListener('click', () => openVoice('plan'));
qs('#voicePlanForm').addEventListener('click', () => openVoice('plan'));
qs('#voiceNote').addEventListener('click', () => openVoice('note'));
qs('#voiceNoteForm').addEventListener('click', () => openVoice('note'));
qs('#voiceFab').addEventListener('click', () => openVoice(currentPage() === 'notes' ? 'note' : 'auto'));
qs('#voiceMic').addEventListener('click', () => { if (voice.listening) { try { voice.rec?.stop(); } catch {} } else { cancelCountdown(); startListening(); if (!SpeechRec) qs('#voiceText').focus(); } });
qs('#voiceText').addEventListener('input', () => { cancelCountdown(); updateVoicePreview(); });
qs('#voiceText').addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); confirmVoice(); } });
qsa('[data-voice-mode]').forEach(btn => btn.addEventListener('click', () => { cancelCountdown(); voice.mode = btn.dataset.voiceMode; qsa('[data-voice-mode]').forEach(b => b.classList.toggle('active', b === btn)); updateVoicePreview(); }));
qs('#voiceConfirm').addEventListener('click', confirmVoice);
qs('#voiceEditForm').addEventListener('click', editVoiceInForm);
qs('#themeToggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
qs('#editBudget').addEventListener('click', () => { qs('#budgetForm [name="budget"]').value = state.budget; openModal('budgetModal'); });
qsa('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeModals));
qsa('.modal-backdrop').forEach(backdrop => backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModals(); }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModals(); });
document.addEventListener('input', e => e.target.closest?.('.field')?.classList.remove('invalid'));
qsa('.type-option').forEach(btn => btn.addEventListener('click', () => setTransactionType(btn.dataset.type)));
qsa('.plan-type-option').forEach(btn => btn.addEventListener('click', () => setPlanType(btn.dataset.planType)));

qs('#transactionForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingTransactionId;
  const values = { type:transactionType, title:data.get('title').trim(), category:data.get('category'), amount:Number(data.get('amount')), date:data.get('date') };
  closeModals();
  commit(id ? 'Операция обновлена' : (transactionType === 'income' ? 'Доход добавлен' : 'Расход добавлен'), () => {
    if (id) { const i = state.transactions.findIndex(t => t.id === id); if (i >= 0) state.transactions[i] = { ...state.transactions[i], ...values }; }
    else state.transactions.unshift({ id:'t' + Date.now(), ...values });
  });
  editingTransactionId = null;
});
qs('#shoppingForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingShoppingId;
  const values = { title:data.get('title').trim(), amount:Number(data.get('amount')) || 0, category:data.get('category'), priority:data.get('priority'), date:data.get('date') };
  closeModals();
  commit(id ? 'Покупка обновлена' : 'Добавлено в список покупок', () => {
    if (id) { const i = state.shopping.findIndex(t => t.id === id); if (i >= 0) state.shopping[i] = { ...state.shopping[i], ...values }; }
    else state.shopping.unshift({ id:'s' + Date.now(), ...values, done:false });
  });
  editingShoppingId = null;
});
qs('#planForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingPlanId;
  const values = { kind:planType, title:data.get('title').trim(), category:data.get('category'), amount:Number(data.get('amount')), date:data.get('date') };
  closeModals();
  commit(id ? 'План обновлён' : 'Добавлено в планы', () => {
    if (id) { const i = state.plans.findIndex(item => item.id === id); if (i >= 0) state.plans[i] = { ...state.plans[i], ...values }; }
    else state.plans.unshift({ id:'p' + Date.now(), ...values, done:false });
  });
  editingPlanId = null;
});
qs('#noteForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const data = new FormData(e.target); const id = editingNoteId;
  const values = { text:data.get('text').trim(), mood:data.get('mood'), date:data.get('date') };
  closeModals();
  commit(id ? 'Заметка обновлена' : 'Заметка сохранена', () => {
    if (id) { const i = state.notes.findIndex(item => item.id === id); if (i >= 0) state.notes[i] = { ...state.notes[i], ...values }; }
    else state.notes.unshift({ id:'n' + Date.now(), createdAt:Date.now(), time:timeNow(), pinned:false, ...values });
  });
  editingNoteId = null;
});
qs('#budgetForm').addEventListener('submit', e => {
  e.preventDefault(); if (!validateForm(e.target)) return;
  const value = Number(new FormData(e.target).get('budget')); closeModals();
  commit('Бюджет обновлён', () => { state.budget = value; });
});
qs('#toggleBalance').addEventListener('click', () => { showBalance = !showBalance; renderDashboard(); });
qsa('.filter-tab[data-filter]').forEach(btn => btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; qsa('.filter-tab[data-filter]').forEach(el => el.classList.toggle('active', el === btn)); renderTransactions(); }));
qs('#transactionSearch').addEventListener('input', e => { searchText = e.target.value.trim().toLowerCase(); renderTransactions(); });
qsa('[data-note-mood]').forEach(btn => btn.addEventListener('click', () => { noteFilter.mood = btn.dataset.noteMood; qsa('[data-note-mood]').forEach(el => el.classList.toggle('active', el === btn)); renderNotes(); }));
qs('#noteSearch').addEventListener('input', e => { noteFilter.query = e.target.value; renderNotes(); });

document.addEventListener('click', e => {
  const target = selector => e.target.closest(selector);
  let el;
  if ((el = target('[data-delete-transaction]'))) { const id = el.dataset.deleteTransaction; commit('Операция удалена', () => { state.transactions = state.transactions.filter(i => i.id !== id); }); }
  if ((el = target('[data-edit-transaction]'))) { const item = state.transactions.find(i => i.id === el.dataset.editTransaction); if (item) openTransactionForm(item); }
  if ((el = target('[data-toggle-shopping]'))) { const id = el.dataset.toggleShopping; const item = state.shopping.find(i => i.id === id); if (item) commit(item.done ? 'Возвращено в список' : 'Отмечено как купленное', () => { item.done = !item.done; }); }
  if ((el = target('[data-edit-shopping]'))) { const item = state.shopping.find(i => i.id === el.dataset.editShopping); if (item) openShoppingForm(item); }
  if ((el = target('[data-delete-shopping]'))) { const id = el.dataset.deleteShopping; commit('Покупка удалена', () => { state.shopping = state.shopping.filter(i => i.id !== id); }); }
  if ((el = target('[data-pay-plan]'))) {
    const plan = state.plans.find(i => i.id === el.dataset.payPlan);
    if (plan) commit(plan.kind === 'purchase' ? 'Покупка перенесена в расходы' : 'Платёж перенесён в расходы', () => { plan.done = true; state.transactions.unshift({ id:'t' + Date.now(), type:'expense', title:plan.title, category:plan.category, amount:plan.amount, date:isoDate(new Date()) }); });
  }
  if ((el = target('[data-edit-plan]'))) { const plan = state.plans.find(item => item.id === el.dataset.editPlan); if (plan) openPlanForm(plan); }
  if ((el = target('[data-move-plan-up]'))) movePlan(el.dataset.movePlanUp, -1);
  if ((el = target('[data-move-plan-down]'))) movePlan(el.dataset.movePlanDown, 1);
  if ((el = target('[data-delete-plan]'))) { const id = el.dataset.deletePlan; commit('План удалён', () => { state.plans = state.plans.filter(i => i.id !== id); }); }
  if ((el = target('[data-edit-note]'))) { const note = state.notes.find(item => item.id === el.dataset.editNote); if (note) openNoteForm(note); }
  if ((el = target('[data-pin-note]'))) { const note = state.notes.find(item => item.id === el.dataset.pinNote); if (note) commit(note.pinned ? 'Заметка откреплена' : 'Заметка закреплена', () => { note.pinned = !note.pinned; }, { undo:false }); }
  if ((el = target('[data-delete-note]'))) { const id = el.dataset.deleteNote; commit('Заметка удалена', () => { state.notes = state.notes.filter(item => item.id !== id); }); }
  if ((el = target('[data-note-tag]'))) { noteFilter.query = '#' + el.dataset.noteTag; qs('#noteSearch').value = noteFilter.query; renderNotes(); }
  if ((el = target('[data-use-prompt]'))) openNoteForm(null, { text:el.dataset.usePrompt + '\n', mood:'calm' });
  if ((el = target('[data-open-data]'))) openModal('dataModal');
});
qs('.notification').addEventListener('click', () => {
  const open = state.plans.filter(p => !p.done); const overdue = open.filter(p => daysUntil(p.date) < 0).length; const soon = open.filter(p => { const d = daysUntil(p.date); return d >= 0 && d <= 3; }).length;
  toast(overdue || soon ? `Просрочено: ${overdue} · в ближайшие 3 дня: ${soon}` : 'Срочных платежей нет — всё спокойно');
  if (overdue || soon) location.hash = 'shopping';
});
qs('#toggleCompleted').addEventListener('click', () => { const list = qs('#completedList'); list.hidden = !list.hidden; qs('#toggleCompleted svg').style.transform = list.hidden ? '' : 'rotate(180deg)'; });
qs('#exportData').addEventListener('click', exportData);
qs('#importData').addEventListener('click', () => qs('#importFile').click());
qs('#importFile').addEventListener('change', e => { const file = e.target.files[0]; if (file) importData(file); e.target.value = ''; });
qs('#resetData').addEventListener('click', () => { closeModals(); commit('Демо-данные восстановлены', () => { state = clone(initialState); normalizeState(); }); });

if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller; let reloaded = false;
  navigator.serviceWorker.register('./service-worker.js?v=8').catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadController && !reloaded) { reloaded = true; location.reload(); } });
}
