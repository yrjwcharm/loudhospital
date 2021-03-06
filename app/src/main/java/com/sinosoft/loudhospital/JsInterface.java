package com.sinosoft.loudhospital;


import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.media.MediaRecorder;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.widget.Toast;

import com.google.gson.Gson;
import com.hjq.permissions.OnPermissionCallback;
import com.hjq.permissions.Permission;
import com.hjq.permissions.XXPermissions;
import com.maning.mlkitscanner.scan.MNScanManager;
import com.maning.mlkitscanner.scan.callback.act.MNScanCallback;
import com.maning.mlkitscanner.scan.model.MNScanConfig;
import com.sinosoft.loudhospital.entity.User;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import cafe.adriel.androidaudiorecorder.AndroidAudioRecorder;
import cafe.adriel.androidaudiorecorder.model.AudioChannel;
import cafe.adriel.androidaudiorecorder.model.AudioSampleRate;
import cafe.adriel.androidaudiorecorder.model.AudioSource;


public class JsInterface {
    private Handler handler = new Handler(Looper.getMainLooper());
//    private String userId;
    private WebView webView;
    private Context context;

    public JsInterface(Context context, WebView webView) {
//        this.userId = userId;
        this.webView = webView;
        this.context = context;
    }

//    public String getUserId() {
//        return userId;
//    }
//
//    public void setUserId(String userId) {
//        this.userId = userId;
//    }

    @JavascriptInterface
    public void startTEMobileApp(){
        Intent mIntent = context.getPackageManager().getLaunchIntentForPackage("com.huawei.TEMobile");
        if (mIntent!= null) {
            try {
                context.startActivity(mIntent);
            } catch (ActivityNotFoundException err) {
                Toast.makeText(context, "TEMobile????????????????????????", Toast.LENGTH_SHORT).show();
            }
        }

    }
    @JavascriptInterface
    public void goBack() {
        Log.d("222", "??????");
        handler.post(new Runnable() {
            @Override
            public void run() {
                if (webView.canGoBack()) {
                    Log.d("??????", "dddd");
                    webView.goBack();

                } else {
                    ((MainActivity) context).finish();
                }
            }
        });

    }
    @JavascriptInterface
    public void startAudioRecord() {
        XXPermissions.with(context)
                // ??????????????????
                .permission(Permission.RECORD_AUDIO)
                // ??????????????????
                .permission(Permission.Group.STORAGE)
                // ?????????????????????????????????????????????
                //.interceptor(new PermissionInterceptor())
                // ???????????????????????????????????????????????????
                //.unchecked()
                .request(new OnPermissionCallback() {

                    @Override
                    public void onGranted(List<String> permissions, boolean all) {
                        if (all) {
//                            Toast.makeText(context,"????????????????????????",Toast.LENGTH_LONG).show();
                            String path = "";
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.GINGERBREAD_MR1) {
                                path = context.getExternalFilesDir(Environment.DIRECTORY_DCIM) + "/recorded_audio.wav";
                            } else {
                                path = Environment.getExternalStorageDirectory().getPath() + "/recorded_audio.wav";
                            }
                            int color = context.getResources().getColor(R.color.black);
                            int requestCode = 0;
                            AndroidAudioRecorder.with((MainActivity) context)
                                    // Required
                                    .setFilePath(path)
                                    .setColor(color)
                                    .setRequestCode(requestCode)

                                    // Optional
                                    .setSource(AudioSource.MIC)
                                    .setChannel(AudioChannel.STEREO)
                                    .setSampleRate(AudioSampleRate.HZ_48000)
                                    .setAutoStart(true)
                                    .setKeepDisplayOn(true)

                                    // Start recording
                                    .record();
                        } else {
                            Toast.makeText(context, "?????????????????????????????????????????????????????????", Toast.LENGTH_LONG).show();

                        }
                    }

                    @Override
                    public void onDenied(List<String> permissions, boolean never) {
                        if (never) {
                            Toast.makeText(context, "???????????????????????????????????????????????????", Toast.LENGTH_LONG).show();

                            // ??????????????????????????????????????????????????????????????????
                            XXPermissions.startPermissionActivity(context, permissions);
                        } else {
                            Toast.makeText(context, "????????????????????????", Toast.LENGTH_LONG).show();

                        }
                    }
                });
    }

    @JavascriptInterface
    public void startScan() {
        //???????????????
        Log.d("3333", "zoule ");
        MNScanConfig scanConfig = new MNScanConfig.Builder()
                //??????????????????
                .isShowVibrate(false)
                //??????????????????
                .isShowBeep(true)
                //??????????????????
                .isShowPhotoAlbum(true)
                //???????????????
                .isShowLightController(true)
                //???????????????????????????
//                .setActivityOpenAnime(R.anim.activity_anmie_in)
                //????????????????????????
//                .setActivityExitAnime(R.anim.activity_anmie_out)
                //???????????????
                .setScanHintText("???????????????????????????")
                //?????????????????????
                .setScanHintTextColor("#FFFF00")
                //??????????????????????????????sp???
                .setScanHintTextSize(16)
                //??????????????????
                .setScanColor("#FFFF00")
                //???????????????????????????
//                 .isShowZoomController(true)
                //???????????????????????????
//                .setZoomControllerLocation(MNScanConfig.ZoomControllerLocation.Bottom)
                //???????????????
                .setLaserStyle(MNScanConfig.LaserStyle.Grid)
                //????????????
                .setBgColor("#33FF0000")
                //????????????????????????
                .setGridScanLineColumn(30)
                //????????????
                .setGridScanLineHeight(150)
                //????????????????????????px???+???????????????-????????????
//                .setScanFrameHeightOffsets(150)
                //????????????????????????
                .setFullScreenScan(true)
                //??????????????????
//                .isShowResultPoint(mCbScanPoint.isChecked())
                .setResultPointConfigs(36, 12, 2, "#FFFFFFFF", "#CC00A81F")
                //?????????????????????????????????????????????
                .setStatusBarConfigs("#00000000", true)
                //????????????????????????????????????,??????false,????????????????????????????????????
//                .setSupportMultiQRCode(true)
                //???????????????
//                .setCustomShadeViewLayoutID(R.layout.layout_custom_view, new MNCustomViewBindCallback() {
//                    @Override
//                    public void onBindView(View customView) {
//                        //TODO:??????findviewById ??????View
//                    }
//                })
                .builder();
        handler.post(new Runnable() {
            @Override
            public void run() {
                MNScanManager.startScan((MainActivity) context, scanConfig, new MNScanCallback() {
                    @Override
                    public void onActivityResult(int resultCode, Intent data) {
                        Log.d("33333", resultCode + "");
                        switch (resultCode) {
                            case MNScanManager.RESULT_SUCCESS:
                                ArrayList<String> results = data.getStringArrayListExtra(MNScanManager.INTENT_KEY_RESULT_SUCCESS);
                                webView.evaluateJavascript("javascript:invokeMethod('" + results.get(0) + "')", new ValueCallback<String>() {
                                    @Override
                                    public void onReceiveValue(String s) {

                                    }
                                });
                                break;
                            case MNScanManager.RESULT_FAIL:
                                String resultError = data.getStringExtra(MNScanManager.INTENT_KEY_RESULT_ERROR);
                                break;
                            case MNScanManager.RESULT_CANCLE:
                                Toast.makeText(context, "????????????", Toast.LENGTH_LONG).show();
                                break;
                        }
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void WSKUserId() {
        Log.d("333", "zoule");
        User user = new User();
//        user.setUserId(userId);
        Gson gson = new Gson();
        String jsonStr = gson.toJson(user);
        handler.post(new Runnable() {
            @Override
            public void run() {
                webView.evaluateJavascript("WSKUserIdResult(" + jsonStr + ")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String s) {

                    }
                });
            }
        });

    }
}
