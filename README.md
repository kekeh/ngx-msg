# ngx-msg

**Angular notification component**


## Description
Angular notification component. This component shows notification messages. Online demo is [here](http://kekeh.github.io/ngx-msg)

## Installation

To install this component to an external project, follow the procedure:

1. __npm install ngx-msg --save__
2. Add __NgxMsgModule__ import to your __@NgModule__ like example below
    ```js
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { MyTestApp } from './my-test-app';

    import { NgxMsgModule } from 'ngx-msg';

    @NgModule({
        imports:      [ BrowserModule, NgxMsgModule.forRoot() ],
        declarations: [ MyTestApp ],
        bootstrap:    [ MyTestApp ]
    })
    export class MyTestAppModule { }
    ```

3. If you are using __systemjs__ package loader add the following ngx-msg properties to the __System.config__:
    ```js
    (function (global) {
        System.config({
            paths: {
                'npm:': 'node_modules/'
            },
            map: {
                // Other components are here...

                'ngx-msg': 'npm:ngx-msg/bundles/ngx-msg.umd.min.js'
            },
            packages: {
            }
        });
    })(this);
    ```

## Usage with global config service __NgxMsgConfigService__

1. Add the following snippet inside your template:
    ```html
   <ngx-msg></ngx-msg>

    ```

2. Set configuration using the __NgxMsgConfigService__ service and add messages using the __NgxMsgService__ service as follows:
    ```js
    import {INgxMsgOptions, NgxMsgPosition, NgxMsgLevel, NgxMsgService, NgxMsgConfigService} from 'ngx-msg';

    export class MyTestApp {

        constructor(private msgService: NgxMsgService, private configService: NgxMsgConfigService) {
            configService.position = NgxMsgPosition.BottomRight;
            configService.visibleTime = 3000;
            configService.closeOnClick = false;
        }

        sendMessages(): void {
            this.msgService.message({level: NgxMsgLevel.Succeed, text: 'Succeed message.'});
            this.msgService.message({level: NgxMsgLevel.Info, text: 'Info message.'});
            this.msgService.message({level: NgxMsgLevel.Warning, text: 'Warning message.'});
            this.msgService.message({level: NgxMsgLevel.Error, text: 'Error message.', visibleTime: 5000});
        }
    }
    ```


## Usage with __options__ attribute

Options attribute overrides options set by __NgxMsgConfigService__ config service.

1. Add the following snippet inside your template:
    ```html
   <ngx-msg [options]="options"></ngx-msg>

    ```

2. Set configuration using options attribute ans add messages using the __NgxMsgService__ service as follows:
    ```js
    import {INgxMsgOptions, NgxMsgPosition, NgxMsgLevel, NgxMsgService} from 'ngx-msg';

    export class MyTestApp {

        options: INgxMsgOptions = {
            position: NgxMsgPosition.BottomRight,
            visibleTime: 3000,
            closeOnClick: false
        };

        constructor(private msgService: NgxMsgService) { }

        sendMessages(): void {
            this.msgService.message({level: NgxMsgLevel.Succeed, text: 'Succeed message.'});
            this.msgService.message({level: NgxMsgLevel.Info, text: 'Info message.'});
            this.msgService.message({level: NgxMsgLevel.Warning, text: 'Warning message.'});
            this.msgService.message({level: NgxMsgLevel.Error, text: 'Error message.', visibleTime: 5000});
        }
    }
    ```

### ngx-msg options attribute

Value of the __options__ attribute is a javascript object. It can contain the following properties.

| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __position__   | NgxMsgPosition.TopLeft | number | Position of the notification. Possible values: TopLeft, TopRight, BottomLeft, BottomRight, TopFull, BottomFull. |
| __visibleTime__   | 5000 | number | Visible time of notification in milliseconds. |
| __closeOnClick__   | true   | boolean  | Is notification closed or not on notification click. |

## Development of this component

* At first fork and clone this repo.

* Install all dependencies:
  1. __npm install__
  2. __npm install --global gulp-cli__

* Build the __npmdist__ folder and execute __tslint__:
  1. __gulp all__

* Execute unit tests and coverage (output is generated to the __test-output__ folder):
  1. __npm test__

* Run sample application:
  1. __npm start__
  2. Open __http://localhost:5000__ to browser

* Build a local npm installation package:
  1. __gulp all__
  2. __cd npmdist__
  3. __npm pack__
    * local installation package is created to the __npmdist__ folder. For example: __ngx-msg-0.0.1.tgz__

* Install local npm package to your project:
  1. __npm install path_to_npmdist/ngx-msg-0.0.1.tgz__

## Demo
Online demo is [here](http://kekeh.github.io/ngx-msg)

## Compatibility (tested with)
* Firefox (latest)
* Chrome (latest)
* Edge
* IE11
* Safari

## License
* License: MIT

## Author
* Author: kekeh