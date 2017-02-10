package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.scheduling.config.Task;

@Mapper
public interface TaskMapper {
	List<Task> findAll();
}
