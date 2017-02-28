package com.nusapro.arlhb.sysadmin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.model.CorporateEntity;
import com.nusapro.arlhb.sysadmin.mapper.CorporateEntityMapper;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class CorporateEntityController {
	
	@Autowired
	private CorporateEntityMapper corporateEntityMapper;
	
	@RequestMapping(value = "/corporate_entities")
	@ResponseBody
	List<CorporateEntity> list(@RequestParam(name="searchTxt", required=false, defaultValue="") String searchTxt) {
		searchTxt = "%" + searchTxt + "%";
		
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("searchTxt", searchTxt);
		
		return corporateEntityMapper.findAll(params);

	}

}
