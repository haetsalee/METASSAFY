using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class GumiLauncher : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;
    public GameObject loading;

    void Start()
    {
        
        loading.SetActive(true);
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster()
    {
        Debug.Log("구미 연결 성공");
        PhotonNetwork.JoinOrCreateRoom("Gumi", null,null);
    }
    public override void OnJoinedRoom()
    {
        loading.SetActive(false);
        GameObject p = PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        GameObject.Find("Main Camera").GetComponent<SmoothFollow>().target = p.transform;

    }
}
