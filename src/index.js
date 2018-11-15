import {Page} from "./page";
import {Paginator} from "./paginator";
import {Catalog} from "./catalog";
import {SearchProduct} from "./search";

Page.setProducts(Page.loadProducts());

const catalog = new Catalog(Page.getPerPage());
const paginator = new Paginator(catalog);
const searchForm = new SearchProduct(catalog, paginator);

catalog.renderProducts(Page.getProducts(), Page.getCurrentPage(), paginator);
paginator.createPagination(Page.getProducts());
searchForm.createSearchHTML();
