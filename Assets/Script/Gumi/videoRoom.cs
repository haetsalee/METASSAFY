using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;

public class videoRoom : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject enterBtn;
    public TMP_InputField m_inputField;
    void Start()
    {
        
    }
    private void OnTriggerEnter(Collider other)

    {
        enterBtn.SetActive(true);
 
    }
    private void OnTriggerExit(Collider other)
    {
        enterBtn.SetActive(false);

    }
 
    public void stopWithoutVideo()
    {
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //이동한 애(=자기 자신)을 리액트에서 보내준 이름으로 설정
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                players[i].GetComponent<PlayerInput>().enabled=false;
            }
        }

        //채팅 끄기
        m_inputField.enabled= false;

    }

    public void restartUntiy()
    {

        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //이동한 애(=자기 자신)을 리액트에서 보내준 이름으로 설정
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                players[i].GetComponent<PlayerInput>().enabled = true;
            }
        }

        m_inputField.enabled = true;

    }
    // Update is called once per frame
    void Update()
    {
        
    }
}
