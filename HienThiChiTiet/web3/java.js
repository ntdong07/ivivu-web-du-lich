// ==================== BEGIN JS HEADER ACCOUNT ====================
const btnTaiKhoan = document.querySelector('.box-menu1');
const boxAccount = document.querySelector('.account');

// Kiểm tra xem nút có tồn tại không rồi mới add sự kiện
if(btnTaiKhoan && boxAccount) {
    btnTaiKhoan.addEventListener('click', function(event) {
        boxAccount.classList.toggle('show');
    });

    boxAccount.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });

    document.addEventListener('click', function(event) {
        if (!btnTaiKhoan.contains(event.target)) {
            boxAccount.classList.remove('show');
        }
    });
}
// ==================== END JS HEADER ACCOUNT ====================


// ==================== BEGIN JS CONTENT TÍNH TIỀN ====================
const btnTinh = document.getElementById('js-btn-tinh');
const divKetQua = document.getElementById('js-result');

if(btnTinh && divKetQua) {
    btnTinh.addEventListener('click', function() {
        
        // 1. Lấy giá trị
        const ngayDi = document.getElementById('js-ngaydi').value;
        const soNguoiLon = Number(document.getElementById('js-nguoilon').value) || 0;
        const soTreEm = Number(document.getElementById('js-treem').value) || 0;

        // 2. Validate
        if (soNguoiLon === 0 && soTreEm === 0) {
            alert("Bạn chưa nhập số lượng người đi!");
            return;
        }

        // 3. Tính toán 
        const tongTien = (soNguoiLon * 345000) + (soTreEm * 250000);

        // 4. Đổ dữ liệu HTML sử dụng Class (Không dùng inline style)
        divKetQua.innerHTML = `
            <div class="result-box-wrapper">
                <div class="result-date"><strong>Ngày sử dụng:</strong> ${ngayDi}</div>
                
                <div class="result-total-price">
                    Tổng tiền: ${tongTien.toLocaleString('vi-VN')} VNĐ
                </div>
                
                <button id="js-btn-datve" class="btn btn-datve">Tiếp tục Đặt Vé</button>
                
                <div id="js-msg-thanhcong" class="result-msg-success">
                    Chúc mừng bạn đã đặt vé thành công!
                </div>
            </div>
        `;

        // 5. Bắt sự kiện cho nút Đặt Vé
        const btnDatVe = document.getElementById('js-btn-datve');
        const msgThanhCong = document.getElementById('js-msg-thanhcong');

        btnDatVe.addEventListener('click', function() {
            msgThanhCong.style.display = 'block';
        });
    });
}
// ==================== END JS CONTENT TÍNH TIỀN ====================