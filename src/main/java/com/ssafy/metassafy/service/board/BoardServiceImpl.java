package com.ssafy.metassafy.service.board;


import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.board.BoardParameterDto;
import com.ssafy.metassafy.dto.file.FileDto;
import com.ssafy.metassafy.mapper.board.BoardMapper;
import com.ssafy.metassafy.service.File.FileService;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Service
public class BoardServiceImpl implements  BoardService{

    private static final Logger logger = LoggerFactory.getLogger(BoardServiceImpl.class);
    @Autowired
    private SqlSession sqlSession;

    @Autowired
    private FileService fileService;

    @Override
    @Transactional
    public boolean writeArticle(BoardDto boardDto, MultipartFile thumbnail, List<MultipartFile> files) throws Exception {

        if(boardDto.getTitle() == null || boardDto.getContent() == null) {
            throw new Exception();
        }

        if (!thumbnail.isEmpty()) {
            logger.info("thumbnail - 업로드");
            FileDto file = fileService.saveFile(thumbnail);
            boardDto.setThumbnail(file.getSaved_name());
        }

        if(!files.isEmpty()){
            logger.info("writeArticle_files - 업로드");
            for (MultipartFile multipartFile : files) {
                FileDto file = fileService.saveFile(multipartFile);
                file.setArticle_no(boardDto.getArticle_no());
                file.setUser_id(boardDto.getUser_id());
                sqlSession.getMapper(BoardMapper.class).uploadFile(file);
            }
        }

        return sqlSession.getMapper(BoardMapper.class).writeArticle(boardDto) == 1;
    }
    @Override
    public List<BoardDto> listArticle(BoardParameterDto boardParameterDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).listArticle(boardParameterDto);
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
