import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  // options.icon = true позволяет работать с svg именно как с иконками и удобно менять им размеры

  const cssLoader = {
    loader: 'css-loader',
    options: {
      url: false, // Отключаем обработку URL в обычном CSS (если она не нужна)
      modules: false, // Важно: Отключаем CSS Modules для обычного CSS
    },
  };
  
  
  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      url: false,
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader',
    ],
  };

  const cssLoaderRule = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoader, // Используем cssLoader без modules
    ],
  };
  

  const tsLoader = {
    // ts-loader умеет работать с jsx
    // Если бы мы не использовали typescript, то тогда нужен был бы babel-loader
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true, // свойство, которое убирает проверку типизации типов, тем самым позволяет ускорить процесс сборки, для проверки типов был скачан плагин new ForkTsCheckerWebpackPlugin()
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
      },
    },
    exclude: /node_modules/,
  };

  const esbuildLoader = {
    // Match `.js`, `.jsx`, `.ts` or `.tsx` files
    test: /\.[jt]sx?$/,
    loader: 'esbuild-loader',
    exclude: /node_modules/,
    options: {
      // JavaScript version to compile to
      target: 'es2015',
    },
  };


  return [
    // Порядок важен
    assetLoader,
    scssLoader,
    cssLoaderRule,
    tsLoader,
    esbuildLoader,
    svgrLoader,
  ];
}
