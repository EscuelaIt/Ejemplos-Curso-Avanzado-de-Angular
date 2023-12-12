import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-routing-example-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routing-example-container.component.html',
  styleUrl: './routing-example-container.component.css'
})
export class RoutingExampleContainerComponent implements OnInit {
  
  private route = inject(ActivatedRoute)

  private queryParamQ$ = this.route.queryParamMap.pipe(switchMap(paramMap => {
    const queryParamValue = paramMap.get('q');
    // llamada a servicio externo pasando el valor de q
    return of({ valorParam: queryParamValue }); 
  }), tap(value => console.log(value)));

  idParam!: string;

  @Input() id!: string;
  @Input() q!: string;


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.idParam = idParam;
    }

    console.log('Id es:', this.id);
    console.log('Q es:', this.q);

    //console.log(this.route.snapshot.queryParamMap.get('q'));

    // this.queryParamQ$.subscribe(value => { console.log(value) });
  }
  
}
