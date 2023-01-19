class Marvel {
    nome:string
    voar: boolean
    poder:string
    esta_vivo: boolean

    constructor(nome:string, voar:boolean, poder:string, esta_vivo: boolean){
        this.nome = nome;
        this.voar=voar;
        this.poder=poder;
        this.esta_vivo=esta_vivo;
    }
    poderes():void{
        console.log(`Qual é o nome desse heroi? ${this.nome} este heroi sabe voar? ${this.voar} qual é seu poder? ${this.poder}. Esta vivo? ${this.esta_vivo}`)
    }
}

let heroi= new Marvel("Hulk", true, "Super Força", true );
heroi.poderes()