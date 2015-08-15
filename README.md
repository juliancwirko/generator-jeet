# generator-jeet

[Yeoman](http://yeoman.io) generator for [Jeet Grid System](http://jeet.gs/).

##### Blazing fast Stylus version with Autoprefixer and Rupture :) .. Scss version only on Libsass (for now) ..

## Yo Jeet!
* Stylus version with Autoprefixer and Rupture
* Sass or Stylus compiling
* Publishing to dist directory
* Server with LiveReload (127.0.0.1:9000)
* Bower install
* JSHint

## Getting Started

```
$ npm install -g yo
```

To install generator-jeet from npm, run:

```
$ npm install -g generator-jeet
```

Finally, initiate the generator:

```
$ yo jeet
```

### Usage

After instalation just run ````grunt```` (in project folder) for watching your project. It will be LiveReload enabled and you will see live changes.

Then you can use bower to add more libraries with for example ````bower install magnific-popup --save```` it will be added to bower.json file. Then you can simply inject paths into html files. Run ````grunt bower-install````.

You can publish you project (into dist folder) by ````grunt publish```` all css and js files will be minified and concatenated.

Read more about [Grunt Wiredep](https://github.com/stephenplusplus/grunt-wiredep) and [Grunt Usemin](https://github.com/yeoman/grunt-usemin)

#### Main Grunt Tasks:

..for watching (Sass/Stylus, Server on 127.0.0.1:9000 with LiveReload)
```
$ grunt
```
..for publishing project (dist directory)
```
$ grunt publish
```
..for dist directory preview (server on 127.0.0.1:9001)
```
$ grunt server-dist
```

#### Other Grunt Tasks

..for validating javascript
```
$ grunt validate-js
```
..for injecting bower libraries (also in default grunt task)
```
$ grunt bower-install
```
..for compiling Sass or Stylus files
```
$ grunt compile-sass /or/ $ grunt compile-stylus
```

#### LiveReload

For LiveReload call 'grunt' (watching) command and go to http://127.0.0.1:9000

#### Usemin

Read more about [grunt-usemin](https://github.com/yeoman/grunt-usemin)

#### Bower-install

Now you can install your libraries much faster. Example:
```
bower search magnific-popup
...
bower install magnific-popup --save
...
grunt bower-install
```
This should inject the proper js and css paths into your html files. But you should be careful and check what was injected.
'grunt publish' will then minify and concatenate them into a clean (styles.min.css and scripts.min.js) files.
Instead of a 'bower install' with '--save' you can manualy edit the bower.json file and then run a 'grunt bower-install'. It is also included in the default task - 'grunt'.

#### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

#### License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

#### Contact

[@juliancwirko](https://twitter.com/JulianCwirko) | [julian.cwirko@gmail.com](mailto:julian.cwirko@gmail.com)

#### Try Jeet for Meteor

[s-jeet Meteor package](https://atmospherejs.com/juliancwirko/s-jeet)

#### Changelog

##### 0.1.3 (15.08.2015)

- updates

##### 0.1.2 (28.02.2015)

- versions bump

##### 0.1.1 (06.01.2015)

- versions bump

##### 0.1.0 (18.09.2014)

- cleaning
- Autoprefixer + Rupture for Stylus version
- deps versions bump

##### 0.0.2 (04.05.2014)

- jeet scss from bower_components

##### 0.0.1 (27.04.2014)

- init
