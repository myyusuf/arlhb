package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.nusapro.arlhb.model.Employee;

@Mapper
public interface EmployeeMapper {
	
	@Results({
		@Result(property = "employeeId", column = "employeeId"),
        @Result(property = "firstName", column = "first_name"),
        @Result(property = "lastName", column = "last_name")
      })
	@Select("SELECT * FROM employee")
	List<Employee> findAll();

}
