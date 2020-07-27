package com.server.backend;

import java.util.Random;

public class Generator {
    private String id;
    private int sec;

    public Generator(String id, int sec) {
        this.id = id;
        this.sec = sec;
    }

    public String Run() {
        return "{x:\"" + sec + "\",y:\"" + Integer.toString(new Random().nextInt(20)) + "\"}";
    }

}
