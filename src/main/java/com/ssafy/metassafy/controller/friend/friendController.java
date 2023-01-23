package com.ssafy.metassafy.controller.friend;

import com.ssafy.metassafy.controller.board.BoardController;
import com.ssafy.metassafy.dto.friend.friendDto;
import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.service.board.BoardService;
import com.ssafy.metassafy.service.friend.FriendService;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/friend")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api("친구 컨트롤러  API V1")
public class friendController {
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";


    @Autowired
    private FriendService service;

    //user_id의 친구 목록 조회
    @GetMapping("/getFriendList/{user_id}")
    public List<User> getFriendList(@PathVariable("user_id") String user_id){
        return service.getFrinedList(user_id);
    }

    //user_id의 친구 수 조회
    @GetMapping("/getFriendNum/{user_id}")
    public String getFriendNum(@PathVariable("user_id") String user_id){
        return service.getFrinedNum(user_id);
    }


    //친구 신청 보내기 -> Insert Into Friend(from_user_id,to_user_id,accept) Values("ssafy","test",false);
    //신청 못보내는 경우 -> 이미 친구인 경우, 상대가 보낸 친구 신청이 있는 경우 =accpet가 true든 false든 테이블에 관계가 있는 경우


    //친구 신청 온거 알림 조회

    //신청 수락(둘을 친구로 만드는 로직 추가하기)

    //신청 거절


}
