package com.server.backend;

import java.util.Timer;
import java.util.TimerTask;

public class GeneralTimer {
    Timer timer;
    public GeneralTimer(int seconds) {
        timer = new Timer();
        timer.schedule(new RemindTask(), seconds*1000);
    }

    class RemindTask extends TimerTask {
        public void run() {
            System.out.println("Time's up!");
        }
    }
    public void Cancel (){
        timer.cancel(); //Terminate the timer thread
    }
}
