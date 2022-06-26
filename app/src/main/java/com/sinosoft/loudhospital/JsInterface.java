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
                Toast.makeText(context, "TEMobile没有被安装！！！", Toast.LENGTH_SHORT).show();
            }
        }

    }
    @JavascriptInterface
    public void goBack() {
        Log.d("222", "走了");
        handler.post(new Runnable() {
            @Override
            public void run() {
                if (webView.canGoBack()) {
                    Log.d("走了", "dddd");
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
                // 申请单个权限
                .permission(Permission.RECORD_AUDIO)
                // 申请多个权限
                .permission(Permission.Group.STORAGE)
                // 设置权限请求拦截器（局部设置）
                //.interceptor(new PermissionInterceptor())
                // 设置不触发错误检测机制（局部设置）
                //.unchecked()
                .request(new OnPermissionCallback() {

                    @Override
                    public void onGranted(List<String> permissions, boolean all) {
                        if (all) {
//                            Toast.makeText(context,"获取录音权限成功",Toast.LENGTH_LONG).show();
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
                            Toast.makeText(context, "获取部分权限成功，但部分权限未正常授予", Toast.LENGTH_LONG).show();

                        }
                    }

                    @Override
                    public void onDenied(List<String> permissions, boolean never) {
                        if (never) {
                            Toast.makeText(context, "被永久拒绝授权，请手动授予录音权限", Toast.LENGTH_LONG).show();

                            // 如果是被永久拒绝就跳转到应用权限系统设置页面
                            XXPermissions.startPermissionActivity(context, permissions);
                        } else {
                            Toast.makeText(context, "获取录音权限失败", Toast.LENGTH_LONG).show();

                        }
                    }
                });
    }

    @JavascriptInterface
    public void startScan() {
        //自定义扫描
        Log.d("3333", "zoule ");
        MNScanConfig scanConfig = new MNScanConfig.Builder()
                //设置完成震动
                .isShowVibrate(false)
                //扫描完成声音
                .isShowBeep(true)
                //显示相册功能
                .isShowPhotoAlbum(true)
                //显示闪光灯
                .isShowLightController(true)
                //打开扫描页面的动画
//                .setActivityOpenAnime(R.anim.activity_anmie_in)
                //退出扫描页面动画
//                .setActivityExitAnime(R.anim.activity_anmie_out)
                //自定义文案
                .setScanHintText("请将二维码放入框中")
                //自定义文案颜色
                .setScanHintTextColor("#FFFF00")
                //自定义文案大小（单位sp）
                .setScanHintTextSize(16)
                //扫描线的颜色
                .setScanColor("#FFFF00")
                //是否显示缩放控制器
//                 .isShowZoomController(true)
                //显示缩放控制器位置
//                .setZoomControllerLocation(MNScanConfig.ZoomControllerLocation.Bottom)
                //扫描线样式
                .setLaserStyle(MNScanConfig.LaserStyle.Grid)
                //背景颜色
                .setBgColor("#33FF0000")
                //网格扫描线的列数
                .setGridScanLineColumn(30)
                //网格高度
                .setGridScanLineHeight(150)
                //高度偏移值（单位px）+向上偏移，-向下偏移
//                .setScanFrameHeightOffsets(150)
                //是否全屏范围扫描
                .setFullScreenScan(true)
                //二维码标记点
//                .isShowResultPoint(mCbScanPoint.isChecked())
                .setResultPointConfigs(36, 12, 2, "#FFFFFFFF", "#CC00A81F")
                //状态栏设置：颜色，是否黑色字体
                .setStatusBarConfigs("#00000000", true)
                //是否支持多二维码同时扫出,默认false,多二维码状态不支持条形码
//                .setSupportMultiQRCode(true)
                //自定义遮罩
//                .setCustomShadeViewLayoutID(R.layout.layout_custom_view, new MNCustomViewBindCallback() {
//                    @Override
//                    public void onBindView(View customView) {
//                        //TODO:通过findviewById 获取View
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
                                Toast.makeText(context, "取消扫码", Toast.LENGTH_LONG).show();
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
