using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
public class Launcher : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;

     

     
    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings();
    }
    /*
    public void FixedUpdate()
    {
        //ī�޶� ����

        if(playerPrefab!=null&& camera != null)
        {
            camera.transform.position = playerPrefab.transform.position - offest;
        }
    } */
    public override void OnConnectedToMaster()
    {
        Debug.Log("���� ����");
        PhotonNetwork.JoinRandomOrCreateRoom();
    }
    public override void OnJoinedRoom()
    {
        Debug.Log("�� ���� ����");
        GameObject p=PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        GameObject.Find("Main Camera").GetComponent<SmoothFollow>().target=p.transform;
        // camera = Camera.main.gameObject;
        //camera.transform.position = playerPrefab.transform.position;
    }

}
