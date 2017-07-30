# fast-grid

[![NPM version](http://img.shields.io/npm/v/fast-grid.svg?style=flat)](https://www.npmjs.org/package/fast-grid)

Sass grid system designed for speed.

## Install

Install sass in your preferred way, then install fast-grid:

```sh
npm install fast-grid --save-dev
```

## Get started

Import `fast-grid` in your sass/scss file, and make grid! 

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

## Examples

See grid in action by examples:

https://paulzi.github.io/fast-grid/

## Documentation

### Settings

`fast-grid` set the global variable `$grid`. It is sass map.

You can redefine this variable after import `fast-grid` for change global default settings.

```scss
@import "~fast-grid/fast-grid";

$grid: (
  // ... redefine ALL (!) properties here
);
```

If you want to change only some properties, use `map-merge`:

```scss
@import "~fast-grid/fast-grid";

$grid: map-merge($grid, (
  columns: 15  
));
```

Alternatively, you can specify another (including local) variable, and transfer it to mixins:

```scss
@import "~fast-grid/fast-grid";

.component {
  $component-grid: (
    columns: 15
  );
  
  &__item {
    @include grid-col(5 3, $component-grid);
  }
}
```

Global `$grid` is sass map, with properties:
 
#### `breakpoints` *(map) [(xs: 0px, sm: 768px, md: 992px, lg: 1200px, xl: 1600px)]*

List of breakpoints. The list should be sorted from a smaller to a larger value.

#### `columns` *(integer) [12]*

Number of columns

#### `gap` *(length|list|map) [15px]*

Length the of the half gap between the columns.

If `gap` is a list, it lists the values for the each breakpoints, sorted from a smaller to a larger.
A list can contain fewer breakpoints. You can also skip values by `null`:

```scss
@import "~fast-grid/fast-grid";

.component {
  $grid: (
    gap: 15px null 30px
  );
}
```

If `gap` is a map, it specifies the values for each specified breakpoint:

```scss
@import "~fast-grid/fast-grid";

.component {
  $grid: (
    gap: (
      xs: 15px,
      md: 30px
    )
  );
}
```

#### `container` *(length|list|map) [15px]*

Specifies padding for the `grid-container()`.

If `container` is a list, it lists the values for the each breakpoints, sorted from a smaller to a larger.
A list can contain fewer breakpoints. You can also skip values by `null`:

```scss
@import "~fast-grid/fast-grid";

.component {
  $grid: (
    container: 15px null 5%
  );
}
```

If `container` is a map, it specifies the values for each specified breakpoint:

```scss
@import "~fast-grid/fast-grid";

.component {
  $grid: (
    container: (
      xs: 15px,
      md: 5%
    )
  );
}
```

#### `box-sizing` *(string) ['border-box']*

If you do not specify globally `* { box-sizing: border-box }`, fill the global value of box-sizing in this property:

```scss
@import "~fast-grid/fast-grid";

$grid: map-merge($grid, (
  box-sizing: content-box
));
```

#### `mode` *(string) ['flex']*

Select `flex` or `float` mode for the grid.
`flex` is a more modern way, and provides more features, but not supported by older browsers.
`float` is supported by all browsers.

```scss
@import "~fast-grid/fast-grid";

$grid: map-merge($grid, (
  mode: float
));
```

### `grid-container([$from, $to, $settings])`

Apply container mixin. Container has a given padding, and in the specified breakpoints have a fixed width.

```scss
@import "~fast-grid/fast-grid";

.container {
  @include grid-container(sm, lg);
}
```

#### `$from` *(null|string|list) [null]*

Start breakpoint for fixed width.
If `$from` is list - it specifies the breakpoints for fixed width.
If `$from` is null - disable fixed width.

#### `$to` *(null|string) [null]*

The end breakpoint for fixed width.
If `$to` is null - use last breakpoint.

### `grid-row([$settings])`

Apply row of columns mixin. It enable row behavior and correct the margins of the edge columns.

```scss
@import "~fast-grid/fast-grid";

.row {
  @include grid-row();
}
```

### `grid-col($spans[, $settings])`

Apply column mixin. It enable column behavior.

```scss
@import "~fast-grid/fast-grid";

.row {
  @include grid-row();
}

.col {
  @include grid-col(12 6 4 3);
}
```

#### `$spans` *(list|map)*

If `$spans` is a list, it lists the values for the each breakpoints, sorted from a smaller to a larger.
A list can contain fewer breakpoints. You can also skip values by `null`:

```scss
.col {
  @include grid-col(12 null 4); // sm is null, lg equal md
}
```

If `$spans` is a map, it specifies the values for each specified breakpoint:

```scss
.col {
  @include grid-col((
    xs: 12,
    md: 4
  ));
}
```

Each span can be list `$x of $y`, where `$x` - is span, `$y` - is override number of columns:

```scss
.col {
  @include grid-col(12 6 null (1 of 5));
}

.col2 {
  @include grid-col((
    xs: 12,
    sm: 6,
    md 1 of 5
  ));
}
```

`$spans` can be ended by `of $y`, where `$y` - is override locally number of columns:

```scss
.col {
  @include grid-col(30 15 6 of 30);
}

.col2 {
  @include grid-col((xs: 30, sm: 15, md: 6) of 30);
}
```

### `grid-prop($prop, $spans[, $settings])`

Apply calculated span value (see [grid-col](#spans-listmap) `$spans` param) for `$prop`.

```scss
.col {
  @include grid-prop('margin-right', null 1);
}
```

### `grid-offset($spans[, $settings])`

Move column by the specified number of columns by `$spans` with content stream (see [grid-col](#spans-listmap) `$spans` param).

```scss
.col__right {
  @include grid-offset(null 2 of 5);
}
```

### `grid-move($spans[, $settings])`

Move column by the specified number of columns by `$spans` without changing content stream (see [grid-col](#spans-listmap) `$spans` param).

```scss
.col__left {
  @include grid-col(5 2 of 5);
  @include grid-move(null 3 of 5);
}

.col__right {
  @include grid-col(5 3 of 5);
  @include grid-move(null -2 of 5);
}
```

### `grid-width($breakpoint[, $settings])`

Return `min-width` of named breakpoint:

```scss
.visible-sm {
  display: none;

  @media (min-width: grid-width(sm)) {
    display: block;
  }
}
```

### `grid-breakpoint($breakpoint[, $settings]) {}`

Apply rules for named breakpoint:

```scss
.visible-sm {
  display: none;

  @include grid-breakpoint(sm) {
    display: block;
  }
}
```

## Browser support

In flex mode - [all browsers support flexible box layout](http://caniuse.com/#feat=flexbox):

In float mode - all alive browsers. 