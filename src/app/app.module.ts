import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RECIPES_COMPONENTS } from './recipes';
import { SHOPPING_LIST_COMPONENTS, SHOPPING_LIST_SERVICES } from './shopping-list';
import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RECIPES_COMPONENTS,
        SHOPPING_LIST_COMPONENTS,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    providers: [
        SHOPPING_LIST_SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
