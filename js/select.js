// select
const select = document.querySelector('#select');
const navSelect = document.querySelector('#nav-select');

select.addEventListener('click', function () {
    select.classList.toggle('select-active');
    navSelect.classList.toggle('hidden');
});

// Menutup form select Mobile ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideSelect = select.contains(event.target);
    const isClickInsideNavSelect = navSelect.contains(event.target);

    if (!isClickInsideSelect && !isClickInsideNavSelect) {
        select.classList.remove('select-active');
        navSelect.classList.add('hidden');
    }
});