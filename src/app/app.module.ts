import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HEADER_COMPONENTS } from './header';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home.component';
import { routing } from './app.routing';
import { RECIPES_SERVICES } from './recipes';
import { ShoppingListModule, SHOPPING_LIST_SERVICES } from './shopping-list';

@NgModule({
    declarations: [
        AppComponent,
        HEADER_COMPONENTS,
        DropdownDirective,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        ShoppingListModule
    ],
    providers: [
        SHOPPING_LIST_SERVICES,
        RECIPES_SERVICES
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
