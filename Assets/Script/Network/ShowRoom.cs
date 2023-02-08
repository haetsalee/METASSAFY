using Photon.Pun;
using Photon.Pun.Demo.PunBasics;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShowRoom : MonoBehaviourPunCallbacks
{
    public PhotonView PV;
    Boolean isInit = false;
    void Start()
    {
         
    }

    // Update is called once per frame
    void Update()
    {
        if (!isInit&&PhotonNetwork.InRoom)
        {
            showRoomInfo();
           // PV.RPC("addPlayer", RpcTarget.AllBuffered, PV.ViewID);
        }
    }
    void showRoomInfo()
    {
        Debug.Log(PhotonNetwork.CurrentRoom.MaxPlayers);
        Debug.Log(PhotonNetwork.PlayerList.Length);
        isInit= true;
    }
    [PunRPC]
    private void addPlayer()
    {
        Debug.Log("플레이어 입장");

    }
}
