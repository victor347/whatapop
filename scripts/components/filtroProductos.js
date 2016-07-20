/**
 * Created by victor.ortegon on 13/07/2016.
 */
angular.module("whatapop").component("filtroProductos", {

    bindings: {
        
    },
    templateUrl: "views/filtroProductos.html",

    controller: function () {

        var self = this;

        self.filtrar = function (filtro) {

            self.filtro = {
                "name": filtro.name,
                "category":{"id":filtro.id}
            };
        }

    }
});
