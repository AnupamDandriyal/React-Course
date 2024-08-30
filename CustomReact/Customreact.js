function customRender(container, reactElement) {
  const Element = document.createElement(reactElement.type);
  Element.innerHTML = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === 'children') {
      continue;
    }
    Element.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(Element)
}


const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target:"_blank"
  },
  children:"Click me to visit Google"
}


const container = document.getElementById('root');
customRender(container,reactElement);


