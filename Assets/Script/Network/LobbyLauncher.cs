using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
public class LobbyLauncher : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;




    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings();
    }
  
    public override void OnConnectedToMaster()
    {
        Debug.Log("연결 성공");
        PhotonNetwork.JoinRandomOrCreateRoom();
    }
    public override void OnJoinedRoom()
    {
        Debug.Log("룸 참가 성공");
        GameObject p = PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        GameObject.Find("Main Camera").GetComponent<SmoothFollow>().target = p.transform;
        Debug.Log("카메라 연결 성공");
    }

}
