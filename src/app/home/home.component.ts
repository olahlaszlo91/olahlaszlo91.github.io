import {Component, OnInit} from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
		trigger('listAnimation0', [
			transition('* => *', [ // each time the binding value changes
				query(':enter', [
					style({opacity: 0}),
					stagger(100, [
						animate('1s', style({opacity: 1}))
					])
				], {optional: true})
			])
		]),
		trigger('listAnimation1', [
			transition('* => *', [ // each time the binding value changes
				query(':enter', [
					style({opacity: 0}),
					stagger(100, [
						animate('1s 1s', style({opacity: 1}))
					])
				], {optional: true})
			])
		]),
		trigger('listAnimation2', [
			transition('* => *', [ // each time the binding value changes
				query(':enter', [
					style({opacity: 0}),
					stagger(100, [
						animate('1s 2s', style({opacity: 1}))
					])
				], {optional: true})
			])
		]),
	]
})
export class HomeComponent implements OnInit {
	rows = [
		[
			{char: 'H', animate: true, hovered: false},
			{char: 'i', animate: true, hovered: false},
			{char: ',', animate: true, hovered: false},
		],
		[
			{char: 'I', animate: true, hovered: false},
			{char: '\'', animate: false, hovered: false},
			{char: 'm', animate: true, hovered: false},
			{char: ' ', animate: false, hovered: false},
			{char: 'C', animate: true, highlight: true, hovered: false},
			{char: 'i', animate: true, hovered: false},
			{char: 'k', animate: true, hovered: false},
			{char: 'a', animate: true, hovered: false},
			{char: ',', animate: true, hovered: false},
		],
		[
			{char: 'w', animate: true, hovered: false},
			{char: 'e', animate: true, hovered: false},
			{char: 'b', animate: true, hovered: false},
			{char: ' ', animate: false, hovered: false},
			{char: 'd', animate: true, hovered: false},
			{char: 'e', animate: true, hovered: false},
			{char: 'v', animate: true, hovered: false},
			{char: 'e', animate: true, hovered: false},
			{char: 'l', animate: true, hovered: false},
			{char: 'o', animate: true, hovered: false},
			{char: 'p', animate: true, hovered: false},
			{char: 'e', animate: true, hovered: false},
			{char: 'r', animate: true, hovered: false},
			{char: '.', animate: true, hovered: false},
		],
	];

	constructor() {
	}

	ngOnInit(): void {
	}

	mouseOver(rowIndex: number, index: number): void {
		this.rows[rowIndex][index].hovered = true;

		setTimeout(() => {
			this.rows[rowIndex][index].hovered = false;
		}, 3000);
	}
}
