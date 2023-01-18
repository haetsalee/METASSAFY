package com.ssafy.metassafy.controller.board;

import com.ssafy.metassafy.dto.board.BoardDto;
import com.ssafy.metassafy.dto.board.BoardParameterDto;
import com.ssafy.metassafy.service.board.BoardService;
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
public class BoardController {
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @Autowired
    private BoardService boardService;

     @PostMapping
    public ResponseEntity<String> writeArticle(@RequestBody BoardDto boardDto,@RequestParam("thumbnail") MultipartFile thumbnail, @RequestParam("files") List<MultipartFile> files) throws Exception {

         logger.info("writeArticle - 호출");

        if (boardService.writeArticle(boardDto,thumbnail,files)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<BoardDto>> listArticle(BoardParameterDto boardParameterDto) throws Exception {
        logger.info("listArticle - 호출");
        return new ResponseEntity<List<BoardDto>>(boardService.listArticle(boardParameterDto), HttpStatus.OK);
    }


    @GetMapping("/{article_no}")
    public ResponseEntity<BoardDto> getArticle(@PathVariable("article_no") int article_no) throws Exception {
        logger.info("getArticle - 호출 : " + article_no);
        boardService.updateHit(article_no);
        return new ResponseEntity<BoardDto>(boardService.getArticle(article_no), HttpStatus.OK);
    }

   @PutMapping
    public ResponseEntity<String> modifyArticle(@RequestBody BoardDto boardDto) throws Exception {
        logger.info("modifyArticle - 호출 {}", boardDto);

        if (boardService.modifyArticle(boardDto)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.OK);
    }

   @DeleteMapping("/{article_no}")
    public ResponseEntity<String> deleteArticle(@PathVariable("article_no")  int article_no) throws Exception {
        logger.info("deleteArticle - 호출");
        if (boardService.deleteArticle(article_no)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
    }
}
