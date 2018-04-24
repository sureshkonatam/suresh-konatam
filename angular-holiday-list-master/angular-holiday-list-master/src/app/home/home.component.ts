import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { holidayService } from '../holiday.service';
import { Data } from '../data.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})

export class HomeComponent {
    private holidayList;
    private holidayNames = [];
    private holidays;
    constructor(private _holidayService: holidayService, private router: Router, private _data: Data) { }
    ngOnInit() {
        this.getHolidayList();
    }

    getHolidayList() {
        this._holidayService.getholidayList().subscribe(model => {
            this.holidays = model.holidays;
            this.holidayList = Object.keys(model.holidays);
            this.parseDataToShowHolidays(model.holidays);

        },
            error => {
                console.log(error);
            })
    }
    parseDataToShowHolidays(data) {
        this.holidayList.forEach(element => {
            if (data[element].length == 1) {
                this.holidayNames.push(data[element][0].name);
            }
            else {
                data[element].forEach(ele => {
                    this.holidayNames.push(ele.name);
                })
            }
        })
    }

    navigateToDetail(data) {
        this._data.storage = this.gettingData(data, this.holidays);
        this.router.navigate(["detail"]);
    }

    gettingData(data, list) {
        let routeData;
        this.holidayList.forEach(element => {
            if (list[element].length == 1) {
                if (data == list[element][0].name) {
                    routeData = list[element][0];
                }
            }
            else {
                list[element].forEach(ele => {
                    if(ele.name == data){
                    routeData = ele;
                    }
                });
            }
        });
        return routeData;
    }

}