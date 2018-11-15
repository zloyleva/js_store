import {Builder} from "./builder";

export class SearchProduct {
    constructor(){
        this.element = document.getElementById("search");
    }

    createSearchHTML(){
        let input = Builder.createNewElement("input", null, "form-control mr-sm-2",[
                {"name":"placeholder", "value":"Search"},
                {"name":"type", "value":"search"},
                {"name":"id", "value":"s"}
            ]);
        let button = Builder.createNewElement("button", "Search", "btn btn-outline-success my-2 my-sm-0",[{"name":"id", "value":"searchButton"}]);

        let div = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "form-inline my-2 col"), [input,button]);
        let row = Builder.attachChildrenToParent(Builder.createNewElement("div", null, "row"), [div]);

        this.element.appendChild(row);

        this.addSearchEventListener();
    }

    addSearchEventListener(){
        document.getElementById("searchButton").addEventListener("click", this.doSearch, false)
    }

    doSearch(e){
        const searchPharase = document.getElementById("s").value;
        console.log(searchPharase);
    }
}