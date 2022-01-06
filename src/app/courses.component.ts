import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <button (click)="onSave($event)">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses";
    isActive = false;
    courses;

    onSave($event: any){ 
        console.log("Button was clicked", $event);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}