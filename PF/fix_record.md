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

## 11/6
- AWS s3にアップロードできるようにバックエンドを改修
- https://qiita.com/kawa3401/items/c982ccebacf2faeae48d
- https://tech.omablo.com/archives/861
- https://zenn.dev/redheadchloe/articles/e924ab767b40d5

## 11/7
- 写真追加登録機能を実装

## 11/8
- コンテスト作成機能を実装

## 11/9 
- トップページに画像のカルーセルを追加
- 日毎に画像を変えるロジックを追加

# 11/10.11
- TOPページの日によって写真をランダムに取得するロジックを検討

# 11/12
- wheneverで毎日０時にテーブルの情報を入れけるロジック組んだが、うまく行かない
  rbenvを初期化しないとタスクが実行されない
https://teratail.com/questions/248501

## 11/13
- 写真一覧ページ作成
- 一覧ページはページの最下部までスクロールした際に次の写真を読み込むようにした
- コンテストのトップページ作成
- ヘッダーを表示しているページによって文字のスタイル変更をして、どのページいるか分かりやすいように

## 11/14,15
- フロントエンドをコンパルを実施。エラー解決に時間がかかった
```
Could not resolve "./core/styles-api/use-styles/get-class-name/get-window-class-names/get-window-class-names.mjs" from "node_modules/@mantine/core/esm/index.mjs"
file: /Users/kyohei/workspace/pf/PhotoSpace/frontend/node_modules/@mantine/core/esm/index.mjs
error during build:
RollupError: Could not resolve "./core/styles-api/use-styles/get-class-name/get-window-class-names/get-window-class-names.mjs" from "node_modules/@mantine/core/esm/index.mjs"
    at error (file:///Users/kyohei/workspace/pf/PhotoSpace/frontend/node_modules/rollup/dist/es/shared/node-entry.js:2287:30)
    at ModuleLoader.handleInvalidResolvedId (file:///Users/kyohei/workspace/pf/PhotoSpace/frontend/node_modules/rollup/dist/es/shared/node-entry.js:24860:24)
    at file:///Users/kyohei/workspace/pf/PhotoSpace/frontend/node_modules/rollup/dist/es/shared/node-entry.js:24822:26
error Command failed with exit code 1.
```

## 11/16,17
- コンテスト応募機能を実装

## 11/20,21
- ECSにデプロイを実施中。 railsがデプロイ時にエラー発生して苦戦している。
- Nginxについてはデプロイ可能

## 11/23
- 写真詳細ページ追加

## 11/24
- 写真詳細ページの撮影地にMAPを表示
- MAPにマーカーと住所を表示するようにした

## 11/25
- コンテスト投票機能を実装

# 11/26
- 写真のお気に入り機能を実装

## 11/27,28
- ユーザーページの実装


## 11/29
- コンテストの削除機能実装
- 写真の削除機能を実装 

## 11/30,12/1,12/2,12/3
-　コンテストの結果ページ作成
- コンテストの検索機能実装

## 12/4
- 写真のフリーワード検索機能を追加

## 12/5,12/6,12/7
- ユーザーのパスワード変更機能追加
- ユーザーのメールアドレス変更機能を追加

## 12/8
- OGPの作成

## 12/9,12/10
- AWSへのデプロイに挑戦
  Reactのデプロイは完了したが、ECSのデプロイができず苦戦
- MVPのリリース日を考慮して、herokuへのデプロイに変更

## 12/11
-  HerokuへRailsをデプロイ
-  本番環境で必要なツールをHerokuへ（Exiftoolなど）
https://exiftool.org/forum/index.php?topic=13328.0
-  SQLをMySQL→PostgreSQLへ変更（herokuの支払い登録の認証が降りないため）
https://qiita.com/vinaka/items/fbdb17bebe75d40de995

## 12/12
- 本番環境デプロイ後の動作不良の調整のため、調整項目の抜き出し
  https://zenn.dev/redgosho/articles/13b93d2a8eac0f
- cloudfrontの設定（リリース前の修正）
  https://qiita.com/koharu_s/items/9361da2ae59929a4a804

##12/13
- herokuにスケジューラーを追加（Railsで写真をランダムで取得する用）
  https://qiita.com/sharesence/items/74a85a08add91a0fd8d8
- TopPageの新着コンテストの部門をクリックしたとき、コンテストがないと画面が表示されなくなる不具合を修正
- Railsのtaskで実行するSQLをPostgreSQL用へ変更
- mypageのprofile変更で空白のまま更新すると空白が適用されてしまうのを修正
- コンテストの画像が表示されないエラーを修正
- ログインページとユーザー登録ページを日本語化
- 自身が投稿した写真もお気に入りが出来てしまうエラーを修正
- 

## 12/18,19,20
- geIdtokenエラーの修正

## 12/30,31,1/1
- 写真一覧表示にアニメーションを追加
- 写真をホバーした時のアニメーションを追加

## 1/2
- 写真一覧ページのソートボタンのデザイン変更とアニメーション追加
- 写真検索のボタンのデザイン変更

## 　1/3
- 検索ボタンにアニメーション追加
- 詳細検索の表示の仕方にアニメーション追加

## 1/4.5
- トップページのデザインとアニメーションを変更

## 1/6
- コンテストTOPページのセクションのスタイル変更

## 1/13
- MVPレビューの結果から修正項目の選定
- 本リリースまでのスケジュール決定

## 1/22
- Twitterにシェアする際、他者が投稿した写真に対しても「写真を投稿しました」となっていた部分を修正
- 写真を投稿した際、投稿完了メッセージを表示するように修正

## 1/24
- 写真一覧ページの写真表示をグリットからカルーセルに変更

## 1/25
- 写真一覧を分割して読み込むこむ仕組みをページスクロールから、カルーセルの現在の写真を読み取って追加読み込むするように変更

## 1/27, 1/28
- コンテストを表示しているカードのデザインを変更
- コンテストのカードをスワイプで切り替えられるように変更
  
## 1/29, 30
- コンテストTOPページのSwiperのネストを作成中

## 2/3, 2/4
- TOPページのデザイン変更（今日の写真と新着コンテストを横並びに変更）

## 2/5
- カテゴリーのデータベースを追加
- カテゴリーのリレーションの設定

## 2/6 
- 写真アップロードにカテゴリーを追加

## 2/10,11,12
- TOPページのPC用レスポンシブの設定

## 2/14
- TOPページのモバイル用レスポンシブの設定

## 2/16, 2/17
- 写真検索ページのモバイル用レスポンシブ設定

## 2/18
- 写真詳細ページのモバイル用レスポンシブ設定

## 2/19
-　コンテストTOPページのモバイル用レスポンシブ設定

## 2/21
- コンテスト開催ページのモバイル用レスポンシブ設定
- コンテスト詳細ページのモバイル用レスポンシブ設定

  
