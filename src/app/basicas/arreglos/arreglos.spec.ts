import { obtenerRobots } from './arreglos';

// Para omitir una prueba se agrega una x antes de la prueba, ya sea antes del describe o antes del it
xdescribe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {
        const resp = obtenerRobots();

        // expect(res.length).toBe(3);
        // En caso de que tenga mas de 3 debera ser toBeGreaterThanOrEqual(3) que significa que debera tener mas de 3 o igual a 3
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });
    // xit()
    it('Debe de existir: MegaMan y Ultron', () => {
        const resp = obtenerRobots();

        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Ultron');

    });

})