package com.reva.service;

import com.reva.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}
