package com.nusapro.arlhb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nusapro.arlhb.mapper.CityMapper;
import com.nusapro.arlhb.model.City;

@Controller
@EnableAutoConfiguration
@ComponentScan({"com.nusapro.arlhb"})
public class MainController {
	
	@Autowired
	CityMapper cityMapper;
	
	@RequestMapping("/")
    @ResponseBody
    String home() {
		City city = cityMapper.findByCode("JKT");
        return "Info : Arlhb. " + city.getName();
    }
}
