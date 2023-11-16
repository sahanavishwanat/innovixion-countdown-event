document.addEventListener('DOMContentLoaded', function () {
    const eventDate = new Date('December 31, 2023 23:59:59').getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeDifference = eventDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    updateCountdown(); // Initial call to display countdown immediately

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});
