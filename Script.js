// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Get the card width dynamically
const cardWidth = carousel.querySelector('.product-card').offsetWidth + 24; // card + gap

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Hero Parallax Effect
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.5; // slower movement
  hero.style.backgroundPositionY = `${offset}px`;
});

// Scroll-triggered animation for product cards
const productCards = document.querySelectorAll('.product-card');

function checkCardsInView() {
  const triggerBottom = window.innerHeight * 0.85;

  productCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('in-view');
    }
  });
}

// Initial check
checkCardsInView();

// Check on scroll
window.addEventListener('scroll', checkCardsInView);

function openWhatsApp(device) {
  const phoneNumber = "233547508076"; // replace with your WhatsApp number, country code included
  const message = `Hello! I want to buy or swap this device: ${device}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

