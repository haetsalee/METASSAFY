package com.ssafy.metassafy.dto.board;

import com.ssafy.metassafy.dto.file.FileDto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


import java.util.List;

@Getter
@Setter
@ToString
public class BoardDto {
    private int article_no;
    private String user_id;
    private String title;
    private String content;
    private int hit;
    private String regtime;
    private String modtime;
    private String thumbnail;
    private List<FileDto> files;
    private int like;

}
