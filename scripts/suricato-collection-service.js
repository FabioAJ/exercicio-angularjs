/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module('aplicacao').service('SuricatoCollectionService', function ($filter) {

    var ordenadoPorIdade = false;

    var ordenadoPorNome = false;

    var suricatos = [
        { 'nome': 'Suricato Filhote', 'idade': 1 },
        { 'nome': 'Suricato Listrado', 'idade': 4 },
        { 'nome': 'Suricato Alpha', 'idade': 9 },
        { 'nome': 'Suricato Marrom', 'idade': 5 },
    ];

    this.getSuricatos = function () {
        return suricatos;
    }

    this.adicionarSuricato = function (suricato) {
        suricatos.push(suricato);
    }

    this.ordenarPorNome = function () {
        ordenadoPorNome = !ordenadoPorNome;
        suricatos = $filter('orderBy')(suricatos, 'nome', ordenadoPorNome);
    }

    this.ordenarPorIdade = function () {
        ordenadoPorIdade = !ordenadoPorIdade;
        suricatos = $filter('orderBy')(suricatos, 'idade', ordenadoPorIdade);
    }

})