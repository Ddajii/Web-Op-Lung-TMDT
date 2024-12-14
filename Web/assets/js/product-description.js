document.getElementById('increaseQuantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantityInput');
    var currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue) && currentValue < 99) {
      quantityInput.value = currentValue + 1; // Tăng số lượng lên 1
    }
  });
  
  document.getElementById('decreaseQuantity').addEventListener('click', function() {
    var quantityInput = document.getElementById('quantityInput');
    var currentValue = parseInt(quantityInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityInput.value = currentValue - 1; // Giảm số lượng đi 1
    }
  });
  document.querySelector('.btn-danger').addEventListener('click', function() {
    // Hiển thị thông báo
    var cartAlert = document.getElementById('cartAlert');
    cartAlert.classList.remove('d-none'); // Hiển thị thông báo
    setTimeout(function() {
      cartAlert.classList.add('d-none'); // Ẩn thông báo sau 3 giây
    }, 3000); // 3 giây sau, ẩn thông báo
  
    // Cập nhật số lượng trong giỏ hàng
    updateCartQuantity();
  });
  
  function updateCartQuantity() {
    var quantityInput = document.getElementById('quantityInput');
    var currentValue = parseInt(quantityInput.value, 10);
    var cartQuantity = document.getElementById('cartQuantity'); // Đoạn phần tử hiển thị số lượng trong giỏ hàng
    
    if (!isNaN(currentValue) && currentValue > 0) {
      cartQuantity.textContent = currentValue; // Cập nhật số lượng giỏ hàng
    }
  }
  
  document.querySelector('.btn-primary').addEventListener('click', function() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;
  
    // Validate form fields
    if (!fullName || !phoneNumber || !address) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
  
    // Show checkout modal
    var checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show(); // Hiển thị modal
  });

  