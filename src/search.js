import {Builder} from "./builder";
import {Page} from "./page";

export class SearchProduct {
    constructor(catalog, paginator){
        this.element = document.getElementById("search");
        this.catalog = catalog;
        this.paginator = paginator;
    }

    createSearchHTML(){
        let input = Builder.createNewElement("input", null, "form-control mr-sm-2",[
                {name:"placeholder", value:"Search"},
                {name:"type", value:"search"},
                {name:"id", value:"s"}
            ]);
        let button = Builder.createNewElement("button", "Search", "btn btn-outline-success my-2 my-sm-0",[{name:"id", value:"searchButton"}]);
        let div = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "form-inline my-2 col"), [input,button]);
        let row = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "row"), [div]);

        this.element.appendChild(row);

        this.addSearchEventListener();
    }

    addSearchEventListener(){
        document.getElementById("searchButton").addEventListener("click", this.doSearch.bind(this), false);
    }

    doSearch(e){
        const searchPhrase = document.getElementById("s");

        Page.setProducts(Page.loadProducts().filter((el) => this.isMatchPhrase(el, searchPhrase.value)));

        searchPhrase.value = "";
        Page.setCurrentPage(0);
        this.catalog.renderProducts(Page.getProducts(), Page.getCurrentPage(), this.paginator);
        this.paginator.createPagination(Page.getProducts());

    }

    isMatchPhrase(element, searchPhrase){
        const re = new RegExp(searchPhrase);
        return re.test(element.name);
    }
}