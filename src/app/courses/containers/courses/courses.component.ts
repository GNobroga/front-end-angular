import { Component, OnInit } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    // $ - Nomeclantura para indicar que a variavel e um tipo Observable
    public listCourses$: Observable<Course[]>;
    public modalVisible: boolean = false;
    public hasError: boolean = false;
    public courseEdit: Course | null = null;

    constructor(
        private courseService: CoursesService,
        private router: Router,
        private activeRouter: ActivatedRoute,
        private alert: MatSnackBar
    ) {
        this.listCourses$ = this.courseService.getCourses();
    }

    public ngOnInit(): void {}

    public onAdd(): void {
        /*
            Objetos injetados: Router, ActivatedRoute

            Router - para mudar de rota, enviar parametros, etc.

            ActivatedRoute - Para saber qual rota esta ativa no momento

            { relativeTo: this.activeRouter} // Para que a rota de destino seja concatenada a rota atual
            Ex: courses/new

            this.router.navigate(['new'], { relativeTo: this.activeRouter})
        */
        this.modalVisible = true;
    }

    public onEdit(save: boolean, course: Course): void {
        if (save) {
            console.log("Salvar isso", course);
            this.modalVisible = false;
        } else {
            this.courseEdit = course;
            this.modalVisible = true;
        }
    }

    public getData(event: FormGroup | boolean): void {
        if (event instanceof FormGroup) {
            this.courseService.save<Course>(event.value as Course).subscribe({
                next: (v) => {
                    this.showSucess();
                    this.modalVisible = false;
                },
                error: (e) => this.showError()
            });
        } else {
            this.modalVisible = false;
        }
    }

    public showError(): void {
        this.alert.open("Nao foi possivel enviar os dados", '', { duration: 2000})
    }

    public showSucess(): void {
        this.alert.open("Salvo com sucesso.", '', { duration: 2000})
    }
}
