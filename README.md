# Vanilla Google Photo

A simple vanilla js library which consumes album's data from Google Photos service.

## Instalation

You can download the lib: 
* [development version](https://raw.githubusercontent.com/caio-ribeiro-pereira/vanilla-gphoto/1.0.0/lib/vanilla-gphoto.js) (2 Kbytes);
* [minified version](https://raw.githubusercontent.com/caio-ribeiro-pereira/vanilla-gphoto/1.0.0/dist/vanilla-gphoto.min.js) (1 Kbytes);
* [gzipped version](https://raw.githubusercontent.com/caio-ribeiro-pereira/vanilla-gphoto/1.0.0/dist/vanilla-gphoto.min.gz.js) (593 bytes);

Include the `vanilla-gphoto.js` script into your html file:

``` html
<html>
  <head>
    <script src="vanilla-gphoto.js"></script>
  </head>
</html>
```

## Running

To use this lib, just run the code below:

``` html
<script>
var data = {userId: "1", albumId: "2", max: 10};
VGPhoto.getAlbum(data, function(err, album) {
  // Do something using the err or album variables...
});
</script>
```

To find the `userId` and `albumId`, enter into your Google Photos album and take a look in the url pattern:

```
https://plus.google.com/photos/{userId}/albums/{albumId}
```

For example, this is my album url:

```
https://plus.google.com/photos/106082169903180828657/albums/5649990342671140529
```

The `album` variable will return an object with these properties:

``` javascript
{
  title: "album title",
  subtitle: "album subtitle",
  authors: ["first author", "second author"],
  photos: [
    {
      src: "http://domain.com/photo1.jpg",
      title: "photo title",
      type: "image/jpeg"
    },
    {
      src: "http://domain.com/photo2.jpg",
      title: "another photo title",
      type: "image/jpeg"
    }
  ]
}
```

**Atention:** Only public photos will be listed! Don't forgot to change the photo visibility to public.

## TODOs

* Bower support
* Atmosphere support
* Travis CI build
* Jasmine test

## Compatibility

* Chrome 4.0+
* Firefox 2.0+
* Safari 4.0+
* Opera 10.0+
* Internet Explorer 8+

## Changelog

## 1.0.0 - 11/25/2014

* added getAlbum function
* added AMD support
* added Build task with Grunt

## Author

Caio Ribeiro Pereira <caio.ribeiro.pereira@gmail.com>  
Licensed by [MIT](http://caio-ribeiro-pereira.mit-license.org)  
This readme was generated by [Readme Generator](https://github.com/caio-ribeiro-pereira/go-readme-cli)
