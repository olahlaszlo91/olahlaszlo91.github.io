import {Component} from '@angular/core';

enum Label {
	JS = 'JavaScript',
	NODEJS = 'NodeJS',
	CSS = 'css',
	SCSS = 'scss',
	UX = 'UX',
	IMAGES = 'Images',
	ANGULAR = 'Angular',
	HTTP = 'HTTP',
	TOOL = 'Tool',
}

interface Link {
	href: string;
	name: string;
	description?: string;
	labels: Label[];
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	links: Link[] = [
		{
			name: 'Workly', href: 'https://github.com/pshihn/workly',
			description: 'A really simple way to move a stand-alone function/class to a worker thread.',
			labels: [Label.JS, Label.NODEJS],
		},
		{
			name: 'requestbin', href: 'https://requestbin.com/',
			description: 'Get a URL where you can collect HTTP or webhook requests, or connect your accounts to subcribe to events from popular apps. Inspect your data in a human-friendly way or via an API.',
			labels: [Label.TOOL, Label.HTTP],
		},
		{
			name: 'Postwoman', href: 'https://postwoman.io/',
			labels: [Label.TOOL],
		},
		{
			name: 'npkill', href: 'https://npkill.js.org/',
			description: 'Easily find and remove old and heavy node_modules folders',
			labels: [Label.TOOL],
		},
		{
			name: 'angryTools', href: 'http://angrytools.com/',
			description: 'Easily find and remove old and heavy node_modules folders',
			labels: [Label.TOOL, Label.CSS, Label.SCSS, Label.UX],
		},
	];

	openLink(index: number): void {
		window.open(this.links[index].href, '_blank');
	}
}
