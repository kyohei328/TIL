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
