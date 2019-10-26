import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styles: []
})
export class TestPageComponent implements OnInit {

  constructor() { }
  formdata: object = {
    mo: { value: 'a', test: 'mo', type: 'input', selectData: [], change: null },
    nn: { value: 'a', test: 'nn', type: 'select', change: null, selectData: [{ value: 'aa', test: 'AA' }, { value: 'bb', test: 'BB' }] }
  }
  @Input()
  formdata_arr = []
  ngOnInit() {
    // this.formdata_arr = Object.values(this.formdata)
  }

}
