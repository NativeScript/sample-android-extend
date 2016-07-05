var application = require("application");

var superProto = android.app.Application.prototype;
var Application = android.app.Application.extend("org.myApp.Application", {
    onCreate: function() {
        superProto.onCreate.call(this);

        // initialize the application module with the native Android Application object
        application.android.init(this);

        // Enter custom initialization code here
    },
    attachBaseContext: function(base) {
        superProto.attachBaseContext.call(this, base);

        // This code enables MultiDex support for the application
		// android.support.multidex.MultiDex.install(this.super);
	}
});