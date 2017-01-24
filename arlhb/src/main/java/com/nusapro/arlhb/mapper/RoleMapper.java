package com.nusapro.arlhb.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.nusapro.arlhb.model.Role;

@Mapper
public interface RoleMapper {
	
    Role findById(int roleId);
	
	List<Role> findAll();
	
	void create(Role role);
	
	void update(Role role);

	void delete(int roleId);
}
