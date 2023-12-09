// Select 1
const select1 = document.querySelector('#select1');
const navSelect1 = document.querySelector('#nav-select1');

select1.addEventListener('click', function () {
    select1.classList.toggle('select-active');
    navSelect1.classList.toggle('hidden');
});

// Select 2
const select2 = document.querySelector('#select2');
const navSelect2 = document.querySelector('#nav-select2');

select2.addEventListener('click', function () {
    select2.classList.toggle('select-active');
    navSelect2.classList.toggle('hidden');
});

// Menutup form select Mobile ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideSelect1 = select1.contains(event.target);
    const isClickInsideNavSelect1 = navSelect1.contains(event.target);
    const isClickInsideSelect2 = select2.contains(event.target);
    const isClickInsideNavSelect2 = navSelect2.contains(event.target);

    if (!isClickInsideSelect1 && !isClickInsideNavSelect1) {
        select1.classList.remove('select-active');
        navSelect1.classList.add('hidden');
    }

    if (!isClickInsideSelect2 && !isClickInsideNavSelect2) {
        select2.classList.remove('select-active');
        navSelect2.classList.add('hidden');
    }
});
