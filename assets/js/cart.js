// Hàm giảm số lượng sản phẩm
function decreaseQuantity(button) {
  const quantityInput = button.nextElementSibling;
  let quantity = parseInt(quantityInput.value);

  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;

    // Cập nhật giá tiền
    updatePrice(button.closest("tr"), quantity);
  }
}

// Hàm tăng số lượng sản phẩm
function increaseQuantity(button) {
  const quantityInput = button.previousElementSibling;
  let quantity = parseInt(quantityInput.value);

  quantity++;
  quantityInput.value = quantity;

  // Cập nhật giá tiền
  updatePrice(button.closest("tr"), quantity);
}

// Hàm cập nhật giá tiền cho sản phẩm
function updatePrice(row, quantity) {
  const priceCell = row.querySelector("td:nth-child(2)");
  const totalCell = row.querySelector("td:nth-child(4)");
  const price = parseInt(priceCell.textContent.replace(/[^0-9]/g, ""));

  // Tính tổng tiền cho sản phẩm đó
  const totalPrice = price * quantity;
  totalCell.textContent = totalPrice.toLocaleString() + " đ";

  // Cập nhật tổng thanh toán
  updateTotal();
}

// Hàm xóa sản phẩm
function removeItem(button) {
  const row = button.closest("tr");
  row.remove();

  // Cập nhật tổng thanh toán
  updateTotal();
}

// Hàm cập nhật tổng thanh toán
function updateTotal() {
  const rows = document.querySelectorAll("#cart-items tr");
  let totalItems = 0;
  let totalPrice = 0;

  rows.forEach((row) => {
    const quantityInput = row.querySelector("input[type='text']");
    const totalCell = row.querySelector("td:nth-child(4)");

    const quantity = parseInt(quantityInput.value);
    const price = parseInt(totalCell.textContent.replace(/[^0-9]/g, ""));

    totalItems += quantity;
    totalPrice += price;
  });

  // Cập nhật thông tin tổng
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-price").textContent = totalPrice.toLocaleString() + " đ";
}

// Hàm áp dụng mã giảm giá
function applyDiscount() {
  const discountCode = document.getElementById("discountCode").value.trim();
  const discountMessage = document.getElementById("discountMessage");

  if (discountCode === "NHOM2") {
    const totalElement = document.getElementById("total-price");
    const currentTotal = parseInt(totalElement.textContent.replace(/[^0-9]/g, ""));
    const discountedTotal = currentTotal * 0.5; // Giảm 50%
    totalElement.textContent = discountedTotal.toLocaleString() + " đ";
    discountMessage.textContent = "Mã giảm giá được áp dụng! Giảm 50% cho đơn hàng!";
  } else {
    discountMessage.textContent = "Mã giảm giá không hợp lệ!";
  }
}
// Hàm hiển thị modal thanh toán
function openCheckoutModal() {
  const totalPriceElement = document.getElementById("total-price");
  const modalTotalPriceElement = document.getElementById("modalTotalPrice");

  // Hiển thị tổng tiền trong modal
  modalTotalPriceElement.textContent = totalPriceElement.textContent;

  // Hiển thị modal
  const checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
  checkoutModal.show();
}

// Hàm xử lý khi người dùng nhấn "Xác nhận thanh toán"
function submitCheckout() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
  if (!name || !phone || !address || !paymentMethod) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Xử lý thanh toán
  alert(`Cảm ơn bạn ${name}! Đơn hàng sẽ được giao đến: ${address}`);

  // Reset giỏ hàng (tùy chỉnh theo nhu cầu)
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("total-items").textContent = "0";
  document.getElementById("total-price").textContent = "0 đ";

  // Đóng modal
  const checkoutModal = bootstrap.Modal.getInstance(
    document.getElementById("checkoutModal")
  );
  checkoutModal.hide();
}
