import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoModule } from './todos/todo.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
// import { PushPipe, LetDirective } from '../ngrx-component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TodoModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
