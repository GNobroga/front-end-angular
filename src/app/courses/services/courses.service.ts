import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { Observable, first, delay, catchError, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CustomError, ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    private readonly URL_BASE: string = 'http://localhost:8080/api/courses';

    public eventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private httpClient: HttpClient, public dialog: MatDialog) {}

    /*
      Ao fazer uma requisicao e retornado um Observable e eu posso
      fazer manipulacoes das informacoes que ele retorna, ate mesmo
      tratar erros.
    */
    public getCourses(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.URL_BASE).pipe(
            tap((value) => console.log(value)),
            first(),
            //delay(1000),
            catchError((error) => {
              this.onError({ title: "Error", message: (error as Error).message})
                return of([]);
            })
        );
    }

    public onError(value: CustomError): void {
        this.dialog.open(ErrorDialogComponent, {
            data: value
        })
    }

    // Eu poderia deixar salvar curso, mas por padrao vou utilizar a nomenclatura record.
    public save <T> (record: T): Observable<T> {
        return this.httpClient.post<T>(this.URL_BASE, record).pipe(first());
    }
}
