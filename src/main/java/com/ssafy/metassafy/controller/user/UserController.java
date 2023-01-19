package com.ssafy.metassafy.controller.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.metassafy.controller.board.BoardController;
import com.ssafy.metassafy.dto.user.JwtInfoDto;
import com.ssafy.metassafy.dto.user.TechStack;
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
import java.util.HashMap;
import java.util.List;
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

    //회원 가입
    @PostMapping("/regist")
    public ResponseEntity<String> register(@RequestBody User user){
        try{
            service.regist(user);
        }catch(Exception e){
            return new ResponseEntity<String>(FAIL, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody User user, HttpServletResponse response) {
        try {
            JwtInfoDto loginUser=service.login(user);
            if(loginUser.getUser_id()!=null&&loginUser.getEmail()!=null) { // 유효한 사용자일 경우
                String token = jwtService.createToken(loginUser); // 사용자 정보로 토큰 생성
                response.setHeader("jwt-auth-token", token); // client에 token 전달
                return new ResponseEntity<Object>("login Success", HttpStatus.OK);
            } else {
                return new ResponseEntity<Object>("login Fail", HttpStatus.OK);
            }
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/auth/getUser") // 토큰에 담겨있는 사용자 정보를 리턴, 토큰이 필요한 경로
    public ResponseEntity<Object> getUser(HttpServletRequest request) {
        try {
            String token = request.getHeader("jwt-auth-token");
            Map<String, Object> tokenInfoMap = jwtService.getInfo(token);

            //토큰에는 아이디와 이메일 정보만 저장. 아이디 정보로 유저 전체 정보를 가져온다.
            JwtInfoDto userToken = new ObjectMapper().convertValue(tokenInfoMap.get("user"), JwtInfoDto.class);
            User user=service.getUser(userToken.getUser_id());

            return new ResponseEntity<Object>(user, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
        }
    }
    //아이디 중복 체크->false면 해당 아이디 사용 가능
    @GetMapping("/isExist/{user_id}")
    public boolean isExist(@PathVariable("user_id") String user_id){
        if(service.getCount(user_id)!=0)
            return true;
        return false;
    }

    //이메일 중복 체크
    @GetMapping("/isExistEmail/{email}")
    public boolean isExistEmail(@PathVariable("email") String email){
        if(service.getEmailCount(email)!=0)
            return true;
        return false;
    }

    //회원 정보 수정(auth)
    @PostMapping("/auth/update")
    public ResponseEntity<String> update(@RequestBody User user){
        try{
            service.update(user);
        }catch(Exception e){
            return new ResponseEntity<String>("update fail", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }

    //회원 탈퇴
    @GetMapping("/auth/delete/{user_id}")
    public ResponseEntity<String> deleteUser(@PathVariable String user_id,HttpServletRequest request){
        try{
            String token = request.getHeader("jwt-auth-token");
            Map<String, Object> tokenInfoMap = jwtService.getInfo(token);
            JwtInfoDto userToken = new ObjectMapper().convertValue(tokenInfoMap.get("user"), JwtInfoDto.class);
            //본인일 경우에만 삭제 가능
            if(userToken.getUser_id().equals(user_id))
                service.deleteUser(user_id);
            else
                return new ResponseEntity<String>("비정상적인 접근", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<String>("delete fail", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }

    //기술 스택 전체 보기
    @GetMapping("/allTechList")
    public List<TechStack> getAllTechList(){
        List <TechStack> list=service.getAllTechList();
        return list;
    }

    //특정 유저의 기술 스택 보기
    @GetMapping("/techList/{user_id}")
    public List<TechStack> getAllTechList(@PathVariable String user_id){
        List <TechStack> list=service.getTechList(user_id);
        return list;
    }


    //특정 유저의 기술스택 하나 추가
    @PostMapping("/addTech")
    public ResponseEntity<String> addTech(@RequestBody HashMap<String, String> map){
       if(service.addTech(map)) {
           return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
       }
       return new ResponseEntity<String>(FAIL, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    //특정 유저의 기술 스택 하나 삭제
    @PostMapping("/deleteTech")
    public ResponseEntity<String> deleteTech(@RequestBody HashMap<String, String> map){
        if(service.deleteTech(map)) {
            return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
        }
        return new ResponseEntity<String>(FAIL, HttpStatus.INTERNAL_SERVER_ERROR);
    }






}