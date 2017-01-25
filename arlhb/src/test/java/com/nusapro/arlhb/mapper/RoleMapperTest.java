package com.nusapro.arlhb.mapper;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.nusapro.arlhb.model.Role;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class,
    DbUnitTestExecutionListener.class})
public class RoleMapperTest {
	
	@Autowired
	private RoleMapper roleMapper;
	
	@Test
	@DatabaseSetup("/META-INF/roleData.xml")
    public void findAllTest() {
        List<Role> roles = roleMapper.findAll();
        assertEquals(1, roles.size());
    }
	
	@Test
	@DatabaseSetup("/META-INF/roleData.xml")
    public void findById() {
        Role role = roleMapper.findById(1);
        assertEquals(1, role.getRoleId());
    }
	
	@Test
	@DatabaseSetup("/META-INF/roleDataClean.xml")
    public void create() {
		Role newRole = new Role();
		newRole.setRoleId(1);
		newRole.setRoleName("Admin");
        roleMapper.create(newRole);
        
        Role role = roleMapper.findById(1);
        assertEquals(1, role.getRoleId());
        
    }
	
	@Test
	@DatabaseSetup("/META-INF/roleData.xml")
    public void update() {
        Role role = roleMapper.findById(1);
        role.setRoleName("User");
        
        roleMapper.update(role);
        
        role = roleMapper.findById(1);
        assertEquals("User", role.getRoleName());
    }
	
	@Test
	@DatabaseSetup("/META-INF/roleData.xml")
    public void delete() {
		roleMapper.delete(1);
        List<Role> roles = roleMapper.findAll();
        assertEquals(0, roles.size());
    }

}
