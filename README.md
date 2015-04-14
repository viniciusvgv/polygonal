# polygonal

NodeJs module for getting polygonal numbers


### The Polygonal Numbers
Polygonal numbers are numbers that can be arranged in a regular polygon if they're represented as dots.

***eg.:***

![triangular numbers](http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polygonal_Number_3.gif/500px-Polygonal_Number_3.gif)

>Triangular numbers


#### Formula
The formula to get the n*th* polygonal number of a s-sided polygon is:

![polygonal formula](http://upload.wikimedia.org/math/1/6/5/165a6f556c360f45d08ed3cfb622ec21.png)


### Installation
This module is on the npm repository, to intall it run the following command
```sh
$ npm install polygonal
```


### Usage
```
var polygonal = require('polygonal');

// get the second pentagonal
var x = polygonal.getSGonal(5, 2);
var y = polygonal.getPentagonal(2);

// x is equal to y!!
```


###References
[Wikipedia](http://en.wikipedia.org/wiki/Polygonal_number) Polygonal Number
