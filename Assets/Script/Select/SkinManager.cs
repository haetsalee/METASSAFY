using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
public class SkinManager : MonoBehaviour
{
    Vector3 m_vecMouseDownPos;
    public int skin;
    public GameObject ValueManager;
    // Start is called before the first frame update
    void Start()
    {
        skin = 0;
        ValueManager.GetComponent<ValueManager>().setSkin(this.skin);
    }

    // Update is called once per frame
    void Update()
    {
        ClickEvent();
    }
    public void ClickEvent()
    {
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
                if (hit.collider.name=="Boy")
                {
                    GameObject.Find("Boy").GetComponent<Outline>().enabled = true;
                    GameObject.Find("Girl").GetComponent<Outline>().enabled = false;

                    setSkinNo(0);
                    setSkinRes(hit.collider.name);
                }
                else if (hit.collider.name == "Girl")
                {
                    GameObject.Find("Boy").GetComponent<Outline>().enabled = false;
                    GameObject.Find("Girl").GetComponent<Outline>().enabled = true;
                    setSkinNo(1);
                    setSkinRes(hit.collider.name);
                }
                 
                

            }

        }
    }

    public void setSkinRes(string name)
    {
        
        TextMesh res = GameObject.Find("result").GetComponent<TextMesh>();
        if (res == null) return;
        res.text = name + " 선택";

         
    }
    public void setSkinNo(int no)
    {
        skin = no;
        ValueManager.GetComponent<ValueManager>().setSkin(no);
    }
    public void moveScene()
    {
        SceneManager.LoadScene("WorldMap");
    }
}
