package com.nusapro.arlhb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
@Configuration
class WebSecurityConfig extends WebSecurityConfigurerAdapter {
 
  @Override
  protected void configure(HttpSecurity http) throws Exception {
	  http
      .authorizeRequests()
//          .antMatchers("/", "/home").permitAll()
      		.antMatchers("/arlhb_assets/**").permitAll()
      		.antMatchers("/home").permitAll()
          .anyRequest().authenticated()
          .and()
      .formLogin()
          .loginPage("/login")
          .permitAll()
          .and()
      .logout()
          .permitAll();
  }
  
}