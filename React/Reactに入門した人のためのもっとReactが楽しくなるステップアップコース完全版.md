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

##　ページ遷移

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

