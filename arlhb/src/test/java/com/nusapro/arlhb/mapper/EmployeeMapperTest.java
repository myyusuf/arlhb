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
import com.nusapro.arlhb.model.Employee;

//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class EmployeeMapperTest {
//	
//	@Autowired
//	private EmployeeMapper employeeMapper;
//	
//	@Test
//    public void findAllTest() {
//        List<Employee> employees = employeeMapper.findAll();
//        assertEquals(16, employees.size());
//    }
//
//}

@RunWith(SpringRunner.class)
@SpringBootTest
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class,
    DbUnitTestExecutionListener.class})
public class EmployeeMapperTest {
	
	@Autowired
	private EmployeeMapper employeeMapper;
	
	@Test
	@DatabaseSetup("/META-INF/employeeData.xml")
    public void findAllTest() {
        List<Employee> employees = employeeMapper.findAllByPage(null);
        assertEquals(1, employees.size());
    }

}
