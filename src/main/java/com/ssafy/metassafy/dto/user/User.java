package com.ssafy.metassafy.dto.user;

import lombok.*;
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
    String interest;
    Date regtime; //db에서는 timestamp 추후 수정할수도
    String profile_img;
    String profile_txt;
    String frist_semester;
    String common;
    String special;
    String free;
    int frist_semester_class; //db 오타 주의
    int common_class;
    int special_class;
    int free_class;
    float x;
    float y;
    float z;
}