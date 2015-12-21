angularApp.controller('homeController', ['$q', '$scope', '$timeout', '$mdDialog', '$mdToast', function ($q, $scope, $timeout, $mdDialog, $mdToast) {
        
        $scope.selected = [];
        
        var last = {
            bottom: false,
            top: true,
            left: false,
            right: true
        };

        $scope.toastPosition = angular.extend({}, last);
        $scope.getToastPosition = function () {
            sanitizePosition();
            return Object.keys($scope.toastPosition)
                    .filter(function (pos) {
                        return $scope.toastPosition[pos];
                    })
                    .join(' ');
        };
        function sanitizePosition() {
            var current = $scope.toastPosition;
            if (current.bottom && last.top)
                current.top = false;
            if (current.top && last.bottom)
                current.bottom = false;
            if (current.right && last.left)
                current.left = false;
            if (current.left && last.right)
                current.right = false;
            last = angular.extend({}, current);
        }
        $scope.confirmToast = function (content) {
            $mdToast.show(
                    $mdToast.simple()
                    .content(content)
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
                    );
        };
        

        $scope.query = {
            order: 'id',
            limit: 5,
            page: 1
        };

        $scope.users = {
            "count": 6,
            "data": [
                {   
                    "id":"1",    
                    "name": "Vishnu AV",
                    "email": "vishnu@digitalbrandgroup.com",
                    "address": "Asset Homes"
                }, {
                    "id":"2",
                    "name": "Shiraz",
                    "email": "shiraz@digitalbrandgroup.com",
                    "address": "Attingal"
                }, {
                    "id":"3",
                    "name": "Rejin",
                    "email": "rejin@digitalbrandgroup.com",
                    "address": "Kazhakoottam"
                }, {
                    "id":"4",
                    "name": "Siju",
                    "email": "siju@digitalbrandgroup.com",
                    "address": "Venjarammood"
                }, {
                    "id":"5",
                    "name": "Prejith",
                    "email": "prejith@digitalbrandgroup.com",
                    "address": "Trivandrum"
                }, {
                    "id":"6",
                    "name": "Nithin",
                    "email": "nithin@digitalbrandgroup.com",
                    "address": "Trivandrum"
                }
            ]
        };


        $scope.onpagechange = function (page, limit) {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.onorderchange = function (order) {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };


        $scope.deleteUser = function (ev, index, user) {

            var confirm = $mdDialog.confirm()
                    .title('Would you like to delete your the row?')
                    .targetEvent(ev)
                    .ok('Delete')
                    .cancel('Cancel');
            $mdDialog.show(confirm).then(function () {

                for (var i = 0; i < $scope.users.data.length; i++) {
                    if ($scope.users.data[i].name == user.name) {
                        $scope.users.data.splice(i, 1);
                        $scope.users.count = $scope.users.count - 1;
                        $scope.confirmToast("User Deleted!");
                        break;
                    }
                }

            }, function () {
                // cancel the operation
            });
        };


        $scope.openAdd = function ($event) {

            $mdDialog.show({
                scope: $scope,
                preserveScope:true,
                templateUrl: 'templates/add.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true
            });
        };


        $scope.addUser = function (item) {
            item.id = $scope.users.count + 1;
            $scope.users.data.push(item);
            $scope.item = {};
            $scope.users.count = $scope.users.count + 1;
            $mdDialog.hide();
            $scope.confirmToast("User Added!");

        };


        $scope.hideDiaglog = function () {
            $mdDialog.hide();
        };
        
        
        $scope.updateUser = function ($event, $index, user) {
            
            $scope.row   =   user;
            
            $mdDialog.show({
                scope: $scope,
                preserveScope:true,
                templateUrl: 'templates/edit.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true
            });
        };
        
        
        $scope.editUser = function (item) {
            
            for (var i = 0; i < $scope.users.data.length; i++) {
                if ($scope.users.data[i].id == item.id) {
                    $scope.users.data[i]    =   item;
                    $mdDialog.hide();
                    $scope.confirmToast("User Updated!");
                    break;
                }
            }
            
            

        };
        
}]);

