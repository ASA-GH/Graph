package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.TimeUnit;

@RestController
public class DatasetController implements Manager {

    private GeneralTimer timer = new GeneralTimer(1, 1,this);
    private Map<String, List<String>> stor = new HashMap<>();
    private List<String> labels = Arrays.asList("Amazon", "Microsoft", "LVMH", "Zara", "Facebook", "Software", "Walmart", "Telecom", "Google", "BLP", "Nike");
    private List<String> timeList = new ArrayList<>();
    private int scale = 120;


//        @RequestMapping(value = "/dataset", method = RequestMethod.GET)
//    public String getDataset(@RequestParam MultiValueMap<String, String> queryMap) throws Exception {
//       final Combine combine = new Combine(queryMap.get("label"), Map.of("scale", (Object)timeList, "data", (Object)stor));
//       return combine.getDataset();
//    }

    @RequestMapping(value = "/dataset", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getDataset(@RequestBody Map<String, Object> queryMap) throws Exception {

        System.out.println("!!!!!!!!!!!!!!!!dataset!!!!!!!!!!!!!!!!!!!");
        System.out.println(queryMap.keySet());
/*
        final Combine combine = new Combine(queryMap.get("label"), Map.of("scale", (Object)timeList, "data", (Object)stor));
        return combine.getDataset();

 */
        return "{}";
    }

    @RequestMapping(value = "/contains", method = RequestMethod.GET)
    public String isContains(@RequestParam MultiValueMap<String, String> queryMap) throws Exception {
        final Combine combine = new Combine(queryMap.get("label"), Map.of("labels", (Object)labels));
        return combine.isContains();
    }
    @RequestMapping(value = "/labels", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getLabels(@RequestParam MultiValueMap<String, String> queryMap) throws Exception {
        System.out.println("!!!!!!!!!!!!!!!labels!!!!!!!!!!!!!!!!!!!!");
        final Combine combine = new Combine(Map.of("labels", (Object)labels));
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

            List<String> list = stor.get(label);
            list.add( String.format("{\"x\":\"%1$s\",\"y\":\"%2$s\"}", time, Integer.toString(new Random().nextInt(20))) );
            Normalization(list);
        }
//        for (String label : dataset) {
//            if (!stor.containsKey(dataset))
//                stor.put(dataset, new ArrayList<>());
//
//            List<String> list = stor.get(label);
//            list.add( String.format("{\"x\":\"%1$s\",\"y\":\"%2$s\"}", time, Integer.toString(new Random().nextInt(20))) );
//            Normalization(list);
//        }

    }

    private void Normalization(List<String> list) {
        if (list.size() > scale)
            list.remove(0);
    }
}





