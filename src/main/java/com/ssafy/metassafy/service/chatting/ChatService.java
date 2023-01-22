package com.ssafy.metassafy.service.chatting;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ChatService {

    public List<ChatRoomDto> findAllRooms(ChatParameterDto chatParameterDto) throws Exception;
    public boolean createChatRoom(String croom_name) throws  Exception;
    public boolean editChatRoom(ChatParameterDto chatParameterDto) throws Exception;
    boolean deleteChatRoom(ChatParameterDto chatParameterDto) throws Exception;
    public List<ChatDto> findAllChat(ChatParameterDto chatParameterDto) throws Exception;
}
