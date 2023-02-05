 
using Photon.Pun;
using Photon.Pun.UtilityScripts;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;

public class SelectObjectManager : MonoBehaviourPunCallbacks
{
    
    [DllImport("__Internal")]
    private static extern void openPhone(string mode);
    Vector3 m_vecMouseDownPos;
    void Update()
    {
        
        ClickEvent();
        
      
    }
     
    void ClickEvent()
    {
 
        // ���콺 Ŭ�� ��
        if (Input.GetMouseButtonDown(0)) {
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
                //���̸� Ŭ�� ������
                if (hit.collider.name == "Gumi")
                    goToGumi();
                if (hit.collider.name == "Old Screen")
                {
                    clickBoard();
                }


            }

        }
    }

    void goToGumi()
    {
        Debug.Log("���� Ŭ��");
        //��� �÷��̾� �߿���
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player"); 
        for (int i=0;i< players.Length; i++)
        {    //�̵��� ��(=�ڱ� �ڽ�)�� ��Ʈ��ũ���� ���� 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //�� �̵�
        SceneManager.LoadScene("Game");

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



}
