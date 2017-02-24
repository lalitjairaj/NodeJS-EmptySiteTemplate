/**
 * Created by a598519 on 20-02-2017.
 */


var menuController = function($scope,$http)
{
    var vm = this;
    console.log('initiated');
    $http.get('/api/menu/en-gb').then(function(response){
        $scope.menuItems = response.data;
    }).catch(function(error){
        console.log(error);
    })
};
angular.module('conti-demo').controller('menuController',menuController);