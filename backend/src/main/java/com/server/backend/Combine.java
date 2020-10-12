package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Combine {
    private final List<String> labels;
    private final Map<String, Object> context;

    public Combine(Dataset dataset, Map<String, Object> context) {
        this.labels = dataset.getTitles();
        this.context = context;
    }

    public Combine(Map<String, Object> context) {
        this.labels = new ArrayList<>();
        this.context = context;
    }

    public JSONObject getDataset() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("scale") || !context.containsKey("data"))
            throw new Exception("Not enough data in context");

        if (labels == null)
            throw new Exception("wrong labels");

        JSONArray scale = new JSONArray((List<String>) context.get("scale"));
        JSONArray dataset = new JSONArray();
        Map<String, List<JSONObject>> data = (Map<String, List<JSONObject>>) context.get("data");
        for (String label : labels) {
            if (data.containsKey(label)) {
                JSONObject obj = new JSONObject();
                obj.put("label", label)
                        .put("data", toJSONArray(data.get(label)));
                dataset.put(obj);
            }
        }
        JSONObject result = new JSONObject();
        result.put("scale", scale);
        result.put("dataset", dataset);

        return result;
    }

    public String getLabels() throws Exception {
        if (context == null)
            throw new Exception("wrong context");

        if (!context.containsKey("labels"))
            throw new Exception("Not enough data in context");

        return new JSONObject()
                .put("labels", new JSONArray((List<String>) context.get("labels")))
                .toString();
    }

    private JSONArray toJSONArray(List<JSONObject> list) {
        JSONArray arr = new JSONArray();
        for (JSONObject item : list) {
            arr.put(item);
        }
        return arr;
    }

}
