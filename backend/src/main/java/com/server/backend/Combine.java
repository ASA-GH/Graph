package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Combine {
    private final List<JSONObject> labels;
    private final Map<String, Object> context;

    public Combine(List<JSONObject> labels, Map<String, Object> context) {
        this.labels = labels;
        this.context = context;
    }



    public Combine(Map<String, Object> context) {
        this.labels = new ArrayList<>();
        this.context = context;
    }

    public String isContains() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("labels"))
            throw new Exception("Not enough data in context");

        if (labels == null)
            throw new Exception("wrong labels");

        List<String> list = (List<String>)context.get("labels");
        return new JSONObject()
                .put("contains", (labels.size() >= 1 && list.contains(labels.get(0))) ? "yes" : "no" )
                .toString();
    }
//            for(JSONObject item : labels){
//        this.labels.add(item.toString());
//    }

    public Map<String, Object>  getDataset() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("scale") || !context.containsKey("data"))
            throw new Exception("Not enough data in context");

        if (labels == null)
            throw new Exception("wrong labels");

        JSONArray scale = new JSONArray((List<String>)context.get("scale"));
        JSONArray dataset = new JSONArray();
        Map<String, List<String>> data = (Map<String, List<String>>) context.get("data");
        for (JSONObject label : labels) {

            System.out.println(label.toString());
            if (data.containsKey(label.toString())) {
                JSONObject obj = new JSONObject();
                obj.put("label", label.toString())
                        .put("data", new JSONArray(data.get(label.toString())));
                dataset.put(obj);
            }
        }
        Map<String, Object> result = new HashMap<>();
        result.put("scale", scale.toString());
        result.put("dataset", dataset.toString());
        return result;
    }

    public String getLabels() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("labels"))
            throw new Exception("Not enough data in context");

        return new JSONObject()
                .put("labels", new JSONArray((List<String>)context.get("labels")))
                .toString();
    }
}
