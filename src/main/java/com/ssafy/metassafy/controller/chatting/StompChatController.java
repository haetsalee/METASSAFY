package com.ssafy.metassafy.controller.chatting;
import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.service.chatting.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class StompChatController {

    private final SimpMessagingTemplate template; //특정 Broker로 메세지를 전달

    private final ChatService chatService;

//    @MessageMapping("/chat/enter")
//    @SendTo("/sub/message")
//    public String chatEnter(String message) throws Exception{
//        System.out.println("/chat/enter>>>" + message);
//
//        return message;
//    }

    //Client가 SEND할 수 있는 경로
    //stompConfig에서 설정한 applicationDestinationPrefixes와 @MessageMapping 경로가 병합됨

    //"/pub/chat"
    @MessageMapping(value = "/chat/enter")
    public void enterWorld(ChatDto message){
        message.setMessage(message.getUser_name() + "님이 접속하였습니다.");

        template.convertAndSend("/sub/chat", message);
    }

    //"/pub/message"
    @MessageMapping(value = "/chat/message")
    public void messageWorld(ChatDto message){
        template.convertAndSend("/sub/chat", message);
    }

    //"/pub/chat/room/enter"
    @MessageMapping(value = "/chat/room/enter")
    public void enterRoom(ChatDto message){
        message.setMessage(message.getUser_name() + "님이 채팅방에 참여하였습니다.");
        // 채팅 방에서 해당 인원 추가

        template.convertAndSend("/sub/chat/room/" + message.getChat_no(), message);
    }

    @MessageMapping(value = "/chat/room/leave")
    public void leaveRoom(ChatDto message){
        message.setMessage(message.getUser_name() + "님이 채팅방을 떠났습니다.");
        // 채팅 방에서 해당 인원 삭제
        template.convertAndSend("/sub/chat/room/" + message.getChat_no(), message);
    }

    //"/pub/chat/room/message"
    @MessageMapping(value = "/chat/room/message")
    public void message(ChatDto message){
        message.setMessage(message.getUser_name() + " : " + message.getMessage());

        //룸 마지막 대화 업데이트


        template.convertAndSend("/sub/chat/room/" + message.getChat_no(), message);
    }

    // 초대기능, 읽음 처리

}

