package com.server.backend;

import java.util.Timer;
import java.util.TimerTask;

public class GeneralTimer {
    Timer timer;
    Manager manager;
    public GeneralTimer(int delay, int period, Manager manager) {
        this.manager = manager;
        timer = new Timer(true);
        timer.schedule(new RemindTask(), delay*1000, period*1000);
    }

    class RemindTask extends TimerTask {
        public void run() {
            manager.Update();
        }
    }
    public void Cancel (){
        timer.cancel(); //Terminate the timer thread
    }
}
