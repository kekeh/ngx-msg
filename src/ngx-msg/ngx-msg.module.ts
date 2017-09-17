import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { NgxMsgComponent } from "./ngx-msg.component";
import { NgxMsgService } from "./services/ngx-msg.service";
import { NgxMsgConfigService } from "./services/ngx-msg-config.service";

@NgModule({
    imports: [CommonModule],
    declarations: [NgxMsgComponent],
    exports: [NgxMsgComponent]
})
export class NgxMsgModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxMsgModule,
            providers: [NgxMsgConfigService, NgxMsgService]
        };
    }
}
