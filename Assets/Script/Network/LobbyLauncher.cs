using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
public class LobbyLauncher : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;


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
        GameObject p = PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        GameObject.Find("Main Camera").GetComponent<SmoothFollow>().target = p.transform;
        Debug.Log("ī�޶� ���� ����");
    }
    
}
