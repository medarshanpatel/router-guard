import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; // firebase
import * as firebase from 'firebase/app'; // firebase

declare var Highcharts: any; // highchart script variable decalre


import { ProtectedService } from '../protected.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr'; // toastr - display messages
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],

})

export class DashboardComponent implements OnInit {

    piechartInfo: any;
    private pieChartObject: any;

    constructor(private db: AngularFireDatabase) { }

    ngOnInit() {
         /*
        let pieChartArray: number[] = [];
        this.piechartInfo = this.db.database.ref('piechart');
        this.piechartInfo.on('value', snapshot => {

            pieChartArray.splice(0, pieChartArray.length);
            snapshot.forEach(function (noteSnapshot) {
                pieChartArray.push(noteSnapshot.val());
            });
            
            console.log("this.tempJson", pieChartArray);
            //this.pieChartObject.series[0].setData(pieChartArray, true, false, false);
            this.pieChartObject.series[0].remove();
            this.pieChartObject.addSeries({ name: 'Installation', data: pieChartArray });

        });
       
        this.pieChartObject = new Highcharts.chart('piechartDisplay', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{}]
        });*/


    }

}
