package com.server.backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Dataset {
    private List<Object> labels;

    Dataset() {
    }

    Dataset(List<Object> labels) {
        this.labels = labels;
    }

    public void setLabels(List<Object> labels) {
        this.labels = labels;
    }

    public List<Object> getLabels() {
        return labels;
    }

    public List<String> getTitles() {
        List<String> titles = new ArrayList<>();
        for (Object it : labels) {
            titles.add(((Map<String, String>) it).get("title"));
        }
        return titles;
    }

    @Override
    public String toString() {
        return "Dataset{" +
                "labels=" + labels +
                '}';
    }
}
