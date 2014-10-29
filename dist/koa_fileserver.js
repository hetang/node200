"use strict";
require('traceur-source-maps').install(require('traceur'));
var fs = require('fs'),
    path = require('path'),
    koa = require('koa'),
    app = koa();
app.use(function*(next) {
  try {
    yield next;
  } catch (e) {
    this.body = 'Internal Server Error: \n' + e.stack;
  }
});
app.use(function*(next) {
  var filePath = __dirname + this.path;
  var fstat = yield fs.stat(filePath);
  if (fstat.isFile()) {
    this.type = path.extname(path);
    this.body = fs.createReadStream(path);
  }
});
app.get('/', function*(next) {
  yield process.nextTick;
  this.body = "Hello world.";
});
app.listen(8080, '127.0.0.1', (function() {
  return console.log('Listing at http://127.0.0.1:8080');
}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtvYV9maWxlc2VydmVyLmVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU0sQUFBQyxDQUFDLHFCQUFvQixDQUFDLFFBQVEsQUFBQyxDQUFDLE9BQU0sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDLENBQUM7RUFBSyxDQUFBLEVBQUMsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLElBQUcsQ0FBQztBQUM3RSxPQUFHLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxNQUFLLENBQUM7QUFDckIsTUFBRSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsS0FBSSxDQUFDO0FBQ25CLE1BQUUsRUFBSSxDQUFBLEdBQUUsQUFBQyxFQUFDO0FBR2IsRUFBRSxJQUFJLEFBQUMsQ0FBQyxVQUFXLElBQUcsQ0FBRztBQUN4QixJQUFJO0FBQ0gsUUFBTSxLQUFHLENBQUE7RUFDVixDQUFFLE9BQU8sQ0FBQSxDQUFHO0FBQ1YsT0FBRyxLQUFLLEVBQUksQ0FBQSwyQkFBMEIsRUFBSSxDQUFBLENBQUEsTUFBTSxDQUFBO0VBQ2xEO0FBQUEsQUFDRCxDQUFDLENBQUE7QUFFRCxFQUFFLElBQUksQUFBQyxDQUFDLFVBQVUsSUFBRyxDQUFHO0FBQ3RCLEFBQUksSUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLFNBQVEsRUFBSSxDQUFBLElBQUcsS0FBSyxDQUFBO0FBQ25DLEFBQUksSUFBQSxDQUFBLEtBQUksRUFBSSxNQUFNLENBQUEsRUFBQyxLQUFLLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQTtBQUVsQyxLQUFJLEtBQUksT0FBTyxBQUFDLEVBQUMsQ0FBRztBQUNsQixPQUFHLEtBQUssRUFBSSxDQUFBLElBQUcsUUFBUSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUE7QUFDN0IsT0FBRyxLQUFLLEVBQUksQ0FBQSxFQUFDLGlCQUFpQixBQUFDLENBQUMsSUFBRyxDQUFDLENBQUE7RUFDdEM7QUFBQSxBQUNGLENBQUMsQ0FBQTtBQUVELEVBQUUsSUFBSSxBQUFDLENBQUMsR0FBRSxDQUFHLFdBQVcsSUFBRyxDQUFHO0FBQzVCLE1BQU0sQ0FBQSxPQUFNLFNBQVMsQ0FBQTtBQUNyQixLQUFHLEtBQUssRUFBSSxlQUFhLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsRUFBRSxPQUFPLEFBQUMsQ0FBQyxJQUFHLENBQUcsWUFBVSxHQUFHLFNBQUEsQUFBQztPQUFLLENBQUEsT0FBTSxJQUFJLEFBQUMsQ0FBQyxrQ0FBaUMsQ0FBQztBQUFBLEVBQUMsQ0FBQTtBQUVuRiIsImZpbGUiOiJrb2FfZmlsZXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3RyYWNldXItc291cmNlLW1hcHMnKS5pbnN0YWxsKHJlcXVpcmUoJ3RyYWNldXInKSk7bGV0IGZzID0gcmVxdWlyZSgnZnMnKVxuXHQsIHBhdGggPSByZXF1aXJlKCdwYXRoJylcblx0LCBrb2EgPSByZXF1aXJlKCdrb2EnKVxuXHQsIGFwcCA9IGtvYSgpXG5cbi8vIEVycm9yIGhhbmRsZXIgbWlkZGxld2FyZVxuYXBwLnVzZShmdW5jdGlvbiAqKG5leHQpIHtcblx0dHJ5IHtcblx0XHR5aWVsZCBuZXh0XG5cdH0gY2F0Y2ggKGUpIHtcblx0ICB0aGlzLmJvZHkgPSAnSW50ZXJuYWwgU2VydmVyIEVycm9yOiBcXG4nICsgZS5zdGFja1xuXHR9XG59KVxuXG5hcHAudXNlKGZ1bmN0aW9uKihuZXh0KSB7XG4gIHZhciBmaWxlUGF0aCA9IF9fZGlybmFtZSArIHRoaXMucGF0aFxuICB2YXIgZnN0YXQgPSB5aWVsZCBmcy5zdGF0KGZpbGVQYXRoKVxuXG4gIGlmIChmc3RhdC5pc0ZpbGUoKSkge1xuICAgIHRoaXMudHlwZSA9IHBhdGguZXh0bmFtZShwYXRoKVxuICAgIHRoaXMuYm9keSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0ocGF0aClcbiAgfVxufSlcblxuYXBwLmdldCgnLycsIGZ1bmN0aW9uICoobmV4dCkge1xuICB5aWVsZCBwcm9jZXNzLm5leHRUaWNrXG4gIHRoaXMuYm9keSA9IFwiSGVsbG8gd29ybGQuXCI7XG59KTtcblxuYXBwLmxpc3Rlbig4MDgwLCAnMTI3LjAuMC4xJywgKCkgPT4gY29uc29sZS5sb2coJ0xpc3RpbmcgYXQgaHR0cDovLzEyNy4wLjAuMTo4MDgwJykpXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==