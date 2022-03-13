const { override, addWebpackModuleRule } = require('customize-cra');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const addSassOptions =
    (loaderOptions = {}, customCssModules = {}) =>
    (config) => {
        const webpackEnv = process.env.NODE_ENV;
        const isEnvDevelopment = webpackEnv === 'development';
        const isEnvProduction = webpackEnv === 'production';
        const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

        const getStyleLoaders = (cssOptions, preProcessor) => {
            const loaders = [
                isEnvDevelopment && require.resolve('style-loader'),
                // isEnvProduction && {
                //     loader: MiniCssExtractPlugin.loader,
                //     options: shouldUseRelativeAssetPaths ? { publicPath: "../../" } : {}
                // },
                {
                    loader: require.resolve('css-loader'),
                    options: cssOptions
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                                autoprefixer: {
                                    flexbox: 'no-2009'
                                },
                                stage: 3
                            }),
                            postcssNormalize()
                        ],
                        sourceMap: isEnvProduction && shouldUseSourceMap
                    }
                }
            ].filter(Boolean);
            if (preProcessor) {
                loaders.push(
                    {
                        loader: require.resolve('resolve-url-loader'),
                        options: {
                            sourceMap: isEnvProduction && shouldUseSourceMap
                        }
                    },
                    {
                        loader: require.resolve(preProcessor),
                        // not the same as react-scripts
                        options: Object.assign(
                            {
                                sourceMap: true
                            },
                            loaderOptions
                        )
                    }
                );
            }
            return loaders;
        };
        return config;
    };

module.exports = override(
    addWebpackModuleRule({
        test: /\.module\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,
                    sourceMap: false,
                    modules: {
                        mode: 'local',
                        auto: true,
                        exportGlobals: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]',
                        localIdentHashSalt: 'my-custom-hash',
                        // namedExport: true,
                        exportLocalsConvention: 'camelCase',
                        getLocalIdent: getCSSModuleLocalIdent
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: require.resolve('sass')
                }
            }
        ]
    })
);
