const path = require('path');
module.exports = [{
        entry: './src/DoMini.js',
        output: {
            library: {
                name: 'DoMini',
                type: 'umd',
                export: 'default',
                umdNamedDefine: true
            },
            globalObject: 'this',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini.js',
        }
    },
    {
        entry: './src/DoMiniCore.js',
        output: {
            library: {
                name: 'DoMini',
                type: 'umd',
                export: 'default',
                umdNamedDefine: true
            },
            globalObject: 'this',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-core.js',
        }
    }
];