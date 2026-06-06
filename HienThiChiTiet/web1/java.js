const anVao = document.getElementById('js-btn');
const hienRa = document.getElementById('result'); 

anVao.addEventListener('click', function() {
    const a = Number(document.getElementById('js-nguoilon').value || 0);
    const b = Number(document.getElementById('js-treem').value || 0); 
    const c = Number(document.getElementById('js-trecon').value || 0);

    // 1. Chặn trường hợp nhập số âm (Nhỏ hơn 0)
    if (a < 0 || b < 0 || c < 0) {
        alert('Số lượng người không được nhỏ hơn 0 nhé!');
        return;
    }

    // 2. Chặn trường hợp không nhập ai cả
    if (a === 0 && b === 0 && c === 0) {
        alert('Bạn cần nhập ít nhất 1 độ tuổi để tính tiền!');
        return;
    }

    // Lấy thông tin tour từ HTML
    const tenTour = document.querySelector('.title-vip').innerText;
    const ngayDi = document.getElementById('js-ngaydi').value;
    const khoiHanh = document.querySelectorAll('.dichuyen')[0].innerText.trim();
    const maTour = document.querySelectorAll('.dichuyen')[1].innerText.trim();

    // Tính tiền
    var nguoiLon = a * 15690000;
    var treEm = b * 8690000;
    var treCon = c * 4990000;
    var d = nguoiLon + treCon + treEm;

    // Hiển thị kết quả bằng các class CSS gọn gàng
    hienRa.innerHTML = `
        <div class="bill-container">
            <h3 class="bill-title"><i class="fa-solid fa-circle-check"></i> ĐẶT TOUR THÀNH CÔNG</h3>
            <h4 class="bill-tour-name">${tenTour}</h4>
            
            <div class="bill-details">
                <p><strong><i class="fa-solid fa-plane-departure icon-blue"></i> ${khoiHanh}</strong></p>
                <p><strong><i class="fa-solid fa-barcode icon-blue"></i> ${maTour}</strong></p>
                <p><strong><i class="fa-solid fa-calendar-days icon-blue"></i> Lịch đi:</strong> ${ngayDi}</p>
                
                <hr class="bill-divider-dashed">
                
                <p><strong><i class="fa-solid fa-users icon-blue"></i> Số lượng khách:</strong> ${a} Người lớn, ${b} Trẻ em, ${c} Trẻ nhỏ</p>
            </div>
            
            <hr class="bill-divider-solid">
            
            <h3 class="bill-total">Tổng thanh toán: <span>${d.toLocaleString('vi-vn')} đ</span></h3>
        </div>
    `;
});