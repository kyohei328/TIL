### ログイン機能

## 10/27
- AWS cogunitoのHosted UI　を表示可能とした
https://zenn.dev/fugithora812/articles/6dc080b48dc149
- ログインフォームのボタンの色が透明になっていたので、下記サイトを参考に色を変更することにした
https://ui.docs.amplify.aws/react/connected-components/authenticator/customization

## 10/29
- ログインフォームのボタン色が変更されないため、CSSにてオーバーライドした
```
.amplify-button[data-variation='primary'] {
  background-color: chocolate;
}
```
- サインアップとサインインが機能するか確認を行った。

## 10/30
- firebase Authentication の環境設定がReactとViteを使った場合で差異がある
```
------React--------------
REACT_APP_API_KEY="my-api-key"
REACT_APP_AUTH_DOMAIN="example.com"
REACT_APP_DB_URL="https://example.com"
REACT_APP_SECRET_KEY="my-secret-key"

------Vite--------------
VITE_API_KEY="my-api-key"

```
```
## firebase.ts　読み込み部分のViteの場合
apiKey: import.meta.env.VITE_FIREBASE_API_KEY
```
