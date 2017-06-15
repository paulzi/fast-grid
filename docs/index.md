# fast-grid demo
<style>
@import url("app.css");
</style>

## Basic (list) usage

<div class="content">
    <div class="cols">
        <div class="cols__item"><div class="spl-column">1</div></div>
        <div class="cols__item"><div class="spl-column">2</div></div>
        <div class="cols__item"><div class="spl-column">3</div></div>
        <div class="cols__item"><div class="spl-column">4</div></div>
        <div class="cols__item"><div class="spl-column">5</div></div>
    </div>
</div>

```html
<div class="cols">
    <div class="cols__item"><div class="spl-column">1</div></div>
    <div class="cols__item"><div class="spl-column">2</div></div>
    <div class="cols__item"><div class="spl-column">3</div></div>
    <div class="cols__item"><div class="spl-column">4</div></div>
    <div class="cols__item"><div class="spl-column">5</div></div>
</div>
```

```scss
.cols {
  @include grid-row();

  &__item {
    @include grid-col(12 null 6 4 (1 of 5));
  }
}
```

Note: `12 null 6 4 (1 of 5)` - list of span spl-columns for default breakpoints
```
(
 xxs: 0px,
 xs: 360px,
 sm: 768px,
 md: 992px,
 lg: 1200px,
 xl: 1600px
)
```

Compiled to:

```css
.cols {
  display: flex;
  flex-flow: row wrap;
  margin-left: -15px;
  margin-right: -15px; }
  .cols__item {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%; }
    @media (min-width: 768px) {
      .cols__item {
        width: 50%; } }
    @media (min-width: 992px) {
      .cols__item {
        width: 33.3333333333%; } }
    @media (min-width: 1200px) {
      .cols__item {
        width: 20%; } }
```

## Using map

This example equivalent previous:

```scss
&__item {
  @include grid-col((
    xxs: 12,
    sm: 6,
    md: 4,
    lg: 1 of 5
  ));
}
```

## Change global and local settings (breakpoints, gap, ...)

<div class="content">
    <div class="cols2">
        <div class="cols2__item"><div class="spl-column">1</div></div>
        <div class="cols2__item"><div class="spl-column">2</div></div>
        <div class="cols2__item"><div class="spl-column">3</div></div>
        <div class="cols2__item"><div class="spl-column">4</div></div>
        <div class="cols2__item"><div class="spl-column">5</div></div>
    </div>
</div>

```html
<div class="cols2">
    <div class="cols2__item"><div class="spl-column">1</div></div>
    <div class="cols2__item"><div class="spl-column">2</div></div>
    <div class="cols2__item"><div class="spl-column">3</div></div>
    <div class="cols2__item"><div class="spl-column">4</div></div>
    <div class="cols2__item"><div class="spl-column">5</div></div>
</div>
```

```scss
.cols2 {
  $grid: (
    breakpoints: (
        xs: 0px,
        sm: 640px,
        lg: 1100px
      ),
      spl-columns: 15,
      gap: 25px
  );
  @include grid-row($grid);

  &__item {
    @include grid-col(15 5 3, $grid);
  }
}
```

## Fast change spl-column count

<div class="content">
    <div class="cols3">
        <div class="cols3__item"><div class="spl-column">1</div></div>
        <div class="cols3__item"><div class="spl-column">2</div></div>
        <div class="cols3__item"><div class="spl-column">3</div></div>
    </div>
</div>

```html
<div class="cols3">
    <div class="cols3__item"><div class="spl-column">1</div></div>
    <div class="cols3__item"><div class="spl-column">2</div></div>
    <div class="cols3__item"><div class="spl-column">3</div></div>
</div>
```

```scss
.cols3 {
  @include grid-row();

  &__item {
    @include grid-col((xxs: 3, md: 1) of 3);
  }
}
```

## Fraction variant

<div class="content">
    <div class="cols4">
        <div class="cols4__item"><div class="spl-column">1</div></div>
        <div class="cols4__item"><div class="spl-column">2</div></div>
        <div class="cols4__item"><div class="spl-column">3</div></div>
        <div class="cols4__item"><div class="spl-column">4</div></div>
        <div class="cols4__item"><div class="spl-column">5</div></div>
        <div class="cols4__item"><div class="spl-column">6</div></div>
    </div>
</div>

```html
<div class="cols4">
    <div class="cols4__item"><div class="spl-column">1</div></div>
    <div class="cols4__item"><div class="spl-column">2</div></div>
    <div class="cols4__item"><div class="spl-column">3</div></div>
    <div class="cols4__item"><div class="spl-column">4</div></div>
    <div class="cols4__item"><div class="spl-column">5</div></div>
    <div class="cols4__item"><div class="spl-column">6</div></div>
</div>
```

```scss
.cols4 {
  @include grid-row((gap: 5px));

  &__item {
    @include grid-col(12/12 null 6/12 4/12 3/12 of 1, (gap: 5px));
  }
}
```

## Container

Make fixed width container from breakpoint and add padding

<div class="spl-container">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>

```html
<div class="spl-container">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>
```

```scss
.spl-container {
  @include grid-spl-container(sm);
}
```

## Get breakpoint width

<div class="spl-column spl-visible-sm">.spl-visible-sm</div>

```html
<div class="spl-column spl-visible-sm">.spl-visible-sm</div>
```

```scss
.spl-visible-sm {
  display: none;

  @media (min-width: grid-width(sm)) {
    display: block;
  }
}
```

## Breakpoint content

<div class="spl-column spl-visible-md">.spl-visible-md</div>

```html
<div class="spl-column spl-visible-md">.spl-visible-md</div>
```

```scss
.spl-visible-md {
  display: none;

  @include grid-breakpoint(md) {
    display: block;
  }
}
```