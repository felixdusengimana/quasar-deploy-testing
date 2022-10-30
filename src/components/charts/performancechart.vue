  <template>
      <q-card class="my-card">
           <q-card-section>
           <div id="chart">
              <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>
           </q-card-section>
      </q-card>

      <q-card class="my-card tw-mt-5">
          <q-card-section>
          <div id="chart" class="tw-mt-5">
            <apexchart type="bar" height="350" :options="chartOptions2" :series="series2"></apexchart>
          </div>
          </q-card-section>
      </q-card>
  </template>

  <script>
  export default {
     name: 'performanceChart',
     data() {
         return {
             series2: [
            {
              name: 'Hours attended',
              data: [
                {
                  x: 'Week 1',
                  y: 20,
                  goals: [
                    {
                      name: 'Total hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 2',
                  y: 35,
                  goals: [
                    {
                      name: 'Total hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 3',
                  y: 25,
                  goals: [
                    {
                      name: 'Total hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 4',
                  y: 35,
                  goals: [
                    {
                      name: 'Total hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                }
              ]
            }
          ],
          chartOptions2: {
              charts: {
              height: 350,
              type: 'bar'
            },
            plotOptions2: {
              bars: {
                columnWidth: '60%'
              }
            },
            colors: ['#9F9FFF'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Your attendance for second semester', 'Total attendance allocated'],
              markers: {
                fillColors: ['#9F9FFF', '#00009F']
              }
            }
          },
              series: [
            {
              name: 'Hours Attended',
              data: [
                {
                  x: 'Week 1',
                  y: 20,
                  goals: [
                    {
                      name: 'Hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 2',
                  y: 15,
                  goals: [
                    {
                      name: 'Hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 3',
                  y: 25,
                  goals: [
                    {
                      name: 'Hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                },
                {
                  x: 'Week 4',
                  y: 35,
                  goals: [
                    {
                      name: 'Hours to be attended',
                      value: 40,
                      strokeHeight: 5,
                      strokeColor: '#00009F'
                    }
                  ]
                }
              ]
            }
          ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'bar'
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            },
            colors: ['#9F9FFF'],
            dataLabels: {
              enabled: false
            },
            legend: {
              show: true,
              showForSingleSeries: true,
              customLegendItems: ['Your attendance for first semester', 'Total attendance allocated'],
              markers: {
                fillColors: ['#9F9FFF', '#00009F']
              }
            }
          },
         }
     }
  }
  </script>