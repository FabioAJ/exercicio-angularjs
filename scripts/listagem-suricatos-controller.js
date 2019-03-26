/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module('aplicacao').controller('ListagemSuricatosController', function ($scope, $filter, SuricatoCollectionService) {

    $scope.name = 'amigo';

    $scope.iniciado = true;

    $scope.cadastrar = false;

    $scope.suricatos = SuricatoCollectionService.getSuricatos();

    $scope.hoje = new Date();

    $scope.finalizar = function () {
        $scope.iniciado = false;
    };

    $scope.iniciar = function () {
        $scope.iniciado = true;
    };

    $scope.ordenarPorNome = function () {
        SuricatoCollectionService.ordenarPorNome();
        $scope.suricatos = SuricatoCollectionService.getSuricatos();
    }

    $scope.ordenarPorIdade = function () {
        SuricatoCollectionService.ordenarPorIdade();
        $scope.suricatos = SuricatoCollectionService.getSuricatos();
    }

    $scope.exibeCadastro = function () {
        $scope.cadastrar = !$scope.cadastrar;
    }

});