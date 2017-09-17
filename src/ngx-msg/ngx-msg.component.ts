import { Component, Input, OnChanges, OnInit, OnDestroy, SimpleChanges } from "@angular/core";
import { Subscription } from "rxjs";

import { INgxMsg } from "./interfaces/ngx-msg.interface";
import { INgxMsgOptions } from "./interfaces/ngx-msg-options.interface";
import { INgxMsgPosition } from "./interfaces/ngx-msg-position.interface";
import { NgxMsgPosition } from "./interfaces/ngx-msg.constants";
import { NgxMsgService } from "./services/ngx-msg.service";
import { NgxMsgConfigService } from "./services/ngx-msg-config.service";

// webpack1_
declare var require: any;
const ngxMsgStyles: string = require("./ngx-msg.component.css");
const ngxMsgTpl: string = require("./ngx-msg.component.html");
// webpack2_

@Component({
    selector: "ngx-msg",
    styles: [ngxMsgStyles],
    template: ngxMsgTpl
})

export class NgxMsgComponent implements OnChanges, OnInit, OnDestroy {
    @Input() options: INgxMsgOptions;

    messages: Array<INgxMsg> = [];
    pos: INgxMsgPosition = {top: 0, right: 0, bottom: 0, left: 0};
    subscription: Subscription;
    opts: INgxMsgOptions = null;

    constructor(private msgService: NgxMsgService, private config: NgxMsgConfigService) {
        this.opts = Object.assign({}, config);
        this.setPosition(this.opts.position);
    }

    ngOnInit() {
        this.subscription = this.msgService.newMessage.subscribe(this.newMessage.bind(this));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty("options")) {
            this.parseOptions(changes["options"].currentValue);
            this.setPosition(this.opts.position);
        }
    }

    parseOptions(opts: INgxMsgOptions): void {
        if (opts !== undefined) {
            Object.keys(opts).forEach((k) => {
                (<INgxMsgOptions>this.opts)[k] = opts[k];
            });
        }
    }

    newMessage(msg: INgxMsg): void {
        this.messages.push(msg);
        setTimeout(() => {
            this.removeMessage(msg);
        }, msg.visibleTime ? msg.visibleTime : this.opts.visibleTime);
    }

    onClickMsg(msg: INgxMsg): void {
        if (this.opts.closeOnClick) {
            this.removeMessage(msg);
        }
    }

    removeMessage(msg: INgxMsg): void {
        let idx: number = this.messages.indexOf(msg);
        if (idx !== -1) {
            this.messages.splice(idx, 1);
        }
    }

    setPosition(pos: number): void {
        let top: number = null;
        let right: number = null;
        let bottom: number = null;
        let left: number = null;
        if (pos === NgxMsgPosition.TopRight) {
            top = 0;
            right = 0;
        }
        else if (pos === NgxMsgPosition.BottomRight) {
            bottom = 0;
            right = 0;
        }
        else if (pos === NgxMsgPosition.TopLeft) {
            top = 0;
            left = 0;
        }
        else if (pos === NgxMsgPosition.BottomLeft) {
            bottom = 0;
            left = 0;
        }
        else if (pos === NgxMsgPosition.TopFull) {
            top = 0;
            left = 0;
            right = 0;
        }
        else if (pos === NgxMsgPosition.BottomFull) {
            bottom = 0;
            left = 0;
            right = 0;
        }
        this.pos = {top: top, right: right, bottom: bottom, left: left};
    }
}
