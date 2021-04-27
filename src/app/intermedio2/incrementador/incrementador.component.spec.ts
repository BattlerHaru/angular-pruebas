import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {
        const text = 'Progreso de carga';

        component.leyenda = text;

        fixture.detectChanges(); // Dispara la deteccion de cambios

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain(text);

    });

    it('Debe de mostrar en el input el valor del progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges(); // Este puede tardar un poco mas de tiempo

        // Para solucionar el error usamos la version estable
        fixture.whenStable().then(
            () => {
                const input = fixture.debugElement.query(By.css('input'));
                const elem = input.nativeElement;

                expect(elem.value).toBe('55');
            }
        );

        // Esto tarda un poco de tiempo debido al fixture.detectChanges
        // const input = fixture.debugElement.query(By.css('input'));
        // const elem = input.nativeElement;

        // expect(elem.value).toBe('55');
    });

    it('Debe de incrementar/decremetnar, con un clic en el boton', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

        // Para disparar la accion, esto es js puro
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const boton = fixture.debugElement.queryAll(By.css('.btn-primary'));

        boton[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');

    });

});
