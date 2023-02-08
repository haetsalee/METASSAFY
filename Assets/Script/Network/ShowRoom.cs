using Photon.Pun;
using Photon.Pun.Demo.PunBasics;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ShowRoom : MonoBehaviourPunCallbacks
{
    public PhotonView PV;
    Boolean isOpen = false;
    public GameObject infoArea;
    void Start()
    {
        
    }
    public override void OnJoinedRoom()
    {
        infoArea.GetComponent<Transform>().Find("RoomName").GetComponent<Text>().text = PhotonNetwork.CurrentRoom.Name+"의 참여자들";
        PV.RPC("addPlayer", RpcTarget.AllBuffered, null);
        //initRoomInfo();

    }
    // Update is called once per frame
    void Update()
    {
         
    }
    void initRoomInfo()
    {
        Debug.Log(PhotonNetwork.CurrentRoom.MaxPlayers);
        Debug.Log(PhotonNetwork.PlayerList.Length);
       
    }
    [PunRPC]
    private void addPlayer()
    {
        Debug.Log("플레이어 입장");
        string playerList=infoArea.GetComponent<Transform>().Find("playerList").GetComponent<Text>().text;
        playerList += PhotonNetwork.LocalPlayer.NickName + "\n";
        infoArea.GetComponent<Transform>().Find("playerList").GetComponent<Text>().text = playerList;
       
    }
    public void onClickOpen()
    {
        isOpen = !isOpen;
        if (isOpen)
        {
            infoArea.SetActive(true);
        }
        else
        {
            infoArea.SetActive(false);
        }
    }
}
