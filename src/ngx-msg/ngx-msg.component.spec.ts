///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>

import {FormsModule} from "@angular/forms";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {NgxMsgComponent} from './ngx-msg.component';
import {NgxMsgService} from './services/ngx-msg.service';



let comp: NgxMsgComponent;
let fixture: ComponentFixture<NgxMsgComponent>;
let de: DebugElement;
let el: HTMLElement;


describe('NgxMsgComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [NgxMsgComponent],
            providers: [NgxMsgService]
        });

        fixture = TestBed.createComponent(NgxMsgComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.ngx-msg-container'));
        el = de.nativeElement;
    });

    it('to do', () => {

    });

});
