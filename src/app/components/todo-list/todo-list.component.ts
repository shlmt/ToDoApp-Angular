import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  constructor(private todoService:TodoService) { }

  public todos:Array<todo>=[]

  private subscription:Subscription = new Subscription()

  ngOnInit(): void {
this.subscription.add(this.todoService.GetTodos().subscribe(data=>
  this.todos = data
  ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}