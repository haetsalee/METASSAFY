package com.ssafy.metassafy.service.board;

import com.ssafy.metassafy.dto.board.BoardDto;

import java.util.List;


public interface BoardService {
    public boolean writeArticle(BoardDto boardDto) throws Exception;
    public List<BoardDto> listArticle() throws Exception;
    public BoardDto getArticle(int article_no) throws Exception;
    public void updateHit(int article_no) throws Exception;
    public boolean modifyArticle(BoardDto boardDto) throws Exception;
    public boolean deleteArticle(int article_no) throws Exception;
}
