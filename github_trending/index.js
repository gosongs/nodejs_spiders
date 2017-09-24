var fs = require('fs');
var Crawler = require("crawler");
var cheerio = require("cheerio");
var shell = require('shelljs');

var LANGLIST = [
  'javascript'
];

function writeMd(filename, content) {
  fs.appendFile(filename, content, function (err) {
    console.log(err);
  });
}

function gFilename() {
  var d = new Date();
  var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  return str + '.md';
}

function init() {
  listsCrawler.queue(LANGLIST);
}

var listsCrawler = new Crawler({
  maxConnections: 10,
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = cheerio.load(res.body, { decodeEntities: false });
      var filename = gFilename();
      $('ol.repo-list li').each(function (id, ele) {

      });
    }
    done();
  }
});

listsCrawler.on('drain', function () {

});