 
using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
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
 
            m_vecMouseDownPos = Input.mousePosition;
 
            // ī�޶󿡼� ��ũ���� ���콺 Ŭ�� ��ġ�� ����ϴ� ������ ��ȯ�մϴ�.
            Ray ray = Camera.main.ScreenPointToRay(m_vecMouseDownPos);
            RaycastHit hit;

            // �������� �浹�� collider�� hit�� �ֽ��ϴ�.
            if (Physics.Raycast(ray, out hit))
            {               
                //Debug.Log(hit.collider.name+" �� Ŭ��");
                if (hit.collider.name == "Gumi")
                    goToGumi();
                if (hit.collider.name == "Old Screen")
                {
                    Debug.Log("��ǻ�� Ŭ��");
                    clickBoard();
                }


            }

        }
    }

    void goToGumi()
    {

        //SceneManager.LoadScene("Gumi");
        //PhotonNetwork.LocalPlayer
        Debug.Log("����ķ�۽��� �̵��� ������ ����");

    }
    private void clickBoard()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone ("board");
#endif
    }



}
