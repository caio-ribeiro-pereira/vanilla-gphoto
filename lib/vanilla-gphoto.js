(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.VGPhoto = factory();
  }
}(this, function() {

  var VanillaGPhoto = function(opts) {
    this.userId = opts.userId || "";
    this.albumId = opts.albumId || "";
    this.max = opts.max || 20;
    this.url = this.setUrl(opts);
    this.album = {};
  };

  VanillaGPhoto.prototype.setUrl = function(opts) {
    var url = "https://picasaweb.google.com/data/feed/base";
    url += "/user/" + this.userId + "/albumid/" + this.albumId;
    url += "?alt=json&kind=photo&access=public&max-results="+ this.max;
    return url;
  };

  VanillaGPhoto.prototype.buildAlbum = function(data) {
    var album = {
      title: data.title.$t,
      subtitle: data.subtitle.$t,
      authors: [],
      photos: []
    };
    for (var i = 0, imax = data.author.length; i < imax; i++) {
      album.authors.push(data.author[i].name.$t);
    }
    for (var j = 0, jmax = data.entry.length; j < jmax; j++) {
      album.photos.push({
        src: data.entry[j].content.src,
        type: data.entry[j].content.type,
        title: data.entry[j].title.$t
      });
    }
    this.album = album;
    return album;
  };

  return {
    getAlbum: function(opts, callback) {
      var gphoto = new VanillaGPhoto(opts);
      var request = new XMLHttpRequest();
      request.open('GET', gphoto.url, true);

      request.onreadystatechange = function() {
        if (this.readyState === 4){
          if (this.status >= 200 && this.status < 400){
            var feed = JSON.parse(this.responseText).feed;
            gphoto.buildAlbum(feed);
            return callback(null, gphoto.album);
          } else {
            return callback("The album can't be accessed.", null);
          }
        }
      };
      request.send();
    }
  };
}));