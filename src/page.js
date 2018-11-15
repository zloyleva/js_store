let currentPage = 0;
let perPage = 6;

let loadProducts = Object.values(require('./data.json'));
let products = [];

export class Page{

    static loadProducts(){return loadProducts;}

    static getCurrentPage(){return currentPage;}
    static getPerPage(){return perPage;}
    static getProducts(){return products;}

    static setCurrentPage(pageNumber){currentPage = pageNumber;}
    static setProducts(productsArray){products = productsArray;}

}
