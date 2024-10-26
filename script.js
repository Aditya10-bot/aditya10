document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.querySelector('.sidebar');

    openBtn.addEventListener('click', function () {
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
    });
});
