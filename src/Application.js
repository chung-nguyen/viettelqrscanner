import device;

import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;
import ui.StackView as StackView;

import src.Splash as Splash;
import src.Instructions as Instructions;
import src.Result as Result;

exports = Class(GC.Application, function () {

    this.initUI = function () {
        
        var scaleRatio = device.screen.width / 640;
        
        GLOBAL.stackView = new StackView({
            superview: this.view,
            x: 0,
            y: 0,
            width: 640,
            height: device.screen.height / scaleRatio,
            clip: false,
            scale: scaleRatio,
        });
        
        GLOBAL.splash = new Splash({
            x: 0,
            y: 0,
            width: stackView.style.width,
            height: stackView.style.height,
        });
        
        GLOBAL.instructions = new Instructions({
            x: 0,
            y: 0,
            width: stackView.style.width,
            height: stackView.style.height,
        });
        
        GLOBAL.result = new Result({
            x: 0,
            y: 0,
            width: stackView.style.width,
            height: stackView.style.height,
        });        
      
        stackView.push(splash);              
    };

    this.onQRCode = function () {
        qrscanner.scanQRCode();
    }

    this.launchUI = function () {};
});
