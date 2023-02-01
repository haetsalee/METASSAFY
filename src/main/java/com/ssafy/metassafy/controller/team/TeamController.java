package com.ssafy.metassafy.controller.team;

import com.ssafy.metassafy.controller.friend.FriendController;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api("친구 컨트롤러  API V1")
public class TeamController {
    private static final Logger logger = LoggerFactory.getLogger(FriendController.class);
    private static final String SUCCESS = "Success";
    private static final String FAIL = "Fail";

    @PostMapping("/makeTeam")
    public ResponseEntity<String> makeTeam(){
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }


}
