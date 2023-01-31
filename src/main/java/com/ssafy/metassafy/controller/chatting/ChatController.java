package com.ssafy.metassafy.controller.chatting;

import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import com.ssafy.metassafy.service.chatting.ChatService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
public class ChatController {

    private final ChatService chatService;
    private static final Logger logger = LoggerFactory.getLogger(ChatController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    //채팅방 목록 조회
    @GetMapping(value = "/rooms")
    public ResponseEntity<List<ChatRoomDto>> findAllRooms(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("findAllRooms - 호출");
        return new ResponseEntity<List<ChatRoomDto>>(chatService.findAllRooms(chatParameterDto), HttpStatus.OK);
    }

    //채팅방 생성
    @PostMapping(value = "/room")
    public ResponseEntity<String> createRoom(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("createRoom - 호출");
        if(chatService.createChatRoom(chatParameterDto.getCroom_name())){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅방 이름 변경
    @PutMapping(value = "/room")
    public ResponseEntity<String> editChatRoom(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("editChatRoom - 호출");
        if(chatService.editChatRoom(chatParameterDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅방 삭제
    @DeleteMapping(value = "/room")
    public ResponseEntity<String> deleteChatRoom(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("deleteChatRoom - 호출");
        if(chatService.deleteChatRoom(chatParameterDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅 목록 조회
    @GetMapping("/upscroll")
    public ResponseEntity<List<ChatDto>> upScroll(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("upScroll - 호출");
        return new ResponseEntity<List<ChatDto>>(chatService.upScroll(chatParameterDto), HttpStatus.OK);
    }

    //채팅 목록 조회
    @GetMapping
    public ResponseEntity<List<ChatDto>> findAllChat(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("findAllChat start_no 방에 들어갈 때는 0으로 넣어주세요 그 외에는 현재 chat_no 중에 가장 작은 값, user_id, croom_no - 호출");
        return new ResponseEntity<List<ChatDto>>(chatService.findAllChat(chatParameterDto), HttpStatus.OK);
    }

    //안읽은 채팅 업데이트
    @PutMapping
    public ResponseEntity<String> updateNotRead(@RequestBody ChatParameterDto chatParameterDto) throws Exception{
        logger.info("updateNotRead - 호출 "  + chatParameterDto);
        if(chatService.updateNotRead(chatParameterDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

}
