package com.sinosoft.loudhospital;

import android.app.Application;
import android.content.Context;

public class AppApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        xcrash.XCrash.init(this);
    }
}
