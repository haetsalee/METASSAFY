package com.ssafy.metassafy.dto.memo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Getter
@Setter
@ToString
@EntityScan
public class MemoDto {
    private int memo_no;
    private int article_no;
    private String user_id;
    private String content;
    private int memo_like;
    private String regtime;
}
