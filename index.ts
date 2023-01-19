/*

EXERCICIOS SOBRE PROGRAMAÇÃO ORIENTADA A OBJETOS

EXERCICIO 1 - CRIAR UMA ESTRUTURA COM:

     * UMA MARCA DE CARROS (DE SUA ESCOLHA)
     * UMA SUBCLASSE DE MODELOS DE SUA ESCOLHA
     * ATRIBUTOS DE VIDROS ELETRICOS, FREIOS ABS, TRAÇÃO NAS QUATRO RODAS
     * 
     * METODOS DE ATIVAÇÃO NA TRAÇÃO
     * MUDANÇA DE COMBUSTIVÉL ( GÁS/GASOLINA- TRUE OR FALSE)
     * MÉTODO ATIVAÇÃO DO FREIO ABS
     * 
*/
class Fiat{
    modelo: string;
    vidros_eletricos: boolean;
    freios_abs: boolean;
    tração_x4:  boolean;
    atv_tração: string;
    atv_freio_abs:string;
    mod_combustivel:boolean;

    constructor(modelo:string, freios_abs:boolean, tração_4X:boolean, atv_tração:string, atv_freio_abs:string,vidros_eletricos:boolean,mod_combustivel:boolean){
        this.modelo=modelo;
        this.freios_abs=freios_abs;
        this.tração_x4=tração_4X;
        this.vidros_eletricos= vidros_eletricos;
        this.atv_tração=atv_tração;
        this.atv_freio_abs=atv_freio_abs;
        this.mod_combustivel=mod_combustivel;
    }
    carro():void{
        console.log(`Ei primo, vc não estava procurando um bom carro? Os novos carros da Fiat acabaram de chegar e estão com TUDO!!! 
        ja ouviu falar, como o ${this.modelo}, mas estava com uma duvida
        ele tem freios ABS?
        ${this.freios_abs} 
        e tração nas 4 rodas?
        ${this.tração_x4}
        Incrivel, mas esse e meu primeiro carro, eu não sei como ativar eles hehe
        sem problemas, os novos carros da Fiat são ativados automaticamente quando ${ this.atv_freio_abs} e ${this.atv_tração}
        NOssa vc sabe mesmo de muita coisa de carro primo! mas e os vidros eletricos e combustivel modificavel?
        ${this.vidros_eletricos} e ${this.mod_combustivel}
        Então eu vou comprar ${this.modelo} esse carro logo antes que os estoques acabem na fiat.com.br
        pera da pra ir pelo site? Realmente, melhor que Fiat não tem!`)
    }
    

}
let propaganda= new Fiat("Cachorro Caramelo/CC",true,true, "quando vc faz freagens de emergencia e pisa no pedal ate o fundo " , "assim que vc liga o motor que gera tração nas 4 ao inves de duas como o resto",true,true );
propaganda.carro()
/*
EXERCICIO 2

     

EXERCICIO 3
*/