module.exports = {
  // ...
  module: {
    rules: [
      // ... інші правила
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images', // Шлях відносно кореня `dist`
              publicPath: '/assets/images/', // Шлях відносно кореня сайту
            },
          },
        ],
      },
    ],
  },
  // ...
};