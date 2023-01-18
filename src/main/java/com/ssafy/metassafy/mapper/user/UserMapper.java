package com.ssafy.metassafy.mapper.user;

import com.ssafy.metassafy.dto.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    void regist(User user);
    User login(User user);
}