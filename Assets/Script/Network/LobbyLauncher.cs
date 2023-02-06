using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using UnityStandardAssets.Utility;

public class LobbyLauncher : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;

    public GameObject ReactManager;
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
         
        GameObject p = PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        Transform t = p.GetComponent<Transform>();
        GameObject.Find("Main Camera").GetComponent<SmoothFollowCam>().target = t.Find("CamPivot").transform;

        t.Find("name").GetComponent<TextMesh>().text = GameObject.Find("ReactManager").GetComponent<ReactManager>().nickname;
        Debug.Log(GameObject.Find("ReactManager").GetComponent<ReactManager>().nickname+" 이름을 붙입니다.");
        Debug.Log("카메라 연결 성공");
        


    }
    public void test()
    {
        Debug.Log(GameObject.Find("ReactManager").GetComponent<ReactManager>().nickname );
    }
    
}
