var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var join = path.join;

var photos =[];
photos.push({
  name:'Node.js Logo',
  path:'http://nodejs.org/images/logos/nodejs-green.png'
});
photos.push({
  name:'Ryan Speaking',
  path: 'http://nodejs.org/images/ryan-speaker.jpg'
});

exports.list = function(req,res){
  res.render('photos',{
    title:'Photos',
    photos:photos
  });
};

exports.form = function(req, res){
  res.render('photos/upload',{title:'Photo Upload'});
};

exports.submit = function(dir){
  return function(req,res,next){
    var img = req.files.image;
    var name = req.body.name||img.name;
    var path = join(dir, img.name);

    fs.rename(img.path, path, function(err){
      if(err) return next(err);
      // DB에 넣어주어야함
      photos.push({name: name, path:img.name});
      res.redirect('/');
    });
  };
};

/*router.get('/', function(req,res,next){
  res.render('photos',{
    title:'Photos',
    photos:photos
  });
});

module.exports = router;
*/
