import path from "node:path"
import HtmlWebpackPlugin from'html-webpack-plugin';

export default {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/template.html'],
    allowedHosts: 'all', // Permite conexiones de desarrollo
    client: {
      overlay: true, // Muestra errores en pantalla
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};