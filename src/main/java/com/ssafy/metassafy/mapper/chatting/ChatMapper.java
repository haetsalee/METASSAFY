package com.ssafy.metassafy.mapper.chatting;


import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import com.ssafy.metassafy.dto.chatting.ParticipantDto;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;
import java.util.List;

@Mapper
public interface ChatMapper {
    public List<ChatRoomDto> findAllRooms(ChatParameterDto chatParameterDto) throws SQLException;
    public int createChatRoom(String croom_name) throws SQLException;
    public int editChatRoom(ChatParameterDto chatParameterDto) throws SQLException;
    public int deleteChatRoom(ChatParameterDto chatParameterDto) throws SQLException;
    public List<ChatDto> findAllChat(ChatParameterDto chatParameterDto) throws SQLException;
    public int getMemberNum(ChatDto chatDto) throws SQLException;
    public int createChat(ChatDto chatDto) throws SQLException;
    public int updateLastChat(ChatDto chatDto) throws SQLException;
    public int registParticipant(ChatDto chatDto) throws SQLException;
    public int deleteParticipant(ChatDto chatDto) throws  SQLException;
    public int getLastReadChatId(int croom_no) throws SQLException;
    public List<ParticipantDto> findAllParticipants(ChatParameterDto chatParameterDto) throws SQLException;
    public int renewNotReadChat(List<ParticipantDto> participantDtos) throws SQLException;
}
