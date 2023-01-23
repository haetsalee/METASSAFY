package com.ssafy.metassafy.service.friend;

import com.ssafy.metassafy.dto.friend.friendDto;
import com.ssafy.metassafy.dto.user.User;

import java.util.List;

public interface FriendService {
    List<User> getFrinedList(String user_id);
    String getFrinedNum(String user_id);
}
