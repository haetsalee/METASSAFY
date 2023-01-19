package com.ssafy.metassafy.dto.user;

import lombok.*;

import java.sql.Timestamp;
import java.util.Date;
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User {
    String user_id; //pk
    String user_pwd;
    String student_no;
    String name;
    String area;
    String email;
    char gender; //w 혹은 m
    Date birthday;
    int age;
    String interest; //관심 직무(백,프론트,미정 등등)
    Timestamp regtime; //가입 시간
    String profile_img; //프로필 이미지 url
    String profile_txt; //자기소개 멘트
    String first_semester; //자바트랙, 파이썬 트랙..
    String common;
    String special;
    String free;
    int first_semester_class; //1학기 몇반이었는지
    int common_class; //공통 구미 1반, 2반...
    int special_class; //특화 구미 1반, 2반...
    int free_class; //자율 구미1반, 2반...
    float x; //맵 상에서 마지막 위치
    float y; //맵 상에서 마지막 위치
    float z; //맵 상에서 마지막 위치

    int common_team; //공통 구미 1반 1조,2조..
    int special_team; //특화 ~~
    int free_team; //자율 ~~
    String current_role; //현재 팀내에서 맡은 직무

}