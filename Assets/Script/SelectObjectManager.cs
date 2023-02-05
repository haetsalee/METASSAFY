 
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
 
        // 마우스 클릭 시
        if (Input.GetMouseButtonDown(0)) {
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
                //구미를 클릭 했으면
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
        Debug.Log("구미 클릭");
        //모든 플레이어 중에서
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player"); 
        for (int i=0;i< players.Length; i++)
        {    //이동한 애(=자기 자신)을 네트워크에서 끊고 
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                PhotonNetwork.Disconnect();
            }
        }
        //씬 이동
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
