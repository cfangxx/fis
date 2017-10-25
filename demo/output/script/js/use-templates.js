console.log('==============================');
console.log('= /script/js/use-template.js =');
console.log('==============================');
console.log('');

// use handlebars template

var tpl = "<h1>{{title}}</h1>\r\n<div class=\"body\">\r\n    {{body}}\r\n</div>";
var data = {
    title: 'use handlebars',
    body: 'It works!'
};
var html = tpl(data);
console.log('use handlebars from js: ');
console.log(html);

// use ejs template

var tpl = "<ul>\r\n<% for(var i=0; i < supplies.length; i++) {%>\r\n   <li><%= supplies[i] %></li>\r\n<% } %>\r\n</ul>";
var data = {
    supplies: [ 'foo', 'bar' ]
}
var html = tpl(data);
console.log('');
console.log('use ejs from js: ');
console.log(html);

// use jade

var url = '/html/jade/foo.jade';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
console.log('');
console.log('use jade file:');
console.log(xhr.responseText);