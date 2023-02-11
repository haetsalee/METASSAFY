 
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

    Boolean isRoomInfoOpen = true; //��� �ٲ�
    public GameObject tree;
    public VideoPlayer my_video;

    void Update()
    {

        ClickEvent();


    }
    float distance = 10.0f;
    public void OnDrag(PointerEventData eventData)
    {
        Debug.Log("onDrag ȣ��");
        Vector3 mousePosition = new Vector3(Input.mousePosition.x,
                Input.mousePosition.y, distance);
        transform.position = mousePosition;
    }

    void ClickEvent()
    {

        // ���콺 Ŭ�� ��
        if (Input.GetMouseButtonDown(0))
        {
            // Debug.Log("Ŭ���̺�Ʈ �߻�: "+photonView.ViewID);
            if (EventSystem.current.IsPointerOverGameObject())
                return;
            m_vecMouseDownPos = Input.mousePosition;

            // ī�޶󿡼� ��ũ���� ���콺 Ŭ�� ��ġ�� ����ϴ� ������ ��ȯ�մϴ�.
            Ray ray = Camera.main.ScreenPointToRay(m_vecMouseDownPos);
            RaycastHit hit;

            // �������� �浹�� collider�� hit�� �ֽ��ϴ�.
            if (Physics.Raycast(ray, out hit))
            {
                Debug.Log(hit.collider.name + " ����");
                //���̸� Ŭ�� ������
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
        Debug.Log("���� Ŭ��");

        //��� �÷��̾� �߿���
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //�̵��� ��(=�ڱ� �ڽ�)�� ��Ʈ��ũ���� ���� 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //�� �̵�
        SceneManager.LoadScene(name);

    }

    void goToLobby()
    {
        Debug.Log("�κ� Ŭ��");

        //��� �÷��̾� �߿���
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //�̵��� ��(=�ڱ� �ڽ�)�� ��Ʈ��ũ���� ���� 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //�� �̵�
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