/**
 * Created by victor.ortegon on 13/07/2016.
 */
angular.module("whatapop").component("products", {
    
    bindings: {
        filtro: "<"
    },
    templateUrl: "views/products.html",

    controller: function (productService) {

        var self = this;

        self.$onInit= function () {

            productService.getProducts().then(function (response) {

                self.products = response.data;                
            });
        }

        self.obtenerRutaImagen = productService.obtenerRutaImagenAbsoluta;
        
    }
});
