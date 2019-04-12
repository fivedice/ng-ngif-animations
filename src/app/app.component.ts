import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ height: 0, opacity: 0 }),
				animate('1s ease-out', style({ height: 300, opacity: 1 }))
			]),
			transition(':leave', [
				style({ height: 300, opacity: 1 }),
				animate('1s ease-in', style({ height: 0, opacity: 0 }))
			])
		])
	]
})
export class AppComponent {
	title = 'ngifAnimation';

	showImage = false;

	onClick() {
		this.showImage = !this.showImage;
	}
}
