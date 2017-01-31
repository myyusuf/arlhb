package com.nusapro.arlhb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.mapper.EmployeeMapper;
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

}
