// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Avatar Mobile
const navAvatar = document.querySelector('#nav-avatar');
const avatar = document.querySelector('#avatar');

avatar.addEventListener('click', function () {
    navAvatar.classList.toggle('hidden');
});

// Avatar Dekstop
const navDekstop = document.querySelector('#nav-desktop');
const dekstopButton = document.querySelector('#dekstop');

dekstopButton.addEventListener('click', function () {
    navDekstop.classList.toggle('hidden');
});


// Menutup form Avatar Mobile ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideAvatar = avatar.contains(event.target);
    const isClickInsideNavAvatar = navAvatar.contains(event.target);

    if (!isClickInsideAvatar && !isClickInsideNavAvatar) {
        navAvatar.classList.add('hidden');
    }
});

// Menutup form Hamburger Mobile ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideHamburger = hamburger.contains(event.target);
    const isClickInsideNavMenu = navMenu.contains(event.target);

    if (!isClickInsideHamburger && !isClickInsideNavMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Menutup form Avatar Dekstop ketika area di luar form diklik
document.addEventListener('click', function (event) {
    const isClickInsideAvatar = avatar.contains(event.target);
    const isClickInsideNavAvatar = navAvatar.contains(event.target);

    if (!isClickInsideAvatar && !isClickInsideNavAvatar) {
        navAvatar.classList.add('hidden');
    }
    
    const isClickInsideDekstopButton = dekstopButton.contains(event.target);
    const isClickInsideNavDekstop = navDekstop.contains(event.target);

    if (!isClickInsideDekstopButton && !isClickInsideNavDekstop) {
        navDekstop.classList.add('hidden');
    }
});