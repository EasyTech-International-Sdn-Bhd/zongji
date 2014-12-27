// Client code
var ZongJi = require('./');

var zongji = new ZongJi({
  host     : 'localhost',
  user     : 'zongji',
  password : 'zongji',
  // debug: true
});

zongji.on('binlog', function(error, evt) {
  evt.dump();
});

zongji.start({
  filter: ['tablemap', 'writerows', 'updaterows', 'deleterows']
});

process.on('SIGINT', function() {
  console.log('Got SIGINT.');
  process.exit();
});
