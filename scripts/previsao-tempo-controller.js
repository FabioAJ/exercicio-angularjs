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
