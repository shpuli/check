requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'node_modules/roundme-ios-gyro-patch/',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: './main'
  }
});

// Start the main app logic.
// requirejs(['jquery', 'canvas', 'app/sub'],
//   function   ($,        canvas,   sub) {
//     //jQuery, canvas and the app/sub module are all
//     //loaded and can be used here now.
//   });

var myHeading = document.querySelector('h1');



define(['roundme-ios-gyro-patch'], function (gyro) {
  gyro('round.me');

  // document.addEventListener("DOMContentLoaded", function() {
  //   gyro('round.me');
  // });

});

myHeading.textContent = 'piu-piu';