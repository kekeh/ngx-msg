import { Injectable, EventEmitter, Output } from "@angular/core";
import { INgxMsg } from "../interfaces/ngx-msg.interface";

@Injectable()
export class NgxMsgService {
    @Output() newMessage: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    message(msg: INgxMsg): void {
        this.newMessage.emit(msg);
    }
}