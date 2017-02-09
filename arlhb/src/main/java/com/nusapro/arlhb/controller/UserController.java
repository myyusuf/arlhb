package com.nusapro.arlhb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.mapper.EmployeeMapper;
import com.nusapro.arlhb.model.Authority;
import com.nusapro.arlhb.model.Employee;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class UserController {
	
	@Autowired
	EmployeeMapper employeeMapper;
	
	@RequestMapping(value = "/users")
	@ResponseBody
	List<Employee> list() {
		return employeeMapper.findAll();
	}
	
	@RequestMapping(value = "/user/authorities")
	@ResponseBody
	List<Authority> authorities() {
		List<Authority> authorities = new ArrayList<Authority>();
		Authority authority = new Authority();
		authority.setId(1);
		authority.setLabel("Customer");
		authority.setValue("CUSTOMER");
		authority.setExpanded(true);
		authorities.add(authority);
		
		authority = new Authority();
		authority.setId(2);
		authority.setLabel("Management");
		authority.setValue("MANAGEMENT");
		authority.setExpanded(true);
		authority.setParentId(1);
		authorities.add(authority);
		
		authority = new Authority();
		authority.setId(3);
		authority.setLabel("View");
		authority.setValue("VIEW");
		authority.setChecked(true);
		authority.setExpanded(true);
		authority.setParentId(2);
		authorities.add(authority);
		
		authority = new Authority();
		authority.setId(4);
		authority.setLabel("Edit");
		authority.setValue("EDIT");
		authority.setChecked(false);
		authority.setExpanded(true);
		authority.setParentId(2);
		authorities.add(authority);
		
		return authorities;
	}

}
