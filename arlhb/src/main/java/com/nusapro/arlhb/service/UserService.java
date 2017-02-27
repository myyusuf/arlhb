package com.nusapro.arlhb.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nusapro.arlhb.mapper.EmployeeMapper;
import com.nusapro.arlhb.mapper.TaskActionMapper;
import com.nusapro.arlhb.mapper.TaskMapper;
import com.nusapro.arlhb.model.Authority;
import com.nusapro.arlhb.model.Branch;
import com.nusapro.arlhb.model.Location;
import com.nusapro.arlhb.model.Task;
import com.nusapro.arlhb.model.TaskAction;

@Service
public class UserService {
	
	@Autowired
	TaskMapper taskMapper;
	
	@Autowired
	TaskActionMapper taskActionMapper;
	
	@Autowired
	EmployeeMapper employeeMapper;
	
	public List<Authority> getAuthorities(){
		
		List<Authority> authorities = new ArrayList<Authority>();
		
		List<Task> tasks = taskMapper.findAll();
		for (Task task : tasks) {
			Authority authority = new Authority();
			authority.setId(task.getTaskId());
			authority.setParentId(task.getParentId());
			authority.setLabel(task.getTaskName());
			authority.setValue(String.valueOf(task.getTaskId()));
			authority.setExpanded(false);
			authorities.add(authority);
		}
		
		List<TaskAction> taskActions = taskActionMapper.findAll();
		for (TaskAction taskAction : taskActions) {
			Authority authority = new Authority();
			
			int tempTaskId = taskAction.getTaskActionId() * 1000;
			
			authority.setId(tempTaskId);
			authority.setParentId(taskAction.getTaskId());
			authority.setLabel(taskAction.getActionName());
			authority.setValue(String.valueOf(tempTaskId));
			authority.setExpanded(true);
			authorities.add(authority);
		}
		
		return authorities;
	}
	
	@Transactional
	public void update(String userIdParam, Map<String, Object> userParam) {
		
		int roleId = (int) userParam.get("role");
		int branchId = (int) userParam.get("branch");
		int locationId = (int) userParam.get("location");
		
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("employeeId", userIdParam);
		params.put("roleId", roleId);
		params.put("branchId", branchId);
		params.put("locationId", locationId);
		
		employeeMapper.update(params);
	}
	
	public List<TaskAction> getRoleTaskAction(int roleId){
		
		
		List<TaskAction> taskActions = taskActionMapper.findByRoleId(roleId);
		
		
		return taskActions;
	}

	public List<Branch> getBranches() {
		return employeeMapper.findAllBranches();
	}

	public List<Location> getLocations() {
		return employeeMapper.findAllLocations();
	}
	
	@Transactional
	public void blockUser(String userIdParam) {
		
		Map<String,Object> params = new HashMap<String, Object>();
		params.put("employeeId", userIdParam);
		
		employeeMapper.blockUser(params);
	}
}
