package com.ssafy.metassafy.controller.user;

import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    @Autowired
    UserService service;

    //회원 가입
    @PostMapping("regist")
    public boolean register(@RequestBody User user){
        try{
            service.regist(user);
        }catch(Exception e){
            return false;
        }
        return true;
    }

    //아이디 중복 체크
    /*
       클라이언트는 인증이 필요한 api에 요청할 때 토큰 정보와 함께 요청
       인증이 필요한 api는 토큰이 유효한지 검증 후 응답(예를 들어 글쓰기 페이지는 토큰 정보 없이 접근하면 튕기도록,,)
    */

    //로그인
    @PostMapping("user")
    public void login(@RequestBody User user){
        //입력 정보의 유저가 있으면 토큰 생성 후 리턴(서명된 jwt 토큰)
        //없으면 0 리턴
    }


    //회원 정보 수정


    //로그아웃


    //회원 탈퇴

    //이메일 중복 체크




}