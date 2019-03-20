import { addHeader, addTopLink } from "../utils/helper.js"
const appElm = document.querySelector("#app")
const divElm = document.createElement("div")
const h3Elm = document.createElement("h3")
addHeader(appElm, "03_アロー関数")
for (const [idx, text] of ["序", "破", "Q"].entries()) {
  const buttonElm = document.createElement("button")
  buttonElm.textContent = text
  buttonElm.setAttribute("name", idx)
  divElm.appendChild(buttonElm)
}
appElm.appendChild(divElm)
appElm.appendChild(h3Elm)
addTopLink(appElm)

try {
  /* ***************************************************************
   * 以前までの無名関数
   * ***************************************************************/
  var getChildOld = function(num) {
    return ["綾波", "惣流", "碇"][num - 1]
  }

  console.log("getChildOld(1) =", getChildOld(1))

  /* ***************************************************************
   * アロー関数１ (無名関数の省略記法)
   * ***************************************************************
   * (引数) => { 処理 } で無名関数を定義できます。
   * 「function(引数) { 処理 }」と「(引数) => { 処理 }」はほぼほぼ同義です。
   * *厳密には関数内におけるthisの扱いが異なります。この違いはものすごくに重要です。
   * しかし、オブジェクト指向とかそういうそこそこ突っ込んだお話になるので、ここでは触れません。
   * 気になる方は後で質問していただけると幸いです。
   */
  const getChildArrow = num => {
    return ["綾波", "惣流", "碇"][num - 1]
  }

  throw new Error("一時停止") // これを動かして先に進んでいく

  console.log("*******************************************アロー関数１")
  console.log("getChildArrow(2) =", getChildArrow(2))

  // 基本これだけです。何も難しいことはありまん。
  // しかし、アロー関数にはより短く書く記法があり、さらに分割代入などが合わさって、初見殺しな見た目になりがちです。

  /* ***************************************************************
   * アロー関数２ 引数のカッコの省略
   * ***************************************************************
   * 引数が１つのみの場合、引数を囲む（）を省略できます。
   */
  const getChildArrowNoParentheses = num => {
    return ["綾波", "惣流", "碇"][num - 1]
  }

  console.log("*******************************************アロー関数２")
  console.log("getChildArrowNoParentheses(3) =", getChildArrowNoParentheses(3))

  // 引数が２つ以上ある場合には必ず()が必要です。以下はエラーです。
  // const addNum = num1, num2 => {
  //   return num1 + num2
  // }

  /* ***************************************************************
   * アロー関数３ {} と retrun の省略
   * ***************************************************************
   * 式を挟まずに処理結果を帰す場合には{} と retrun を省略できます。
   */
  const getChildArrowNoRetrun = num => ["綾波", "惣流", "碇"][num - 1]

  console.log("*******************************************アロー関数３")
  console.log("getChildArrowNoRetrun(1) =", getChildArrowNoRetrun(1))

  /*
   * アロー関数の説明としてはこれで本当におしまいです。
   * ここからは省略記法のいろんなパターンを上げていきます。
   */

  // 計算結果を返す
  const multiplNum = (num1, num2) => num1 * num2
  console.log("multiplNum(3,6) =", multiplNum(3, 6))

  // 配列を返す
  const makeArray = (val1, val2, val3) => [val1, val2, val3]
  console.log(
    "makeArray('アダム','リリス','サキエル') =",
    makeArray("アダム", "リリス", "サキエル")
  )

  // 上記は以下のように書いたほうがスマートです。そして、スプレット演算子を使う場合は引数が一つでも()は必須です。
  const makeArraySmart = (...vals) => vals
  console.log(
    "makeArraySmart('アダム','リリス','サキエル') =",
    makeArraySmart("アダム", "リリス", "サキエル")
  )

  // オブジェクトを返す
  // {}とretrunを省略してオブジェクトを返す場合にはオブジェクトを()で囲みます。ココ初見殺しポイントです。
  const makeObject = (name, pilot, color) => ({ name, pilot, bodyColor: color })
  console.log(
    "makeObject('弐号機','惣流','赤') =",
    makeObject("弐号機", "惣流", "赤")
  )

  // 引数を分割代入で受ける。分割代入で引数を受ける場合も()は必須。
  const descriptWeapons = ([knife, axe, gun]) =>
    knife +
    "は" +
    "分子レベルでものが切れる。" +
    axe +
    "と" +
    gun +
    "はすごく強い。"
  const weapons = ["プログレッシブ・ナイフ", "スマッシュホーク", "ニードルガン"]
  console.log("descriptWeapons(weapons) =", descriptWeapons(weapons))

  /*
   * とにかく retrun を書きたくない人が多く（僕もその部類）簡単な条件分岐はretrun無しで書かれることが多いです。
   */
  // ３項演算子
  const evaluatScore = score => {
    if (score >= 90) {
      return "合格"
    } else {
      return "不合格"
    }
  }
  const evaluatScoreShort = score => (score >= 70 ? "合格" : "不合格")
  console.log("evaluatScore(48) =", evaluatScore(48))
  console.log("evaluatScoreShort(71) =", evaluatScoreShort(71))

  // && || で分岐
  const requestAssignment = [
    { name: "akashi", section: "新人" },
    { name: "kimura", section: "イベント" },
    { name: "zero", section: "" }
  ]
  const result = requestAssignment.map(
    ({ name, section }) => name + "さんの希望は" + (section || "なし")
  )
  console.log("result =", result)

  /*
   * 関数を返す関数 初見殺しポイント２ しかしながら画期的
   */
  const funcRetrunsFunc = str1 => str2 => str1 + str2

  const funcA = funcRetrunsFunc("あんた")
  console.log("funcA('ばか〜〜') =", funcA("ばか〜〜"))
  console.log("funcA('死ぬわよ') =", funcA("死ぬわよ"))

  // function で同じことを書くとかなりやぼったいです。
  function func2(str1) {
    return function(str2) {
      return str1 + str2
    }
  }

  // 実際こんな書き方使わんでしょww、と思うかもしれませんが、めちゃくちゃ使います。
  // 特に多いのがDOMイベントのコールバック関数です。

  const buttonElms = document.querySelectorAll("button")
  const handleButtonClick = subTitles => e => {
    const { name, textContent } = e.target
    const fullTitle =
      "ヱヴァンゲリヲン新劇場版:" + textContent + " " + subTitles[name]
    h3Elm.textContent = fullTitle
  }

  for (var i = 0; i < buttonElms.length; i++) {
    buttonElms[i].addEventListener(
      "click",
      handleButtonClick([
        "YOU ARE (NOT) ALONE",
        "YOU CAN (NOT) ADVANCE.",
        "YOU CAN (NOT) REDO."
      ])
    )
  }

  /*



   */
} catch (err) {
  console.log(err.message)
}
