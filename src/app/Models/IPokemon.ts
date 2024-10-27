export class PokemonModel{
    private id:number;
    private nombre:string;
    private imagen:string;
    private vida:number;
    private ataque:number;
    private defensa:number;
    private tipo:string;

    constructor(id:number,nombre:string,imagen:string,vida:number,ataque:number,tipo:string, defensa:number){
        this.id = id;
        this.nombre=nombre;
        this.imagen = imagen;
        this.vida=vida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.tipo=tipo;
    }

    /*Getter*/

    getId():number{
        return this.id;
    }

    getNombre():string{
        return this.nombre;
    }

    getImagen():string{
        return this.imagen;
    }

    getVida():number{
        return this.vida;
    }
    getAtaque():number{
        return this.ataque;
    }
    getDefensa():number{
        return this.defensa;
    }

    getTipo():string{
        return this.tipo;
    }

    /*Setters*/
    setId(id:number):void{
        this.id = id;
    }


    /*Metodos de la clase*/
    mostrarPokemon():string{
        return "ID: "+this.id+" Nombre: "+this.nombre+
    }

    calcularDaño(pokemonAtacante:PokemonModel):number{
        if(pokemonAtacante.getAtaque()>this.defensa){

        }
    }
}