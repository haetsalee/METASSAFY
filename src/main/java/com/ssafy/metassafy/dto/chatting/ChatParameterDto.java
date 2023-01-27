package com.ssafy.metassafy.dto.chatting;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Getter
@Setter
@ToString
@EntityScan
public class ChatParameterDto {
    private int chat_no;
    private int croom_no;
    private String croom_name;
    private String user_id;
    private String name;
}
