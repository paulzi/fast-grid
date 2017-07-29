# fast-grid demo
<style>
@import url("app.css");
</style>

## Basic (list) usage

<div class="spl-content">
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
@import "~fast-grid/fast-grid";

* {
  box-sizing: border-box; // recommend
}

.cols {
  @include grid-row();

  &__item {
    @include grid-col(12 6 4 (1 of 5));
    
    @include grid-breakpoint(md) {
      letter-spacing: 0.5em;
    }
  }
}
```

Note: `12 6 4 (1 of 5)` - list of span columns for [default breakpoints](#settings)

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
        width: 33.3333333333%;
        letter-spacing: 0.5em; } }
    @media (min-width: 1200px) {
      .cols__item {
        width: 20%; } }
```

## Using map

This example equivalent previous:

```scss
&__item {
  @include grid-col((
    xs: 12,
    sm: 6,
    md: 4,
    lg: 1 of 5
  ));
}
```

## Change local settings (breakpoints, gap, ...) with set float mode

<div class="spl-content">
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
      columns: 15,
      gap: 25px,
      mode: float
  );
  @include grid-row($grid);

  &__item {
    @include grid-col(15 5 3, $grid);
  }
}
```

## Fast change column count

<div class="spl-content">
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
    @include grid-col((xs: 3, md: 1) of 3);
  }
}
```

## Fraction variant

<div class="spl-content">
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
    @include grid-col(12/12 6/12 4/12 3/12 of 1, (gap: 5px));
  }
}
```

## Different gap

Makes gap different depending on breakpoint.

<div class="spl-content">
    <div class="cols5">
        <div class="cols5__item"><div class="spl-column">1</div></div>
        <div class="cols5__item"><div class="spl-column">2</div></div>
        <div class="cols5__item"><div class="spl-column">3</div></div>
        <div class="cols5__item"><div class="spl-column">4</div></div>
        <div class="cols5__item"><div class="spl-column">5</div></div>
        <div class="cols5__item"><div class="spl-column">6</div></div>
    </div>
</div>

```html
<div class="cols5">
    <div class="cols5__item"><div class="spl-column">1</div></div>
    <div class="cols5__item"><div class="spl-column">2</div></div>
    <div class="cols5__item"><div class="spl-column">3</div></div>
    <div class="cols5__item"><div class="spl-column">4</div></div>
    <div class="cols5__item"><div class="spl-column">5</div></div>
    <div class="cols5__item"><div class="spl-column">6</div></div>
</div>
```

```scss
@import "~fast-grid/fast-grid";

$grid: map-merge($grid, (
  gap: 15px null 30px
));

* {
  box-sizing: border-box; // recommend
}

.cols5 {
  @include grid-row();

  &__item {
    @include grid-col(12 6 4 3);
  }
}
```

## Offset columns

<div class="spl-content">
    <div class="cols6">
        <div class="cols6__l"><div class="spl-column">1</div></div>
        <div class="cols6__c"><div class="spl-column">2</div></div>
        <div class="cols6__r"><div class="spl-column">3</div></div>
    </div>
</div>

```html
<div class="cols6">
    <div class="cols6__l"><div class="spl-column">1</div></div>
    <div class="cols6__c"><div class="spl-column">2</div></div>
    <div class="cols6__r"><div class="spl-column">3</div></div>
</div>
```

```scss
.cols6 {
  @include grid-row();

  &__l, &__r {
    @include grid-col(4 3);
  }
  
  &__c {
    @include grid-col(4 3);
    @include grid-offset(null 3);
  }
}
```

## Move columns

<div class="spl-content">
    <div class="cols7">
        <div class="cols7__l"><div class="spl-column">1</div></div>
        <div class="cols7__r"><div class="spl-column">2</div></div>
    </div>
</div>

```html
<div class="cols7">
    <div class="cols7__l"><div class="spl-column">1</div></div>
    <div class="cols7__r"><div class="spl-column">2</div></div>
</div>
```

```scss
.cols7 {
  @include grid-row();

  &__l {
    @include grid-col(5 4 of 5);
    @include grid-move(null 1 of 5);
  }
  
  &__r {
    @include grid-col(5 1 of 5);
    @include grid-move(null -4 of 5);
  }
}
```

## Container fixed width from breakpoint

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
  @include grid-container(sm);
}
```

## Container fixed width from - to breakpoint

<div class="spl-container2">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>

```html
<div class="spl-container2">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>
```

```scss
.spl-container2 {
  @include grid-container(sm, lg);
}
```

## Container fixed width for list breakpoint

<div class="spl-container3">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>

```html
<div class="spl-container3">
    <div class="spl-column">.spl-column in .spl-container</div>
</div>
```

```scss
.spl-container3 {
  @include grid-container(sm xl);
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