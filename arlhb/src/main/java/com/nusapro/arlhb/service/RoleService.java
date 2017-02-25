package com.nusapro.arlhb.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nusapro.arlhb.mapper.RoleMapper;
import com.nusapro.arlhb.model.Role;
import com.nusapro.arlhb.model.RoleTaskAction;

@Service
public class RoleService {
	
	@Autowired
	RoleMapper roleMapper;
	
	public void addRole(){
		
	}

	@Transactional
	public void createRole(Map<String, Object> roleParam) {
		String roleName = (String) roleParam.get("roleName");
		String description = (String) roleParam.get("description");
		
		Role role = new Role();
		role.setRoleName(roleName);
		role.setDescription(description);
		
		roleMapper.create(role);
		
		List<Map<String,Object>> taskActions = (List<Map<String, Object>>) roleParam.get("authorities");
		for (Map<String, Object> map : taskActions) {
			int roleId = role.getRoleId();
			int taskActionId = Integer.valueOf((String) map.get("id"));
			int taskId = 9999;
			
			if(taskActionId >= 1000){
				
				taskActionId = taskActionId / 1000;
				
				RoleTaskAction roleTaskAction = new RoleTaskAction();
				roleTaskAction.setRoleId(roleId);
				roleTaskAction.setTaskId(taskId);
				roleTaskAction.setTaskActionId(taskActionId);
				roleMapper.createRoleTaskAction(roleTaskAction );
			}
			
		}
		
	}
	
	@Transactional
	public void updateRole(int roleIdParam, Map<String, Object> roleParam) {
		
		String roleName = (String) roleParam.get("roleName");
		String description = (String) roleParam.get("description");
		
		Role role = roleMapper.findById(roleIdParam);
		role.setRoleName(roleName);
		role.setDescription(description);
		
		roleMapper.update(role);
		
		roleMapper.deleteRoleTaskAction(roleIdParam);
		
		List<Map<String,Object>> taskActions = (List<Map<String, Object>>) roleParam.get("authorities");
		for (Map<String, Object> map : taskActions) {
			int roleId = role.getRoleId();
			int taskActionId = Integer.valueOf((String) map.get("id"));
			int taskId = 9999;
			
			if(taskActionId >= 1000){
				
				taskActionId = taskActionId / 1000;
				
				RoleTaskAction roleTaskAction = new RoleTaskAction();
				roleTaskAction.setRoleId(roleId);
				roleTaskAction.setTaskId(taskId);
				roleTaskAction.setTaskActionId(taskActionId);
				roleMapper.createRoleTaskAction(roleTaskAction );
			}
			
		}
		
	}

}
