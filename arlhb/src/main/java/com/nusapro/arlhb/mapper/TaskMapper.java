package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Task;

@Mapper
public interface TaskMapper {
	List<Task> findAll();
}
