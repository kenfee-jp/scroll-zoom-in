# スクロールズームアニメーションの実装について

スクロールに合わせて要素をふわっと拡大・表示させるアニメーションが実装できるライブラリです。
以下の動作要件に沿って実装してください。

## 実装手順

### 1. HTML5 宣言と Viewport 設定
ブラウザのレンダリングモードを標準モードにし、座標計算を正確に行うために必ず記述してください。
このコードを正しく動作させるためには、以下の設定が必須です。これらが欠けていると、要素の位置計算（`offset().top`）や画面の高さ取得が正常に行われず、スクロール前にアニメーションが開始されるなどの不具合が発生します。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

### 2.jQueryの読み込み
jQueryを読み込むコードを<head></head>内に記述してください。

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

### 3.
