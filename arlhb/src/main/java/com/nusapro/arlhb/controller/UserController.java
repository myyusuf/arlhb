package com.nusapro.arlhb.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.dto.ResponseDto;
import com.nusapro.arlhb.mapper.EmployeeMapper;
import com.nusapro.arlhb.mapper.TaskMapper;
import com.nusapro.arlhb.model.Authority;
import com.nusapro.arlhb.model.Branch;
import com.nusapro.arlhb.model.Employee;
import com.nusapro.arlhb.model.Location;
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
	ResponseDto<Employee> list(@RequestParam("pagesize") int pageSize, 
			@RequestParam("pagenum") int pageNum,
			@RequestParam(name="searchTxt", required=false, defaultValue="") String searchTxt) {
		
		searchTxt = "%" + searchTxt + "%";

		int start = pageNum * pageSize;

 		Map<String, Object> params = new HashMap<String, Object>();
		params.put("start", start);
		params.put("pageSize", pageSize);
		params.put("searchTxt", searchTxt);
		
		ResponseDto<Employee> responseDto = new ResponseDto<Employee>();
		responseDto.setData(employeeMapper.findAllByPage(params));
		responseDto.setTotalRecords(employeeMapper.countAll(params));
		
		return responseDto;
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
	
	@RequestMapping(value="/users/{userId}", method=RequestMethod.PUT)
    @ResponseBody 
    Map<String, String> update(@PathVariable("userId") String userId, @RequestBody Map<String, Object> userParam) {
		
		userService.update(userId, userParam);
		
        return ResponseHelper.responseSuccess();
    }
	
	@RequestMapping(value="/user_block/{userId}", method=RequestMethod.PUT)
    @ResponseBody 
    Map<String, String> userBlock(@PathVariable("userId") String userId, @RequestBody Map<String, Object> userParam) {
		
		userService.blockUser(userId);
		
        return ResponseHelper.responseSuccess();
    }

}
