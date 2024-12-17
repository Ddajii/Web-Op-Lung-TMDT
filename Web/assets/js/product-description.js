document.getElementById('increaseQuantity').addEventListener('click', function() {
  var quantityInput = document.getElementById('quantityInput');
  var currentValue = parseInt(quantityInput.value, 10);
  if (!isNaN(currentValue) && currentValue < 99) {
      quantityInput.value = currentValue + 1; // Tăng số lượng lên 1
      updateTotalPrice(); // Cập nhật tổng tiền
  }
});

document.getElementById('decreaseQuantity').addEventListener('click', function() {
  var quantityInput = document.getElementById('quantityInput');
  var currentValue = parseInt(quantityInput.value, 10);
  if (!isNaN(currentValue) && currentValue > 1) {
      quantityInput.value = currentValue - 1; // Giảm số lượng đi 1
      updateTotalPrice(); // Cập nhật tổng tiền
  }
});

document.getElementById('buyNowButton').addEventListener('click', function() {
  var myModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  myModal.show();
  updateTotalPrice(); // Cập nhật tổng tiền khi mở modal thanh toán
});

function updateTotalPrice() {
  var quantityInput = document.getElementById('quantityInput');
  var quantity = parseInt(quantityInput.value, 10);
  var pricePerUnit = 50000; // Giá mỗi đơn vị

  if (!isNaN(quantity) && quantity > 0) {
      var totalPrice = pricePerUnit * quantity; // Tính tổng tiền
      document.getElementById('modalTotalPrice').textContent = totalPrice.toLocaleString() + 'đ'; 
  }
}
