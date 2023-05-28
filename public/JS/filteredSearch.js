const filterInput = document.getElementById('filterInput');
const dataTable = document.getElementById('dataTable');
const tableRows = dataTable.getElementsByTagName('tr');
const searchBtn = document.getElementById("search");

function filterSearch(){
    const filterValue = filterInput.value.toLowerCase();

    for (let i = 2; i < tableRows.length; i++) {
        const row = tableRows[i];
        const cells = row.getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];
            const cellText = cell.textContent || cell.innerText;

            if (cellText.toLowerCase().indexOf(filterValue) > -1) {
                match = true;
                break;
            }
        }

        row.style.display = match ? '' : 'none';
    }
}

filterInput.addEventListener("keyup", (event) => {
    if(event.key == 'Enter')
    {
        filterSearch();
    }
})

searchBtn.addEventListener('click', () => {
    filterSearch();
});
