import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MyNgxMsgApp } from './app.component';

import {SampleNgxMsg} from './sample-ngx-msg';
import {NgxMsgModule} from 'ngx-msg';

@NgModule({
  declarations: [
    MyNgxMsgApp, SampleNgxMsg
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxMsgModule.forRoot()
  ],
  providers: [],
  bootstrap: [MyNgxMsgApp]
})
export class AppModule { }
