import { usuarioIngresado } from './booleanos';

describe('Prueba de booleanos', () => {

    it('Debe de retornar true', () => {
        const resp = usuarioIngresado();

        //Tambien se podria utilizar el toBe, sin embargo se utilizara el toBeTruthy que es para true
        expect(resp).toBeTruthy();

        // En cambio para falsos es toBeFalsy
        // o agregar el not
        // expect(resp).not.toBeTruthy();
        // expect(resp).toBeFalsy();

    });

});