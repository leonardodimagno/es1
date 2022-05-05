import { Component } from '@angular/core';
import { TodoList } from './interface/todo-list';
import { recupera, recuperaAxios } from './service/todo-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'es1';
  elencoTodo!: TodoList[];

  constructor() {
      recupera().then(risposta =>{
          console.log(risposta);
          this.elencoTodo = risposta;
          this.completa();
          console.log(this.elencoTodo);
      });
      recuperaAxios().then(risposta =>{
        console.log(risposta);
        this.elencoTodo = risposta;
        this.completa();
        console.log(this.elencoTodo);
    });
  }
  completa() {
      this.elencoTodo = this.elencoTodo.map(elenco => {
          return {...elenco, completato: true}
      })
  }

}
