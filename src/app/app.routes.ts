import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SimpleTemplateForm1Component } from './forms/simple-template-form1/simple-template-form1.component';
import { SimpleTemplateForm2Component } from './forms/simple-template-form2/simple-template-form2.component';
import { SimpleTemplateForm3Component } from './forms/simple-template-form3/simple-template-form3.component';
import { SimpleTemplateForm4Component } from './forms/simple-template-form4/simple-template-form4.component';
import { SimpleReactiveForm1Component } from './forms/simple-reactive-form1/simple-reactive-form1.component';
import { SimpleReactiveForm2Component } from './forms/simple-reactive-form2/simple-reactive-form2.component';
import { ReactiveForm3Component } from './forms/reactive-form3/reactive-form3.component';
import { ReactiveForm4Component } from './forms/reactive-form4/reactive-form4.component';
import { ReactiveForm5Component } from './forms/reactive-form5/reactive-form5.component';

export const routes: Routes = [
  { path: 'temp-form-1', component: SimpleTemplateForm1Component },
  { path: 'temp-form-2', component: SimpleTemplateForm2Component },
  { path: 'temp-form-3', component: SimpleTemplateForm3Component },
  { path: 'temp-form-4', component: SimpleTemplateForm4Component },
  { path: 'react-form-1', component: SimpleReactiveForm1Component },
  { path: 'react-form-2', component: SimpleReactiveForm2Component },
  { path: 'react-form-3', component: ReactiveForm3Component },
  { path: 'react-form-4', component: ReactiveForm4Component },
  { path: 'react-form-5', component: ReactiveForm5Component },
  { path: '', component: InicioComponent },
];
