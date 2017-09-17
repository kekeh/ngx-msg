import { Injectable } from "@angular/core";
import { INgxMsgOptions } from "../interfaces/ngx-msg-options.interface";
import { NgxMsgPosition } from "../interfaces/ngx-msg.constants";

@Injectable()
export class NgxMsgConfigService implements INgxMsgOptions {
    position = NgxMsgPosition.TopRight;
    visibleTime = 5000;
    closeOnClick = true;
}