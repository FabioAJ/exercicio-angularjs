angular.module('aplicacao').service('SuricatoCollectionService', function ($filter) {
    
    var ordenadoPorIdade = false;

    var ordenadoPorNome = false;

    var suricatos = [
        {'nome' : 'Suricato Baiano', 'idade' : 5},
        {'nome' : 'Suricato Azul', 'idade' : 3},
        {'nome' : 'Suricato Rei', 'idade' : 6},
        {'nome' : 'Suricato Marrom', 'idade' : 9},
    ];

    this.getSuricatos = function() {
        return suricatos;
    }

    this.adicionarSuricato = function(suricato) {
        suricatos.push(suricato);
    }

    this.ordenarPorNome = function() {
        ordenadoPorNome = !ordenadoPorNome;
        suricatos = $filter('orderBy')(suricatos, 'nome', ordenadoPorNome);
    }

    this.ordenarPorIdade = function() {
        ordenadoPorIdade = !ordenadoPorIdade;
        suricatos = $filter('orderBy')(suricatos, 'nome', ordenadoPorIdade);
    }

})