import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./books/list/list.component";
import {HaventReadedComponent} from "./books/havent-readed/havent-readed.component";
import {ReadedComponent} from "./books/readed/readed.component";
import {AddComponent} from "./books/add/add.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'readed',
    component: ReadedComponent,
  },
  {
    path: 'havent-readed',
    component: HaventReadedComponent,
  },
  {
    path: 'add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
