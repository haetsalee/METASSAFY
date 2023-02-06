using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Photon.Realtime;

public class PhotonManager : MonoBehaviourPunCallbacks
{
    public PhotonView playerPrefab;

    // Start is called before the first frame update
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings();
    }

    public override void OnConnectedToMaster()
    {
        Debug.Log("Conneted to Master");
        PhotonNetwork.JoinOrCreateRoom("Gumi", null, null);
    }

    public override void OnJoinedRoom()
    {
        Debug.Log("Joined a room successfully!");
        GameObject p=PhotonNetwork.Instantiate(playerPrefab.name, Vector3.zero, Quaternion.identity);
        Transform t = p.GetComponent<Transform>();
        t.Find("name").GetComponent<TextMesh>().text = GameObject.Find("ReactManager").GetComponent<ReactManager>().nickname;
    }
}
