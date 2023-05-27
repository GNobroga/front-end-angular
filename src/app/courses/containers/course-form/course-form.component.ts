import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../../model/course';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnChanges {
    /*
        Criar formulario com FormBuilder e Group: Necessita do modulo: ReactiveFormsModule
    */
    @Input()
    public course: Course | null = null;

    @Output()
    public submitData: EventEmitter<FormGroup | boolean> = new EventEmitter();

    @Output()
    public edit: EventEmitter<Course> = new EventEmitter();

    public form: FormGroup = this.formBuilder.group({
        name: [""],
        price: [""],
    });

    // Injecao de dependencia FormBuilder
    constructor(private formBuilder: FormBuilder) {}

    public ngOnChanges(): void {
        if (this.course) {
            this.form.setValue({
                name: this.course.name,
                price: this.course.price,
            });
        }
    }

    public onSubmit(): void {
        if (this.course != null) {
            this.course = { ...this.course, ...this.form.value};
            this.edit.emit(this.course!)
        } else {
            this.submitData.emit(this.form);
        }
    }

    public onClose(): void {
        this.submitData.emit(false);
    }
}
