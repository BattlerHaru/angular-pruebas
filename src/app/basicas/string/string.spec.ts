import { mensaje } from './string';
// // Sirve para agrupar pruebas
// describe();

// // Es una prueba o evaluacion en especifico
// it();

describe('Pruebas de string', () => {

    it('Debe de regresar un string', () => {
        const resp = mensaje('Fernando');

        // Para poder comprobar que fue exitosa se agrega el expect, pueden ser multiples expect's
        // el typeof es para verificar el tipo
        // el toBe significa 'exactamente'
        expect(typeof resp).toBe('string');
    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje(nombre);

        // Cuando son strings, no deberian evaluarse tal cual
        // Para este caso utilizaremos el toContain que significa 'que contenga'
        expect(resp).toContain(nombre);
    });
});