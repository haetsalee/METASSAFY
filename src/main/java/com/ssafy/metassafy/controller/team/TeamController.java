package com.ssafy.metassafy.controller.team;

import com.ssafy.metassafy.controller.friend.FriendController;
import com.ssafy.metassafy.dto.team.Team;
import com.ssafy.metassafy.service.friend.FriendService;
import com.ssafy.metassafy.service.team.TeamService;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api("팀구 컨트롤러  API V1")
public class TeamController {
    private static final Logger logger = LoggerFactory.getLogger(FriendController.class);
    private static final String SUCCESS = "Success";
    private static final String FAIL = "Fail";
    @Autowired
    private TeamService service;

    @PostMapping("/makeTeam")
    public ResponseEntity<String> makeTeam(@RequestBody Team team){
        service.makeTeam(team);
        return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
    }


}
