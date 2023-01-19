package com.ssafy.metassafy.mapper.user;

import com.ssafy.metassafy.dto.user.JwtInfoDto;
import com.ssafy.metassafy.dto.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    void regist(User user);
    JwtInfoDto login(User user);

    int getCount(String user_id);

    User getUser(String user_id);

    void update(User user);

    int getEmailCount(String email);

    void deleteUser(String user_id);
}