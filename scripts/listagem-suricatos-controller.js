angular.module('aplicacao').controller('ListagemSuricatosController', function($scope, $filter, SuricatoCollectionService) {

    $scope.name = 'amigo';

    $scope.iniciado = true;

    $scope.suricatos = SuricatoCollectionService.getSuricatos();

    $scope.hoje = new Date();

    $scope.finalizar = function() {
        $scope.iniciado = false;
    };

    $scope.iniciar = function() {
        $scope.iniciado = true;
    };

    $scope.ordenarPorNome = function() {
        SuricatoCollectionService.ordenarPorNome();
        $scope.suricatos = SuricatoCollectionService.getSuricatos();
    }

    $scope.ordenarPorIdade = function() {
        SuricatoCollectionService.ordenarPorIdade();
        $scope.suricatos = SuricatoCollectionService.getSuricatos();
    }

});