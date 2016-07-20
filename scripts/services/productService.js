/**
 * Created by victor.ortegon on 12/07/2016.
 */
angular.module("whatapop").service("productService", function ($http, Propiedades) {

    this.getProducts = function () {
        return $http.get(Propiedades.urlServidor + Propiedades.endpointProducts);
    };

    this.getProduct = function(productId) {

        return $http.get(Propiedades.urlServidor + Propiedades.endpointProducts + "/" + productId);
    };

    this.obtenerRutaImagenAbsoluta = function(rutaRelativa) {

        return rutaRelativa
            ? (Propiedades.urlServidor + "/" + rutaRelativa)
            : undefined;
    };
});
