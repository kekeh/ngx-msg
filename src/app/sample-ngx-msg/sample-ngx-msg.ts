import {Component, OnInit} from '@angular/core';
import {NgxMsgService, NgxMsgConfigService, NgxMsgPosition, NgxMsgLevel, INgxMsgOptions} from 'ngx-msg';

@Component({
    selector: 'sample-ngx-msg',
    templateUrl: 'sample-ngx-msg.html',
    moduleId: module.id,
})

export class SampleNgxMsg implements OnInit {

  options: INgxMsgOptions = {
    position: NgxMsgPosition.TopRight
  };

  radioBtnSelection: number = 1;

  constructor(private msgService: NgxMsgService, private configService: NgxMsgConfigService) {
    configService.position = NgxMsgPosition.TopRight;
    configService.visibleTime = 4000;
    configService.closeOnClick = true;
  }

  ngOnInit(): void {

  }

  successMsg(): void {
    this.msgService.message({level: NgxMsgLevel.Succeed, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'});
  }

  infoMsg(): void {
    this.msgService.message({level: NgxMsgLevel.Info, text: 'Duis non ullamcorper dui. Nulla ullamcorper ultricies urna ut accumsan. Fusce scelerisque orci non imperdiet sodales. Praesent id elit vitae neque lacinia euismod sed id odio.'});
  }

  warningMsg(): void {
    this.msgService.message({level: NgxMsgLevel.Warning, text: 'Phasellus tempor mi ac placerat euismod. '});
  }

  errorMsg(): void {
    this.msgService.message({level: NgxMsgLevel.Error, text: 'Sed et urna non dui auctor tincidunt. Morbi et ligula ut eros tristique euismod at ut tellus.', visibleTime: 5000});
  }

  onRadioBtnClicked(value: number): void {
    let copy: INgxMsgOptions = this.getCopyOfOptions();
    if (value === 1) {
      copy.position = NgxMsgPosition.TopRight;
    }
    else if (value === 2) {
      copy.position = NgxMsgPosition.TopLeft;
    }
    else if (value === 3) {
      copy.position = NgxMsgPosition.BottomRight;
    }
    else if (value === 4) {
      copy.position = NgxMsgPosition.BottomLeft;
    }
    else if (value === 5) {
      copy.position = NgxMsgPosition.TopFull;
    }
    else if (value === 6) {
      copy.position = NgxMsgPosition.BottomFull;
    }
    this.options = copy;
    this.radioBtnSelection = value;
  }

  getCopyOfOptions(): INgxMsgOptions {
    return JSON.parse(JSON.stringify(this.options));
  }
}
