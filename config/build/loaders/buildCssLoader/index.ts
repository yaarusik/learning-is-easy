import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
            loader: 'css-loader',
            options: {
                modules: {
                    // Смотрит на файлы только с расширением - .module.
                    // Можно было и регулярное выражение указать вместо функции
                    auto: (resPath: string) => resPath.includes('.module.'),
                    // делаем в dev разработке нормальные читаемые имена классов,
                    // а в prod сгенерированные(8 - количество символов)
                    localIdentName: isDev
                        // в названии стилей будет путь до компонента - название класса и
                        // hash - "src-components-Counter-module__button--Kx16R"
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:8]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
