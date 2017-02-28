package com.nusapro.arlhb.sysadmin.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nusapro.arlhb.model.Location;
import com.nusapro.arlhb.model.Role;
import com.nusapro.arlhb.sysadmin.mapper.LocationMapper;

@Service
public class LocationService {
	
	@Autowired
	private LocationMapper locationMapper;

	public List<Role> findAllByPage(Map<String, Object> params) {
		return locationMapper.findAllByPage(params);
	}

	public int countAll(Map<String, Object> params) {
		return locationMapper.countAll(params);
	}

	@Transactional
	public void create(Location location) {
		locationMapper.create(location);
		
	}

}
