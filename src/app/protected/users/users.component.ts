import { Component, OnInit } from '@angular/core';
import { ProtectedService } from '../protected.service';
import { AngularFireDatabase } from 'angularfire2/database'; // firebase
import * as firebase from 'firebase/app'; // firebase
import { ToastsManager } from 'ng2-toastr/ng2-toastr'; // toastr - display messages
declare var Highcharts: any; // highchart script variable decalre

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [ProtectedService]
})

export class UsersComponent implements OnInit {

  userData;
  userInfo;
  graphData: object;
  graphInfo;
  private highChartObject: any;
  private tempArray: number[] = [];

  constructor(public protectedService: ProtectedService, private db: AngularFireDatabase, public toastr: ToastsManager) { }


  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  }


  /**
   * show high chart
   */
  onloadGraph() {
    //let tempArray: number[] = [];
    var array = this.tempArray;

    this.graphInfo = this.db.database.ref('graph');
    //console.log("graphInfo",this.graphInfo);
    //console.log("temparray",array);
    this.graphInfo.on('value', snapshot => {
      array.splice(0, array.length);
      snapshot.forEach(function (noteSnapshot) {
        array.push(noteSnapshot.val().data);
      });

      console.log("tempArray", array);

      this.highChartObject.series[0].setData(array, true, false, true);
    });
  }

  ngOnInit() {
    this.userData = this.db.database.ref('users');
    this.userInfo = this.db.list(
      this.userData,
      {
        preserveSnapshot: true,
        query: {
          orderByChild: "name"
        }
      }
    );


    this.highChartObject = new Highcharts.chart('showGraph',
      {
        chart: {
          animation: {
            duration: 1000
          }
        },
        title: {
          text: 'Solar Employment Growth by Sector, 2010-2016'
        },
        subtitle: {
          text: 'Source: thesolarfoundation.com'
        },
        yAxis: {
          title: {
            text: 'Number of Employees'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            pointStart: 2010,
          }
        },

        series: [{
          name : "Installation",
          data : []
        }]
      });
  }

}
