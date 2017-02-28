package com.nusapro.arlhb.sysadmin.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.Location;
import com.nusapro.arlhb.model.Role;

@Mapper
public interface LocationMapper {
	List<Role> findAllByPage(Map<String, Object> params);
	int countAll(Map<String, Object> params);
	void create(Location location);
}
