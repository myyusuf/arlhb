package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.nusapro.arlhb.model.Role;

@Mapper
public interface RoleMapper {
	
	@Results({
        @Result(property = "roleId", column = "role_id"),
        @Result(property = "roleName", column = "role_name")
      })
	@Select("SELECT * FROM tblrole WHERE role_id = #{roleId}")
    Role findById(@Param("roleId") int roleId);
	
	@Results({
        @Result(property = "roleId", column = "role_id"),
        @Result(property = "roleName", column = "role_name")
      })
	@Select("SELECT * FROM tblrole")
	List<Role> findAll();
	
	@Insert("INSERT into tblrole(role_id, role_name) VALUES(#{roleId}, #{roleName})")
	void create(Role role);
	
	@Update("UPDATE tblrole SET role_name=#{roleName} WHERE role_id = #{roleId}")
	void update(Role role);
	
	@Delete("DELETE FROM tblrole WHERE role_id = #{roleId}")
	void delete(int id);
}
