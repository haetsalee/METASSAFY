package com.ssafy.metassafy.dto.file;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Getter
@Setter
@ToString
@EntityScan
public class FileDto {
    private int article_no;
    private String origin_name;
    private String saved_name;
    private String path;
}
