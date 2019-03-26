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