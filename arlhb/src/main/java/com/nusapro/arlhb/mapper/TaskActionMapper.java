package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.TaskAction;

@Mapper
public interface TaskActionMapper {
	List<TaskAction> findAll();
	List<TaskAction> findByRoleId(int roleId);
}
