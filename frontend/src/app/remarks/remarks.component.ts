import { Component, OnInit } from '@angular/core';
import { Remark } from '../models/remark';
import { RemarkService } from '../services/remark.service';
@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent implements OnInit {
  remarks=new Remark();
  constructor(private remarkservice:RemarkService) { }

  ngOnInit(): void {
  }
  saveremarks(){
    console.log(this.remarks)
  }
}
