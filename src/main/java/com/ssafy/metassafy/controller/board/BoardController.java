package com.ssafy.metassafy.controller.board;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.board.BoardParameterDto;
import com.ssafy.metassafy.dto.file.FileDto;
import com.ssafy.metassafy.dto.like.LikeDto;
import com.ssafy.metassafy.service.board.BoardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;

@RestController
@RequestMapping("/board")
@Api("게시판 컨트롤러  API V1")
public class BoardController {
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private BoardService boardService;
    @ApiOperation(value = "게시판 글작성", notes = "새로운 게시글 정보를 입력한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @PostMapping
    public ResponseEntity<String> writeArticle(@RequestPart("boardDto") @ApiParam(value = "게시글 정보(user_id, title, content, thumbnail)", required = true) BoardDto boardDto, @RequestPart("thumbnail") @ApiParam(value = "썸내일 정보.", required = false) MultipartFile thumbnail, @RequestPart("files") @ApiParam(value = "업로드 파일 정보.", required = false) List<MultipartFile> files) throws Exception {
         logger.info("writeArticle - 호출");

        if (boardService.writeArticle(boardDto,thumbnail,files)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    @ApiOperation(value = "전체게시글 보기", notes = "전체 게시글 정보를 가져온다. 그리고 DB입력 성공하면 List<BoardDto>가 json형태로 반환된다.", response = List.class)
    @GetMapping
    public ResponseEntity<List<BoardDto>> listArticle(@ApiParam(value = "게시판 파라미터 정보(key, word)", required = false) BoardParameterDto boardParameterDto) throws Exception {
        logger.info("listArticle - 호출");
        return new ResponseEntity<List<BoardDto>>(boardService.listArticle(boardParameterDto), HttpStatus.OK);
    }

    @ApiOperation(value = "선택한 게시글 보기", notes = "선택한 게시글 정보를 가져온다. 그리고 DB입력 성공하면 BoardDto가 json형태로 반환된다.", response = BoardDto.class)
    @GetMapping("/{article_no}")
    public ResponseEntity<BoardDto> getArticle(@PathVariable("article_no") @ApiParam(value = "게시글 번호(article_no)", required = true) int article_no) throws Exception {
        logger.info("getArticle - 호출 : " + article_no);
        boardService.updateHit(article_no);
        return new ResponseEntity<BoardDto>(boardService.getArticle(article_no), HttpStatus.OK);
    }

    @ApiOperation(value = "게시글 수정", notes = "게시글 정보를 수정한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @PutMapping
    public ResponseEntity<String> modifyArticle(@ApiParam(value = "게시글 정보(article_no, title, content)", required = true) BoardDto boardDto) throws Exception {
        logger.info("modifyArticle - {article_no, title, content}", boardDto);

        if (boardService.modifyArticle(boardDto)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.OK);
    }

    @ApiOperation(value = "게시글 삭제", notes = "게시글 정보를 삭제한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @DeleteMapping("/{article_no}")
    public ResponseEntity<String> deleteArticle(@PathVariable("article_no") @ApiParam(value = "삭제할 게시글 번호(article_no)", required = true)  int article_no) throws Exception {
        logger.info("deleteArticle - {article_no}");
        if (boardService.deleteArticle(article_no)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    @ApiOperation(value = "파일 삭제", notes = "파일 정보를 삭제한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
    @DeleteMapping("/file")
    public ResponseEntity<String> deleteFile(@ApiParam(value = "삭제할 파일 정보(article_no, saved_name)", required = true) FileDto fileDto) throws Exception {
        logger.info("deleteFile - {fileDto}");
        if (boardService.deleteFile(fileDto)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }
}
