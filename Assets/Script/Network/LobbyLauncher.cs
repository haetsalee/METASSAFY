using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using UnityStandardAssets.Utility;

public class LobbyLauncher : MonoBehaviourPunCallbacks 
{
    public PhotonView[] playerPrefabs;

     
    public GameObject loading;

    // Start is called before the first frame update
    void Start()
    {
        loading.SetActive(true);
        PhotonNetwork.ConnectUsingSettings();
    }
    
    public override void OnConnectedToMaster()
    {
        Debug.Log("연결 성공");
        PhotonNetwork.JoinOrCreateRoom("Lobby",null,null);
    }
    public override void OnJoinedRoom()
    {
        loading.SetActive(false);
        Debug.Log("룸 참가 성공");


        int skin = GameObject.Find("ValueManager").GetComponent<ValueManager>().skin;
        GameObject p = PhotonNetwork.Instantiate(playerPrefabs[skin].name, Vector3.zero, Quaternion.identity);
        Transform t = p.GetComponent<Transform>();
        GameObject.Find("Main Camera").GetComponent<SmoothFollowCam>().target = t.Find("CamPivot").transform;

        //이름을 붙인다.
        setNickName(t);

    }
    
    public void setNickName(Transform t )
    {
        string name = GameObject.Find("ValueManager").GetComponent<ValueManager>().nickname;
        PhotonNetwork.LocalPlayer.NickName = name;
    }
     
    //플레이어가 방을 떠났을때 호출되는 함수가 있나?
}
