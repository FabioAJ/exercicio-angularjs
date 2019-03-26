/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module("aplicacao").directive('cadastroSuricato', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/cadastro-suricato-template.html'
    };
});