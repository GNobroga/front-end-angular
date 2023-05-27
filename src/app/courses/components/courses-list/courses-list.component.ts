import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {

    @Input()
    public courses: Course[] = [];

    @Output()
    public sendData: EventEmitter<boolean> = new EventEmitter();

    @Output()
    public onEditEvent: EventEmitter<Course> = new EventEmitter();

    public readonly displayedColumns = ['name', 'price', 'actions']

    public onAdd(): void {
        this.sendData.emit(true);
    }

    public onEdit(course: Course): void {
        this.onEditEvent.emit(course);
    }
}
