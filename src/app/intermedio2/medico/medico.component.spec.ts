// Para utilizar funciones del html como pipes, etc...
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';



describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        // Esto se haria en una forma tradicional para las pruebas unitarias
        // component = new MedicoComponent();

        // Pero al ser una prueba de integracion necesitamos realizar mas acciones
        // * El configureTestingModule es similar al module, de hecho es un modulo, recibe un objeto
        TestBed.configureTestingModule({
            declarations: [MedicoComponent,],
            providers: [MedicoService],
            imports: [HttpClientModule],
        });

        // Regresa un fixture que permite controlar todo el dom del html
        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;

    });

    it('Debe de crearse el componente', () => {
        // Esto solo verifica que se creo, mas no que se pueden usar sus funciones, metodos, etc
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {

        const nombre = 'Perla';
        const resp = component.saludarMedico(nombre);

        expect(resp).toContain(nombre);
    });
});