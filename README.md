# multibrand-app

The purpose of this project is to be able to have the same application working
for different brands. Its idea is that all brands would use the same components
but they would be styled differently for each brand, using SASS variables.

Note that this approach can also be used to style components coming from third party
libraries, since all SASS variables are applied for the global scope (since they
are loaded through `vue.config.js` file).

## Structure


### What is different from the regular `vue-cli` installation?

There are just a few differences:

- We are passing in an environment variable called `VUE_APP_BRAND` that will specify
  which brand styles should be loaded. [Learn more about environment variables and modes](https://cli.vuejs.org/guide/mode-and-env.html).
- `vue.config.js` will take the value of that env variable and will load the right SASS
  entrypoint accordingly. Note that this will also be reflected in the final build.
- The variables defined in each `_variables.scss` can be used in any component.

## Getting started

Getting started is easy through `docker-compose`, just run:

```
docker-compose up
```

Then hit `http://localhost:8080` and `http://localhost:8090` to see each brand's app.