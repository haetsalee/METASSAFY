package com.ssafy.metassafy.controller.chatting;

import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ParticipantDto;
import com.ssafy.metassafy.service.chatting.ChatService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/participant")
public class ParticipantController {

    private final ChatService chatService;
    private static final Logger logger = LoggerFactory.getLogger(ParticipantController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    // user의 모든 채팅방 참가 목록 가져오기(user_id, croom_no)
    @GetMapping
    public ResponseEntity<List<ParticipantDto>> findAllParticipants(ChatParameterDto chatParameterDto) throws Exception{
        logger.info("rooms - 호출");
        return new ResponseEntity<List<ParticipantDto>>(chatService.findAllParticipants(chatParameterDto), HttpStatus.OK);
    }


    // user의 모든 not_read_chat을 갱신
    @PutMapping(value = "/notreadchat")
    public ResponseEntity<String> renewNotReadChat(List<ParticipantDto> participantDtos) throws Exception{

        if(chatService.renewNotReadChat(participantDtos)){
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }

        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

}
