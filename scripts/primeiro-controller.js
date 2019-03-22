angular.module('aplicacao').controller('PrimeiroController', function($scope) {
    $scope.name = 'amigo';
    $scope.iniciado = true;
    $scope.suricatos = [
        'Suricato Marrom', 'Suricato Bege', 'Suricato Rei', 'Suricato Femea'
    ];
    $scope.finalizar = function() {
        $scope.iniciado = false;
    };
    $scope.iniciar = function() {
        $scope.iniciado = true;
    }
    $scope.submeter = function() {
        $scope.suricatos.push($scope.nome_suricato);
    }
});