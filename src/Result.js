import animate;
import ui.View as View;
import ui.ImageView as ImageView;
import ui.TextView as TextView;
import ui.ImageScaleView as ImageScaleView;

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
		
		this.imageResult = new ImageView({
			superview: this,
			width: 563,
			height: 306,
			x: (this.style.width - 563) / 2,
			y: (this.style.height / 2.5) - 153,
			image: 'resources/images/invalid_card.png',
		});
		
		new ImageView({
			superview: this,
			width: 432,
			height: 53,
			x: (this.style.width - 432) / 2,
			y: this.style.height * 2.75,
			image: 'resources/images/shadow.png'
		});
		
		var clickToContinue = new View({
			superview: this,
			x: 0,
			y: this.style.height - 128,
			width: this.style.width,
			height: 128,			
		});
		
		new ImageView({
			superview: clickToContinue,
			width: 225,
			height: 31,
			x: (clickToContinue.style.width - 225) / 2,
			y: clickToContinue.style.height - 48,
			image: 'resources/images/continue.png'
		});
		
		clickToContinue.on('InputSelect', function() {
			stackView.pop();
		});
    };
	
	this.setResult = function(contents) {
		if (contents == 'viettel 50k') {		
			this.imageResult.setImage('resources/images/50k.png');
		}
		else if (contents == 'viettel 100k') {
			this.imageResult.setImage('resources/images/100k.png');
		}
		else if (contents == 'viettel 200k') {
			this.imageResult.setImage('resources/images/200k.png');
		}
		else {
			this.imageResult.setImage('resources/images/invalid_card.png');
		}
	};
});
