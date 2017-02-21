package com.nusapro.arlhb.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nusapro.arlhb.dto.ResponseDto;
import com.nusapro.arlhb.mapper.RoleMapper;
import com.nusapro.arlhb.model.Role;

@RestController
@EnableAutoConfiguration
@ComponentScan({ "com.nusapro.arlhb" })
public class RoleController {
	
	@Autowired
	RoleMapper roleMapper;
	
//	@RequestMapping(value="/roles", method=RequestMethod.POST)
//    @ResponseBody 
//    Map<String, String> create(@RequestBody Role roleParam) {
//		
//		roleMapper.create(roleParam);
//		
//        return ResponseHelper.responseSuccess();
//    }
	
	@RequestMapping(value="/roles", method=RequestMethod.POST)
    @ResponseBody 
    Map<String, String> create(@RequestBody Map<String, Object> roleParam) {
		
//		roleMapper.create(roleParam);
		System.out.println(roleParam.get("roleName"));
		
		List<Map<String,Object>> list = (List<Map<String, Object>>) roleParam.get("authorities");
		for (Map<String, Object> map : list) {
			System.out.println(map.get("label"));
		}
		
        return ResponseHelper.responseSuccess();
    }

	@RequestMapping(value = "/roles")
	@ResponseBody
	ResponseDto<Role> list(@RequestParam("pagesize") int pageSize, 
			@RequestParam("pagenum") int pageNum,
			@RequestParam("searchTxt") String searchTxt) {


		searchTxt = "%" + searchTxt + "%";

		int start = pageNum * pageSize;


 		Map<String, Object> params = new HashMap<String, Object>();
		params.put("start", start);
		params.put("pageSize", pageSize);
		params.put("searchTxt", searchTxt);

		ResponseDto<Role> responseDto = new ResponseDto<Role>();
		responseDto.setData(roleMapper.findAll(params));
		responseDto.setTotalRecords(roleMapper.countAll(params));

		return responseDto;

	}
	
	@RequestMapping(value="/roles/{roleId}", method=RequestMethod.PUT)
    @ResponseBody 
    Map<String, String> update(@PathVariable("roleId") int roleId, @RequestBody Role roleParam) {
		
		Role role = roleMapper.findById(roleId);
		role.setRoleName(roleParam.getRoleName());
		roleMapper.update(role);
		
        return ResponseHelper.responseSuccess();
    }
	
	@RequestMapping(value="/roles/{roleId}", method=RequestMethod.DELETE)
    @ResponseBody 
    Map<String, String> delete(@PathVariable("roleId") int roleId) {
		
		roleMapper.delete(roleId);
		
        return ResponseHelper.responseSuccess();
    }
}
