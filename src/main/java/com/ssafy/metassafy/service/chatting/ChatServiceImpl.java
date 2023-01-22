package com.ssafy.metassafy.service.chatting;

import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import com.ssafy.metassafy.mapper.chatting.ChatMapper;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl implements ChatService{

    private static final Logger logger = LoggerFactory.getLogger(ChatServiceImpl.class);
    @Autowired
    private SqlSession sqlSession;


    @Override
    public List<ChatRoomDto> findAllRooms(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).findAllRooms(chatParameterDto);
    }

    @Override
    public boolean createChatRoom(String croom_name) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).createChatRoom(croom_name) == 1;
    }

    @Override
    public boolean editChatRoom(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).editChatRoom(chatParameterDto) == 1;
    }

    @Override
    public boolean deleteChatRoom(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).deleteChatRoom(chatParameterDto) == 1;
    }

    //not_read를 갱신 해줘야한다.
    @Override
    public List<ChatDto> findAllChat(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).findAllChat(chatParameterDto);
    }
}
