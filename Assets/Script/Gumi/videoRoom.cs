using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;

public class videoRoom : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject enterBtn;
    public TMP_InputField m_inputField;
     
    [DllImport("__Internal")]
    private static extern void openPhone(string mode);
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
        {   
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                players[i].GetComponent<PlayerInput>().enabled=false;
            }
        }

        //ä�� ����
        m_inputField.enabled= false;

    }

    public void restartUntiy()
    {

        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    
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
    public void enterVideo()
    {
        
        stopWithoutVideo();
        //����Ʈ ���� ������� �޼��� ������
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    openPhone (this.gameObject.name);
#endif
    }
}
