lucide.createIcons();

// LIVE DATA SIMULATION
const liveBPM = document.getElementById('liveBPM');
setInterval(() => {
    let current = parseInt(liveBPM.innerText);
    liveBPM.innerText = current + (Math.random() > 0.5 ? 1 : -1);
}, 2000);

// HEART RATE MINI CHART
const hrCtx = document.getElementById('hrChart').getContext('2d');
new Chart(hrCtx, {
    type: 'line',
    data: {
        labels: new Array(15).fill(''),
        datasets: [{
            data: [140, 145, 142, 150, 155, 160, 158, 162, 164, 168, 170, 165, 162, 160, 164],
            borderColor: '#ff3e3e',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
            fill: true,
            backgroundColor: 'rgba(255, 62, 62, 0.1)'
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});

// WEEKLY LOAD CHART
const loadCtx = document.getElementById('loadChart').getContext('2d');
new Chart(loadCtx, {
    type: 'bar',
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            data: [45, 70, 55, 80, 40, 95, 30],
            backgroundColor: '#FC4C02',
            borderRadius: 5
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { display: false },
            x: { grid: { display: false }, ticks: { color: '#444', font: { family: 'JetBrains Mono', size: 10 } } }
        }
    }
});