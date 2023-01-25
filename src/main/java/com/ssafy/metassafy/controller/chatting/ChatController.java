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
        logger.info("rooms - 호출");
        return new ResponseEntity<List<ChatRoomDto>>(chatService.findAllRooms(chatParameterDto), HttpStatus.OK);
    }

    //채팅방 생성
    @PostMapping(value = "/room")
    public ResponseEntity<String> createRoom(ChatParameterDto chatParameterDto) throws Exception{

        if(chatService.createChatRoom(chatParameterDto.getCroom_name())){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅방 이름 변경
    @PutMapping(value = "/room")
    public ResponseEntity<String> editChatRoom(ChatParameterDto chatParameterDto) throws Exception{

        if(chatService.editChatRoom(chatParameterDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅방 삭제
    @DeleteMapping(value = "/room")
    public ResponseEntity<String> deleteChatRoom(ChatParameterDto chatParameterDto) throws Exception{

        if(chatService.deleteChatRoom(chatParameterDto)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    //채팅 목록 조회
    @GetMapping
    public ResponseEntity<List<ChatDto>> findAllChat(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("rooms - 호출");
        return new ResponseEntity<List<ChatDto>>(chatService.findAllChat(chatParameterDto), HttpStatus.OK);
    }

    //안읽은 채팅 업데이트
    @PutMapping(value = "/{chat_no}")
    public ResponseEntity<String> updateNotRead(@PathVariable("chat_no") int chat_no) throws Exception{

        if(chatService.updateNotRead(chat_no)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

}
