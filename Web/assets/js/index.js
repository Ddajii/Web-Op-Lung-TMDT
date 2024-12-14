// Điều chỉnh tốc độ hoặc dừng marquee khi hover
document.querySelector(".marquee p").addEventListener("mouseover", function () {
  this.style.animationPlayState = "paused"; // Dừng marquee khi hover
});

document.querySelector(".marquee p").addEventListener("mouseout", function () {
  this.style.animationPlayState = "running"; // Tiếp tục khi không hover
});
// Giả sử bạn có một nút "Thêm vào giỏ hàng"
const cartBadge = document.querySelector(".cart-badge");
let cartCount = 0;

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", function () {
    cartCount++;
    cartBadge.textContent = cartCount; // Cập nhật số lượng
    cartBadge.style.display = "inline-block"; // Hiển thị badge nếu cần
  });
});
// Thêm hiệu ứng phóng to hình ảnh trong card
document.querySelectorAll(".card img").forEach((img) => {
  img.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.1)"; // Phóng to ảnh
  });

  img.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)"; // Quay về trạng thái ban đầu
  });
});
let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-inner img");
const totalSlides = slides.length;

// Hàm chuyển slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Tự động chuyển slide mỗi 3 giây
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}, 3000);
const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active")); // Bỏ active ở link cũ
    this.classList.add("active"); // Thêm active vào link hiện tại
  });
});
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.padding = "10px 20px";
  toast.style.backgroundColor = "#00CC33";
  toast.style.color = "#fff";
  toast.style.borderRadius = "5px";
  toast.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", function () {
    showToast("Sản phẩm đã được thêm vào giỏ hàng!");
  });
});
const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar-nav");

menuButton.addEventListener("click", function () {
  navbar.classList.toggle("open"); // Thêm class mở menu
});

// Đóng menu khi click bên ngoài
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
    navbar.classList.remove("open");
  }
});
