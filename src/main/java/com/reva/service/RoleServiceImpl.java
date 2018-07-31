package com.reva.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reva.model.Role;
import com.reva.repository.RoleRepository;


@Service("roleService")
public class RoleServiceImpl implements RoleService{

	@Autowired
    private RoleRepository roleRepository;
    @Autowired
   
	@Override
	public List<Role> getAllRoles() {
		return roleRepository.findAll();
	}
}
