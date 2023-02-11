 
using Photon.Pun;
using Photon.Pun.UtilityScripts;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Unity.VisualScripting;
using Unity.VisualScripting.Antlr3.Runtime;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.Video;


public class SelectObjectManager : MonoBehaviourPunCallbacks, IDragHandler
{

    [DllImport("__Internal")]
    private static extern void openPhone(string mode);
    Vector3 m_vecMouseDownPos;

    Boolean isRoomInfoOpen = true; //잠시 바꿈
    public GameObject tree;
    public VideoPlayer my_video;

    void Update()
    {

        ClickEvent();


    }
    float distance = 10.0f;
    public void OnDrag(PointerEventData eventData)
    {
        Debug.Log("onDrag 호출");
        Vector3 mousePosition = new Vector3(Input.mousePosition.x,
                Input.mousePosition.y, distance);
        transform.position = mousePosition;
    }

    void ClickEvent()
    {

        // 마우스 클릭 시
        if (Input.GetMouseButtonDown(0))
        {
            // Debug.Log("클릭이벤트 발생: "+photonView.ViewID);
            if (EventSystem.current.IsPointerOverGameObject())
                return;
            m_vecMouseDownPos = Input.mousePosition;

            // 카메라에서 스크린에 마우스 클릭 위치를 통과하는 광선을 반환합니다.
            Ray ray = Camera.main.ScreenPointToRay(m_vecMouseDownPos);
            RaycastHit hit;

            // 광선으로 충돌된 collider를 hit에 넣습니다.
            if (Physics.Raycast(ray, out hit))
            {
                Debug.Log(hit.collider.name + " 선택");
                //구미를 클릭 했으면
                if (hit.collider.name == "GumiCam")
                    goToRoom("Gumi");
                if(hit.collider.name== "SeoulCam")
                {
                    goToRoom("Seoul");
                }
                if (hit.collider.name == "GoLobby")
                {
                    goToRoom("WorldMap");
                }
                if (hit.collider.name == "tree")
                {
                    // GameObject tree= GameObject.FindGameObjectWithTag("tree");
                    tree.SetActive(true);
                }
                if (hit.collider.tag == "Player")
                {
                    GameObject hitTarget = hit.collider.gameObject;
                    // Debug.Log(hitTarget.GetComponentInChildren<TextMesh>().text);
                    name = hitTarget.GetComponentInChildren<TextMesh>().text;
                    clickUser();
                }
                if (hit.collider.name == "VideoPlane")
                {
                    playVideo();
                }

            }

        }
    }
    public void cancleTree()
    {
        //GameObject tree = GameObject.FindGameObjectWithTag("tree");
        tree.SetActive(false);
    }
    void goToRoom(string name)
    {
        Debug.Log("구미 클릭");

        //모든 플레이어 중에서
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //이동한 애(=자기 자신)을 네트워크에서 끊고 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //씬 이동
        SceneManager.LoadScene(name);

    }

    void goToLobby()
    {
        Debug.Log("로비 클릭");

        //모든 플레이어 중에서
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //이동한 애(=자기 자신)을 네트워크에서 끊고 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //씬 이동
        SceneManager.LoadScene("WorldMap");
    }
    void playVideo()
    {
        if (my_video != null)
        {
            if (my_video.isPlaying)
            {
                my_video.Pause();
            }
            else
            {
                my_video.Play();
            }
        }
    }

    private void clickBoard()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone ("board");
#endif
    }

    public void clickPhone()
    {

#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone ("phone");
#endif
    }

    public void clickUser()
    {

#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone (name);
#endif
    }

}