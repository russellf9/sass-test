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




### Links

* This is the tutorial I`m following:
[Getting Started with SASS](https://scotch.io/tutorials/getting-started-with-sass)
* Mike Streety Github - [gulpfile](https://gist.github.com/mikestreety/9525414)
* [Introduction to Gulp.js 1: Intro and Setup](http://stefanimhoff.de/2014/gulp-tutorial-1-intro-setup/)
* [gulp-tutorial-4-css-generation-sass](http://stefanimhoff.de/2014/gulp-tutorial-4-css-generation-sass/)
