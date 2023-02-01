package com.ssafy.metassafy.service.user;

import com.ssafy.metassafy.dto.file.FileDto;
import com.ssafy.metassafy.dto.user.JwtInfoDto;
import com.ssafy.metassafy.dto.user.TechStack;
import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.mapper.board.BoardMapper;
import com.ssafy.metassafy.mapper.user.UserMapper;
import com.ssafy.metassafy.service.file.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

@Service
public class UserService {

    final UserMapper mapper;

    @Autowired
    private FileService fileService;

    public UserService(UserMapper mapper) {
        this.mapper = mapper;
    }

    public void regist(User user) {
        mapper.regist(user);
    }


    public JwtInfoDto login(User user) {
        JwtInfoDto loginUser=mapper.login(user);
        if(loginUser!=null){
            return loginUser;
        }
        return new JwtInfoDto();
    }

    public int getCount(String user_id) {
        return mapper.getCount(user_id);
    }

    public User getUser(String user_id) {
        return mapper.getUser(user_id);
    }

    public void update(User user) {
        mapper.update(user);
    }

    public int getEmailCount(String email) {
        return mapper.getEmailCount(email);
    }

    public void deleteUser(String user_id) {
        mapper.deleteUser(user_id);
    }

    public List<TechStack> getAllTechList() {
        return mapper.getAllTechList();
    }

    public List<TechStack> getTechList(String user_id) {
        return mapper.getTechStack(user_id);
    }

    public boolean addTech(HashMap<String, String> map) {
        return mapper.addTech(map);
    }

    public boolean deleteTech(HashMap<String, String> map) {
        return mapper.deleteTech(map);
    }

    public List<User> getAllUser() {
        return mapper.getAllUser();
    }

    public void setRefresh(String user_id, String refresh_token) {
        mapper.setRefresh(user_id,refresh_token);
    }

    public User getUserWithRefresh(String refresh_token) {
        return mapper.getUserWithRefresh(refresh_token);
    }

    public void setProfileImg(String user_id,MultipartFile profile_img) throws Exception{
        FileDto img=fileService.saveFile(profile_img);
        mapper.setProfileImg(user_id,img.getPath());

    }

    public List<User> searchUserList(String search) {
        return mapper.searchUserList(search);
    }
}