import { Component, OnInit, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  //Nueva inyección de servicios en angular 17, antes inyectada en constructor
  private _taskService = inject(TareasService)
  listaTareas: string[] = [];
  nuevaTarea: string = "";

  ngOnInit(): void {
    this.listaTareas = this._taskService.getTareas();
  }

  agregarTarea(){
    this._taskService.setTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._taskService.getTareas();
  }

  eliminarTarea(index: number){
    this._taskService.deleteTarea(index);
    this.listaTareas = this._taskService.getTareas();
  }
}
