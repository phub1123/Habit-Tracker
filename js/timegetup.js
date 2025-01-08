const timeRows = document.querySelectorAll('.time-row');
        let selectedTimes = [null, null]; // Stores selected times for both columns

        timeRows.forEach((row, index) => {
            // Add click event to each time row
            row.addEventListener('click', () => {
                // Determine which column was clicked based on its parent
                const columnIndex = Array.from(row.parentNode.children).indexOf(row);
                const columnId = row.parentNode.id; 

                if (columnId === 'column1') {
                    // Mark selected time for column 1
                    selectedTimes[0] = row.textContent;
                    row.classList.add('selected');
                } else if (columnId === 'column2') {
                    // Mark selected time for column 2
                    selectedTimes[1] = row.textContent;
                    row.classList.add('selected');
                }

                // Update the color for both selected cells
                updateSelection(row, columnIndex);
            });
        });

        // Function to highlight selected timings
        function updateSelection(selectedRow, columnIndex) {
            // Get all rows in the clicked column
            const columnRows = selectedRow.parentNode.children;

            // Highlight selected from the same column
            for (let row of columnRows) {
                if (row.classList.contains('selected')) {
                    row.style.backgroundColor = '#007bff';
                    row.style.color = '#fff';
                } else {
                    row.style.backgroundColor = '#f0f0f0'; /* Reset to base color */
                    row.style.color = '#000'; /* Change text color to black */
                }
            }
        }

        // Event listener for the NEXT button
        document.getElementById('nextButton').addEventListener('click', () => {
            // You may handle the selected times (selectedTimes array) here as needed
            console.log("Selected Times: ", selectedTimes);
            // Optionally, reset the selection
            resetSelection();
        });

        // Function to reset selections
        function resetSelection() {
            selectedTimes = [null, null]; // Clear saved selected times
            timeRows.forEach(row => {
                row.classList.remove('selected');
                row.style.backgroundColor = '#f0f0f0'; /* Reset to base color */
                row.style.color = '#000'; /* Change text color to black */
            });
        }