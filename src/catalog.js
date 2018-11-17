import {Builder} from "./builder";
import {Page} from "./page";

export class Catalog {
    constructor(per_page){
        this.element = document.getElementById("catalog");
        this.per_page = per_page;
    };

    createCard(product, index){
        if(!product) return '';
        
        const link = Builder.createNewElement("a", "Add to cart", "btn btn-primary",[{name:"href", value:"#"}]);
        const show_more = Builder.createNewElement("a", "More", "btn btn-success product_more",[{name:"href", value:"#"}, {name:"data-id", value:index}]);
        const p = Builder.createNewElement("p", product.description, "card-text");
        const title = Builder.createNewElement("h5", product.name, "card-title");

        const cardBody = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "card-body"), [title, p, link, show_more]);
        const image = Builder.createNewElement("img", null, "card-img-top", [{name:"src", value: `images/${product.image}`}, {name:"alt", value: product.name}]);
        const card = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "card"), [image,cardBody]);

        return Builder.attachChildrenToParent(Builder.createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);
    }

    startFromFirstProducts() {
        return this.current_page * this.per_page;
    }

    isLastProductInPage(i,array_products) {
        return (i < this.current_page * this.per_page + this.per_page) && (i < array_products.length);
    }

    renderProducts(array_products, current_page, paginator){
        this.current_page = current_page;
        this.element.innerHTML = "";
        let i = this.startFromFirstProducts();
        for(i; this.isLastProductInPage(i,array_products); i++){
            this.element.appendChild(this.createCard(array_products[i], i));
        }
        paginator.createPagination(Page.getProducts());
    }

}
