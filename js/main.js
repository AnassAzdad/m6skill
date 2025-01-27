document.addEventListener('DOMContentLoaded', function() {
    // Populate the time slots
    const appointmentTimeSelect = document.getElementById('appointment-time');
    for (let hour = 9; hour < 17; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            const time = `${hour}:${minute === 0 ? '00' : minute}`;
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            appointmentTimeSelect.appendChild(option);
        }
    }

    let weekNumber = 1;
    const weekTitle = document.getElementById('currentWeek');
    const nextWeekBtn = document.getElementById('nextWeek');
    const prevWeekBtn = document.getElementById('prevWeek');
    
    nextWeekBtn.addEventListener('click', function() {
        if (weekNumber < 52) {
            weekNumber++;
            updateWeekDisplay();
        }
    });
    
    prevWeekBtn.addEventListener('click', function() {
        if (weekNumber > 1) {
            weekNumber--;
            updateWeekDisplay();
        }
    });
    
    function updateWeekDisplay() {
        weekTitle.textContent = `Week ${weekNumber}`;
        if (weekNumber === 52) {
            nextWeekBtn.style.backgroundColor = 'gray';
        } else {
            nextWeekBtn.style.backgroundColor = '';
        }
        if (weekNumber === 1) {
            prevWeekBtn.style.backgroundColor = 'gray';
        } else {
            prevWeekBtn.style.backgroundColor = '';
        }
    }
    
    prevWeekBtn.style.backgroundColor = 'gray';

    // Add day selection functionality
    const dayCards = document.querySelectorAll('.day-card');
    
    dayCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from all cards
            dayCards.forEach(c => {
                c.style.backgroundColor = '';
                c.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            this.style.backgroundColor = '#2ecc71'; // Green color
            this.classList.add('selected');
        });
    });
});
