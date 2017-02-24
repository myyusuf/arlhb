package com.nusapro.arlhb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nusapro.arlhb.mapper.TaskActionMapper;
import com.nusapro.arlhb.mapper.TaskMapper;
import com.nusapro.arlhb.model.Authority;
import com.nusapro.arlhb.model.Task;
import com.nusapro.arlhb.model.TaskAction;

@Service
public class UserService {
	
	@Autowired
	TaskMapper taskMapper;
	
	@Autowired
	TaskActionMapper taskActionMapper;
	
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
}
