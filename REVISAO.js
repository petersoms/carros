var Marvel = /** @class */ (function () {
    function Marvel(nome, voar, poder, esta_vivo) {
        this.nome = nome;
        this.voar = voar;
        this.poder = poder;
        this.esta_vivo = esta_vivo;
    }
    Marvel.prototype.poderes = function () {
        console.log("Qual \u00E9 o nome desse heroi? ".concat(this.nome, " este heroi sabe voar? ").concat(this.voar, " qual \u00E9 seu poder? ").concat(this.poder, ". Esta vivo? ").concat(this.esta_vivo));
    };
    return Marvel;
}());
var heroi = new Marvel("Hulk", true, "Super Força", true);
heroi.poderes();
