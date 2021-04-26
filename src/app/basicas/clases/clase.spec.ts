import { Jugador } from './clase';

describe('Pruebas de clase', () => {
    // const jugador = new Jugador();
    let jugador = new Jugador();


    // Ciclos de vida de las pruebas

    // Antes que se ejecuten todas, solo se ejecuta una vez cuando se empieza el describe
    // beforeAll()
    // Antes que inicie cada una de las pruebas
    // beforeEach()

    // Despues despues de que todas las pruebas se ejecutan
    // afterAll()
    // Despues que termina cada una de las pruebas
    // afterEach()

    beforeAll(() => {

    });
    beforeEach(() => {
        // jugador.hp = 100;
        jugador = new Jugador();
    });
    afterAll(() => {

    });
    afterEach(() => {

    });


    it('Debe de retornar 80 de hp, si recibe 20 de danio', () => {
        // const jugador = new Jugador();

        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);
    });

    it('Debe de retornar 50 de hp, si recibe 50 de danio', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });

    it('Debe de retornar 0 de hp, si recibe 100 de danio', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);
    });

})