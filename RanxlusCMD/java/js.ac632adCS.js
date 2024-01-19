function addStylesheets(stylesheets) {
  stylesheets.forEach(function (href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
  });
}

var stylesheetsArray = [
  'CSS/cssbody.css',
  'CSS/cssinput.css',
  'CSS/cssoutput.css',
  'CSS/cssbotright.css'
];

addStylesheets(stylesheetsArray);