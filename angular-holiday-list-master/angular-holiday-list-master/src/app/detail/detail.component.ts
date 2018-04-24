import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Data} from '../data.service';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
})

export class DetailComponent {
    private data;
    constructor(private _data:Data,private router:Router,private activatedRoute:ActivatedRoute){
    }
    ngOnInit(){
        this.data = this._data.storage
    }

}