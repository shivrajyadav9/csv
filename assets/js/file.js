document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const dataTable = document.getElementById('data-table');
    const rows = dataTable.getElementsByTagName('tr');

    // for searching content in the table
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();

        for (let i = 1; i < rows.length; i++) { 
            const row = rows[i];
            const cells = row.getElementsByTagName('td');
            let shouldDisplay = false;

            for (let j = 0; j < cells.length; j++) {
                const cell = cells[j];
                if (cell) {
                    const text = cell.textContent || cell.innerText;
                    if (text.toLowerCase().indexOf(filter) > -1) {
                        shouldDisplay = true;
                        break;
                    }
                }
            }

            if (shouldDisplay) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
});
