package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.Random;

public class Generator {
    private final List<String> ids;
    private int sec;

    public Generator(List<String> ids, int sec) {
        this.ids = ids;
        this.sec = sec;
    }

    public String Run() {
        JSONArray dataset = new JSONArray();
        for (String id : ids) {
            JSONObject obj = new JSONObject();
            obj.put("label", id)
                    .put("value", Integer.toString(new Random().nextInt(20)));
            dataset.put(obj);
        }
        return new JSONObject()
                .put("x", sec)
                .put("dataset", dataset)
                .toString();
    }
}
