package com.ssafy.metassafy.service.team;

import com.ssafy.metassafy.dto.team.Team;
import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.mapper.friend.FriendMapper;
import com.ssafy.metassafy.mapper.team.TeamMapper;
import com.ssafy.metassafy.mapper.user.UserMapper;
import com.ssafy.metassafy.service.friend.friendServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService{

    @Autowired
    TeamMapper mapper;

    @Autowired
    UserMapper usermapper;
    private static final Logger logger = LoggerFactory.getLogger(friendServiceImpl.class);
    @Override
    public boolean makeTeam(Team team) {
        User leader=usermapper.getUser(team.getLeader());

        //이미 팀이 있어서 팀을 못만드는 경우
        if(checkIsHaveTeam(leader,team.getTeam_type())){
            return false;
        }
        //해당 트랙에 팀이 없는 상태면 집어넣기
        mapper.makeTeam(team);
        Team myTeam=mapper.getMyTeam(leader.getUser_id(),team.getTeam_type());
        mapper.addUserTeam(leader.getUser_id(),myTeam.getTeam_no());
        return true;
    }
    @Override
    public boolean checkIsHaveTeam(User user, String type) {
        Integer team=-1;
        if(type.equals("common")){
            team=user.getCommon_team();
            //if(user.getCommon_team().get) return true;
        }
        else if(type.equals("special")){
            team=user.getSpecial_team();
        }
        else if(type.equals("free")) {
            team=user.getFree_team();
        }
        if(team==null) return false;
        return true;
    }

    @Override
    public void deleteTeam(int team_no) {

    }

    @Override
    public boolean isAlone(int team_no) {
        return false;
    }

    @Override
    public void applyTeam(int team_no, String user_id) {

    }



    @Override
    public void acceptUser(int team_no, String user_id) {

    }

    @Override
    public void rejectUser(int team_no, String user_id) {

    }

    @Override
    public void removeUser(int team_no, String user_id) {

    }

    @Override
    public void giveLeader(String user_id) {

    }

    @Override
    public void goOutTeam(int team_no, String user_id) {

    }

    @Override
    public Team getTeamInfo(int team_no) {
        return null;
    }

    @Override
    public List<User> getTeamUser(int team_no) {
        return null;
    }
}
