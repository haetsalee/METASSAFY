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
import org.springframework.transaction.annotation.Transactional;

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

    @Override
    @Transactional
    public List<ChatDto> upScroll(ChatParameterDto chatParameterDto) throws Exception {

        chatParameterDto.setCur_no(chatParameterDto.getStart_no());

        int num = sqlSession.getMapper(ChatMapper.class).getLowChatNo(chatParameterDto);

        if(num == 0) return null;

        if(num > 10){
            int start_no = sqlSession.getMapper(ChatMapper.class).getStartNo(chatParameterDto);
            System.out.println(start_no + "  start_no");
            chatParameterDto.setStart_no(start_no);
        }else{
            chatParameterDto.setStart_no(0);
        }

        return sqlSession.getMapper(ChatMapper.class).upScroll(chatParameterDto);
    }

    //not_read를 갱신 해줘야한다.
    @Override
    @Transactional
    public List<ChatDto> findAllChat(ChatParameterDto chatParameterDto) throws Exception {

        if(chatParameterDto.getStart_no() == 0){
            // user_id, croom_no를 이용해서 last_read_chat_id 가 필요
            int cur_no = sqlSession.getMapper(ChatMapper.class).getUserLastReadChatId(chatParameterDto);
            chatParameterDto.setCur_no(cur_no);

            // 현재 cur_no 보다 값이 작은 채팅의 개수가 10개 보다 많은지 적은지 알 수 있었으면 좋겠다.
            int num = sqlSession.getMapper(ChatMapper.class).getLowChatNo(chatParameterDto);

            if(num > 10){
                int start_no = sqlSession.getMapper(ChatMapper.class).getStartNo(chatParameterDto);
                System.out.println(start_no + "  start_no");
                chatParameterDto.setStart_no(start_no);
            }else{
                chatParameterDto.setStart_no(0);
            }
        }

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

    @Override
    public int getChatNo(ChatDto chatDto) throws Exception {
        System.out.println(chatDto + "  getChatNo");
        return sqlSession.getMapper(ChatMapper.class).getChatNo(chatDto);
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

    @Override
    public boolean updateNotRead(ChatParameterDto chatParameterDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).updateNotRead(chatParameterDto) == 1;
    }

    @Override
    public boolean renewLastReadChatId(ParticipantDto participantDto) throws Exception {
        return sqlSession.getMapper(ChatMapper.class).renewLastReadChatId(participantDto) == 1;
    }

}
