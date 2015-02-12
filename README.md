# sass-test
A repository for my study of SASS


### Syntax

Variables in Sass are scoped using the $ symbol.

```
$primaryColor: #eeffcc;
```

Scope and !global

```
$primaryColor: #eeccff;

body {
  $primaryColor: #ccc !global;
  background: $primaryColor;
}

p {
  color: $primaryColor;
}

// When compiled, our paragraph selector's color is #ccc
```

A helpful flag, particularly when writing mixins, is the `!default`

```
$firstValue: 62.5%;

$firstValue: 24px !default;

body {
    font-size: $firstValue;
}

// body font size = 62.5%
```

#### Math

Supported operators include:

+    Addition
–    Subtraction
/    Division
*    Multiplication
%    Modulo
==   Equality
!=   Inequality

```
$container-width: 100%;

.container {
  width: $container-width;
}

.col-4 {
  width: $container-width / 4;
}
```

#### Functions

```
$buttonColor: #2ecc71;
$buttonDark: darken($buttonColor, 10%);
$buttonDarker: darken($buttonDark, 10%);

button {
    background: $buttonColor;
    border-radius: 3px;
    box-shadow: 0 5px 0 $buttonDark;
    border: 0;
    color: white;
    font-size: 17px;
    padding: 10px 30px;
    margin: 0 10px;
    display: inline-block;
    outline: 0;
    &:hover {
        background: $buttonDark;
        box-shadow: 0px 5px 0px $buttonDarker;
    }
    &:active {
        box-shadow: none;
        margin-top: 5px;
    }
}
```

#### Nesting and parent reference

Using the `&amp;` symbol.

```
a.myAnchor {
    color: blue;
    &:hover {
        text-decoration: underline;
    }
    &:visited {
        color: purple;
    }
}
```

de-nest, with the `@at-root` directive.

```
.first-component {
    .text { font-size: 1.4rem; }
    .button { font-size: 1.7rem; }
    @at-root .second-component {
        .text { font-size: 1.2rem; }
        .button { font-size: 1.4rem; }
    }
}
```

#### Imports and partials

We can import a .scss file using the @import directive:

```
@import "_colors";
```

The directive does not need the extension, also if the SCSS file to be imported is not to be compiled the name can b prefixed with an underscore.

#### Extends & Placeholders

```
.input {
    border-radius: 3px;
    border: 4px solid #ddd;
    color: #555;
    font-size: 17px;
    padding: 10px 20px;
    display: inline-block;
    min-width: 275px;
    outline: 0;
}

.error-input {
    @extend .input;
    border:4px solid $warning;
}
```

### Mixin

```
@mixin media($queryString){
    @media #{$queryString} {
      @content;
    }
}

.container {
    width: 900px;
    @include media("(max-width: 767px)"){
        width: 100%;
    }
}
```

The `@media` mod is exactly what I'm looking for the mobile responsiveness for the Magic Squares Mobile project.

See:
* [GETTING STARTED WITH SASS AND BREAKPOINT MIXIN](http://responsivedesign.is/develop/getting-started-with-sass)
* [sass-mq](https://github.com/sass-mq/sass-mq)


### Links

* This is the tutorial I`m following:
[Getting Started with SASS](https://scotch.io/tutorials/getting-started-with-sass)
* Mike Streety Github - [gulpfile](https://gist.github.com/mikestreety/9525414)
* [Introduction to Gulp.js 1: Intro and Setup](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)
* [gulp-tutorial-4-css-generation-sass](http://stefanimhoff.de/2014/gulp-tutorial-4-css-generation-sass/)
