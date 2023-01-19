package com.ssafy.metassafy.dto.like;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Getter
@Setter
@ToString
@EntityScan
public class LikeDto {
    private int like_no;
    private int like_type;
    private String user_id;
    private int no;
}
