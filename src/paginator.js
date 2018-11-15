import {Builder} from "./builder";
import {Page} from "./page";

export class Paginator{
    constructor(catalog){
        this.pagination_buttons = document.getElementsByClassName("page-link");
        this.pagination = document.getElementById("pagination");

        this.catalog = catalog;
    }

    createPagination(array_products){
        let link, li, ul;

        let classNameLi;

        this.pagination.innerHTML = "";
        ul = Builder.createNewElement("ul", null, "pagination");
        for(let i = 0; i < Math.ceil(array_products.length / Page.getPerPage()); i++){
            link = Builder.createNewElement("a", i+1, "page-link",[{"name":"data-link", "value":i}]);

            classNameLi = (i == Page.getCurrentPage())?"page-item active":"page-item";
            li = Builder.attachChildrenToParent(Builder.createNewElement("li", null, classNameLi), [link]);

            ul.appendChild(li);
        }
        this.pagination.appendChild(ul);

        Array.from(this.pagination_buttons).map((el)=>{
            el.addEventListener("click", (e)=>{
                Page.setCurrentPage(e.target.dataset.link);
                this.catalog.renderProducts(array_products, Page.getCurrentPage(),this);
            }, false);
        });

        // Array.from(document.getElementsByClassName("product_more")).map((el)=>{
        //     el.addEventListener("click", eventHandle, false);
        // });
    }

}