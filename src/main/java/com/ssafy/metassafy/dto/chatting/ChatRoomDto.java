package com.ssafy.metassafy.dto.chatting;

import com.ssafy.metassafy.dto.file.FileDto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.util.List;

@Getter
@Setter
@ToString
@EntityScan
public class ChatRoomDto {
    private int croom_no;
    private String croom_name;
    private String last_chat;
    private int not_read_chat;
    private String chatroom_img;
    private List<String> participants;
    private String regtime;

}
