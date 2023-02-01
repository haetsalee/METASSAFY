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
        message.setMessage(message.getName() + "님이 접속하였습니다.");

        template.convertAndSend("/sub/chat", message);
    }

    //"/pub/message"
    @MessageMapping(value = "/chat/message")
    public void messageWorld(ChatDto message){
        template.convertAndSend("/sub/chat", message);
    }

    //"/pub/chat/room/enter"
//    @MessageMapping(value = "/chat/room/enter")
//    public void enterRoom(ChatDto message) throws Exception{
//        message.setMessage(message.getName() + "님이 채팅방에 참여하였습니다.");
//
//        // 마지막 채팅 no 가져오기
//        int last_read_chat_id = chatService.getLastReadChatId(message.getCroom_no());
//
//        message.setLast_read_chat_id(last_read_chat_id);
//
//        // 채팅 방에서 해당 인원 추가
//        //chatService.registParticipant(message);
//
//        template.convertAndSend("/sub/chat/room/" + message.getCroom_no(), message);
//    }

    @MessageMapping(value = "/chat/room/leave")
    public void leaveRoom(ChatDto message) throws Exception{
        message.setMessage(message.getName() + "님이 채팅방을 떠났습니다.");
        // 채팅 방에서 해당 인원 삭제
        chatService.deleteParticipant(message);

        template.convertAndSend("/sub/chat/room/" + message.getCroom_no(), message);
    }

    //"/pub/chat/room/message"
    @MessageMapping(value = "/chat/room/message")
    public void message(ChatDto message) throws  Exception{

        //대화 저장
        chatService.createChat(message);
        //룸 마지막 대화 업데이트
        chatService.updateLastChat(message);
        //chat_no 가져오기
        int chat_no = chatService.getChatNo(message);
        message.setChat_no(chat_no);

        template.convertAndSend("/sub/chat/room/" + message.getCroom_no(), message);
    }

    // 초대기능, 읽음 처리 -- 이론상으로는 해결
    // 읽지 않은 채팅 수 처리 (갱신이 어려움) -- 이론상 해결

}

