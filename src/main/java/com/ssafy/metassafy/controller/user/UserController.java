package com.ssafy.metassafy.controller.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.metassafy.controller.board.BoardController;
import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.service.user.JwtService;
import com.ssafy.metassafy.service.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";


    @Autowired
    UserService service;

    /*
     클라이언트는 인증이 필요한 api에 요청할 때 토큰 정보와 함께 요청
     인증이 필요한 api는 토큰이 유효한지 검증 후 응답(예를 들어 글쓰기 페이지는 토큰 정보 없이 접근하면 튕기도록,,)
    */
    @Autowired
    JwtService jwtService; //jwt 인증이 필요한 api는 경로에 /auth 붙이기

    @GetMapping("/getUser") // 토큰에 담겨있는 사용자 정보를 리턴, 토큰이 필요한 경로
    public ResponseEntity<Object> getUser(HttpServletRequest request) {
        try {
            String token = request.getHeader("jwt-auth-token");
            Map<String, Object> tokenInfoMap = jwtService.getInfo(token);

            User user = new ObjectMapper().convertValue(tokenInfoMap.get("user"), User.class);

            return new ResponseEntity<Object>(user, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }


    //회원 가입
    @PostMapping("regist")
    public ResponseEntity<String> register(@RequestBody User user){
        try{
            service.regist(user);
        }catch(Exception e){
            return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }


    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user, HttpServletResponse response) {
        try {
            if(service.login(user)) { // 유효한 사용자일 경우
                String token = jwtService.createToken(user); // 사용자 정보로 토큰 생성
                response.setHeader("jwt-auth-token", token); // client에 token 전달
                return new ResponseEntity<Object>("login Success", HttpStatus.OK);
            } else {
                return new ResponseEntity<Object>("login Fail", HttpStatus.OK);
            }
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }
    //아이디 중복 체크

    //회원 정보 수정(auth)


    //로그아웃


    //회원 탈퇴

    //이메일 중복 체크

    //테스트용
//    @GetMapping ("hello")
//    public String hello(){
//        return "hi";
//    }
//    @GetMapping ("auth/hello")
//    public String hello2(){
//        return "hi";
//    }



}