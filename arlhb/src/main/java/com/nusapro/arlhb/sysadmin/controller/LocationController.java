package com.nusapro.arlhb.sysadmin.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.dto.ResponseDto;
import com.nusapro.arlhb.model.Location;
import com.nusapro.arlhb.model.Role;
import com.nusapro.arlhb.sysadmin.service.LocationService;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class LocationController {
	
	@Autowired
	private LocationService locationService;
	
	public void create(Map<String, Object> locationParam) {
		String name = (String) locationParam.get("name");
		String address = (String) locationParam.get("address");
		String telp = (String) locationParam.get("telp");
		
		Location location = new Location();
		location.setName(name);
		location.setAddress(address);
		location.setTelp(telp);
		
		locationService.create(location);
		
	}
	
	@RequestMapping(value = "/locations")
	@ResponseBody
	ResponseDto<Role> list(@RequestParam("pagesize") int pageSize, 
			@RequestParam("pagenum") int pageNum,
			@RequestParam(name="searchTxt", required=false, defaultValue="") String searchTxt) {


		searchTxt = "%" + searchTxt + "%";

		int start = pageNum * pageSize;

 		Map<String, Object> params = new HashMap<String, Object>();
		params.put("start", start);
		params.put("pageSize", pageSize);
		params.put("searchTxt", searchTxt);

		ResponseDto<Role> responseDto = new ResponseDto<Role>();
		responseDto.setData(locationService.findAllByPage(params));
		responseDto.setTotalRecords(locationService.countAll(params));

		return responseDto;

	}

}
