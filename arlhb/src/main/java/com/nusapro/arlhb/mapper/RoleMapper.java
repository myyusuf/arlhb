package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.nusapro.arlhb.model.Role;

@Mapper
public interface RoleMapper {
	@Select("SELECT * FROM tblrole WHERE RoleId = #{roleId}")
    Role findById(@Param("roleId") int roleId);
	
	@Select("SELECT * FROM tblrole")
	List<Role> findAll();
	
	@Insert("INSERT into role(roleId, roleName) VALUES(#{roleId}, #{roleName})")
	void insertRole(Role role);
	
	@Update("UPDATE role SET roleName=#{roleName} WHERE roleId =#{roleId}")
	void updateRole(Role role);
	
	@Delete("DELETE FROM role WHERE roleId =#{roleId}")
	void deleteRole(int id);
}
