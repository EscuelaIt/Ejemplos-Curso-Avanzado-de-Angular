import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemplateForm1Component } from './template-form1/template-form1.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';

export const routes: Routes = [
  { path: 'temp-form-1', component: TemplateForm1Component },
  { path: 'temp-form-2', component: TemplateForm2Component },
  { path: 'react-form-1', component: ReactiveForm1Component },
  { path: 'react-form-2', component: ReactiveForm2Component },
  { path: '', component: InicioComponent },

];
