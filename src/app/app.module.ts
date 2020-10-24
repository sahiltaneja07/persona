import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonaTemplateComponent } from './persona-template/persona-template.component';
import { FieldsService } from './fields.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PersonaTemplateComponent
  ],
  imports: [
    BrowserModule,
    DndModule
  ],
  providers: [HttpService, FieldsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
