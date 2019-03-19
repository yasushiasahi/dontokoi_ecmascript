const app = document.querySelector("#app")
const [h1Elm, ulElm, liElm, aElm] = ["h1", "ul", "li", "a"].map(el =>
  document.createElement(el)
)

/*
 * タイトル
 */
h1Elm.textContent = "どんとこいエクマスクリプト"
app.appendChild(h1Elm)

/*
 * サイトリンク
 */
const siteMap = [
  { path: "01_object-literal", name: "オブジェクトリテラル" },
  { path: "02_arrow-function", name: "アロー関数" }
]
liElm.appendChild(aElm)
for (const [idx, { path, name }] of siteMap.entries()) {
  const newLiElm = liElm.cloneNode(true)
  newLiElm.firstChild.textContent = `${idx + 1}_${name}`
  newLiElm.firstChild.setAttribute("href", `/${path}/index.html`)
  ulElm.appendChild(newLiElm)
}
app.appendChild(ulElm)
