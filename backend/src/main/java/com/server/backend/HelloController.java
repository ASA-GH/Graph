package com.server.backend;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    private int sec = 0;

    @RequestMapping(value = "/dataset/{id}", method = RequestMethod.GET)
    public String getDynamicUriValue(@PathVariable String id) {

        final Generator generator = new Generator(id, sec);
        sec++;
        return generator.Run();
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }
}






