package com.ssafy.metassafy.dto.board;

import com.ssafy.metassafy.dto.file.FileDto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.autoconfigure.domain.EntityScan;


import java.util.List;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;


@Getter
@Setter
@ToString
@EntityScan
@ApiModel(value = "BoardDto : 게시글정보", description = "게시글의 상세 정보를 나타낸다.")
public class BoardDto {
    @ApiModelProperty(value = "글번호")
    private int article_no;
    @ApiModelProperty(value = "작성자 아이디")
    private String user_id;
    @ApiModelProperty(value = "글제목")
    private String title;
    @ApiModelProperty(value = "글내용")
    private String content;
    @ApiModelProperty(value = "조회수")
    private int hit;
    @ApiModelProperty(value = "작성 일자")
    private String regtime;
    @ApiModelProperty(value = "편집 일자")
    private String modtime;
    @ApiModelProperty(value = "썸내일")
    private String thumbnail;
    @ApiModelProperty(value = "업로드 파일")
    private List<FileDto> files;

    @ApiModelProperty(value = "해당 게시글 좋아요수")
    private int like;

}
