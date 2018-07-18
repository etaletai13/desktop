// webpack.config.js

const { dependencies } = require('./package.json');

const externals = {};
Object.keys(dependencies || {}).map((dependency) => {
    externals[dependency] = `commonjs2 ${ dependency }`;
});

module.exports = {
    // I think `electron-renderer` works well with NW.js projects.
    // If there is any better option, please tell me :)
    target: 'electron-renderer',
    externals,
};