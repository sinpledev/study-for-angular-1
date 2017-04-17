
function Controller ($scope) {
    $scope.aaaa = 'kmg2';
    $scope.bbbb = 2;

    $scope.data = {
        name: 'kmg',
        age: 25,
        number: 1200.126
    };

    $scope.add = function() {
        $scope.data.name += "멍청이";
    };

    $scope.arr = [{
        name: 'kmg1',
        age: 251,
        number: 1200.126
    },{
        name: 'kmg2',
        age: 252,
        number: 1200.126
    },{
        name: 'kmg3',
        age: 253,
        number: 1200.126
    }];

    $scope.arr2 = [1,2,3,4,5];

}