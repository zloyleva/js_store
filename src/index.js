import {Page} from "./page";
import {Paginator} from "./paginator";
import {Catalog} from "./catalog";
import {SearchProduct} from "./search";

Page.setProducts(Page.loadProducts());

new Catalog(Page.getPerPage()).renderProducts(Page.getProducts(), Page.getCurrentPage(), paginator);
new Paginator(catalog).createPagination(Page.getProducts());
new SearchProduct(catalog, paginator).createSearchHTML();
