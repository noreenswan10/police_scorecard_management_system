async function loadHistory() {
    try {
        const response = await fetch('../data/ScorecardHistory.json');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        console.log('Fetched data:', data);

        if (!Array.isArray(data.historys)) {
            throw new Error('Data is not in expected format');
        }

        const tableBody = document.querySelector('#historyTable tbody');
        tableBody.innerHTML = '';

        data.historys.forEach(history => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><i class="far fa-folder-open"></i> ${history.date}</td>
                <td><button>View</button></td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
        alert('Failed to load history data. Please try again later.');
    }
}

window.onload = loadHistory;


async function loadData() {
    try {
        const response = await fetch('../data/RecentPromotion.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const tableBody = document.querySelector('#promotionItems ul');
        data.promotions.forEach(promotion => {
            const list = document.createElement('li');
            list.innerHTML = `
                <p><i class="far fa-id-badge"></i><strong> ${promotion.position}</strong> - ${promotion.date}</p>
            `;
            tableBody.appendChild(list);
        });
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

window.onload = loadData;