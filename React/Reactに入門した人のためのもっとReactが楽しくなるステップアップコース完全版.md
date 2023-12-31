## レンダリングの最適化
### memo化
```
import { memo } from "react"

const ChildAea = memo((props) => {
//memoで囲われた部分はpropsが変更されない限り再レンダリングされない
});

```
### useCallback
```
//毎回新しい関数を生成しているという判断になる。
const onClickClose = () => setOpen(false);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br/>
      <br/>
      <button onClick={onClickOpen}>表示</button>
      //子コンポーネントに関数を渡している。再レンダリングが毎回起きるようになる。
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
```
```
 //useCallbackで囲う。第二引数はuseEffectと同じ
 const onClickClose = useCallback(() => setOpen(false), [setOpen]);
```

### useMemo
- 変数のmemo化で使用する
```
// useMemoで囲う。第二引数はuseEffectと同じ。使う頻度としては高くない
const temp = useMemo(() => 1 + 3 , [])
```

## CSSの当て方
- 備え付けのCSSの当て方
- inline style
```
    const containerStyle = {
        border: "solid 2px #392eff",
        borderRadius: "20px",
        padding: "8px",
        margin: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    };

    return (
        <div style={containerStyle}>
```
- css module
- 別にcssやscssを作り、cssの記法で書く
```
//読み込んで使う
import classes from './CssModules.module.scss';

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  )
}

export default CssModules;
```

- css in jsx
```
const StyledJsx = () => {
    return (
        <>
            <div className="container">
                <p className="title">- Styled JSX -</p>
                <button className="button">FIGHT!!</button>
            </div>
            <style jsx="true">{`
            .container {
                border: solid 2px #392eff;
                border-radius: 20px;
                padding: 8px;
                margin: 8px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .title{
                margin: 0;
                color: #3d84a8;
            }
            
            .button{
                background-color: #abedd8;
                border: none;
                padding: 8px;
                border-radius: 8px;
            }
            
            `}</style>
        </>
    );
};
```

- styled components　
sassの記法のままで扱えるのが利点
```
const SButton = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #46cdcf;
        color: #fff;
        cursor: pointer;
    }
`
```
- Emotion
```
const Emotion = () => {
    const containerStyle = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `
    const titleStyle = css({
        margin: 0,
        color: "#3d84a8",
    });

    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
```
他にはstyled componentsと同じ書き方が使える　

## ページ遷移　

- <BrowserRouter>で囲われた部分でルーティングの機能が使えるようになる
- exactは完全一致
- Linkはaタグと一緒
- switchの中にマッチしたコンポーネントを表示するか書く
```
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
```

- ネストされたページ遷移
```
  <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1" render={({ match: { url }}) => (
          <Switch>
            {console.log(url)}
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
```
- ルーティングが多いとき分割した方が見やすくなる。  
分け方としては下記のよう
```
//Page1Routes.jsx　ルートを配列にしておく(ネストが深い部分)
const Page1Routes = [
    {
        path: "/",
        exact: true,
        children: <Page1 />
    },
    {
        path: "/detailA",
        exact: false,
        children: <Page1DetailA />
    },
    {
        path: "/detailB",
        exact: false,
        children: <Page1DetailB />
    },
]
```
```
//Router.jsx　ネストが浅いところ　（ルートの配列を呼び出す）
       <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/page1" render={({ match: { url }}) => (
        <Switch>
           {Page1Routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
            </Route>
           ))}
        </Switch>
        )}
        />
        <Route path="/page2">
            <Page2 />
        </Route>
    </Switch>

```
その後、親コンポーネントで呼び出す。<Router />

## URLパラメータ

- パスは”/:id”と書く
```
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const UrlParameter = () => {
    const { id } = useParams();
    return (
      <div>
        <h1>UrlParameterページです</h1>
        <p>パラメータは{id}です</p>
      </div>
    )
  }
  
  export default UrlParameter;
  
```

## クエリパラメータ  
useLocationをインポートする
```
import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom.min";
```
クエリパラメータを取得して変数に入れる
```
const { search } = useLocation();
```
クエリパラメータを扱えるメソッドを設定するためにインスタンス変数を用意
```
const query = new URLSearchParams(search);
```
```
//クエリパラメータを表示している
const query = new URLSearchParams(search);
```

## stateを受け渡すページ遷移
- 受け渡し側に state: arr　を書く

```
    const arr = [...Array(100).keys()];
    console.log(arr)
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
```
- 受け取り側はuseLocationを使って受け取る

```
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Page1DetailA = () => {
    const { state } = useLocation();
    console.log(state)
```

## Linkを使わないページ遷移
- useHistoryをインポートする
- 変数ににuseHistoryを入れる。
- history.push(パス)でパスで指定した先に遷移する
- 戻る場合はhistory.goBack（）で戻る
```
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Page1 = () => {
    const history = useHistory();

    const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
```

## ４０４ページを用意
- ページがないURLにアクセスすると白紙のページが表示されてしまう
- ４０４のJSXを作る
```
//下記を追加
        <Route path="*">
            <Page404 />
        </Route>
```
