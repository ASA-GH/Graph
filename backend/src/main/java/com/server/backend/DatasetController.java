package com.server.backend;

import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.TimeUnit;

@RestController
public class DatasetController implements Manager {

    private GeneralTimer timer = new GeneralTimer(1, 1, this);
    private Map<String, List<JSONObject>> stor = new HashMap<>();
    private List<String> labels = Arrays.asList("Amazon", "Microsoft", "LVMH", "Zara", "Facebook", "Software", "Walmart", "Telecom", "Google", "BLP", "Nike");
    private List<String> timeList = new ArrayList<>();
    private int scale = 120;

    @PostMapping(value = "/dataset", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getDataset(@RequestBody Dataset dataset) throws Exception {
        final Combine combine = new Combine(dataset, Map.of("scale", (Object) timeList, "data", (Object) stor));
        return combine.getDataset().toString();
    }

    @RequestMapping(value = "/labels", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getLabels(@RequestParam MultiValueMap<String, String> queryMap) throws Exception {
        final Combine combine = new Combine(Map.of("labels", (Object) labels));
        return combine.getLabels();
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    public void Update() {
        long timeSeconds = TimeUnit.MILLISECONDS.toSeconds(System.currentTimeMillis());
        String time = Long.toString(timeSeconds)+"000";

        timeList.add(time);
        Normalization(timeList);

        for (String label : labels) {
            if (!stor.containsKey(label))
                stor.put(label, new ArrayList<>());

            List<JSONObject> list = stor.get(label);
            list.add(new JSONObject().put("x", time).put("y", Integer.toString(new Random().nextInt(20))));
            Normalization(list);
        }
    }

    private <T> void Normalization(List<T> list) {
        if (list.size() > scale)
            list.remove(0);
    }
}





