import animate;
import ui.View as View;
import ui.ImageView as ImageView;
import ui.ImageScaleView as ImageScaleView;
import ui.TextView as TextView;
import ui.resource.loader as loader;

exports = Class(View, function (supr) {
    this.init = function (opts) {
        supr(this, 'init', [opts]);
      
        new ImageScaleView({
            superview: this,
            scaleMethod: 'cover',		
			x: 0,
			y: 0,
			width: this.style.width,
			height: this.style.height,
			image: 'resources/images/background.png'
        });
      
        new ImageView({
            superview: this,
            x: (this.style.width - 485) / 2,
            y: (this.style.height - 776) / 2,
            width: 485,
            height: 776,
            image: 'resources/images/splash_image.png'
        })
      
        var self = this;
		
		loader.preload(['resources/images'], function() {
			setTimeout(function(){
            	stackView.push(instructions);
        	}, 1000);	
		});                  
    };
});
