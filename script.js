import { supabase } from './supabase.js';

const baseSprites = [
  { id: 1, name: 'Water Sprite', rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Water_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20241201124607', dropRate: 25 },
  { id: 2, name: 'Earth Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/c/cf/Earth_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121336', dropRate: 25 },
  { id: 3, name: 'Fire Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Fire_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121040', dropRate: 25 },
  { id: 4, name: 'Duck Sprite',rarity: 'epic', type: 'Beast', image: 'https://static.wikia.nocookie.net/fortnite/images/d/d7/Duck_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120733', dropRate: 10 },
  { id: 5, name: 'Demon Sprite', rarity: 'epic', type: 'Demon', image: 'https://static.wikia.nocookie.net/fortnite/images/9/9f/Demon_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120658', dropRate: 10 },
  { id: 6, name: 'Ghost Sprite',  rarity: 'epic', type: 'Spirit', image: 'https://static.wikia.nocookie.net/fortnite/images/6/68/Ghost_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120821', dropRate: 10 },
  { id: 7, name: 'King Sprite',rarity: 'epic', type: 'Royal', image: 'https://static.wikia.nocookie.net/fortnite/images/9/9f/King_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120900', dropRate: 10 },
  { id: 8, name: 'Punk Sprite',  rarity: 'legendary', type: 'Rebel', image: 'https://static.wikia.nocookie.net/fortnite/images/0/02/Punk_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120226', dropRate: 5 },
  { id: 9, name: 'Dream Sprite',  rarity: 'legendary', type: 'Dream', image: 'https://static.wikia.nocookie.net/fortnite/images/9/99/Dream_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121205', dropRate: 5 },
  { id: 10, name: 'Zero Point Sprite',  rarity: 'mythic', type: 'Cosmic', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Zero_Point_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120116', dropRate: 2 },
  { id: 11, name: 'Burnt Peanut',  rarity: 'mythic', type: 'Mythic', image: 'https://static.wikia.nocookie.net/fortnite/images/0/0b/Burnt_Peanut_-_Item_-_Fortnite.png/revision/latest?cb=20260606183106', dropRate: 2 },
  { id: 12, name: 'Fishy Sprite',  rarity: 'rare', type: 'Fish', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_ui_L.webp', dropRate: 25 },
  { id: 13, name: 'Striker Sprite',  rarity: 'epic', type: 'Strike', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_ui_L.webp', dropRate: 10 },
  { id: 14, name: 'Aura Sprite',  rarity: 'epic', type: 'Aura', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_ui_L.webp', dropRate: 10 },
  { id: 15, name: 'Boss Sprite',  rarity: 'legendary', type: 'Boss', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_ui_L.webp', dropRate: 5 },
  { id: 16, name: 'Grim Reaper Sprite',  rarity: 'mythic', type: 'Reaper', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Default_L.webp', dropRate: 2 },
  { id: 17, name: 'Aire Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Default_L.webp', dropRate: 25 },
  { id: 18, name: 'Seven Sprite',  rarity: 'legendary', type: 'Foundacion', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_ui_L.webp', dropRate: 5 }
];

const specialTypes = ['Gold', 'Gummy', 'Galaxy'];
const rarityOrder = { mythic: 0, legendary: 1, epic: 2, rare: 3, common: 4, special: 5 };

const specialTypeImages = {
  gold: {
    1: 'https://static.wikia.nocookie.net/fortnite/images/c/c8/Gold_Water_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    2: 'https://static.wikia.nocookie.net/fortnite/images/5/53/Gold_Earth_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606184144',
    3: 'https://static.wikia.nocookie.net/fortnite/images/9/9b/Gold_Fire_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    4: 'https://static.wikia.nocookie.net/fortnite/images/c/cc/Gold_Duck_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183758',
    5: 'https://static.wikia.nocookie.net/fortnite/images/b/b6/Gold_Demon_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183343',
    6: 'https://static.wikia.nocookie.net/fortnite/images/0/00/Gold_Ghost_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606184144',
    7: 'https://static.wikia.nocookie.net/fortnite/images/4/44/Gold_King_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185045',
    8: 'https://static.wikia.nocookie.net/fortnite/images/5/52/Gold_Punk_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    9: 'https://static.wikia.nocookie.net/fortnite/images/6/6e/Gold_Dream_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185045',
    10:'https://static.wikia.nocookie.net/fortnite/images/9/95/Gold_Zero_Point_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    12:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Gold_ui_L.webp',
    13:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Gold_L.webp',
    14:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Gold_ui_L.webp',
    15:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Gold_ui_L.webp',
    16:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Gold_L.webp',
    17:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Gold_L.webp',
    18:'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Gold_ui_L.webp'
  },
  gummy: {
    1: 'https://static.wikia.nocookie.net/fortnite/images/7/7b/Gummy_Water_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    2: 'https://static.wikia.nocookie.net/fortnite/images/0/0e/Gummy_Earth_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606184143',
    3: 'https://static.wikia.nocookie.net/fortnite/images/d/dc/Gummy_Fire_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    4: 'https://static.wikia.nocookie.net/fortnite/images/e/ec/Gummy_Duck_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183757',
    5: 'https://static.wikia.nocookie.net/fortnite/images/7/79/Gummy_Demon_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183548',
    6: 'https://static.wikia.nocookie.net/fortnite/images/1/13/Gummy_Ghost_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606184145',
    7: 'https://static.wikia.nocookie.net/fortnite/images/d/d7/Gummy_King_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185044',
    8: 'https://static.wikia.nocookie.net/fortnite/images/5/5c/Gummy_Punk_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    9: 'https://static.wikia.nocookie.net/fortnite/images/d/dc/Gummy_Dream_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    10:'https://static.wikia.nocookie.net/fortnite/images/1/14/Gummy_Zero_Point_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    12: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Candy_ui_L.webp',
    13: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Candy_L.webp',
    14: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Candy_ui_L.webp',
    15: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Candy_ui_L.webp',
    16: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Candy_L.webp',
    17: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Candy_L.webp',
    18: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Candy_ui_L.webp'
  },
  galaxy: {
    1: 'https://static.wikia.nocookie.net/fortnite/images/4/43/Galaxy_Water_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    2: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Earth_Galaxy_ui_L.webp',
    3: 'https://static.wikia.nocookie.net/fortnite/images/b/bf/Galaxy_Fire_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    4: 'https://static.wikia.nocookie.net/fortnite/images/5/58/Galaxy_Duck_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183759',
    5: 'https://static.wikia.nocookie.net/fortnite/images/a/a8/Galaxy_Demon_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606183548',
    6: 'https://static.wikia.nocookie.net/fortnite/images/2/2d/Galaxy_Ghost_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606184144',
    7: 'https://static.wikia.nocookie.net/fortnite/images/3/3f/Galaxy_King_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185045',
    8: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Punk_Galaxy_ui_L.webp',
    9: 'https://static.wikia.nocookie.net/fortnite/images/a/a2/Galaxy_Dream_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    10:'https://static.wikia.nocookie.net/fortnite/images/d/d2/Galaxy_Zero_Point_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606185046',
    12: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_Galaxy_ui_L.webp',
    13: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_Galaxy_L.webp',
    14: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_Galaxy_ui_L.webp',
    15: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_Galaxy_ui_L.webp',
    16: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Galaxy_L.webp',
    17: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Galaxy_L.webp',
    18: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_Galaxy_ui_L.webp'
  }
};

function getSpecialImageByType(spriteId, type) {
  const typeKey = type.toLowerCase();
  return specialTypeImages[typeKey]?.[spriteId] || '';
}

const gridElement = document.getElementById('spiritGrid');
const resetAllButton = document.getElementById('resetAll');
const logoutBtn = document.getElementById('logoutBtn');
const dominatedCountElement = document.getElementById('dominatedCount');
const totalSpiritsElement = document.getElementById('totalSpirits');
const registeredCountElement = document.getElementById('registeredCount');
const sortSelect = document.getElementById('sortSelect');
const authModal = document.getElementById('authModal');
const appContent = document.getElementById('appContent');
const authForm = document.getElementById('authForm');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const confirmField = document.getElementById('confirmField');
const authSubmit = document.getElementById('authSubmit');
const authError = document.getElementById('authError');
const syncIndicator = document.getElementById('syncIndicator');
const onboardingModal = document.getElementById('onboardingModal');
const dashboardView = document.getElementById('dashboardView');
const dashboardClose = document.getElementById('dashboardClose');
const specialFilterBtns = document.querySelectorAll('.special-filter-btn');

let spirits = [];
let specials = [];
let currentSort = 'default';
let currentSpecialFilter = 'all';
let selectedItemId = null;
let currentUser = null;
let saveTimeout = null;

function generateSpecials() {
  return baseSprites
    .filter((sprite) => sprite.id !== 11)
    .flatMap((sprite) =>
      specialTypes.map((type) => ({
        id: `${sprite.id}-${type.toLowerCase()}`,
        name: sprite.name,
        specialType: type,
        type: sprite.type,
        rarity: sprite.rarity,
        image: getSpecialImageByType(sprite.id, type) || sprite.image,
        level: 1,
        lost: false,
        register: false,
        dominated: false
      }))
    );
}

function generateAllItems() {
  return baseSprites.map((base) => ({ ...base, level: 1, lost: false, register: false, dominated: false }));
}

async function loadState() {
  if (!currentUser) return;

  const { data, error } = await supabase
    .from('spirit_states')
    .select('*')
    .eq('user_id', currentUser.id);

  if (error) {
    console.warn('Error loading state:', error);
    spirits = generateAllItems();
    specials = generateSpecials();
    return;
  }

  const stateMap = {};
  data.forEach(row => {
    stateMap[row.spirit_id] = row;
  });

  spirits = baseSprites.map((base) => {
    const saved = stateMap[`base-${base.id}`];
    return {
      ...base,
      level: saved?.level ?? 1,
      lost: saved?.lost ?? false,
      register: saved?.register ?? false,
      dominated: saved?.dominated ?? false
    };
  });

  specials = generateSpecials().map((item) => {
    const saved = stateMap[item.id];
    return {
      ...item,
      level: saved?.level ?? 1,
      lost: saved?.lost ?? false,
      register: saved?.register ?? false,
      dominated: saved?.dominated ?? false
    };
  });
}

function showSyncIndicator(status) {
  syncIndicator.classList.remove('saving', 'saved', 'error');
  if (status === 'saving') {
    syncIndicator.textContent = 'Guardando...';
    syncIndicator.classList.add('saving');
  } else if (status === 'saved') {
    syncIndicator.textContent = 'Guardado';
    syncIndicator.classList.add('saved');
    setTimeout(() => {
      syncIndicator.textContent = '';
      syncIndicator.classList.remove('saved');
    }, 2000);
  } else if (status === 'error') {
    syncIndicator.textContent = 'Error al guardar';
    syncIndicator.classList.add('error');
  }
}

async function saveState() {
  if (!currentUser) return;

  showSyncIndicator('saving');

  if (saveTimeout) clearTimeout(saveTimeout);

  saveTimeout = setTimeout(async () => {
    const states = [...spirits, ...specials].map(item => ({
      user_id: currentUser.id,
      spirit_id: item.id,
      level: item.level,
      lost: item.lost,
      register: item.register,
      dominated: item.dominated
    }));

    const { error } = await supabase.from('spirit_states').upsert(states, { onConflict: 'user_id,spirit_id' });

    if (error) {
      showSyncIndicator('error');
    } else {
      showSyncIndicator('saved');
    }
  }, 300);
}

function getDominatedCount() {
  return [...spirits, ...specials].filter((item) => item.dominated).length;
}

function getRegisteredCount() {
  return [...spirits, ...specials].filter((item) => item.register).length;
}

function getTotalCount() {
  return spirits.length + specials.length;
}

function capitalize(text) {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function triggerDominatedAnimation(card) {
  card.classList.add('dominated-flash');
  setTimeout(() => card.classList.remove('dominated-flash'), 800);
}

function triggerObtainedAnimation(card) {
  card.classList.add('obtained-flash');
  setTimeout(() => card.classList.remove('obtained-flash'), 600);
}

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = item.id;

  if (item.specialType) {
    card.classList.add(`special-${item.specialType.toLowerCase()}-card`);
  }
  if (item.dominated) {
    card.classList.add('dominated-card');
  }
  if (!item.register) {
    card.classList.add('unregistered');
  }
  if (String(item.id) === selectedItemId) {
    card.classList.add('selected');
  }

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const topRow = document.createElement('div');
  topRow.className = 'card-top';

  if (item.dominated) {
    const crown = document.createElement('span');
    crown.className = 'crown';
    crown.textContent = '\u{1F451}';
    topRow.appendChild(crown);
  }

  const badge = document.createElement('span');
  badge.className = item.specialType
    ? `badge special-${item.specialType.toLowerCase()}`
    : `badge ${item.rarity}`;
  badge.textContent = item.specialType ? item.specialType.toUpperCase() : capitalize(item.rarity);
  topRow.appendChild(badge);

  const displayName = item.name.replace(/ Sprite$/, '');
  const nameEl = document.createElement('div');
  nameEl.className = 'card-name';
  nameEl.textContent = displayName;

  const typeTag = document.createElement('span');
  typeTag.className = 'spirit-type-tag';
  typeTag.textContent = item.type;

  const dropRateTag = document.createElement('span');
  dropRateTag.className = `spirit-drop-rate ${item.rarity}`;
  dropRateTag.textContent = `${item.dropRate}%`;

  const imageFrame = document.createElement('div');
  imageFrame.className = 'spirit-image-frame';
  if (item.image) {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = displayName;
    img.loading = 'lazy';
    imageFrame.appendChild(img);
  }
  const scannerLine = document.createElement('div');
  scannerLine.className = 'scanner-line';
  imageFrame.appendChild(scannerLine);

  const levelTrack = document.createElement('div');
  levelTrack.className = 'level-track';
  for (let i = 1; i <= 5; i++) {
    const pip = document.createElement('div');
    pip.className = 'level-pip';
    if (i <= item.level) {
      pip.classList.add('filled');
      if (item.dominated) pip.classList.add('dominated');
    }
    levelTrack.appendChild(pip);
  }
  const levelNum = document.createElement('span');
  levelNum.className = 'level-num';
  levelNum.textContent = `N${item.level}`;
  levelTrack.appendChild(levelNum);

  const hint = document.createElement('div');
  hint.className = 'card-hint';
  hint.textContent = 'Toca para editar';

  const body = document.createElement('div');
  body.className = 'card-body';

  const controlRow = document.createElement('div');
  controlRow.className = 'control-row';
  const minusBtn = document.createElement('button');
  minusBtn.className = 'control-btn';
  minusBtn.textContent = '-';
  minusBtn.disabled = item.level <= 1 || !item.register;
  minusBtn.addEventListener('click', (e) => { e.stopPropagation(); updateLevel(item.id, -1); });
  const levelDisplay = document.createElement('div');
  levelDisplay.className = `level-display${item.dominated ? ' dominated' : ''}`;
  levelDisplay.textContent = `Nivel ${item.level}`;
  const plusBtn = document.createElement('button');
  plusBtn.className = 'control-btn';
  plusBtn.textContent = '+';
  plusBtn.disabled = item.level >= 5 || !item.register;
  plusBtn.addEventListener('click', (e) => { e.stopPropagation(); updateLevel(item.id, 1); });
  controlRow.append(minusBtn, levelDisplay, plusBtn);

  const actionRow = document.createElement('div');
  actionRow.className = 'action-row';
  const registerBtn = document.createElement('button');
  registerBtn.className = 'register-btn';
  registerBtn.textContent = item.register ? 'Quitar' : 'Obtener';
  registerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const wasNotRegistered = !item.register;
    item.register = !item.register;
    if (!item.register) {
      item.level = 1;
      item.lost = false;
      item.dominated = false;
    }
    saveState();
    render();
    if (wasNotRegistered && item.register) {
      const cardEl = document.querySelector(`[data-id="${item.id}"]`);
      if (cardEl) triggerObtainedAnimation(cardEl);
    }
  });
  const lostBtn = document.createElement('button');
  lostBtn.className = 'lost-btn';
  lostBtn.textContent = item.lost ? 'Perdido' : 'Marcar perdido';
  lostBtn.disabled = !item.register;
  lostBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    item.lost = !item.lost;
    if (item.lost) item.level = 1;
    saveState();
    render();
  });
  const resetBtn = document.createElement('button');
  resetBtn.className = 'reset-btn';
  resetBtn.title = 'Reiniciar';
  resetBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';
  resetBtn.disabled = !item.register;
  resetBtn.addEventListener('click', (e) => { e.stopPropagation(); resetItem(item.id); });
  actionRow.append(registerBtn, lostBtn, resetBtn);

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  if (!item.register) {
    footer.textContent = 'No obtenido';
  } else if (item.lost && item.dominated) {
    footer.classList.add('status-lost');
    footer.textContent = 'Perdido / Dominado';
  } else if (item.dominated) {
    footer.classList.add('status-dominado');
    footer.textContent = 'Dominado';
  } else if (item.lost) {
    footer.classList.add('status-lost');
    footer.textContent = 'Perdido';
  } else {
    footer.classList.add('status-progress');
    footer.textContent = 'En progreso';
  }

  body.append(controlRow, actionRow);

  inner.append(topRow, imageFrame, nameEl, typeTag, dropRateTag, levelTrack, hint, body);
  card.appendChild(inner);

  let pressTimer = null;
  let didMove = false;
  let pressStartX = 0;
  let pressStartY = 0;
  const LONG_PRESS_MS = 500;

  const startPress = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pressStartX = e.clientX;
    pressStartY = e.clientY;
    didMove = false;
    card.classList.add('pressing');
    pressTimer = setTimeout(() => {
      if (!didMove) {
        card.classList.remove('pressing');
        if (!item.register) {
          item.register = true;
          saveState();
          render();
          const newCard = document.querySelector(`[data-id="${item.id}"]`);
          if (newCard) triggerObtainedAnimation(newCard);
        }
      }
    }, LONG_PRESS_MS);
  };

  const movePress = (e) => {
    if (!pressTimer) return;
    const dx = Math.abs(e.clientX - pressStartX);
    const dy = Math.abs(e.clientY - pressStartY);
    if (dx > 10 || dy > 10) didMove = true;
  };

  const endPress = () => {
    clearTimeout(pressTimer);
    pressTimer = null;
    card.classList.remove('pressing');
  };

  card.addEventListener('pointerdown', startPress);
  card.addEventListener('pointermove', movePress);
  card.addEventListener('pointerup', endPress);
  card.addEventListener('pointerleave', endPress);
  card.addEventListener('pointercancel', endPress);

  card.addEventListener('click', (event) => {
    if (didMove) return;
    if (selectedItemId === String(item.id)) {
      selectedItemId = null;
    } else {
      selectedItemId = String(item.id);
    }
    render();
  });

  return card;
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.card')) {
    if (selectedItemId !== null) {
      selectedItemId = null;
      render();
    }
  }
});

function sortItems(items) {
  let filtered = [...items];

  if (currentSpecialFilter !== 'all') {
    if (currentSpecialFilter === 'base') {
      filtered = filtered.filter(item => !item.specialType);
    } else {
      filtered = filtered.filter(item => item.specialType?.toLowerCase() === currentSpecialFilter);
    }
  }

  const preFiltered = currentSort === 'registered'
    ? filtered.filter(item => item.register)
    : currentSort === 'notRegistered'
    ? filtered.filter(item => !item.register)
    : currentSort === 'notDominated'
    ? filtered.filter(item => !item.dominated)
    : filtered;

  if (currentSort === 'rarity') {
    return preFiltered.sort((a, b) => {
      const rankA = rarityOrder[a.rarity || 'common'];
      const rankB = rarityOrder[b.rarity || 'common'];
      if (rankA !== rankB) return rankA - rankB;
      return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    });
  }

  if (currentSort === 'status') {
    return preFiltered.sort((a, b) => {
      if (a.dominated === b.dominated) {
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
      }
      return a.dominated ? -1 : 1;
    });
  }

  return preFiltered.sort((a, b) => {
    const baseIdA = String(a.id).split('-')[0];
    const baseIdB = String(b.id).split('-')[0];
    if (baseIdA !== baseIdB) {
      return Number(baseIdA) - Number(baseIdB);
    }
    if (!a.specialType && b.specialType) return -1;
    if (a.specialType && !b.specialType) return 1;
    if (a.specialType && b.specialType) {
      return specialTypes.indexOf(a.specialType) - specialTypes.indexOf(b.specialType);
    }
    return 0;
  });
}

function getAllItems() {
  return [...spirits, ...specials];
}

function render() {
  gridElement.innerHTML = '';
  sortSelect.value = currentSort;
  sortItems(getAllItems()).forEach((item) => gridElement.appendChild(createCard(item)));
  dominatedCountElement.textContent = getDominatedCount();
  totalSpiritsElement.textContent = getTotalCount();
  registeredCountElement.textContent = getRegisteredCount();
  updateDashboard();
}

function getItemById(id) {
  return String(id).includes('-') ? specials.find((item) => item.id === id) : spirits.find((item) => item.id === id);
}

function updateLevel(id, change) {
  const item = getItemById(id);
  if (!item) return;
  const wasDominated = item.dominated;
  const nextLevel = Math.min(5, Math.max(1, item.level + change));
  if (item.lost && nextLevel > 1) {
    item.lost = false;
  }
  item.level = nextLevel;
  if (item.level === 5) {
    item.dominated = true;
  }
  saveState();
  render();
  if (item.dominated && !wasDominated) {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) triggerDominatedAnimation(card);
  }
}

function resetItem(id) {
  const item = getItemById(id);
  if (!item) return;
  item.level = 1;
  item.lost = false;
  item.dominated = false;
  saveState();
  render();
}

async function resetAll() {
  spirits = generateAllItems();
  specials = generateSpecials();
  await saveState();
  render();
}

function updateDashboard() {
  const all = getAllItems();
  const registered = all.filter(i => i.register);
  const dominated = all.filter(i => i.dominated);

  const rarityCounts = {
    mythic: { total: 0, dominated: 0 },
    legendary: { total: 0, dominated: 0 },
    epic: { total: 0, dominated: 0 },
    rare: { total: 0, dominated: 0 }
  };

  registered.forEach(item => {
    if (rarityCounts[item.rarity]) {
      rarityCounts[item.rarity].total++;
      if (item.dominated) rarityCounts[item.rarity].dominated++;
    }
  });

  const rarityBars = document.querySelectorAll('.rarity-bar-fill');
  rarityBars.forEach(bar => {
    const rarity = bar.dataset.rarity;
    const data = rarityCounts[rarity];
    const pct = data.total > 0 ? (data.dominated / data.total) * 100 : 0;
    bar.style.width = `${pct}%`;
  });

  const rarityCountsEl = document.querySelectorAll('.rarity-count');
  rarityCountsEl.forEach(el => {
    const rarity = el.dataset.rarity;
    const data = rarityCounts[rarity];
    el.textContent = `${data.dominated}/${data.total}`;
  });

  document.getElementById('dashboardProgress').style.width = `${all.length > 0 ? (dominated.length / all.length) * 100 : 0}%`;
  document.getElementById('dashboardProgressText').textContent = `${dominated.length} de ${all.length} dominados`;
}

function showOnboarding() {
  const hasSeenOnboarding = localStorage.getItem('espiritus-onboarding-seen');
  if (!hasSeenOnboarding && currentUser) {
    onboardingModal.classList.remove('hidden');
    return true;
  }
  return false;
}

function closeOnboarding() {
  onboardingModal.classList.add('hidden');
  localStorage.setItem('espiritus-onboarding-seen', 'true');
}

resetAllButton.addEventListener('click', () => {
  if (confirm('¿Reiniciar todos los espíritus y variantes a nivel 1?')) {
    resetAll();
  }
});

logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut();
});

document.getElementById('onboardingNext')?.addEventListener('click', () => {
  const activeStep = document.querySelector('.onboarding-step.active');
  const nextStep = activeStep?.nextElementSibling;
  if (nextStep && nextStep.classList.contains('onboarding-step')) {
    activeStep.classList.remove('active');
    nextStep.classList.add('active');
  } else {
    closeOnboarding();
  }
});

document.getElementById('onboardingSkip')?.addEventListener('click', closeOnboarding);
dashboardClose?.addEventListener('click', () => dashboardView.classList.add('hidden'));

document.getElementById('showDashboard')?.addEventListener('click', () => {
  updateDashboard();
  dashboardView.classList.remove('hidden');
});

sortSelect.addEventListener('change', () => {
  currentSort = sortSelect.value;
  render();
});

specialFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    specialFilterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSpecialFilter = btn.dataset.filter;
    render();
  });
});

let isRegisterMode = false;

loginTab.addEventListener('click', () => {
  isRegisterMode = false;
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
  confirmField.style.display = 'none';
  authSubmit.textContent = 'Iniciar Sesión';
});

registerTab.addEventListener('click', () => {
  isRegisterMode = true;
  registerTab.classList.add('active');
  loginTab.classList.remove('active');
  confirmField.style.display = 'block';
  authSubmit.textContent = 'Crear Cuenta';
});

authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  authError.textContent = '';
  authError.style.color = '#ff6b35';

  const emailInput = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!emailInput || password.length < 6) {
    authError.textContent = 'El usuario y contraseña son obligatorios';
    return;
  }

  const fakeEmail = emailInput.includes('@') ? emailInput : `${emailInput}@espiritus.app`;

  if (isRegisterMode) {
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      authError.textContent = 'Las contraseñas no coinciden';
      return;
    }

    const { error } = await supabase.auth.signUp({ email: fakeEmail, password });
    if (error) {
      authError.textContent = error.message;
    } else {
      authError.textContent = 'Cuenta creada. Ya puedes iniciar sesión.';
      authError.style.color = '#4ade80';
      setTimeout(() => {
        loginTab.click();
        document.getElementById('email').value = emailInput;
      }, 1500);
    }
  } else {
    const { error } = await supabase.auth.signInWithPassword({ email: fakeEmail, password });
    if (error) {
      authError.textContent = 'Usuario o contraseña incorrectos';
    }
  }
});

async function initAuth() {
  const { data: { session } } = await supabase.auth.getSession();

  if (session?.user) {
    currentUser = session.user;
    authModal.classList.add('hidden');
    appContent.classList.remove('hidden');
    await loadState();
    render();
    showOnboarding();
  } else {
    authModal.classList.remove('hidden');
    appContent.classList.add('hidden');
  }
}

supabase.auth.onAuthStateChange((_event, session) => {
  if (session?.user) {
    currentUser = session.user;
    authModal.classList.add('hidden');
    appContent.classList.remove('hidden');
    loadState().then(() => {
      render();
      showOnboarding();
    });
  } else {
    currentUser = null;
    authModal.classList.remove('hidden');
    appContent.classList.add('hidden');
  }
});

initAuth();