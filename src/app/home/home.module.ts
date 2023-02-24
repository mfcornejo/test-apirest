import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LOCALE_ID } from '@angular/core';
import localEsCl from '@angular/common/locales/es-CL';
registerLocaleData(localEsCl);


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
