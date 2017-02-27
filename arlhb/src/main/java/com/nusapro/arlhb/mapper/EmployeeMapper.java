package com.nusapro.arlhb.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Branch;
import com.nusapro.arlhb.model.Employee;
import com.nusapro.arlhb.model.Location;

@Mapper
public interface EmployeeMapper {
	
	List<Employee> findAll();
	List<Branch> findAllBranches();
	List<Location> findAllLocations();

}
