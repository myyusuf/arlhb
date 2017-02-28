package com.nusapro.arlhb.sysadmin.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.nusapro.arlhb.model.CorporateEntity;

@Mapper
public interface CorporateEntityMapper {
	
	List<CorporateEntity> findAll(Map<String, Object> params);

}
