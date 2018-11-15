import {Page} from "./page";
import {Paginator} from "./paginator";
import {Catalog} from "./catalog";
import {SearchProduct} from "./search";

const searchForm = new SearchProduct();
const catalog = new Catalog(Page.getPerPage());
const paginator = new Paginator(catalog);

catalog.renderProducts(Page.getProducts(), Page.getCurrentPage(), paginator);
paginator.createPagination(Page.getProducts());
searchForm.createSearchHTML();
