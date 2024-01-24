//your JS code here. If required.
function updateTimer() {
            // Get the current date and time
            const now = new Date();

            // Format the date and time
            const formattedDateTime = now.toLocaleString();

            // Display the formatted date and time in the 'timer' element
            document.getElementById('timer').textContent = formattedDateTime;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial update
        updateTimer();
