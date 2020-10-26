import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonaTemplateComponent } from './persona-template/persona-template.component';
import { FieldsService } from './fields.service';
import { HttpService } from './http.service';
import { PersonaService } from './persona-template/persona-template.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PersonaTemplateComponent
  ],
  imports: [
    BrowserModule,
    DndModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, FieldsService, PersonaService],
  bootstrap: [AppComponent]
})

export class AppModule { }
