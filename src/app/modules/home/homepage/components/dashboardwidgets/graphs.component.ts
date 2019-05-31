import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

@Component({
    selector: 'app-homepage-dashboard-graphs',
    template: `
<div class="col-xs-12 col-sm-6 col-md-4">
    <div class="x_panel">
    <div class="x_title">
        <h2>Predictive Analysis</h2>
        <div class="clearfix"></div>
    </div>
    <div class="x_content">
        <div *ngIf="chartOptionsSpiderWeb">
        <highcharts-chart [Highcharts]="Highcharts"
            [options]="chartOptionsSpiderWeb"
            style="width: 100%; height: 400px; display: block;">
        </highcharts-chart>
        </div>
        <div *ngIf="!chartOptionsSpiderWeb">
        <p>Nothing to show</p>
        </div>

    </div>
    </div>
</div>
<!-- guage graph -->
<div class="col-xs-12 col-sm-6 col-md-4">
    <div class="x_panel">
    <div class="x_title">
        <h2>Performance</h2>
        <div class="clearfix"></div>
    </div>
    <div class="x_content">
        <div *ngIf="chartOptionsGauge">
        <highcharts-chart [Highcharts]="Highcharts"
            [options]="chartOptionsGauge"
            style="width: 100%; height: 400px; display: block;">
        </highcharts-chart>
        </div>
    </div>
    </div>
</div>`,
})

export class DashboardGraphsComponent implements OnInit {
    @Input() guagegraph;
    @Input() spiderwebgraph;

    Highcharts = Highcharts;
    chartOptionsSpiderWeb: any;
    chartOptionsGauge: any;


    ngOnInit() {
        this.Highcharts = Highcharts;
        this.initGuageGraph(this.guagegraph); // data['guagegraph']);
        this.initSpiderWebGraph(this.spiderwebgraph); // data['spiderwebgraph']);
    }
    initSpiderWebGraph(data) {
        // Spider Web Graph
        // =================
        this.chartOptionsSpiderWeb = {
            chart: {
                polar: true,
                type: 'line'
            },
            credits: false,
            legend: { enabled: false },
            title: {
                text: '',
                x: -80
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['Extracurricular', 'Exam', 'Attendance', 'Psychometric', 'Other'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },
            tooltip: {
                pointFormat: ' <b>{point.y:,.0f}%</b><br/>'
            },
            series: [{
                name: 'Percentage',
                data: data,
                pointPlacement: 'on'
            }]


        };

    } // End of initSpiderWebGraph

    initGuageGraph(data) {
        // Guage Graph
        // ===========

        this.chartOptionsGauge = {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits: false,
            title: {
                text: ''
            },

            pane: {
                startAngle: -150,
                endAngle: 150,
                background: [{
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#FFF'],
                            [1, '#333']
                        ]
                    },
                    borderWidth: 0,
                    outerRadius: '109%'
                }, {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, '#333'],
                            [1, '#FFF']
                        ]
                    },
                    borderWidth: 1,
                    outerRadius: '107%'
                }, {
                    // default background
                }, {
                    backgroundColor: '#DDD',
                    borderWidth: 0,
                    outerRadius: '105%',
                    innerRadius: '103%'
                }]
            },

            // the value axis
            yAxis: {
                min: 0,
                max: 100,

                minorTickInterval: 'auto',
                minorTickWidth: 1,
                minorTickLength: 10,
                minorTickPosition: 'inside',
                minorTickColor: '#666',

                tickPixelInterval: 30,
                tickWidth: 2,
                tickPosition: 'inside',
                tickLength: 10,
                tickColor: '#666',
                labels: {
                    step: 2,
                    rotation: 'auto'
                },
                title: {
                    text: 'marks'
                },
                plotBands: [{
                    from: 0,
                    to: 40,
                    color: '#DF5353' // red
                }, {
                    from: 40,
                    to: 70,
                    color: '#DDDF0D' // yellow
                }, {
                    from: 70,
                    to: 100,
                    color: '#55BF3B' // green
                }]
            },

            series: [{
                name: 'Termwise Average',
                data: [data],
                tooltip: {
                    valueSuffix: ' marks'
                }
            }]
        };
    }
}
