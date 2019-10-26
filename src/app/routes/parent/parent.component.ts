import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {

  constructor() { }

  formdata: any = {
    mo: { value: '111', test: '1mo', type: 'input', selectData: [], change: e => console.log(e) },
    nn: { value: '222', test: '2nn', type: 'select', change: null, selectData: [{ value: 'aa', test: 'AA' }, { value: 'bb', test: 'BB' }] }
  }
  form_arr = []
  ngOnInit() {
    // this.formdata.mo.change = (e) => {
    //   console.log(e)
    // }
    this.form_arr = Object.values(this.formdata)
  }

}
