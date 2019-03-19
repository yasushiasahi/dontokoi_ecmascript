import { addHeader, addTopLink } from "../utils/helper.js"
const appElm = document.querySelector("#app")
addHeader(appElm, "02_分割代入")
addTopLink(appElm)

try {
  /* ***************************************************************
   * これまでの代入
   * ***************************************************************/
  // 配列の代入
  var scores = [90, 83, 53, 65]
  var score1 = scores[0]
  var score2 = scores[1]
  var score3 = scores[2]
  var score4 = scores[3]
  var average = (score1 + score2 + score3 + score4) / scores.length
  console.log("average =", average)

  // オブジェクトの代入
  var parson = {
    firstName: "ジョルノ",
    lastName: "ジョバーナ"
  }
  var fn = parson.firstName
  var ln = parson.lastName
  var fullName = fn + "・" + ln
  console.log("fullName =", fullName)

  throw new Error("一時停止") // これを動かして先に進んでいく

  /* ***************************************************************
   * 分割代入　配列編
   * ***************************************************************
   * const [1番目の値,2番目の値] = 配列 　　　みたいな感じ
   * 言葉では説明できない...
   */
  const scores2 = [70, 83, 23, 100]
  const [s1, s2, aho, tensai] = scores2 // これが分割代入。もとの配列にそって好きな変数名を定義できる
  console.log("*******************************************分割代入　配列編1")
  console.log("s1 =", s1)
  console.log("s2 =", s2)
  console.log("aho =", aho)
  console.log("tensai =", tensai)

  const [one, two] = scores2 // すべてを指定しなくてもOK。ただし必ず先頭からになる
  console.log("*******************************************分割代入　配列編1")
  console.log("one =", one)
  console.log("two =", two)

  /* ***************************************************************
   * 分割代入　配列編2 スプレット演算子 ...
   * ***************************************************************
   * 分割代入の最後の変数名の前に ... をつけると残りのすべて値が配列でとれる
   */
  const [ich, ni, ...nokori] = scores2
  console.log("*******************************************分割代入　配列編2")
  console.log("ich =", ich)
  console.log("ni =", ni)
  console.log("nokori =", nokori)

  /* ***************************************************************
   * 分割代入　オブジェクト編1
   * ***************************************************************
   * const {プロパティ名1,プロパティ名2} = オブジェクト 　　　みたいな感じ
   * これも言葉では説明できない...
   */
  const character = {
    firstName: "ブローノ",
    lastName: "ブチャラティ"
  }
  const { lastName, firstName } = character // 変数名は必ず元のオブジェクトのプロパティ名と一致しれいないとだめ。順番は関係ない。
  console.log(
    "*******************************************分割代入　オブジェクト編1"
  )
  console.log("lastName =", lastName)
  console.log("firstName =", firstName)

  /* ***************************************************************
   * 分割代入　オブジェクト編2 スプレット演算子
   * ***************************************************************
   * ...変数名 それまでに指定されていない残りすべての値がとれる。
   */
  const parts = {
    part1: "ファントムブラッド",
    part2: "戦闘潮流",
    part3: "スターダストクルセイダース",
    part4: "ダイヤモンドは砕けない",
    part5: "黄金の嵐",
    part6: "ストーンオーシャン",
    part7: "スティール・ボール・ラン",
    part8: "ジョジョリオン"
  }
  const { part3, part2, part7, ...left } = parts
  console.log(
    "*******************************************分割代入　オブジェクト編2"
  )
  console.log("part3 =", part3)
  console.log("part2 =", part2)
  console.log("part7 =", part7)
  console.log("left =", left)

  // スプレット演算子は必ず分割代入中の最後で指定しないとだめ。以下の書き方はエラーになります。
  // const [ich, ...nokori, ni ] = scores2
  // const { part3, ...left, part5, part7 } = parts

  /* ***************************************************************
   * 分割代入　オブジェクト編3 プロパティ名とは違う変数名にしたい
   * ***************************************************************
   * { プロパティ名:変数名 } と書くと任意の変数名でうけられます。
   */

  const { part1: Jonathan, part2: Joseph, part3: Jotaro, part4: Josuke } = parts
  console.log(
    "*******************************************分割代入　オブジェクト編3"
  )
  console.log("Jonathan = ", Jonathan)
  console.log("Joseph = ", Joseph)
  console.log("Jotaro = ", Jotaro)
  console.log("Josuke = ", Josuke)

  /* ***************************************************************
   * 分割代入　オブジェクト編4 ネストしたオブジェクト
   * ***************************************************************
   * { プロパティ名:変数名 } で自由な変数名でうけらるということは、更に分割代入できます。
   */
  const mainCharacters = {
    part3: {
      name: "空条承太郎",
      age: 17,
      stand: "スタープラチナ"
    },
    part4: {
      name: "東方仗助",
      age: 16,
      stand: "クレイジー・ダイヤモンド"
    },
    part5: {
      name: "ジョルノ・ジョバァーナ",
      age: 15,
      stand: "ゴールド・エクスペリエンス",
      members: ["ブチャラティ", "ミスタ", "ナランチャ"]
    }
  }
  const {
    part3: { name, stand },
    part4: { name: name4 },
    part5: {
      members: [m1, m2, m3]
    }
  } = mainCharacters
  console.log(
    "*******************************************分割代入　オブジェクト編4"
  )
  console.log("name =", name)
  console.log("stand =", stand)
  console.log("name4 =", name4)
  console.log("m1 =", m1)
  console.log("m2 =", m2)
  console.log("m3 =", m3)
} catch (err) {
  console.log(err.message)
}
