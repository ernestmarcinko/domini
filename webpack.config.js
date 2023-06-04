const path = require('path');
module.exports = [{
        entry: './src/domini.js',
        output: {
            library: {
                name: 'DoMini',
                type: 'umd',
                export: 'default',
                umdNamedDefine: true
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini.js',
        }
    },
    {
        entry: './src/domini-core.js',
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-core.js',
        }
    },
    {
        entry: './src/domini-animate.js',
        externals: {
            '../base': 'DoMini'
        },
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-animate.js',
        }
    },
    {
        entry: './src/domini-highlight.js',
        externals: {
            '../base': 'DoMini'
        },
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-highlight.js',
        }
    },
    {
        entry: './src/domini-serialize.js',
        externals: {
            '../base': 'DoMini'
        },
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-serialize.js',
        }
    },
    {
        entry: './src/domini-viewport.js',
        externals: {
            '../base': 'DoMini'
        },
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-viewport.js',
        }
    },
    {
        entry: './src/domini-xhttp.js',
        externals: {
            '../base': 'DoMini'
        },
        output: {
            library: {
                name: 'DoMini',
                type: 'global',
                export: 'default',
            },
            globalObject: 'window',
            path: path.resolve(__dirname, 'dist'),
            filename: 'domini-xhttp.js',
        }
    }
];