var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    shell = require('gulp-shell');

var config = {
    vendorBin: 'vendor/bin/'
};

/**
 * Lints Fluid templates
 */
gulp.task('lint-fluid', shell.task([config.vendorBin + 'fluidlint web/typo3conf/ext/*/Resources/Private/']));

/**
 * Lints TypoScript files
 */
gulp.task('lint-typoscript', shell.task(
    [
        config.vendorBin + 'typoscript-lint web/typo3conf/ext/*/Configuration/**/*.txt',
        config.vendorBin + 'typoscript-lint web/typo3conf/ext/*/ext_typoscript_*.txt'
    ]
));

/**
 * Runs a selection of tasks
 */
gulp.task('default', function(callback) {
    runSequence('lint-fluid', 'lint-typoscript', callback);
});