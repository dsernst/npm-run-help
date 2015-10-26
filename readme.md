# npm-run-help

Get a list of the `npm run` scripts available.

## Install

First download:

`npm i --save-dev npm-run-help`

Then add to your `package.json`'s scripts field.

```diff
"scripts": {
+  "help": "npm-run-help",
  "build": "browserify load-quote.js -v | uglifyjs -v > bundle.js && git add bundle.js && git commit -m 'Build bundle.js'",
  "deploy": "git checkout gh-pages && git merge --no-edit master && npm run build && git push && git checkout -",
  "watch": "watchify load-quote.js -o bundle.js -dv"
},
```


## Usage

Now that it's installed, run:

```
npm run help
```

to see your currently installed `run-scripts`.
