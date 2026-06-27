const baseSprites = [
  { id: 1, name: 'Water Sprite', rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Water_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20241201124607' },
  { id: 2, name: 'Earth Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/c/cf/Earth_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121336' },
  { id: 3, name: 'Fire Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Fire_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121040' },
  { id: 4, name: 'Duck Sprite',rarity: 'epic', type: 'Beast', image: 'https://static.wikia.nocookie.net/fortnite/images/d/d7/Duck_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120733' },
  { id: 5, name: 'Demon Sprite', rarity: 'epic', type: 'Demon', image: 'https://static.wikia.nocookie.net/fortnite/images/9/9f/Demon_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120658' },
  { id: 6, name: 'Ghost Sprite',  rarity: 'epic', type: 'Spirit', image: 'https://static.wikia.nocookie.net/fortnite/images/6/68/Ghost_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120821' },
  { id: 7, name: 'King Sprite',rarity: 'epic', type: 'Royal', image: 'https://static.wikia.nocookie.net/fortnite/images/9/9f/King_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120900' },
  { id: 8, name: 'Punk Sprite',  rarity: 'legendary', type: 'Rebel', image: 'https://static.wikia.nocookie.net/fortnite/images/0/02/Punk_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120226' },
  { id: 9, name: 'Dream Sprite',  rarity: 'legendary', type: 'Dream', image: 'https://static.wikia.nocookie.net/fortnite/images/9/99/Dream_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606121205' },
  { id: 10, name: 'Zero Point Sprite',  rarity: 'mythic', type: 'Cosmic', image: 'https://static.wikia.nocookie.net/fortnite/images/a/a4/Zero_Point_Sprite_-_Item_-_Fortnite.png/revision/latest?cb=20260606120116' },
  { id: 11, name: 'Burnt Peanut',  rarity: 'mythic', type: 'Mythic', image: 'https://static.wikia.nocookie.net/fortnite/images/0/0b/Burnt_Peanut_-_Item_-_Fortnite.png/revision/latest?cb=20260606183106' },
  { id: 12, name: 'Fishy Sprite',  rarity: 'rare', type: 'Fish', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Fishy_ui_L.webp'},
  { id: 13, name: 'Striker Sprite',  rarity: 'epic', type: 'Strike', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Soccer_ui_L.webp' },
  { id: 14, name: 'Aura Sprite',  rarity: 'epic', type: 'Aura', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Drifter_ui_L.webp' },
  { id: 15, name: 'Boss Sprite',  rarity: 'legendary', type: 'Boss', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Boss_ui_L.webp' },
  { id: 16, name: 'Grim Reaper Sprite',  rarity: 'mythic', type: 'Reaper', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_GrimReaper_Default_L.webp' },
  { id: 17, name: 'Aire Sprite',  rarity: 'rare', type: 'Elemental', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Air_Default_L.webp' },
  { id: 18, name: 'Seven Sprite',  rarity: 'legendary', type: 'Foundacion', image: 'https://fortnite.gg/img/x/sprites/icons/T_Icon_BR_Creature_Sprite_Seven_ui_L.webp' }
];

const specialTypes = ['Gold', 'Gummy', 'Galaxy'];

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

const rarityOrder = { mythic: 0, legendary: 1, epic: 2, rare: 3, common: 4, special: 5 };
const storageKey = 'fortnite-espiritus-state';
const gridElement = document.getElementById('spiritGrid');
const resetAllButton = document.getElementById('resetAll');
const dominatedCountElement = document.getElementById('dominatedCount');
const totalSpiritsElement = document.getElementById('totalSpirits');
const registeredCountElement = document.getElementById('registeredCount');
const sortSelect = document.getElementById('sortSelect');

let spirits = [];
let specials = [];
let currentSort = 'default';
let selectedItemId = null;

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

function loadState() {
  const stored = localStorage.getItem(storageKey);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      spirits = baseSprites.map((base) => ({
        ...base,
        ...parsed.base?.[base.id],
        level: parsed.base?.[base.id]?.level ?? 1,
        lost: parsed.base?.[base.id]?.lost ?? false,
        register: parsed.base?.[base.id]?.register ?? false,
        dominated: parsed.base?.[base.id]?.dominated ?? false
      }));
      specials = generateSpecials().map((item) => ({
        ...item,
        ...parsed.special?.[item.id],
        level: parsed.special?.[item.id]?.level ?? 1,
        lost: parsed.special?.[item.id]?.lost ?? false,
        register: parsed.special?.[item.id]?.register ?? false,
        dominated: parsed.special?.[item.id]?.dominated ?? false
      }));
      return;
    } catch (error) {
      console.warn('Error al leer estado guardado:', error);
    }
  }
  spirits = baseSprites.map((base) => ({ ...base, level: 1, lost: false, register: false, dominated: false }));
  specials = generateSpecials();
}

function saveState() {
  const payload = {
    base: spirits.reduce((acc, spirit) => {
      acc[spirit.id] = {
        level: spirit.level,
        lost: spirit.lost,
        register: spirit.register,
        dominated: spirit.dominated
      };
      return acc;
    }, {}),
    special: specials.reduce((acc, spirit) => {
      acc[spirit.id] = {
        level: spirit.level,
        lost: spirit.lost,
        register: spirit.register,
        dominated: spirit.dominated
      };
      return acc;
    }, {})
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
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

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';

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
  const badgeRarity = item.specialType ? item.specialType.toLowerCase() : item.rarity;
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
    item.register = !item.register;
    if (!item.register) {
      item.level = 1;
      item.lost = false;
      item.dominated = false;
    }
    saveState();
    render();
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

  inner.append(topRow, imageFrame, nameEl, typeTag, levelTrack, hint, body);
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
  const sorted = [...items];
  const filteredItems =
    currentSort === 'registered'
      ? sorted.filter(item => item.register)
      : currentSort === 'notRegistered'
      ? sorted.filter(item => !item.register)
      : currentSort === 'notDominated'
      ? sorted.filter(item => !item.dominated)
      : sorted;

  if (currentSort === 'rarity') {
    return filteredItems.sort((a, b) => {
      const rankA = rarityOrder[a.rarity || 'common'];
      const rankB = rarityOrder[b.rarity || 'common'];
      if (rankA !== rankB) return rankA - rankB;
      return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    });
  }

  if (currentSort === 'status') {
    return filteredItems.sort((a, b) => {
      if (a.dominated === b.dominated) {
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
      }
      return a.dominated ? -1 : 1;
    });
  }

  if (currentSort === 'status' || currentSort === 'notDominated') {
    return filteredItems.sort((a, b) => {
      if (a.dominated === b.dominated) {
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
      }
      return a.dominated ? -1 : 1;
    });
  }

  return filteredItems.sort((a, b) => {
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
}

function getItemById(id) {
  return String(id).includes('-') ? specials.find((item) => item.id === id) : spirits.find((item) => item.id === id);
}

function updateLevel(id, change) {
  const item = getItemById(id);
  if (!item) return;
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

function resetAll() {
  spirits = baseSprites.map((base) => ({ ...base, level: 1, lost: false, register: false, dominated: false }));
  specials = generateSpecials();
  saveState();
  render();
}

resetAllButton.addEventListener('click', () => {
  if (confirm('¿Reiniciar todos los espíritus y variantes a nivel 1?')) {
    resetAll();
  }
});

sortSelect.addEventListener('change', () => {
  currentSort = sortSelect.value;
  render();
});

loadState();
render();