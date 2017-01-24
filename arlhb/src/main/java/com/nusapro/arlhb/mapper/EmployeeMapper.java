package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Employee;

@Mapper
public interface EmployeeMapper {
	
	List<Employee> findAll();

}
