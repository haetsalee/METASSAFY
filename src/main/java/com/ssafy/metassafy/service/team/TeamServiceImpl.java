package com.ssafy.metassafy.service.team;

import com.ssafy.metassafy.dto.team.Team;
import com.ssafy.metassafy.dto.user.User;
import com.ssafy.metassafy.mapper.friend.FriendMapper;
import com.ssafy.metassafy.mapper.team.TeamMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService{

    @Autowired
    TeamMapper mapper;

    @Override
    public void makeTeam(Team team) {

        //mapper.makeTeam(team);
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
    public boolean checkIsHaveTeam(String user_id, String team_no) {
        return false;
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
