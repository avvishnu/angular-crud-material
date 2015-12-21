<html lang="en" ng-app="dashboardApp">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Angular Material Design</title>



        <link rel="stylesheet" href="css/angular-material.min.css">
        <link rel="stylesheet" href="css/md-data-table.css">

    </head>

    <body>



    <md-toolbar layout="row" layout-align="space-around center">
        <div class="md-toolbar-tools">
            <div class="md-title">Dashboard</div>
        </div>
    </md-toolbar>

    <md-content ng-controller="homeController" flex>
        <md-card>

            <md-data-table-container>
                <table md-data-table class="md-primary" md-progress="deferred">
                    <thead md-order="query.order" md-trigger="onorderchange">
                        <tr>
                            <th name="#"></th>
                            <th name="Name"></th>
                            <th name="Email"></th>
                            <th name="Address"></th>
                            <th name ="Action"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="user in users.data| orderBy: query.id | limitTo: query.limit: (query.page - 1) * query.limit">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.address}}</td>
                            <td>
                                <div layout="row" layout-sm="column" layout-align="left left" >

                                    <md-button class="md-raised md-primary"  ng-click="updateUser($event, $index, user);">Update</md-button>
                                    <md-button class="md-raised md-warn" ng-click="deleteUser($event, $index, user);">Delete</md-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </md-data-table-container>

            <md-data-table-pagination md-limit="query.limit" md-page="query.page" md-total="{{users.count}}" md-trigger="onpagechange"></md-data-table-pagination>

        </md-card>

        <md-button ng-click="openAdd($event)" class="md-raised md-primary">Create User</md-button>


    </md-content>

    <script src="js/angular.min.js"></script>
    <script src="js/angular-animate.min.js"></script>
    <script src="js/angular-aria.min.js"></script>
    <script src="js/angular-material.min.js"></script>
    <script src="js/angular-route.min.js"></script>
    <script src="js/md-data-table.js"></script>
    <script src="app.js"></script>
    <script src="controller.js"></script>
</body>
</html>