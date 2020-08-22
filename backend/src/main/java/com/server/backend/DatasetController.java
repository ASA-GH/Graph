package com.server.backend;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
public class DatasetController implements Manager {

    private GeneralTimer timer = new GeneralTimer(1, this);
    private Map<String, List<String>> stor = new HashMap<>();
    private List<String> labels = Arrays.asList("Amazon", "Microsoft", "LVMH", "Zara", "Facebook", "Software", "Walmart", "Telecom", "Google", "BLP", "Nike");
    private List<String> timeList = new ArrayList<>();
    private int scale = 120;

    @RequestMapping(value = "/dataset", method = RequestMethod.GET)
    public String getDynamicUriValue(@RequestParam MultiValueMap<String, String> queryMap) throws Exception {
       final Combine combine = new Combine(queryMap.get("label"), Map.of("scale", (Object)timeList, "data", (Object)stor));
       return combine.Run();
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    public void Update() {

        System.out.println("!!!!!!");
        LocalTime time = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        timeList.add(time.format(formatter));
        Normalization(timeList);

        for (String label : labels) {
            if (!stor.containsKey(label))
                stor.put(label, new ArrayList<>());

            List<String> list = stor.get(label);
            list.add(Integer.toString(new Random().nextInt(20)));
            Normalization(list);
        }
    }

    private void Normalization(List<String> list) {
        if (list.size() > scale)
            list.remove(0);
    }
}





