package com.nusapro.arlhb.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
@ComponentScan({"com.nusapro.arlhb"})
public class MainController {
	
	@RequestMapping("/")
    @ResponseBody
    String home() {
        return "Info : Arlhb ";
    }
}
