import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { RECIPE_COMPONENTS } from './recipes';
import { SHOPPING_LIST_COMPONENTS, SHOPPING_LIST_SERVICES } from './shopping-list';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RECIPE_COMPONENTS,
        SHOPPING_LIST_COMPONENTS,
        DropdownDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [SHOPPING_LIST_SERVICES],
    bootstrap: [AppComponent]
})
export class AppModule {
}
