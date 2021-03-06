const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    //public path 없애야함
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ] // sass-loader를 맨뒤에 붙히면 쓸 수 있음
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/ // 여기 안에 라이브러리까지는 볼 필요가 없음
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // vue$ 쟤로 가겠다는 거 
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // 이 플러그인을 안 붙히면 index.html에 script</dist 그거를 붙혀야한다.
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
    }),
    new VueLoaderPlugin(),
  ]
}