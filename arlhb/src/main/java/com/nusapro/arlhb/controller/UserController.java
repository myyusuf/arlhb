package com.nusapro.arlhb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.mapper.EmployeeMapper;
import com.nusapro.arlhb.mapper.TaskMapper;
import com.nusapro.arlhb.model.Authority;
import com.nusapro.arlhb.model.Branch;
import com.nusapro.arlhb.model.Employee;
import com.nusapro.arlhb.model.Location;
import com.nusapro.arlhb.model.Task;
import com.nusapro.arlhb.model.TaskAction;
import com.nusapro.arlhb.service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class UserController {
	
	@Autowired
	EmployeeMapper employeeMapper;
	
	@Autowired
	TaskMapper taskMapper;
	
	@Autowired
	UserService userService;
	
	@RequestMapping(value = "/users")
	@ResponseBody
	List<Employee> list() {
		return employeeMapper.findAll();
	}
	
	@RequestMapping(value = "/user/authorities")
	@ResponseBody
	List<Authority> authorities() {
		
//		List<Authority> authorities = new ArrayList<Authority>();
//		
//		List<Task> tasks = taskMapper.findAll();
//		for (Task task : tasks) {
//			Authority authority = new Authority();
//			authority.setId(task.getTaskId());
//			authority.setParentId(task.getParentId());
//			authority.setLabel(task.getTaskName());
//			authority.setValue(String.valueOf(task.getTaskId()));
//			authority.setExpanded(true);
//			authorities.add(authority);
//		}
		
//		authority = new Authority();
//		authority.setId(2);
//		authority.setLabel("Management");
//		authority.setValue("MANAGEMENT");
//		authority.setExpanded(true);
//		authority.setParentId(1);
//		authorities.add(authority);
		
		return userService.getAuthorities();
	}
	
	@RequestMapping(value = "/role_task_actions/{roleId}")
	@ResponseBody
	List<TaskAction> roleTaskActions(@PathVariable("roleId") int roleId) {
		
		return userService.getRoleTaskAction(roleId);
	}
	
	@RequestMapping(value = "/user/branches")
	@ResponseBody
	List<Branch> branches() {
		
		return userService.getBranches();
	}
	
	@RequestMapping(value = "/user/locations")
	@ResponseBody
	List<Location> locations() {
		
		return userService.getLocations();
	}

}
