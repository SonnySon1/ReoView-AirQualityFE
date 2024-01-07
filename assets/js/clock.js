function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').textContent = timeString;
}

// Panggil fungsi updateClock setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi untuk inisialisasi pertama kali
updateClock();
