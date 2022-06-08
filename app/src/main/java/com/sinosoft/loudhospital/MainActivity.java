package com.sinosoft.loudhospital;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    private WebView webView;
    private String userId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.health_hut_main);
        webView = findViewById(R.id.webview);
        Intent intent = getIntent();
        userId = intent.getStringExtra("userId");
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        webView.loadUrl("file:///android_asset/index.html");
//        webView.loadUrl("https://interhos.youjiankang.net/cloudhospital/");
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
//                if(Build.VERSION.SDK_INT<26) {
//                    view.loadUrl(url);
//                    return true;
//                }
                return true;
            }
        });
        webView.addJavascriptInterface(new JsInterface(this, webView, userId), "android");
//        webView.loadUrl("file:///android_asset/index.html");


    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 0) {
            if (resultCode == RESULT_OK) {
                String path ="";
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.GINGERBREAD_MR1) {
                    path= getExternalFilesDir(Environment.DIRECTORY_DCIM) + "/recorded_audio.wav";
                } else {
                    path = Environment.getExternalStorageDirectory().getPath() + "/recorded_audio.wav";
                }
                webView.evaluateJavascript("javascript:invokeMethod('"+path+"')", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String s) {
                    }
                });
                // Great! User has recorded and saved the audio file
            } else if (resultCode == RESULT_CANCELED) {
                // Oops! User has canceled the recording
            }
        }
    }


    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) ) {
            Log.d("tadfd",webView.canGoBack()+"");
            if (webView.canGoBack()) {
                Log.d("back","返回") ;
                webView.goBack(); //goBack()表示返回WebView的上一页面
                return true;
            }else
            {
                finish();
                return true;
            }

        }
        return false;
    }
}