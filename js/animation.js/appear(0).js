function runAnimation() {
    $('.early .thumbnai').each(function(i) {
        setTimeout(function() {
            $('.early .thumbnai').eq(i).addClass('tampil');
        }, 300 * (i+1))
    });
}

$(document).ready(function() {
    runAnimation();
});