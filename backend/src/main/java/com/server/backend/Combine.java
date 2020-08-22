package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
import java.util.Map;

public class Combine {
    private final List<String> labels;
    private final Map<String, Object> context;

    public Combine(List<String> labels, Map<String, Object> context) {
        this.labels = labels;
        this.context = context;
    }

    public String Run() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("scale") || !context.containsKey("data"))
            throw new Exception("Not enough data in context");

        JSONArray scale = new JSONArray((List<String>)context.get("scale"));
        JSONArray dataset = new JSONArray();
        Map<String, List<String>> data = (Map<String, List<String>>) context.get("data");
        for (String label : labels) {
            JSONObject obj = new JSONObject();
            if (data.containsKey(label))
                obj.put("label", label)
                        .put("data", new JSONArray(context.get(label)));
            dataset.put(obj);
        }

        return new JSONObject()
                .put("scale", scale)
                .put("dataset", dataset)
                .toString();
    }
}
