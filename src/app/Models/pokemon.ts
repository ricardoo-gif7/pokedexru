export class Pokemon { /*Representacion de un objeto existente*/
/*1._ El POO */

/*No movimientos no habs*/

/* 🟨🟨 Atributos 🟨🟨*/
    private id:number;
    private nombre:string;
    private vida:number;
    private ataque:number;
    private defensa:number;
    private tipo:string;

/* 🟥🟥 Constructor 🟥🟥*/
    constructor(id_recibido:number, nombre_recibido:string, vida_recibida:number, ataque_recibido:number, defensa_recibida:number, tipo_recibido:string){
        this.id=id_recibido;//Recibiendo el id como parametro en mi clase
        this.nombre=nombre_recibido;//Recibiendo el nombre como parametro en mi clase
        this.vida=vida_recibida;//Recibiendo el vida como parametro en mi clase
        this.ataque=ataque_recibido;//Recibiendo el ataque como parametro en mi clase
        this.defensa=defensa_recibida;//Recibiendo la defensa como parametro en mi clase
        this.tipo=tipo_recibido;//Recibiendo el tipo como parametro en mi clase    
    }

/*🟩🟩🟩🟩🟩🟩 */
/*   Métodos    */
/*🟩🟩🟩🟩🟩🟩 */

public atacar(){
    console.log("Estoy atacando ⚔️ ");
}
public defender(){
    console.log("Estoy defendiendo 🛡️ ");
}
public quitarVida(cantidad_quitar:number){
    this.vida=this.vida-cantidad_quitar;
}
public agregarVida(cantidad_agregar:number){
    this.vida=this.vida+cantidad_agregar;
}

public mostrar(){
    console.log('ID: ${this.id} Nombre: ${this.nombre} Vida: ${this.vida} Ataque: ${this.ataque} Defensa: ${this.defensa} Tipo: ${this.tipo}');
}

/* 2._ Encapsulamiento*/

}
