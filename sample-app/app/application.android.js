var application = require("application");

var superProto = android.app.Application.prototype;
var Application = android.app.Application.extend("org.myApp.Application", {
    onCreate: function() {
        superProto.onCreate.call(this);

        // Enter custom initialization code here
    },
    attachBaseContext: function(base) {
        superProto.attachBaseContext.call(this, base);

        // This code enables MultiDex support for the application
		// android.support.multidex.MultiDex.install(this.super);
	}
});
