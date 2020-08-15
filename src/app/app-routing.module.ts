import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ToolsComponent} from './tools/tools.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'tools', component: ToolsComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
