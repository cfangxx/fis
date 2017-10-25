fis.match('::packager', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    allInOne: true
  })
});

fis.match('*', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});