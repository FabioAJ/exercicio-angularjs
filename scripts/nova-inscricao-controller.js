/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module('aplicacao').controller('NovaInscricaoController', function ($scope, $filter, SuricatoCollectionService) {

    $scope.submeter = function() {
        if ($scope.form_1.$valid) {
            novo_suricato = {};
            novo_suricato['nome'] = $scope.nome_suricato
            novo_suricato['idade'] = parseInt($scope.idade_suricato);
            SuricatoCollectionService.adicionarSuricato(novo_suricato);
        } else {
            alert("Preencha o formulário corretamente!");
        }  
    };

});