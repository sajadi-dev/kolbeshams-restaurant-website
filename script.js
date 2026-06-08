let showAllMenu = false;
const INITIAL_LIMIT = 6;


// ===== DATA =====
const WHATSAPP_NUMBER = "93000000000"; // placeholder
const MENU = [
    // drinks
    { id: 'd1', cat: 'drinks', name: 'چای ساده هل دار', price: 20, emoji: '🍵' },
    { id: 'd2', cat: 'drinks', name: 'چای زعفرانی', price: 40, emoji: '🍵', desc: 'با عطر زعفران اصل' },
    { id: 'd3', cat: 'drinks', name: 'چای دارچین دار', price: 30, emoji: '🍵' },
    { id: 'd4', cat: 'drinks', name: 'چای نبات', price: 30, emoji: '🍵' },
    { id: 'd5', cat: 'drinks', name: 'چای لیمو', price: 30, emoji: '🍋' },
    { id: 'd6', cat: 'drinks', name: 'چای نعناع', price: 30, emoji: '🌿' },
    // breakfast
    { id: 'b1', cat: 'breakfast', name: 'املت با چای', price: 60, emoji: '🍳' },
    // mains
    { id: 'm1', cat: 'mains', name: 'کباب کوبیده مخصوص', price: 150, emoji: '🍢', desc: 'گوشت تازه روزانه' },
    { id: 'm2', cat: 'mains', name: 'کباب کوبیده ساده', price: 100, emoji: '🍢' },
    { id: 'm3', cat: 'mains', name: 'کباب جوجه', price: 140, emoji: '🍗' },
    { id: 'm4', cat: 'mains', name: 'کباب سیخی', price: 150, emoji: '🍢' },
    { id: 'm5', cat: 'mains', name: 'آشک', price: 70, emoji: '🥟', desc: 'با تره و ماست' },
    { id: 'm6', cat: 'mains', name: 'منتو', price: 100, emoji: '🥟' },
    { id: 'm7', cat: 'mains', name: 'خوراک لوبیا', price: 50, emoji: '🥘' },
    { id: 'm8', cat: 'mains', name: 'قابلی ساده', price: 60, emoji: '🍚' },
    { id: 'm9', cat: 'mains', name: 'چیپس ساده', price: 50, emoji: '🍟' },
    { id: 'm10', cat: 'mains', name: 'اشک دبل', price: 120, emoji: '🥟' },
    { id: 'm11', cat: 'mains', name: 'کباب جوجه مخصوص (چهار سیخه)', price: 260, emoji: '🍗', desc: 'چهار سیخ کامل' },
    { id: 'm12', cat: 'mains', name: 'کباب کوبیده نگینی', price: 150, emoji: '🍢' },
    // trays
    { id: 't1', cat: 'trays', name: 'سینی کباب سه نفره', price: 400, emoji: '🍽️', desc: 'برنج سفید + جوجه + کوبیده + تیکه + گوجه + ماست + سالاد + انرژی' },
    { id: 't2', cat: 'trays', name: 'سینی اشک چهار نفره', price: 320, emoji: '🍽️' },
    { id: 't3', cat: 'trays', name: 'سینی مکس قابلی و کباب', price: 890, emoji: '🍱', desc: 'کوبیده + جوجه + تیکه + گوجه + برنج سفید + قابلی + سالاد + ماست + انرژی' },
    // cakes
    { id: 'c1', cat: 'cakes', name: 'کیک مافین', price: 50, emoji: '🧁' },
    { id: 'c2', cat: 'cakes', name: 'کیک ساده', price: 30, emoji: '🍰' },
];
// ===== UTILS =====
const toFa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const fmt = n => toFa(n.toLocaleString('en-US')) + ' افغانی';
// ===== STATE =====
let cart = {};
try { cart = JSON.parse(localStorage.getItem('kolbe_cart') || '{}'); } catch { }
const saveCart = () => localStorage.setItem('kolbe_cart', JSON.stringify(cart));
// ===== MENU RENDER =====
const grid = document.getElementById('menuGrid');
let currentCat = 'all';

function renderMenu() {
    let items = MENU.filter(m => currentCat === 'all' || m.cat === currentCat);

    // LIMIT LOGIC
    if (!showAllMenu) {
        items = items.slice(0, INITIAL_LIMIT);
    }

    grid.innerHTML = items.map(item => `
    <article class="menu-card bg-cream border border-warmcream rounded-3xl p-5 shadow-card flex flex-col h-full">
  
  <div class="flex items-start justify-between gap-3">
    <div class="w-16 h-16 rounded-2xl bg-warmcream grid place-items-center text-3xl shrink-0">
      ${item.emoji}
    </div>

    <div class="text-left">
      <div class="text-[11px] text-mocha/60">قیمت</div>
      <div class="font-black text-lg price-tag">${fmt(item.price)}</div>
    </div>
  </div>

  <!-- CONTENT AREA -->
  <div class="flex-1 mt-4">
    <h3 class="font-black text-coffee text-lg">
      ${item.name}
    </h3>

    ${item.desc ? `
      <p class="text-mocha/70 text-sm mt-2 leading-relaxed">
        ${item.desc}
      </p>
    ` : ''}
  </div>

  <!-- BUTTON FIXED BOTTOM -->
  <button data-add="${item.id}" 
    class="mt-5 bg-coffee hover:bg-mocha text-cream font-bold py-2.5 rounded-full transition flex items-center justify-center gap-2 w-full">
    افزودن به سبد
    <span class="text-gold">+</span>
  </button>

</article>
  `).join('');

    // rebind buttons
    grid.querySelectorAll('[data-add]').forEach(btn => {
        btn.addEventListener('click', () => addToCart(btn.dataset.add));
    });

    // update button text safely
    const toggleBtn = document.getElementById('toggleMenu');
    if (toggleBtn) {
        toggleBtn.textContent = showAllMenu ? 'نمایش کمتر' : 'دیدن بیشتر';
    }
}


// ===== TABS =====
document.getElementById('tabs').addEventListener('click', e => {
    const btn = e.target.closest('.tab-btn');
    if (!btn) return;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    renderMenu();
});
// ===== CART =====
function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    showToast("✓ به سبد اضافه شد");
    pulseCart();
}
function changeQty(id, delta) {
    cart[id] = (cart[id] || 0) + delta;
    if (cart[id] <= 0) delete cart[id];
    saveCart(); renderCart();
}
function removeItem(id) {
    delete cart[id]; saveCart(); renderCart();
}
function renderCart() {
    const ids = Object.keys(cart);
    const count = ids.reduce((s, id) => s + cart[id], 0);
    const total = ids.reduce((s, id) => {
        const it = MENU.find(m => m.id === id);
        return it ? s + it.price * cart[id] : s;
    }, 0);
    const badge = document.getElementById('cartCount');
    const fab = document.getElementById('fabCount');
    if (count > 0) {
        badge.textContent = toFa(count); badge.classList.remove('hidden');
        fab.textContent = toFa(count); fab.classList.remove('hidden');
    } else {
        badge.classList.add('hidden'); fab.classList.add('hidden');
    }
    const list = document.getElementById('cartItems');
    if (ids.length === 0) {
        list.innerHTML = `
      <div class="text-center py-16 text-mocha/60">
        <div class="text-6xl mb-3">🛒</div>
        <p>سبد شما خالی است</p>
        <p class="text-xs mt-1">از منو غذای دلخواه خود را انتخاب کنید</p>
      </div>`;
    } else {
        list.innerHTML = ids.map(id => {
            const it = MENU.find(m => m.id === id); if (!it) return '';
            const qty = cart[id];
            return `
        <div class="bg-warmcream/50 rounded-2xl p-3 flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-cream grid place-items-center text-2xl shrink-0">${it.emoji}</div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-coffee text-sm truncate">${it.name}</div>
            <div class="text-xs text-mocha/70 mt-0.5">${fmt(it.price)}</div>
          </div>
          <div class="flex items-center gap-1 bg-cream rounded-full p-1">
            <button data-dec="${id}" aria-label="کاهش" class="w-7 h-7 rounded-full bg-warmcream hover:bg-gold text-coffee font-black">−</button>
            <span class="w-6 text-center font-bold text-coffee">${toFa(qty)}</span>
            <button data-inc="${id}" aria-label="افزایش" class="w-7 h-7 rounded-full bg-warmcream hover:bg-gold text-coffee font-black">+</button>
          </div>
          <button data-rm="${id}" aria-label="حذف" class="w-8 h-8 rounded-full bg-ember/10 hover:bg-ember hover:text-cream text-ember transition grid place-items-center">✕</button>
        </div>
      `;
        }).join('');
        list.querySelectorAll('[data-inc]').forEach(b => b.onclick = () => changeQty(b.dataset.inc, +1));
        list.querySelectorAll('[data-dec]').forEach(b => b.onclick = () => changeQty(b.dataset.dec, -1));
        list.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => removeItem(b.dataset.rm));
    }
    document.getElementById('cartTotal').textContent = fmt(total);
    document.getElementById('checkoutBtn').disabled = ids.length === 0;
}
function pulseCart() {
    const b = document.getElementById('cartCount');
    b.classList.remove('animate-pop'); void b.offsetWidth; b.classList.add('animate-pop');
}
// ===== SIDEBAR =====
const sidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('cartOverlay');
function openCart() {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}
document.getElementById('openCart').onclick = openCart;
document.getElementById('fabCart').onclick = openCart;
document.getElementById('closeCart').onclick = closeCart;
overlay.onclick = closeCart;
// ===== CHECKOUT (WhatsApp) =====
document.getElementById('checkoutBtn').onclick = () => {
    const ids = Object.keys(cart);
    if (!ids.length) return;
    let total = 0;
    const lines = ids.map((id, i) => {
        const it = MENU.find(m => m.id === id); if (!it) return '';
        const sub = it.price * cart[id]; total += sub;
        return `${toFa(i + 1)}. ${it.name} × ${toFa(cart[id])} = ${fmt(sub)}`;
    }).filter(Boolean);
    const msg =
        `🍽 *سفارش جدید — کلبه شمس*\n` +
        `————————————————\n` +
        lines.join('\n') +
        `\n————————————————\n` +
        `💰 *مجموع: ${fmt(total)}*\n\n` +
        `📍 آدرس تحویل: ...\n` +
        `📞 شماره تماس: ...\n\n` +
        `با تشکر 🙏`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
};
// ===== INIT =====
renderMenu();
renderCart();


document.getElementById('toggleMenu').addEventListener('click', () => {
    showAllMenu = !showAllMenu;
    renderMenu();
});


// hamberger menu

const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMobileMenu);

// auto close menu when link clicked 

document
    .querySelectorAll('.mobile-link')
    .forEach(link => {

        link.addEventListener('click', () => {

            closeMobileMenu();

        });

    });

// connect add to cart and hamberger menu

document
    .getElementById('mobileCartBtn')
    .addEventListener('click', () => {
        closeMobileMenu();
        openCart();
    });

// add to cart message
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('opacity-0');
    setTimeout(() => {
        toast.classList.add('opacity-0');
    }, 2000);
}