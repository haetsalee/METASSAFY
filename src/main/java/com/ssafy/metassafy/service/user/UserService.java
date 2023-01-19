package com.ssafy.metassafy.service.user;

import com.ssafy.metassafy.dto.user.JwtInfoDto;
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


    public JwtInfoDto login(User user) {
        JwtInfoDto loginUser=mapper.login(user);
        if(loginUser!=null){
            return loginUser;
        }
        return new JwtInfoDto();
    }

    public int getCount(String user_id) {
        return mapper.getCount(user_id);
    }

    public User getUser(String user_id) {
        return mapper.getUser(user_id);
    }

    public void update(User user) {
        mapper.update(user);
    }

    public int getEmailCount(String email) {
        return mapper.getEmailCount(email);
    }

    public void deleteUser(String user_id) {
        mapper.deleteUser(user_id);
    }
}