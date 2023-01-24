package com.ssafy.metassafy.service.chatting;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import com.ssafy.metassafy.dto.chatting.ParticipantDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ChatService {

    public List<ChatRoomDto> findAllRooms(ChatParameterDto chatParameterDto) throws Exception;
    public boolean createChatRoom(String croom_name) throws  Exception;
    public boolean editChatRoom(ChatParameterDto chatParameterDto) throws Exception;
    public boolean deleteChatRoom(ChatParameterDto chatParameterDto) throws Exception;
    public List<ChatDto> findAllChat(ChatParameterDto chatParameterDto) throws Exception;
    public void createChat(ChatDto chatDto) throws Exception;
    public void updateLastChat(ChatDto chatDto) throws Exception;
    public void registParticipant(ChatDto chatDto) throws Exception;
    public void deleteParticipant(ChatDto chatDto) throws Exception;
    public int getLastReadChatId(int croom_no) throws Exception;
    public List<ParticipantDto> findAllParticipants(ChatParameterDto chatParameterDto) throws Exception;
    public boolean renewNotReadChat(List<ParticipantDto> participantDtos) throws Exception;
}
