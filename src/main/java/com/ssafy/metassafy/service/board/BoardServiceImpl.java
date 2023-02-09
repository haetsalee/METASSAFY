package com.ssafy.metassafy.service.board;


import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.board.BoardParameterDto;
import com.ssafy.metassafy.dto.file.FileDto;
import com.ssafy.metassafy.dto.like.LikeDto;
import com.ssafy.metassafy.mapper.board.BoardMapper;
import com.ssafy.metassafy.service.file.FileService;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

        System.out.println(thumbnail.isEmpty() + " 썸내일");
        //System.out.println(files.size() + " 파일");

        FileDto file = null;

        if (!thumbnail.isEmpty()) {
            logger.info("thumbnail - 업로드");
            file = fileService.saveFile(thumbnail);
            boardDto.setThumbnail(file.getPath());
        }

        sqlSession.getMapper(BoardMapper.class).writeArticle(boardDto);


        System.out.println();
        System.out.println(boardDto);

        if(file != null){
            System.out.println(file + " 1");
            file.setArticle_no(boardDto.getArticle_no());
            sqlSession.getMapper(BoardMapper.class).uploadFile(file);
        }

        if(files != null && !files.get(0).isEmpty()){
            logger.info("writeArticle_files - 업로드");
            for (MultipartFile multipartFile : files) {
                logger.info(multipartFile.getOriginalFilename().length() + " 길이 몇?");
                file = fileService.saveFile(multipartFile);
                file.setArticle_no(boardDto.getArticle_no());
                sqlSession.getMapper(BoardMapper.class).uploadFile(file);
            }
        }

        LikeDto likeDto = new LikeDto();
        likeDto.setLike_type(1);
        likeDto.setUser_id(boardDto.getUser_id());
        likeDto.setNo(boardDto.getArticle_no());
        System.out.println(likeDto);

        return makeLike(likeDto);
    }



    @Override
    public boolean makeLike(LikeDto likeDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).makeLike(likeDto) == 1;
    }

    @Override
    @Transactional
    public List<BoardDto> listArticle(BoardParameterDto boardParameterDto) throws Exception {

        return sqlSession.getMapper(BoardMapper.class).listArticle(boardParameterDto);
    }

    @Override
    public BoardDto getArticle(BoardParameterDto boardParameterDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).getArticle(boardParameterDto);
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

        List<FileDto> files = sqlSession.getMapper(BoardMapper.class).getFiles(article_no);

        for(int i = 0; i < files.size(); i++){
            fileService.deleteFile(files.get(i));
        }

        return sqlSession.getMapper(BoardMapper.class).deleteArticle(article_no) == 1;
    }

    @Override
    public boolean deleteFile(FileDto fileDto) throws Exception {
        fileService.deleteFile(fileDto);
        return sqlSession.getMapper(BoardMapper.class).deleteFile(fileDto) == 1;
    }

    @Override
    public boolean uploadFile(FileDto fileDto, MultipartFile file) throws Exception {

        FileDto temp = fileService.saveFile(file);

        fileDto.setOrigin_name(temp.getOrigin_name());
        fileDto.setSaved_name(temp.getSaved_name());
        fileDto.setPath(temp.getPath());

        return sqlSession.getMapper(BoardMapper.class).uploadFile(fileDto) == 1;
    }

    @Override
    public String uploadAndgetLink(MultipartFile img) throws Exception {
        FileDto file = fileService.saveFile(img);
        return file.getPath();
    }

    @Override
    public boolean writeArticle(BoardDto boardDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).writeArticle(boardDto)==1;
    }

    @Override
    public boolean uploadLike(LikeDto likeDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).uploadLike(likeDto)==1;
    }

    @Override
    public boolean deleteLike(LikeDto likeDto) throws Exception {
        return sqlSession.getMapper(BoardMapper.class).deleteLike(likeDto)==1;
    }

}
