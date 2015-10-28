import device;
import qrscanner;

import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;
import ui.StackView as StackView;

exports = Class(GC.Application, function () {

    this.initUI = function () {
        
        var scaleRatio = device.screen.width / 640;
        
        this.stackView = new StackView({
            superview: this.view,
            x: 0,
            y: 0,
            width: 640,
            height: device.screen.height / scaleRatio,
            clip: false,
            scale: scaleRatio,
        });

        this.testText = new TextView({
            superview: this.view,
            x: 0,
            y: 400,
            width: 200,
            height: 200,
            text: 'hahaha',
            color: 'white',
            size: 52
        });

        var self = this;
        qrscanner.setOnScanResult(function (contents, format) {
            self.testText.setText(contents.toString());
        });
    };

    this.onQRCode = function () {
        qrscanner.scanQRCode();
    }

    this.launchUI = function () {};
});
