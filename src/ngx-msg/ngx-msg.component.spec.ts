///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>

import {FormsModule} from "@angular/forms";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {NgxMsgComponent} from './ngx-msg.component';
import {NgxMsgService} from './services/ngx-msg.service';
import {NgxMsgConfigService} from './services/ngx-msg-config.service';
import {NgxMsgLevel, NgxMsgPosition} from './interfaces/ngx-msg.constants';

let comp: NgxMsgComponent;
let fixture: ComponentFixture<NgxMsgComponent>;
let de: DebugElement;
let el: HTMLElement;

function getElement(id: string): any {
    return document.body.querySelector(id);
}

function getElements(id: string): any {
    return document.body.querySelectorAll(id);
}

describe('NgxMsgComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [NgxMsgComponent],
            providers: [NgxMsgService, NgxMsgConfigService]
        });

        fixture = TestBed.createComponent(NgxMsgComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.ngx-msg-container'));
        el = de.nativeElement;
    });

    it('container element', () => {
        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);
    });

    it('success message', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Success, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-success');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-success');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        comp.messages.length = 0;
    });

    it('info message', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Info, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-info');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-info');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        comp.messages.length = 0;
    });

    it('warning message', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Warning, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-warning');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-warning');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        comp.messages.length = 0;
    });

    it('error message', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Error, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        comp.messages.length = 0;
    });

    it('multiple messages', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Error, text: text, visibleTime: 5000});
        comp.newMessage({level: NgxMsgLevel.Warning, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);


        fixture.detectChanges();
        elem = getElement('.ngx-msg-warning');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-warning');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        comp.messages.length = 0;
    });

    it('position top right', () => {
        comp.setPosition(NgxMsgPosition.TopRight);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('0px');
        expect(elem.style['left']).toBe('');
        expect(elem.style['right']).toBe('0px');
        expect(elem.style['bottom']).toBe('');
    });

    it('position bottom right', () => {
        comp.setPosition(NgxMsgPosition.BottomRight);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('');
        expect(elem.style['left']).toBe('');
        expect(elem.style['right']).toBe('0px');
        expect(elem.style['bottom']).toBe('0px');
    });

    it('position top left', () => {
        comp.setPosition(NgxMsgPosition.TopLeft);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('0px');
        expect(elem.style['left']).toBe('0px');
        expect(elem.style['right']).toBe('');
        expect(elem.style['bottom']).toBe('');
    });

    it('position bottom left', () => {
        comp.setPosition(NgxMsgPosition.BottomLeft);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('');
        expect(elem.style['left']).toBe('0px');
        expect(elem.style['right']).toBe('');
        expect(elem.style['bottom']).toBe('0px');
    });

    it('position full top', () => {
        comp.setPosition(NgxMsgPosition.TopFull);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('0px');
        expect(elem.style['left']).toBe('0px');
        expect(elem.style['right']).toBe('0px');
        expect(elem.style['bottom']).toBe('');
    });

    it('position full bottom', () => {
        comp.setPosition(NgxMsgPosition.BottomFull);

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-container');
        expect(elem).not.toBe(null);

        expect(elem.style['top']).toBe('');
        expect(elem.style['left']).toBe('0px');
        expect(elem.style['right']).toBe('0px');
        expect(elem.style['bottom']).toBe('0px');
    });

    it('click message to not close it', () => {
        let text: string = 'test message 1';

        comp.opts.closeOnClick = false;

        comp.newMessage({level: NgxMsgLevel.Error, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);
        elem.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);
    });

    it('click message to close it', () => {
        let text: string = 'test message 1';

        comp.newMessage({level: NgxMsgLevel.Error, text: text, visibleTime: 5000});

        fixture.detectChanges();
        let elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.icon-ngx-msg-error');
        expect(elem).not.toBe(null);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-text');
        expect(elem).not.toBe(null);
        expect(elem.textContent).toBe(text);

        fixture.detectChanges();
        elem = getElement('.ngx-msg-error');
        expect(elem).not.toBe(null);
        elem.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        elem = getElement('.ngx-msg-error');
        expect(elem).toBe(null);
    });
});
