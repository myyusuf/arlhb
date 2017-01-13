package com.nusapro.arlhb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.mapper.RoleMapper;
import com.nusapro.arlhb.model.Role;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class RoleController {
	
	@Autowired
	RoleMapper roleMapper;

	@RequestMapping(value = "/roles")
	@ResponseBody
	List<Role> list() {
		return roleMapper.findAll();
	}

}
