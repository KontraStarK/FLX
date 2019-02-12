function formatTime(time) {
    let days = Math.floor(time / 1440);
    let hours = Math.floor((time - (days * 1440)) / 60);
    let minutes = time - (days * 1440) - (hours * 60);
    return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s).";
}
formatTime(120);