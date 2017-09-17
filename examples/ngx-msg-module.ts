import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyNgxMsgApp} from './ngx-msg-app';
import {NgxMsgModule} from '../src/ngx-msg/ngx-msg.module';

@NgModule({
    imports: [FormsModule, BrowserModule, NgxMsgModule.forRoot()],
    declarations: [MyNgxMsgApp],
    bootstrap: [MyNgxMsgApp]
})
export class SampleNgxMsgModule { }