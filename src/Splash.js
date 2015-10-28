import animate;
import ui.View as View;
import ui.ImageView as ImageView;
import ui.TextView as TextView;

exports = Class(View, function (supr) {
    this.init = function (opts) {
        supr(this, 'init', [opts]);
    };
});
