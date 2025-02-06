/* const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }); */

const lineChart = document.getElementById('barChart');
const labels = [
    '1 maj',
    '2 maj',
];
new Chart(lineChart, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
        {
         label: 'povratni label',
         data: [1844, 1554, 1273, 1284, 1126, 946, 964, 1793, 1432, 1130, 1074],
        },
        {
         label: 'izlazak',
         data: [1199, 1314,1147, 1403, 1217, 101,1138,1272,957,862],
        }
    ]
  }
});

const pieChart = document.getElementById('pieChart');

new Chart(pieChart, {
    type: 'pie',
    data: {
        labels: ['Srbija', 'Kina', 'Japan', 'Ostali'],
        datasets: [
            {
                label: 'Drzave',
                data: [75000000000, 4200000000000, 42000000000000, 15667]
            }
        ]
    }
})