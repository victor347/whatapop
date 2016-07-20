angular.module("whatapop").component("productDetail", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/productDetail.html",
        controller: function(productService, $sce) {

            var self = this;

            self.$routerOnActivate = function(pet) {

                var productId = pet.params.id;

                productService.getProduct(productId).then(function(response) {
                    self.product = response.data;
                    self.product.description = $sce.trustAsHtml(self.product.description);
                    
                });
            };

            // Obtenemos la ruta absoluta de la imagen.
            self.obtenerRutaImagen = productService.obtenerRutaImagenAbsoluta;

        }
    });