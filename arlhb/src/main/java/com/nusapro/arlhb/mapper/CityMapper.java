package com.nusapro.arlhb.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.nusapro.arlhb.model.City;

@Mapper
public interface CityMapper {

    @Select("SELECT * FROM tbl_city WHERE code = #{code}")
    City findByCode(@Param("code") String code);

}