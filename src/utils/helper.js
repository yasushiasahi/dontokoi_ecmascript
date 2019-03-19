const addHeader = (parentElm, subTitle) => {
  const h1Elm = document.createElement("h1")
  const h2Elm = document.createElement("h2")
  h1Elm.textContent = "どんとこいエクマスクリプト"
  h2Elm.textContent = subTitle
  parentElm.appendChild(h1Elm)
  parentElm.appendChild(h2Elm)
}

const addTopLink = parentElm => {
  const aElm = document.createElement("a")
  aElm.textContent = "トップページ"
  aElm.setAttribute("href", "/index.html")
  parentElm.appendChild(aElm)
}

export { addTopLink, addHeader }
