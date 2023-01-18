package com.ssafy.metassafy.mapper.board;

import com.ssafy.metassafy.dto.board.BoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.sql.SQLException;
import java.util.List;

@Mapper
public interface BoardMapper {
    public int writeArticle(BoardDto boardDto) throws SQLException;
    public List<BoardDto> listArticle() throws SQLException;
    public BoardDto getArticle(int article_no) throws SQLException;
    public void updateHit(int article_no) throws SQLException;
    public int modifyArticle(BoardDto boardDto) throws SQLException;
    public int deleteArticle(int article_no) throws SQLException;
}
