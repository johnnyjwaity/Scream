package com.johnnywaity.icecream;

import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.TextView;

public class PopUp extends Activity {

    Button btn_close;

    TextView nameTxtView;

    TextView pTxtView;

    TextView eTxtView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pop_up);

        btn_close = (Button) findViewById(R.id.closeBtn);
        btn_close.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }

        });

        nameTxtView = (TextView) findViewById(R.id.nameTxt);
        nameTxtView.setText(MapActivity.trucks.get(0).getName());

        pTxtView = (TextView) findViewById(R.id.phoneTxt);
        pTxtView.setText(MapActivity.trucks.get(0).getPhoneNum());

        eTxtView = (TextView) findViewById(R.id.emailTxt);
        eTxtView.setText(MapActivity.trucks.get(0).getEmail());

        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);

        int w = dm.widthPixels;
        int h = dm.heightPixels;

        getWindow().setLayout((int) (w*.9), (int) (h*.9));

        WindowManager.LayoutParams params = getWindow().getAttributes();
        params.gravity = Gravity.CENTER;
        params.x = 0;
        params.y = -20;

        getWindow().setAttributes(params);
    }
}
