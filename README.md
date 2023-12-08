# プロジェクト名：CharityChain

## 概要

ブロックチェーンの技術を使い、募金ができるサービス

## ルーティング(FE)

アプリケーションには以下の主要なルートが含まれています：

1. **`/products` - 商品ページ**

   このルートは商品ページにつながり、ユーザーが購入可能な商品を閲覧できます。

2. **`/login` - ログインページ**

   このルートを通じてログインページにアクセスします。既存のユーザーがアカウントにログインするためのページです。ユーザーが認証情報（ユーザー名とパスワードなど）を入力するフォームが含まれています。

3. **`/signup` - 新規登録ページ**

   新規ユーザーはこのルートをナビゲートしてアカウントを作成できます。新規登録ページには、ユーザーがユーザー名、メールアドレス、ブロックチェーンのウォレットアドレス、パスワードを入力して新しいアカウントを作成するためのフォームが含まれています。

4. **`/purchase/[id]` - 募金ページ**
   `/products`の商品を選択すると商品が購入され、募金のレコメンドページが表示される。

## セットアップとインストール

（ここに、ローカルでプロジェクトをセットアップして実行するための指示を追加します。リポジトリのクローン、依存関係のインストール、サーバーの実行などのステップを含めてください。）

## 技術スタック

- React（CRA）
- FastAPI
- MySQL
  
## 追加情報

（プロジェクトに関連する追加情報や指示があれば、ここに含めてください。）

## 連絡先

（貢献者の GitHub プロフィールや専門的な連絡先情報へのリンクなど、連絡先情報を提供してください。）
