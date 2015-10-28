import animate;
import qrscanner;

import ui.View as View;
import ui.ImageView as ImageView;
import ui.TextView as TextView;
import ui.ImageScaleView as ImageScaleView;
import ui.widget.ButtonView as ButtonView;

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
      
        var instruct1 = new View({
			superview: this,
            x: 0,
            y: 0,
            width: this.style.width,
            height: (this.style.height * 6) / 11          
        });
      
        new ImageView({
            superview: instruct1,
			x: (instruct1.style.width - 336) / 2,
			y: (instruct1.style.height - 392) / 2,
			width: 336,
			height: 392,
			image: 'resources/images/scan_instruct_1.png',
        });
      
        var instruct2 = new View({
			superview: this,
            x: 0,
            y: (this.style.height * 6) / 11,
            width: this.style.width,
            height: (this.style.height * 5) / 11,
            backgroundColor: '#ffffff'
        });
		
		new ImageView({
            superview: instruct2,
			x: (instruct2.style.width - 410) / 2,
			y: (instruct2.style.height - 341) / 2,
			width: 410,
			height: 341,
			image: 'resources/images/scan_instruct_2.png',
        });
		
		new ButtonView({
			superview: this,
			width: 160,
			height: 160,
			x: (this.style.width - 160) / 2,
			y: ((this.style.height * 6) / 11) - 80,
			images: {
				up: "resources/images/button_start.png",
				down: "resources/images/button_start_hover.png",
			},
			on: {
				up: function() {
					qrscanner.scanQRCode();
					//result.setResult('viettel 100k');
            		//stackView.push(result);
				}
			},
		});
      
        var self = this;
        qrscanner.setOnScanResult(function (contents, format) {
            result.setResult(contents.toString());
            stackView.push(result);
        });
    };
});
