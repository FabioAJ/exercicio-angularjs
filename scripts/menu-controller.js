/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module('aplicacao').controller('MenuController', function($scope, $state) {

    $scope.irInicio = function() {
        $state.go("aplicacao_inicial");
    }

    $scope.irListagem = function() {
        $state.go("aplicacao_listagem");
    }

    $scope.irCadastro = function() {
        $state.go("aplicacao_cadastro");
    }

    $scope.irPrevisao = function() {
        $state.go("aplicacao_previsao");
    }
});