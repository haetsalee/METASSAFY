package com.ssafy.metassafy.controller.team;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Api("친구 컨트롤러  API V1")
public class TeamController {

}
