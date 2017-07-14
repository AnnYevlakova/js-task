module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        browswrs: ['Chrome'],
        files: [
            '*bundle.js'
        ],
        colors: true
    });
}