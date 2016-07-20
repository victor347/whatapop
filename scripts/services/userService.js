/**
 * Created by victor.ortegon on 12/07/2016.
 */
angular.module("whatapop").service("userService", function ($http, Propiedades) {

    this.getUsers = function () {
        return $http.get(Propiedades.urlServidor + Propiedades.endpointUsers);
    };
});
