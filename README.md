# gulp-typo3-linter-example
This repository is a simple Gulp example for adding linters for TYPO3.

## Installation
At first, clone this repository to the location of your choice. Then install the required dependencies by:
```sh
composer install
npm install
```

The repository assumes, that there is a TYPO3 installation under web. According paths will use the web folder.

## Gulp commands
Having all setup you can use the following commands (according to gulpfile.js):

### Fluid linter
Starts fluidlint to lint Fluid templates
```sh
gulp lint-fluid
```

### TypoScript linter
Starts the TypoScript linter to check TypoScript files
```sh
gulp lint-typoscript
```

### All tasks
To start all tasks call "gulp"
```sh
gulp
```