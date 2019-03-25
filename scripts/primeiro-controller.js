angular.module('aplicacao').controller('PrimeiroController', function($scope, $filter) {

    $scope.name = 'amigo';

    $scope.iniciado = true;

    $scope.suricatos = [
        {'nome' : 'Suricato Baiano', 'idade' : 5},
        {'nome' : 'Suricato Azul', 'idade' : 3},
        {'nome' : 'Suricato Rei', 'idade' : 6},
        {'nome' : 'Suricato Marrom', 'idade' : 9},
    ];

    $scope.hoje = new Date();

    $scope.finalizar = function() {
        $scope.iniciado = false;
    };

    $scope.iniciar = function() {
        $scope.iniciado = true;
    };

    $scope.ordenarPorNome = function() {
        $scope.ordenadoPorNome = !$scope.ordenadoPorNome;
        $scope.suricatos = $filter('orderBy')($scope.suricatos, 'nome', $scope.ordenadoPorNome);
    }

    $scope.ordenarPorIdade = function() {
        $scope.ordenadoPorIdade = !$scope.ordenadoPorIdade;
        $scope.suricatos = $filter('orderBy')($scope.suricatos, 'nome', $scope.ordenadoPorIdade);
    }

    $scope.submeter = function() {
        if ($scope.form_1.$valid) {
            novo_suricato = {};
            novo_suricato['nome'] = $scope.nome_suricato
            novo_suricato['idade'] = parseInt($scope.idade_suricato);
            $scope.suricatos.push(novo_suricato);
        } else {
            alert("Preencha o formulário corretamente!");
        }  
    };

});