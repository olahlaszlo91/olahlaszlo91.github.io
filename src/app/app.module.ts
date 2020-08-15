import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {ToolsComponent} from './tools/tools.component';


@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		HomeComponent,
		ToolsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatChipsModule,
		MatInputModule,
		MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
