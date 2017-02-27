package com.nusapro.arlhb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Role;
import com.nusapro.arlhb.model.RoleTaskAction;

@Mapper
public interface RoleMapper {
	
    Role findById(int roleId);
	
	List<Role> findAllByPage(Map<String, Object> params);
	
	int countAll(Map<String, Object> params);
	
	void create(Role role);
	
	void update(Role role);

	void delete(int roleId);
	
	void createRoleTaskAction(RoleTaskAction roleTaskAction);
	
	void deleteRoleTaskAction(int roleId);

	List<Role> findAll();
	
}
