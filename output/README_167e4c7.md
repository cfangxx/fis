# fs.media()   media dev 已经被占用，默认情况下不加 <media> 参数时默认为 dev
fis.match('*', {
  useHash: false
});

fis.media('prod').match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
```
fis3 release prod
```