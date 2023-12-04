function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Childen
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Childen
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    Childen: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
