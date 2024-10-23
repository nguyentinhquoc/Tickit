$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    function showSlide(index) {
        const newTransform = -index * 100; // Tính toán giá trị lùi để giữ khoảng cách
        $('.slides').css('transform', `translateX(${newTransform}%)`);
    }
    // Sự kiện vuốt
    let startX;
    let isMoving = false; // Biến trạng thái để theo dõi việc vuốt

    $('.slide-container').on('touchstart', function(e) {
        startX = e.originalEvent.touches[0].clientX; // Ghi nhận vị trí bắt đầu vuốt
        isMoving = false; // Đặt lại trạng thái khi bắt đầu vuốt
    });

    $('.slide-container').on('touchmove', function(e) {
        const moveX = e.originalEvent.touches[0].clientX; // Ghi nhận vị trí vuốt
        const diffX = startX - moveX; // Tính độ dịch chuyển

        // Chỉ thực hiện chuyển slide khi vuốt đủ xa
        if (Math.abs(diffX) > 200) {
            isMoving = true; // Đánh dấu là đang vuốt

            if (diffX > 0) {
                // Vuốt trái
                if (currentIndex < totalSlides - 1) {
                    currentIndex++; // Chuyển sang slide tiếp theo
                } else {
                    // Vuốt trái từ slide cuối cùng, nhảy về slide đầu tiên
                    currentIndex = 0;
                }
            } else {
                // Vuốt phải
                if (currentIndex > 0) {
                    currentIndex--; // Giảm chỉ số
                } else {
                    // Vuốt phải từ slide đầu tiên, nhảy về slide cuối cùng
                    currentIndex = totalSlides - 1;
                }
            }
            showSlide(currentIndex); // Hiển thị slide mới
            startX = null; // Reset touch start
        }
    });

    // Reset trạng thái sau khi vuốt
    $('.slide-container').on('touchend', function(e) {
        if (!isMoving) {
            return; // Nếu không có chuyển động thì không làm gì
        }
    });
});
