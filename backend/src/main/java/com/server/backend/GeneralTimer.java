package com.server.backend;

import java.util.Timer;
import java.util.TimerTask;

public class GeneralTimer {
    Timer timer;
    Manager manager;
    public GeneralTimer(int seconds, Manager manager) {
        this.manager = manager;
        timer = new Timer();
        timer.schedule(new RemindTask(), seconds);
    }

    class RemindTask extends TimerTask {
        public void run() {
            manager.Update();
            System.out.println("Time's up!");
        }
    }
    public void Cancel (){
        timer.cancel(); //Terminate the timer thread
    }
}
