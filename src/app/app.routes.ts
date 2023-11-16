import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SimpleTemplateForm1Component } from './forms/simple-template-form1/simple-template-form1.component';
import { ReactiveForm1Component } from './reactive-form1/reactive-form1.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { SimpleTemplateForm2Component } from './forms/simple-template-form2/simple-template-form2.component';
import { SimpleTemplateForm3Component } from './forms/simple-template-form3/simple-template-form3.component';
import { SimpleTemplateForm4Component } from './forms/simple-template-form4/simple-template-form4.component';

export const routes: Routes = [
  { path: 'temp-form-1', component: SimpleTemplateForm1Component },
  { path: 'temp-form-2', component: SimpleTemplateForm2Component },
  { path: 'temp-form-3', component: SimpleTemplateForm3Component },
  { path: 'temp-form-4', component: SimpleTemplateForm4Component },
  { path: 'react-form-1', component: ReactiveForm1Component },
  { path: 'react-form-2', component: ReactiveForm2Component },
  { path: '', component: InicioComponent },
];
