/**
 * Created by mapbar_front on 2019-09-05.
 */
const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, 'dist')
    }
}
