package com.ssafy.metassafy.service.board;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.board.BoardParameterDto;
import com.ssafy.metassafy.dto.file.FileDto;
import com.ssafy.metassafy.dto.like.LikeDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


public interface BoardService {
    public boolean writeArticle(BoardDto boardDto,MultipartFile thumbnail,List<MultipartFile> files) throws Exception;
    public boolean makeLike(LikeDto likeDto) throws Exception;
    public List<BoardDto> listArticle(BoardParameterDto boardParameterDto) throws Exception;
    public BoardDto getArticle(int article_no) throws Exception;
    public void updateHit(int article_no) throws Exception;
    public boolean modifyArticle(BoardDto boardDto) throws Exception;
    public boolean deleteArticle(int article_no) throws Exception;
    public boolean deleteFile(FileDto fileDto) throws Exception;
    public boolean uploadFile(FileDto fileDto, MultipartFile file) throws Exception;
}