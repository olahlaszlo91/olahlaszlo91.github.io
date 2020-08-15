import {Component, ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {KeyValue} from '@angular/common';

interface Label {
	[key: string]: string;
}

interface Link {
	href: string;
	name: string;
	description?: string;
	labels: string[];
}

@Component({
	selector: 'app-tools',
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
	selectable = true;
	removable = true;
	separatorKeysCodes: number[] = [ENTER, COMMA];

	@ViewChild('labelInput') labelInput: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

	labelCtrl = new FormControl();
	labels: Label = {
		js: 'JavaScript',
		nodejs: 'NodeJS',
		css: 'css',
		scss: 'scss',
		ux: 'UX',
		images: 'Images',
		angular: 'Angular',
		http: 'HTTP',
		tool: 'Tool',
	};
	filteredLabels: Label = JSON.parse(JSON.stringify(this.labels));
	selectedLabels: Label = {};

	links: Link[] = [
		{
			name: 'Workly', href: 'https://github.com/pshihn/workly',
			description: 'A really simple way to move a stand-alone function/class to a worker thread.',
			labels: [this.labels.js, this.labels.nodejs],
		},
		{
			name: 'requestbin', href: 'https://requestbin.com/',
			description: 'Get a URL where you can collect HTTP or webhook requests, or connect your accounts to subcribe to events from popular apps. Inspect your data in a human-friendly way or via an API.',
			labels: [this.labels.tool, this.labels.http],
		},
		{
			name: 'Postwoman', href: 'https://postwoman.io/',
			labels: [this.labels.tool],
		},
		{
			name: 'npkill', href: 'https://npkill.js.org/',
			description: 'Easily find and remove old and heavy node_modules folders',
			labels: [this.labels.tool],
		},
		{
			name: 'angryTools', href: 'http://angrytools.com/',
			labels: [this.labels.tool, this.labels.css, this.labels.scss, this.labels.ux],
		},
	];
	filteredLinks: Link[] = JSON.parse(JSON.stringify(this.links));

	openLink(index: number): void {
		window.open(this.links[index].href, '_blank');
	}

	constructor() {
		this.labelCtrl.valueChanges.subscribe((label) => {
			if (label) {
				this.filteredLabels = this._filter(label);
			} else {
				this.filteredLabels = JSON.parse(JSON.stringify(this.labels));
			}
		});
	}

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;

		if ((value || '').trim()) {
			// Note: new label not allowed
		}

		if (input) {
			input.value = '';
		}

		this.labelCtrl.setValue(null);
		this.filterLinks();

	}

	remove(label: KeyValue<string, string>): void {
		delete this.selectedLabels[label.key];
		this.filterLinks();

	}

	selected(event: MatAutocompleteSelectedEvent): void {
		this.selectedLabels[event.option.value.key] = event.option.value.value;
		this.labelInput.nativeElement.value = '';
		this.labelCtrl.setValue(null);


		this.filterLinks();
	}

	private filterLinks(): void {
		this.filteredLinks = this.links.filter(l => {
			let match = 0;
			const keys = Object.keys(this.selectedLabels);
			keys.forEach((s) => {
				if (l.labels.includes(this.selectedLabels[s])) {
					match++;
				}
			});
			if (match === keys.length) {
				return l;
			}
		});
	}

	private _filter(value: any): Label {
		let filterValue;
		if (value?.value) {
			filterValue = value.value.toLowerCase();
		} else {
			filterValue = value.toLowerCase();
		}

		let ret: Label = {};

		Object.keys(this.labels).forEach((key) => {
			if ((this.labels[key].toLowerCase()).indexOf(filterValue) > -1) {
				ret[key] = this.labels[key];
			}
		});

		return ret;
	}


}
