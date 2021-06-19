function chartData() {
    return {
        datasets:
            [
                {
                    label: "Hava Tahmin Değer Tablosu",
                    data: dataSet().map((point) => {
                        return { x: point.humidity, y: point.pressure }
                    }),
                    pointBackgroundColor: dataSet().map((point) => {
                        return point.rain ? 'red' : 'blue'
                    }),
                    pointRadius: 5.5,
                    showLine: false,
                    backgroundColor: 'purple'
                }
            ]
    }
}

function chartOptions() {
    return {
        maintainAspectRadio: false,
        legend:
        {
            labels:
            {
                fontSize: 20
            }
        },
        responsive: true,
        scales:
        {
            xAxes:
                [
                    {
                        display: true,
                        scaleLabel:
                        {
                            display: true,
                            labelString: 'Nem Değeri',
                            fontSize: 20
                        },
                        ticks:
                        {
                            fontSize: 14,
                            max: 10,
                            min: 0
                        }
                    }
                ],
            yAxes:
                [
                    {
                        display: true,
                        scaleLabel:
                        {
                            display: true,
                            labelString: 'Basınç Değeri',
                            fontSize: 20
                        },
                        ticks:
                        {
                            fontSize: 20,
                            max: 10,
                            min: 0
                        }
                    }
                ]

        }
    }
}