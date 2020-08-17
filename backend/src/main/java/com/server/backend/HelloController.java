package com.server.backend;

        import org.springframework.util.MultiValueMap;
        import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {

    private int sec = 0;

    @RequestMapping(value = "/dataset", method = RequestMethod.GET)
    public String getDynamicUriValue(@RequestParam MultiValueMap<String, String> queryMap) {
        final Generator generator = new Generator(queryMap.get("id"), sec);
        sec++;
        return generator.Run();
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }
}





