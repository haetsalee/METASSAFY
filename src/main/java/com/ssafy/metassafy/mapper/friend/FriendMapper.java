package com.ssafy.metassafy.mapper.friend;

import com.ssafy.metassafy.dto.friend.friendDto;
import com.ssafy.metassafy.dto.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface FriendMapper {
    List<User> getFriendList(String user_id);
    String getFriendNum(String user_id);
}
