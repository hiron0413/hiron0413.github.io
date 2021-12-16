$(function() {
    var d = new Date().getMonth() + 1
    if (3 <= d && d <= 5) {
        document.documentElement.style.setProperty('--season-color', '#a7e42e');
    } else if (6 <= d && d <= 8) {
        document.documentElement.style.setProperty('--season-color', '#46cc3d');
    } else if (9 <= d && d <= 11) {
        document.documentElement.style.setProperty('--season-color', '#f28a22');
    } else {
        document.documentElement.style.setProperty('--season-color', '#add8d8');
    }
});