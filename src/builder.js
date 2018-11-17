export class Builder{
    static createNewElement (tag, innerContent = null, classStr = null, attr = null) {
        let el = document.createElement(tag);
        el.innerHTML = innerContent || '';
        el.className = classStr || '';
        
        if(attr){
            attr.map((attr_rl) => el.setAttribute (attr_rl.name, attr_rl.value));
        }
        return el;
    }

    static attachChildrenToParent (html, array_el) {
        array_el.map((el) => html.appendChild(el));
        return html;
    }
}
