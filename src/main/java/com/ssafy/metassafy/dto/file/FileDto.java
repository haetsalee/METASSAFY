package com.ssafy.metassafy.dto.file;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FileDto {
    private int article_no;
    private String user_id;
    private String origin_name;
    private String saved_name;
    private String path;
}
