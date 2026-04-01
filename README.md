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

### 2.jQueryおよびライブラリの読み込み
以下のコードを<head></head>内に記述してください。
ただし行の順番は変えないでください。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kenfee-jp/scroll-zoom-in@v1.0.1/scroll-zoom-in.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kenfee-jp/scroll-zoom-in@v1.0.1/scroll-zoom-in.js"></script>
```

### 3.アニメーションをかけたい要素にクラス名を以下の通りに追加してください。
親要素のクラスに`scroll-zoom-in`,フェードインさせたい要素のクラスに`zoom-target`を追加。
大きさを調整したい場合は、`Class-1` `Class-2` `Class-3`のように追加クラスでCSSを調整できます。

```html
<div class="Class-1 Class-2 scroll-zoom-in">
    <img src="" class="Class-3 zoom-target">
</div>
```

```html
<div class="Class-1 Class-2 scroll-zoom-in">
    <button class="Class-3 zoom-target">
</div>
```
