document.addEventListener('DOMContentLoaded', function() {
    // Populate time slots (9:00 - 17:00)
    const timeSlots = document.querySelector('.time-slots');
    if (timeSlots) {
        for (let hour = 9; hour < 17; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const timeSlot = document.createElement('div');
                timeSlot.classList.add('time-slot');
                timeSlot.textContent = `${hour}:${minute === 0 ? '00' : minute}`;
                timeSlots.appendChild(timeSlot);
            }
        }
    }

    // Week navigation functionality
    const weekTitle = document.getElementById('currentWeek');
    const nextWeekBtn = document.getElementById('nextWeek');
    const prevWeekBtn = document.getElementById('prevWeek');

    if (weekTitle && nextWeekBtn && prevWeekBtn) {
        let weekNumber = 1;
        
        function updateWeekDisplay() {
            weekTitle.textContent = `Week ${weekNumber}`;
            nextWeekBtn.style.backgroundColor = weekNumber === 52 ? 'gray' : '';
            prevWeekBtn.style.backgroundColor = weekNumber === 1 ? 'gray' : '';
        }

        nextWeekBtn.addEventListener('click', () => {
            if (weekNumber < 52) {
                weekNumber++;
                updateWeekDisplay();
            }
        });

        prevWeekBtn.addEventListener('click', () => {
            if (weekNumber > 1) {
                weekNumber--;
                updateWeekDisplay();
            }
        });

        updateWeekDisplay();
    }
});
