import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	open(href: string): void {
		window.open(href, '_blank');
	}
}
