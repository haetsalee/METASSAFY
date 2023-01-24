package com.ssafy.metassafy.service.chatting;

import com.ssafy.metassafy.dto.chatting.ChatDto;
import com.ssafy.metassafy.dto.chatting.ChatParameterDto;
import com.ssafy.metassafy.dto.chatting.ChatRoomDto;
import com.ssafy.metassafy.dto.chatting.ParticipantDto;
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
    @Override
    public void createChat(ChatDto chatDto) throws Exception {

        // 채팅방에 속해있는 사람 수
        int member_num = sqlSession.getMapper(ChatMapper.class).getMemberNum(chatDto);
        chatDto.setNot_read(member_num);

        //저장
        sqlSession.getMapper(ChatMapper.class).createChat(chatDto);
    }

    //룸 마지막 대화 업데이트
    public void updateLastChat(ChatDto chatDto) throws Exception{
        sqlSession.getMapper(ChatMapper.class).updateLastChat(chatDto);
    }

    //친구 채팅방에 초대
    @Override
    public void registParticipant(ChatDto chatDto) throws Exception {
        sqlSession.getMapper(ChatMapper.class).registParticipant(chatDto);
    }

    @Override
    public void deleteParticipant(ChatDto chatDto) throws Exception {
        sqlSession.getMapper(ChatMapper.class).deleteParticipant(chatDto);
    }

    //마지막으로 읽은 chat_no 반환
    @Override
    public int getLastReadChatId(int croom_no) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).getLastReadChatId(croom_no);
    }
    // user의 모든 participant 리스트
    @Override
    public List<ParticipantDto> findAllParticipants(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).findAllParticipants(chatParameterDto);
    }

    @Override
    public boolean renewNotReadChat(List<ParticipantDto> participantDtos) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).renewNotReadChat(participantDtos) == 1;
    }


}
