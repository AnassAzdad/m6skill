document.addEventListener('DOMContentLoaded', function() {
    let weekNumber = 1;
    const weekTitle = document.getElementById('currentWeek');
    
    weekTitle.addEventListener('click', function() {
        weekNumber++;
        weekTitle.textContent = `Week ${weekNumber}`;
    });
});