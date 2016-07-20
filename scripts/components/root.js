angular.module("whatapop").component("root", {
    $routeConfig: [{
        name: "Products",
        path: "/products",
        component: "filtroProductos",
        useAsDefault: true
    }, {
        name: "ProductDetail",
        path: "/productDetail/:id",
        component: "productDetail"
    }],
    templateUrl: "views/root.html"
});