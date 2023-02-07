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
        Debug.Log("���� ����");
        PhotonNetwork.JoinOrCreateRoom("Lobby",null,null);
    }
    public override void OnJoinedRoom()
    {
        loading.SetActive(false);
        Debug.Log("�� ���� ����");


        int skin = GameObject.Find("ValueManager").GetComponent<ValueManager>().skin;
        GameObject p = PhotonNetwork.Instantiate(playerPrefabs[skin].name, Vector3.zero, Quaternion.identity);
        Transform t = p.GetComponent<Transform>();
        GameObject.Find("Main Camera").GetComponent<SmoothFollowCam>().target = t.Find("CamPivot").transform;

        //�̸��� ���δ�.
        setNickName(t);

    }
    
    public void setNickName(Transform t )
    {
        string name = GameObject.Find("ValueManager").GetComponent<ValueManager>().nickname;
        PhotonNetwork.LocalPlayer.NickName = name;
    }
     
    //�÷��̾ ���� �������� ȣ��Ǵ� �Լ��� �ֳ�?
}
