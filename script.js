// Mobile Menu Toggle
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Products Data
const products = [
    {
        id: 1,
        title: "Smartfonlar va Gadjetlar",
        description: "Eng so'ngi texnologiyalar bilan jihozlangan smartfonlar va aqlli qurilmalar.",
        price: "$200-$1000",
        category: "Elektronika"
    },
    {
        id: 2,
        title: "Maishiy Texnika",
        description: "Yuqori sifatli maishiy texnika va oshxona jihozlari.",
        price: "$50-$800",
        category: "Maishiy Texnika"
    },
    {
        id: 3,
        title: "Qurilish Materiallari",
        description: "Turli xil qurilish materiallari va qurilish jihozlari.",
        price: "$10-$500",
        category: "Qurilish"
    },
    {
        id: 4,
        title: "Kiyim-kechak",
        description: "Zamonaviy va sifatli kiyim-kechak modellari.",
        price: "$15-$200",
        category: "Moda"
    },
    {
        id: 5,
        title: "Avtomobil Ehtiyot Qismlari",
        description: "Turli avtomobillar uchun ehtiyot qismlar va aksessuarlar.",
        price: "$5-$300",
        category: "Avtomobil"
    },
    {
        id: 6,
        title: "O'yinchoqlar",
        description: "Bolalar uchun xavfsiz va qiziqarli o'yinchoqlar.",
        price: "$3-$100",
        category: "O'yinchoqlar"
    },
    {
        id: 7,
        title: "Idish-tovoq",
        description: "Turli xil idish-tovoq va oshxona anjomlari.",
        price: "$2-$50",
        category: "Maishiy"
    },
    {
        id: 8,
        title: "Sport Inventarlari",
        description: "Professional va havaskor sportchilar uchun inventarlar.",
        price: "$10-$500",
        category: "Sport"
    }
];

// Populate Modal with Products
function populateModal() {
    const modalProductsContainer = document.getElementById('modal-products');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-image">
                ${product.category}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">Narx: ${product.price}</div>
            </div>
        `;
        
        modalProductsContainer.appendChild(productCard);
    });
}

// Modal Functionality
document.getElementById('show-products-btn').addEventListener('click', function() {
    document.getElementById('products-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('products-modal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('products-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateModal();
});