/*
Nome do autor: Fabio Augusto Amaro Jaime
Data de criacao do arquivo: 26/03/2019
Objetivo sucinto do programa: Simular uma adocao de suricatos usando html, angular e bootstrap
Referencia ao enunciado/origem do exercicio: https://cursos.timtec.com.br/course/desenvolvimento-web-com-angularjs/intro 
*/

angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {
    var WeatherChannel = $resource('https://api.openweathermap.org/data/2.5/weather?id=3445831&units=metric&APPID=cb736063c590f2abe550a94e94645939'); 
    
    var getWeather = function() {
        WeatherChannel.get().$promise.then(function(response) {
            $scope.tempo = response;
            console.log(response);
        }, function(promise) {
            alert("Erro ao requisitar o recurso!");
        })
    }
    getWeather();
});
