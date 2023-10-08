## JSX  
- HTMLライクな記述　＋　JavaScriptの構文が使える 
- JSXは最終的にReact要素を生成する 
```
const BlueButton = () => {
  return (
    <button className={'btn-bule'}>
      Click me!
    </button>
  )
}
```

### JSXをなぜ使うのか
- JSXを使わない場合
```
React.createElement(
'button',
 {className: 'btn-blue'},
 'Click me!'
)
```
- JSXを使わないとReat.create.....と記述しないといけない、簡潔に書けない

### JSXは何しているか
- HTML構文をReact.createElemntにコンパイルしている

### JSXの基礎文法
1.Reactライブラリをインポート
2.return文の中がJSX構文。基本的にHTMLと同じ。classはclassNameにする

```
import React from 'react';
const BlueButton = () => {
  return (
    <button className={'btn-bule'}>
      Click me!
    </button>
  )
}
```

3.キャメルケースで記述
4.{}内で変数を扱える
5.閉じタグが必要 "/>"

### 特殊なJSX構文
1.JSXは必ず階層構造にする
```
”ERRORでる”
return(
<p>日本一分かりやすいReact入門</p>
<p>JSXの構文</p>
)
```
2.React.Fragmentで囲む。HTMLタグとして出力されない。HTMLになるときにReact,Fragmentはなくなる
```
”OK”
return(
<React.Fragment>
  <p>日本一分かりやすいReact入門</p>
  <p>JSXの構文</p>
</React.Fragment>
)
```
3.React.Fragmentは省略系で書ける
```
”OK”
return(
<>
  <p>日本一分かりやすいReact入門</p>
  <p>JSXの構文</p>
</>
)
```

- コンポーネントは１個に１ファイルがいい

## props
- データの受け渡しに使う

```
"親からデータを渡す"
import Article from "./Article";

function App() {
  return (
    <div>
      <Article
        title={'日本一わかりやすいReact入門'}
        content={'今日のトピックス'}
      />
    </div>
  )；
}
export default Aoo;
```
```
"子コンポーネントの引数にpropsを指定"
const Article (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.content}</h2>
    </div>
  )；
}
export default Article;
```
### 受け渡せるデータ
- propsのデータは{}に記述
- 文字列、数値、真偽値、配列、オブジェクト、日付などなんでもOK
- 変数を渡すことも可能
- 文字列は{}なしでもOK

## state

### stateを使う理由
- Reactではコンポーネント内の要素をDOMで直接書き換えるのはNG
- 新しい値を使って再レンダリングされるのが正解
- stateが変更されたとき、propsが変更されたときに再レンダリングされる

### useStateの使い方
1.useStateによるstateの宣言
```
const [state, setState] = useState(initailize)
```
- state -> 現在の状態
- setState -> 更新関数
- initialize ->　初期値

2.stateの更新
```
setState(newState)
```

3.具体例
```
const [message, setMessage] = useState('test')
const [likes, setLikes] = useState(0)
const [isPublished, setIsPublished] = useState(false)
setIsPublished(true)
```
- useState(false)でisPublishedに初期値としてfalseが入る。
- 状態を更新する時はsetIsPublished(ture)でisPublishedにtrueを入れる

4.よく使うもの

```
import React, { useState } from "react";

const TextInput = () => {
    const [name, setName] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    return (
        <input
            onChange={(event) => handleName(event)}
            type={'text'}
            value={name}
        />
    );
};

export default TextInput;
```
## useEffect
- 副作用　＝　レンダリングによって引き起こされる処理
- 再レンダリングされるたびに呼び出したい処理を書く

- 実行回数を制限できる
- 第二引数はdeps(dependencies)と呼ばれて、副作用が引き起こされるかどうかの依存関係となる
```
//毎回実行される
useEffect(() => {
    console.log("Current count id ...", count)
})

//初回レンダリング後のみ実行される
useEffect(() => {
    console.log("Current count id ...", count)
}, [])

//triggerが変更されるたびに実行される
useEffect(() => {
    console.log("Current count id ...", count)
}, [trigger])

//trigger1かtrigger2が変更されるたびに実行される
useEffect(() => {
    console.log("Current count id ...", count)
}, [trigger1, trigger2])
```
