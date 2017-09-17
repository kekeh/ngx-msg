import {Component} from '@angular/core';

@Component({
  selector: 'ngx-msg-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: module.id,
})

export class MyNgxMsgApp {

  constructor() {
    console.log('constructor: MyNgxMsgApp');
  }

}
