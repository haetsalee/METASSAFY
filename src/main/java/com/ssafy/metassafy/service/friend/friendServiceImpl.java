package com.ssafy.metassafy.service.friend;

import com.ssafy.metassafy.dto.friend.friendDto;

import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.mapper.friend.FriendMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class friendServiceImpl implements  FriendService{
    @Autowired
    FriendMapper mapper;
    @Override
    public List<User> getFrinedList(String user_id) {
         return mapper.getFriendList(user_id);
    }

    @Override
    public String getFrinedNum(String user_id) {
        return mapper.getFriendNum(user_id);
    }
}
