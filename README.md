## grunticon-brunch

Adds Grunticon support to [brunch](http://brunch.io).

## Usage

Install the plugin via npm with `npm install --save grunticon-brunch`.

Or, do manual install:

* Add `"grunticon-brunch": "x.y.z"` to `package.json` of your brunch app.
* If you want to use git version of plugin, add
`"grunticon-brunch": "git+ssh://git@github.com:roperzh/grunticon-brunch.git"`.

That's it! no further configuration is needed, but if the default config does
not suit your needs, please check the [configuration](#configuration) section.

## Configuration

The plugin can be configured by adding a `grunticonBrunch` object to your
[plugins configuration](http://brunch.io/docs/config.html#-plugins-).

```javascript
/*
  See http://brunch.io/docs/config.html#-plugins-
  for documentation
*/
exports.config = {
  // ...
  plugins: {
    grunticonBrunch: {
      source: "/some/source",
      destination: "/some/destination",
      grunticonOptions: {}
    }
  }
};
```

### Avaliable options

#### source
Type: `String`

Valid glob pattern to search for files, default is `'app/assets/**/*.svg'`.

#### destination
Type: `String`

Directory you'd like to output the CSS files, the PNG folder,
and the preview HTML, default is `'/public'`.

### grunticonOptions
Type: `Object`

This object will be directly passed to the `grunticon-lib` constructor, please
refer to the official [docs](https://github.com/filamentgroup/grunticon-lib#options)
to see all available options.

## License

The MIT License (MIT)

Copyright (c) 2016 Roberto Dip (http://roperzh.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
