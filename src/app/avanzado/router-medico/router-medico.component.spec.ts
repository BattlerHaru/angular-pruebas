import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { RouterMedicoComponent } from './router-medico.component';
import { Observable, Subject, from } from 'rxjs';


// La idea es simular el router
class FakeRouter {
  navigate(params) { }
}

// La idea es simular el activatedRoute
class FakeActivatedRoute {
  // debe retornar un observable, en este caso uno vacio

  // params: Observable<any> = new Observable();

  // para poder "manipular" los params
  private subject = new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        // Router, 
        // Para simular el router
        // el nombre de la clase que se desea sustituir y seguido del simulador
        {
          provide: Router,
          useClass: FakeRouter
        },
        // Mismo caso que el router
        // ActivatedRoute,
        {
          provide: ActivatedRoute,
          // useClass: FakeActivatedRoute
          useValue: {
            params: from([{ id: 'nuevo' }])
          }
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redirecionar a Medico cuando se guarde', () => {

    // Actualizacion
    // El metodo  TestBed.get() fue cambiado a TestBed.inject()  en angular 9
    const router = TestBed.inject(Router);

    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de coloar el id = nuevo', () => {

    // Actualizacion 
    // component = fixture.componentInstance;

    // const activatedRoute: FakeActivatedRoute = TestBed.inject( ActivatedRoute );

    // activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');

  });

});
