/**
 * Created by victor.ortegon on 14/07/2016.
 */
angular.module("whatapop").directive("categories", function (categoryService) {
   
    return {

        restrict: "EA",
        scope: {

            filtrarCat: "&"
        },
        templateUrl: "views/categories.html",
        link: function(scope) {

            scope.name = "";

            categoryService.getCategories().then(function (response) {

                scope.categories = {
                    model: "",
                    availableOptions: []
                };
                scope.categories.availableOptions = response.data;
                
            });

            scope.filtrarProd = function () {
                scope.filtrarCat({"filtro": {"id":scope.categories.model, "name":scope.name}});
            };
        }
    };
});
