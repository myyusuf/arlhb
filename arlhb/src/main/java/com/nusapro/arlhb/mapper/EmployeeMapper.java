package com.nusapro.arlhb.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Branch;
import com.nusapro.arlhb.model.Employee;
import com.nusapro.arlhb.model.Location;

@Mapper
public interface EmployeeMapper {
	
	List<Employee> findAllByPage(Map<String, Object> params);
	int countAll(Map<String, Object> params);
	
	List<Branch> findAllBranches();
	List<Location> findAllLocations();
	
	void update(Map<String,Object> employeeParam);

}
