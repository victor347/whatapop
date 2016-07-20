/**
 * Created by victor.ortegon on 12/07/2016.
 */
angular.module("whatapop").service("categoryService", function ($http, Propiedades) {

    this.getCategories = function () {
        return $http.get(Propiedades.urlServidor + Propiedades.endpointCategories);
    };
});
