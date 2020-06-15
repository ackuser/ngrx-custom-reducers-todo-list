import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { todoReducer } from './todos/reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todoList: todoReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
