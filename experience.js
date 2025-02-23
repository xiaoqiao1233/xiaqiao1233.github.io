document.addEventListener('DOMContentLoaded', function() {
    const qrCard = document.querySelector('.qr-card');
    const showQrBtn = document.querySelector('.show-qr-btn');
    const hideQrBtn = document.querySelector('.hide-qr-btn');

    // 显示二维码
    showQrBtn.addEventListener('click', function() {
        qrCard.classList.add('flipped');
    });

    // 隐藏二维码
    hideQrBtn.addEventListener('click', function() {
        qrCard.classList.remove('flipped');
    });

    // 添加键盘支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && qrCard.classList.contains('flipped')) {
            qrCard.classList.remove('flipped');
        }
    });
});