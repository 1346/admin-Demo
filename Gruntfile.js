module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
      sprite:{
        all: {
          src: 'src/assets/images/icons/*.*',
          dest: 'src/assets/images/spritesheet.png',
          destCss: 'src/assets/css/sprites.css',
          padding:20
        },
        // consumer:{
        //   src: 'src/assets/new-images/icons/*.*',
        //   dest: 'src/assets/images/pc_consumer/spritesheet2.png',
        //   destCss: 'src/assets/css/sprites2.css',
        //   padding:20
        // }
      }
    });
  
    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');
  };
  