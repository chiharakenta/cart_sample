# Node + Expressで作られたシンプルなECサイト

<img src="https://github.com/gs-create/cart_sample/blob/master/public/images/products_top.png">
<img src="https://github.com/gs-create/cart_sample/blob/master/public/images/products_show.png">
<img src="https://github.com/gs-create/cart_sample/blob/master/public/images/cart_top.png">


## 開発環境

- NodeJS
- ExpressJS
- Sequelize
- MySQL

## 機能 🚀

- 商品のCRUD機能（管理画面）
- ショッピングカートに商品を追加
- カートから商品を購入処理
- 商品の在庫管理

## セットアップ 🛠

1. クローン

```
git clone https://github.com/gs-create/cart_sample.git
```

2. dependenciesの解決

```
npm install
```

3. DB作成

各自の環境に合わせる

```
npx sequelize-cli db:create
```

4. マイグレーション

```
npx sequelize-cli db:migrate
```

5. シード

```
npx sequelize-cli db:seed:all
```

6. 起動

```
npm start
```

[http://localhost:8080/](http://localhost:8080/)にアクセス
