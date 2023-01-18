package com.ssafy.metassafy.service.board;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.mapper.board.BoardMapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class BoardServiceImpl implements  BoardService{
    @Autowired
    private SqlSession sqlSession;

    @Override
    @Transactional
    public boolean writeArticle(BoardDto boardDto) throws Exception {
        if(boardDto.getTitle() == null || boardDto.getContent() == null) {
            throw new Exception();
        }
        return sqlSession.getMapper(BoardMapper.class).writeArticle(boardDto) == 1;
    }
    @Override
    public List<BoardDto> listArticle() throws Exception {
        return sqlSession.getMapper(BoardMapper.class).listArticle();
    }

    @Override
    public BoardDto getArticle(int article_no) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).getArticle(article_no);
    }

    @Override
    public void updateHit(int article_no) throws Exception {
        sqlSession.getMapper(BoardMapper.class).updateHit(article_no);
    }

    @Override
    public boolean modifyArticle(BoardDto boardDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).modifyArticle(boardDto) == 1;
    }

    @Override
    public boolean deleteArticle(int article_no) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).deleteArticle(article_no) == 1;
    }
}
