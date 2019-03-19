import { addHeader, addTopLink } from "../utils/helper.js"
const appElm = document.querySelector("#app")
addHeader(appElm, "01_オブジェクトリテラル")
addTopLink(appElm)

try {
  /* ***************************************************************
   * 以前までのオブジェクト定義
   * ***************************************************************/
  var property2 = "プロパティ２"
  function method2() {
    return "メソッド２"
  }

  var oldObject = {
    // メソッド定義
    property1: "プロパティ",
    property2: property2, // "プロパティ２"
    // プロパティ定義
    method1: function() {
      return "メソッド"
    },
    method2: method2
  }

  console.log("oldObject =", oldObject)
  console.log("oldObject.method1() =", oldObject.method1())
  console.log("oldObject.method2() =", oldObject.method2())

  /*
   * ちなみに、
   * プロパティとはオブジェクト内に定義された変数を指します。
   * プロパティが関数だった場合,それをメソッドと呼びます。
   * それぞれ次のような関係になります。
   * 変数 > プロパティ > メソッド
   */

  throw new Error("一時停止") // これを動かして先に進んでいく

  /* ***************************************************************
   * メソッドの省略記法 #Vue.jsで当たり前のように出てくる
   * ***************************************************************
   * これまではプロパティ名に対して無名関数 function() { 処理 } を定義していましたが、
   * メソッド名() { 処理 } と書けば同じように定義できます。
   */
  const newObject1 = {
    // メソッドの省略記法
    method() {
      return "メソッド"
    },
    tashizan(nam1, nam2) {
      return nam1 + nam2
    }
  }
  console.log("*******************************************メソッドの省略記法")
  console.log("newObject1 =", newObject1)
  console.log("newObject1.tashizan() =", newObject1.tashizan(826, 826))

  /* ***************************************************************
   * プロパティの省略 #めちゃくちゃ使う！！
   * ***************************************************************w
   * すでに定義済みの変数の値をその変数と同じプロパティ名で定義したい時、プロパティ名を省略できます。
   * :を書かずに変数名or関数名だけを書けばいい。
   */
  const property3 = "プロパティ３"
  const bestAnimeOfThisSeason = "モブサイコ１００ Ⅱ"
  function lookDown(parson) {
    return parson + "お可愛いこと・・・"
  }

  const newObject2 = {
    property3, // "プロパティ３"
    bestAnimeOfThisSeason, // "モブサイコ１００"
    lookDown
  }
  console.log("*******************************************プロパティの省略")
  console.log("newObject2 =", newObject2)
  console.log("newObject2.lookDown =", newObject2.lookDown("会長!!"))

  /* ***************************************************************
   * 動的なメソッド名定義。処理結果をメソッド名にできます。
   * ***************************************************************w
   * []内に処理を書く
   */
  const company = "karabiner"
  function addString(str1, str2) {
    return str1 + str2
  }

  const newObject3 = {
    ["0" + 826]: "設立記念日",
    [company]: "カラビナテクノロジー",
    [addString("AttackOnTitan", "Season3")]: "楽しみ！！"
  }
  console.log("*******************************************動的なメソッド名定義")
  console.log("newObject3 =", newObject3)

  /*
   * 配列をオブジェクトに作り変える。
   */
  const membersArray = [
    { nickName: "bullstof", realName: "石元" },
    { nickName: "peter", realName: "岡村" },
    { nickName: "akashi", realName: "岩本" },
    { nickName: "zero", realName: "旭" }
  ]
  const membersObject = {
    [membersArray[0].nickName]: membersArray[0].realName,
    [membersArray[1].nickName]: membersArray[1].realName,
    [membersArray[2].nickName]: membersArray[2].realName,
    [membersArray[3].nickName]: membersArray[3].realName
  }

  console.log("membersObject", membersObject)

  // ちなみに例示のために上記の書き方をしましたが、良い書き方ではありません。普通はこう書きます。
  let membersObject2 = {}
  for (let i = 0; i < membersArray.length; i++) {
    membersObject2[membersArray[i].nickName] = membersArray[i].realName
  }
  console.log("membersObject2", membersObject2)

  /*




 */
} catch (err) {
  console.log(err.message)
}
