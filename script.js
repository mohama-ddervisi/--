const messages = [
  "30% OFF SITEWIDE - Early Access Starts Now!",
  "Get Your Holiday — Shop the BYLT Collection!"
];

const promoText = document.getElementById("promoText");
let currentIndex = 0;
let direction = "right"; 

function showMessage(nextIndex, dir = "right") {
  direction = dir;
  promoText.classList.add(dir === "right" ? "slide-out-left" : "slide-out-right");

  
  setTimeout(() => {
    promoText.textContent = messages[nextIndex];
    promoText.classList.remove("slide-out-left", "slide-out-right");
    promoText.classList.add(dir === "right" ? "slide-in-right" : "slide-in-left");
  }, 300);


  setTimeout(() => {
    promoText.classList.remove("slide-in-right", "slide-in-left");
  }, 800);
}

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % messages.length;
  showMessage(currentIndex, "right");
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  showMessage(currentIndex, "left");
});


setInterval(() => {
  currentIndex = (currentIndex + 1) % messages.length;
  showMessage(currentIndex, "right");
}, 4000);

const navbarLower = document.querySelector('.navbar-lower');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 30) {
    navbarLower.classList.add('scrolled');
  } else {
    navbarLower.classList.remove('scrolled');
  }
});



window.addEventListener('scroll', () => {
  if (window.scrollY >= 30) {
    navbarLower.classList.add('scrolled');
  } else {
    navbarLower.classList.remove('scrolled');
  }
});


const searchIcon = document.getElementById('searchIcon');
const searchOverlay = document.getElementById('searchOverlay');

searchIcon.addEventListener('click', () => {
  searchOverlay.style.display = searchOverlay.style.display === 'flex' ? 'none' : 'flex';
});

searchOverlay.addEventListener('click', e => {
  if (e.target === searchOverlay) searchOverlay.style.display = 'none';
});


const cartIcon = document.getElementById('cartIcon');

cartIcon.addEventListener('click', () => {
  let cartPanel = document.getElementById('cartPanel');

  if (!cartPanel) {
    cartPanel = document.createElement('div');
    cartPanel.classList.add('cart-panel');
    cartPanel.id = 'cartPanel';
    cartPanel.innerHTML = `
  <div class="mmd">
    <button id="closeCart">✖</button>
    <h2 class="mmd-2">Shopping Cart</h2>
  </div>

  <p class="mmd-3">Add $99 more to qualify for free US shipping.</p>

  <!-- باکس اصلی -->
  <div class="box-h">
    <h3 class="text-one">Your cart is empty</h3>
    <p class="text-two">Start shopping with these fan favorites</p>
    <div class="btc">
      <button class="but-1">NEW RELEASES</button> <br>
      <button class="but-2">BEST SELLERS</button>
    </div>
  </div>

  <!-- بخش جدید: زیر box-h -->
  <div class="mmt">
    <p class="text-of-one">Add $175 more to unlock the free gift!</p>
    <p class="text-of-two">Only 1 bonus item per order, while supplies last.</p>
    <div class="boxing"><p class="text-end-4">$175.00</p></div>
  </div>
  <div class="box-end">
  
  </div>
`;

      
    document.body.appendChild(cartPanel);
    setTimeout(() => cartPanel.classList.add('open'), 10);

    const closeBtn = cartPanel.querySelector('#closeCart');
    closeBtn.addEventListener('click', () => {
      cartPanel.classList.remove('open');
      setTimeout(() => cartPanel.remove(), 400);
    });
  }
});


let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
function addToCart() {
  cartCount++;
  cartCountEl.textContent = cartCount;
}
document.querySelectorAll('.nav-item').forEach(item => {
  const menu = item.querySelector('.mega-menu');
  if (!menu) return;

  let hideTimeout;


  item.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    menu.style.display = 'block';
  });


  menu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    menu.style.display = 'block';
  });

  
  item.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      if (!menu.matches(':hover')) {
        menu.style.display = 'none';
      }
    }, 250);
  });

  
  menu.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      if (!item.matches(':hover')) {
        menu.style.display = 'none';
      }
    }, 250);
  });
});
const closeSearch = document.getElementById('closeSearch');
closeSearch.addEventListener('click', () => {
  searchOverlay.style.display = 'none';
});


(function(){
  const track = document.querySelector('.ps-track');
  const items = Array.from(document.querySelectorAll('.ps-item'));
  const prev = document.querySelector('.ps-left');
  const next = document.querySelector('.ps-right');
  const total = items.length;
  const visible = 4;
  let index = 0; 

  function update(){
    const shift = index * (100 / visible);
    track.style.transform = `translateX(-${shift}%)`;
  }

  next.addEventListener('click', () => {
    if(index < total - visible) index++;
    update();
  });
  prev.addEventListener('click', () => {
    if(index > 0) index--;
    update();
  });

  
  document.querySelectorAll('.ps-swatch').forEach(btn =>{
    btn.addEventListener('click', e=>{
      const src = btn.dataset.src;
      const card = btn.closest('.ps-card');
      const img = card.querySelector('.ps-img');
      if(src) img.src = src;
    });
  });

  
  document.querySelectorAll('.ps-heart').forEach(h=>{
    h.addEventListener('click', ()=> h.textContent = h.textContent === '♡' ? '♥' : '♡');
  });


  document.body.style.overflowX = 'hidden';
})();

const carousel = document.querySelector('.carousel-viewport');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

let scrollIndex = 0;
const visibleCount = 4;
const totalItems = document.querySelectorAll('.product-card').length;

btnRight.addEventListener('click', () => {
  if (scrollIndex < totalItems - visibleCount) {
    scrollIndex++;
    carousel.style.transform = `translateX(-${scrollIndex * (250 + 20)}px)`;
  }
});

btnLeft.addEventListener('click', () => {
  if (scrollIndex > 0) {
    scrollIndex--;
    carousel.style.transform = `translateX(-${scrollIndex * (250 + 20)}px)`;
  }
});


document.querySelectorAll('.color-swatches .swatch').forEach(swatch => {
  swatch.addEventListener('click', e => {
    const card = swatch.closest('.product-card');
    const mainImg = card.querySelector('.main-img');
    const hoverImg = card.querySelector('.hover-img');
    const newSrc = swatch.dataset.src;

    mainImg.src = newSrc;
    hoverImg.src = newSrc;
  });
});

 