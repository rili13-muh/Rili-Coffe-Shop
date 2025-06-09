
const cart = [];

function renderMenu() {
  const menuList = document.getElementById("menuList");
  menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>Rp${item.price.toLocaleString()}</p>
      <button onclick="addToCart(${index})" class="btn">Tambah</button>
    `;
    menuList.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(menuItems[index]);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = <span>${item.name}</span><span>Rp${item.price.toLocaleString()}</span>;
    cartItems.appendChild(div);
  });
  document.getElementById("totalPrice").innerText = Rp${total.toLocaleString()};
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const payment = document.getElementById("paymentMethod").value;

  let orderMessage = Halo, saya ingin pesan kopi:%0A;
  cart.forEach((item) => {
    orderMessage += - ${item.name} (Rp${item.price.toLocaleString()})%0A;
  });
  orderMessage += %0ANama: ${name}%0AAlamat: ${address}%0AMetode Bayar: ${payment};
  const whatsappURL = https://wa.me/62895711060608?text=${orderMessage};
  window.open(whatsappURL, "_blank");
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  document.getElementById("checkoutSection").scrollIntoView({ behavior: "smooth" });
});

// Dark/Light mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Auto Dark Mode based on Time
function toggleDarkMode() {
  const hour = new Date().getHours();
  const body = document.body;
  if (hour >= 18 || hour < 6) { // Between 6 PM and 6 AM
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

// Add Event Listener for Mode Toggle Button (if needed)
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Simulate Adding Items to Cart
function addToCart(item) {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    const price = parseInt(btn.getAttribute("data-price"));
    cart.push({ name, price });
    updateCartUI();
    showToast(`${name} ditambahkan ke keranjang ✅`);
    function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <span>Rp${item.price.toLocaleString()}</span>
      <button class="remove-btn" data-index="${index}">❌</button>
    `;
    cartItems.appendChild(div);
  });

  totalPriceEl.textContent = `Rp${total.toLocaleString()}`;
  document.getElementById("cartCount").textContent = cart.length;

  // Hapus item
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      cart.splice(index, 1);
      updateCartUI();
    });
  });
}

  });
});

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
  toggleDarkMode();
  // Optional: Call the addToCart function for a test
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => addToCart(button.dataset.item));
  });
});

<script>
  function initMap() {
    // Tentukan lokasi peta (misalnya koordinat Jakarta)
    const location = { lat: -6.2088, lng: 106.8456 };

    // Buat peta dengan setting yang sesuai
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });

    // Tambahkan marker di lokasi
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Kopi Gunung",
    });
  }
</script>

<!-- Load script Google Maps API -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
const location = { lat: -6.2088, lng: 106.8456 }; // Lokasi Jakarta
function showToast(message = "Item ditambahkan ke keranjang") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show";

  setTimeout(() => {
    toast.className = "toast";
  }, 3000); // Hilang dalam 3 detik
}
function scrollToCart() {
  document.querySelector(".cart").scrollIntoView({ behavior: "smooth" });
}
