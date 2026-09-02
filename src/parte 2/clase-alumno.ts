/**
 * EJERCICIOS 8, 9 y 10 - Clase Alumno
 * ---------------------------------------------------------------------------
 * Esta clase se completa en tres pasos, marcados con TODO. Cada paso agrega
 * comportamiento sin romper el anterior:
 *
 *   - Ejercicio 8:  atributos básicos, getNombreCompleto, esMayorDeEdad.
 *   - Ejercicio 9:  `edad` pasa a ser privada; getEdad/setEdad con validación.
 *   - Ejercicio 10: arreglo de materias inscriptas.
 */

// -----------------------------------------------------------------------------
// EJERCICIO 10 - interface Materia
// -----------------------------------------------------------------------------
// Se cambió de interface a type como pedía el TODO
export type Materia = {
    codigo: number;
    nombre: string;
    horas: number;
};

export class Alumno {
    public legajo: number;
    public nombre: string;
    public apellido: string;
    public email: string;

    // EJERCICIO 9: `edad` es privada. Se accede solo con getEdad/setEdad.
    private edad: number;

    // EJERCICIO 10: materias en las que está inscripto el alumno.
    private materias: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        edad: number,
        email: string
    ) {
        // EJERCICIO 8: asignar los atributos recibidos.
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 8
    // -------------------------------------------------------------------

    getNombreCompleto(): string {
        // Usamos template literals (comillas invertidas) para concatenar más fácil
        return `${this.nombre} ${this.apellido}`;
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 9 - encapsulamiento de `edad`
    // -------------------------------------------------------------------

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        // Validación: impide edades inválidas lanzando errores.
        if (edad < 0) {
            throw new Error("La edad no puede ser menor a 0");
        }
        if (edad > 120) {
            throw new Error("La edad no puede ser mayor a 120");
        }
        this.edad = edad;
    }

    // -------------------------------------------------------------------
    // EJERCICIO 10 - materias
    // -------------------------------------------------------------------

    agregarMateria(materia: Materia): void {
        this.materias.push(materia);
    }

    quitarMateria(codigo: number): Materia | undefined {
        // Primero buscamos en qué posición (índice) está la materia
        const index = this.materias.findIndex(m => m.codigo === codigo);
        
        // Si la encontró, el índice será distinto de -1
        if (index !== -1) {
            // El método .splice() elimina elementos del array y los devuelve. 
            // Le decimos que arranque en 'index' y borre 1 elemento.
            const materiaQuitada = this.materias.splice(index, 1);
            return materiaQuitada[0];
        }
        
        // Si no la encontró, devolvemos undefined
        return undefined;
    }

    estaInscripto(codigo: number): boolean {
        // Reutilizamos el método .some() que vimos antes
        return this.materias.some(m => m.codigo === codigo);
    }

    cantidadMaterias(): number {
        return this.materias.length;
    }

    getMaterias(): Materia[] {
        // Para devolver una copia sin exponer el arreglo original
        // usamos el operador de propagación (spread operator) [...]
        return [...this.materias];
    }
}