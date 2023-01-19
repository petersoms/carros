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
var Fiat = /** @class */ (function () {
    function Fiat(modelo, freios_abs, tração_4X, atv_tração, atv_freio_abs, vidros_eletricos, mod_combustivel) {
        this.modelo = modelo;
        this.freios_abs = freios_abs;
        this.tração_x4 = tração_4X;
        this.vidros_eletricos = vidros_eletricos;
        this.atv_tração = atv_tração;
        this.atv_freio_abs = atv_freio_abs;
        this.mod_combustivel = mod_combustivel;
    }
    Fiat.prototype.carro = function () {
        console.log("Ei primo, vc n\u00E3o estava procurando um bom carro? Os novos carros da Fiat acabaram de chegar e est\u00E3o com TUDO!!! \n        ja ouviu falar, como o ".concat(this.modelo, ", mas estava com uma duvida\n        ele tem freios ABS?\n        ").concat(this.freios_abs, " \n        e tra\u00E7\u00E3o nas 4 rodas?\n        ").concat(this.tração_x4, "\n        Incrivel, mas esse e meu primeiro carro, eu n\u00E3o sei como ativar eles hehe\n        sem problemas, os novos carros da Fiat s\u00E3o ativados automaticamente quando ").concat(this.atv_freio_abs, " e ").concat(this.atv_tração, "\n        NOssa vc sabe mesmo de muita coisa de carro primo! mas e os vidros eletricos e combustivel modificavel?\n        ").concat(this.vidros_eletricos, " e ").concat(this.mod_combustivel, "\n        Ent\u00E3o eu vou comprar ").concat(this.modelo, " esse carro logo antes que os estoques acabem na fiat.com.br\n        pera da pra ir pelo site? Realmente, melhor que Fiat n\u00E3o tem!"));
    };
    return Fiat;
}());
var propaganda = new Fiat("Cachorro Caramelo", true, true, "quando vc faz freagens de emergencia e pisa no pedal ate o fundo ", "assim que vc liga o motor que gera tração nas 4 ao inves de duas como o resto", true, true);
propaganda.carro();
/*
EXERCICIO 2 - CRIAR UMA ESTRUTURA COM:
     *UMA CLASSE DE SHOPPINGS DO RJ(DE SUA ESSCOLHA)
     * UMA SUBCLASSE TIPOS DE LOJAS DE SUA ESCOLHA(por exemplo."Alimentação, "Vestuario", "Brinquedos")
     * UMA SUBCLASSE DE LOJAS DE SUA ESCOLHA(por exemplo, " McDonalds´s, "Renner", "Rihappy")
     * 
     * A SUBCLASSES DE LOJAS TERA OS SEGUINTES ATRIBUTOS:
         * Tamanho da loja, Produtos MAis Vendidos, Abertos24hs
     * METODOS: EXIBIR OS ATRIBUTOS DA LOJA     
     

     

EXERCICIO 3
*/ 
