 
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
 
        // 마우스 클릭 시
        if (Input.GetMouseButtonDown(0)) { 
           // Debug.Log("클릭이벤트 발생: "+photonView.ViewID);
 
            m_vecMouseDownPos = Input.mousePosition;
 
            // 카메라에서 스크린에 마우스 클릭 위치를 통과하는 광선을 반환합니다.
            Ray ray = Camera.main.ScreenPointToRay(m_vecMouseDownPos);
            RaycastHit hit;

            // 광선으로 충돌된 collider를 hit에 넣습니다.
            if (Physics.Raycast(ray, out hit))
            {               
                //Debug.Log(hit.collider.name+" 를 클릭");
                if (hit.collider.name == "Gumi")
                    goToGumi();
                if (hit.collider.name == "Old Screen")
                {
                    Debug.Log("컴퓨터 클릭");
                    clickBoard();
                }


            }

        }
    }

    void goToGumi()
    {

        //SceneManager.LoadScene("Gumi");
        //PhotonNetwork.LocalPlayer
        Debug.Log("구미캠퍼스로 이동을 구현할 예정");

    }
    private void clickBoard()
    {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone ("board");
#endif
    }



}
