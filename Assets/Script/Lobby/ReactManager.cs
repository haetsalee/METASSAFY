using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class ReactManager : MonoBehaviour
{

    string nickname;
    // Start is called before the first frame update
    void Start()
    {
        nickname= "�͸�";
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void getUserId(string user_id)
    {
        nickname= user_id;
        //Debug.Log($"���� {user_id} ���̵� ������");
        Debug.Log("���� ���̵� ������:"+user_id);
    }
    public string getNickname()
    {
        Debug.Log(nickname + " ��ȯ");
        return nickname;
    }
 

}
