import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {
        const resp = obtenerRobots();

        // expect(res.length).toBe(3);
        // En caso de que tenga mas de 3 debera ser toBeGreaterThanOrEqual(3) que significa que debera tener mas de 3 o igual a 3
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Bebe de existir: MegaMan y Ultron', () => {
        const resp = obtenerRobots();

        expect(resp).toContain('MegaMan');
        expect(resp).toContain('Ultron');

    });

})