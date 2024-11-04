export class PokemonModel {
    private id: number;
    private nombre: string;
    private imagen: string;
    private vida: number;
    private defensa: number;
    private ataque: number;
    private tipo: string;

    // Constructor
    constructor(id: number, nombre: string, imagen: string, vida: number, defensa: number, ataque: number, tipo: string) {
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.vida = vida;
        this.defensa = defensa;
        this.ataque = ataque;
        this.tipo = tipo;
    }

    // GETTERs
    getId(): number {
        return this.id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getImagen(): string {
        return this.imagen;
    }

    getVida(): number {
        return this.vida;
    }

    getDefensa(): number {
        return this.defensa;
    }

    getAtaque(): number {
        return this.ataque;
    }

    getTipo(): string {
        return this.tipo;
    }

    // SETTERs
    setId(id: number): void {
        this.id = id;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setImagen(imagen: string): void {
        this.imagen = imagen;
    }

    setVida(vida: number): void {
        this.vida = vida;
    }

    setDefensa(defensa: number): void {
        this.defensa = defensa;
    }

    setAtaque(ataque: number): void {
        this.ataque = ataque;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    // Métodos de la clase
    mostrarPokemon(): string {
        return `ID: ${this.id} Nombre: ${this.nombre} Imagen: ${this.imagen} Vida: ${this.vida} Ataque: ${this.ataque} Defensa: ${this.defensa} Tipo: ${this.tipo}`;
    }

    calcularDaño(pokemonAtacante: PokemonModel): number {
        return pokemonAtacante.getAtaque() > this.defensa ? pokemonAtacante.getAtaque() - this.defensa : 0;
    }

    atacar(): void {
        console.log("Estoy atacando ⚔");
    }

    defender(): void {
        console.log("Estoy defendiendo 🛡");
    }

    quitarVida(cantidadQuitada: number): void {
        this.vida -= cantidadQuitada;
    }

    agregarVida(cantidadAgregada: number): void {
        this.vida += cantidadAgregada;
    }

    mostrar(): void {
        console.log(`ID: ${this.id} Nombre: ${this.nombre} Vida: ${this.vida} Ataque: ${this.ataque} Defensa: ${this.defensa} Tipo: ${this.tipo}`);
    }
}
