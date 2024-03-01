// Fungsi untuk menjalankan animasi tanpa menggulir
function runAnimation() {
    $('.early .thumbnai').each(function(i) {
        setTimeout(function() {
            $('.early .thumbnai').eq(i).addClass('tampil');
        }, 300 * (i+1))
    });
}

// Memanggil fungsi animasi saat dokumen dimuat
$(document).ready(function() {
    runAnimation();
});