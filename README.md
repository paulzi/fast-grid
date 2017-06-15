# fast-grid
Sass grid system

Note: pre-release version, developing in progress.

## Install
```sh
npm install fast-grid --save
```

## Usage

Import `fast-grid` in your sass/scss file, and make grid!

Warning: in current version of **fast-grid** support only global `box-sizing: border-box` 

```html
<div class="cols">
    <div class="cols__item">1</div>
    <div class="cols__item">2</div>
    <div class="cols__item">3</div>
    <div class="cols__item">4</div>
    <div class="cols__item">5</div>
</div>
```

```scss
@import "~fast-grid/fast-grid";

* {
  box-sizing: border-box;
}

.cols {
  @include grid-row();

  &__item {
    @include grid-col(12 null 6 4 (1 of 5));
  }
}
```