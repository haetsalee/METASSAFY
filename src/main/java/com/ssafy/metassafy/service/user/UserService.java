package com.ssafy.metassafy.service.user;

import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.mapper.user.UserMapper;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    final UserMapper mapper;

    public UserService(UserMapper mapper) {
        this.mapper = mapper;
    }

    public void regist(User user) {
        mapper.regist(user);
    }


}