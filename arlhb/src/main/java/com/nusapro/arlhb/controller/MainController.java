package com.nusapro.arlhb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nusapro.arlhb.mapper.CityMapper;
import com.nusapro.arlhb.mapper.RoleMapper;
import com.nusapro.arlhb.model.City;
import com.nusapro.arlhb.model.Role;

@Controller
@EnableAutoConfiguration
@ComponentScan({"com.nusapro.arlhb"})
public class MainController {
	
	@Autowired
	CityMapper cityMapper;
	
	@Autowired
	RoleMapper roleMapper;
	
	@RequestMapping("/")
    String main() {
//		City city = cityMapper.findByCode("JKT");
//		Role role = roleMapper.findById(1);
//        return "Info : Arlhb. " + role.getRoleName();
		return "workspace";
    }
	
	@RequestMapping("/main")
    String workspace() {
		return "workspace";
    }
	
	@RequestMapping("/home")
    String home() {
		return "homex";
    }
	
	@RequestMapping("/hello")
    String hello() {
		return "hellox";
    }
	
	@RequestMapping("/login")
    String login() {
		return "loginx";
    }
}
