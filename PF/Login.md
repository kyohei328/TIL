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

docker rails db:migrate
https://qiita.com/tanitaku512/items/7976dc64446b86cb63d9

## 10/31
IDtokenの検証がうまくいかない理由
- ヘッダーの設定ミス。下記のようにする
```
const config =  { 'Authorization': `Bearer ${token}` };

axios.post("http://localhost:3000/api/v1/users", formData, { headers: config })
```
https://qiita.com/k-yasuhiro/items/95a60618d9743e3749a2

## 11/1
- プライバシーポリシーページの作成
- tsxにベタ打ちにしているが、本リリースまでにはcssからインポートして表示できるようにしたい

## 11/2
- 利用規約ページを途中まで作成
- AWS S３、ECR、ACM、Route５３の設定

## 11/5
- 画像アップロード用のAWS S3の設定
- サインアップ機能ができなくなっていたので、修正。includeのパス間違い
- 画像アップロードページのユーザーのIDトークンの取得を追加。Hookshは関数コンポーネントのトップレベルで書くことに注意
