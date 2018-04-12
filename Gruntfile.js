module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
      sprite:{
        all: {
          src: 'src/assets/images/icons/*.*',
          dest: 'src/assets/images/spritesheet.png',
          destCss: 'src/assets/css/sprites.css',
          // imgPath: '',   // 雪碧图在css中的url引用路径
          // retinaImgPath: '',   // 两倍雪碧图在css中的url引用路径
          // cssVarMap: function(sprite) {
          //   sprite.name = 'm-ic-icon.m-ic-icon-' + sprite.name;  
          //   //定义图标class名称，例如 del.png对应 m-ic-icon.m-ic-icon-del（如果不写则默认为”icon-‘文件名’“）
          // }
        }
      }
    });
  
    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');
  };
  