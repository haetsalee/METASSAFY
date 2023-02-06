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
        nickname= "익명";
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void getUserId(string user_id)
    {
        nickname= user_id;
        //Debug.Log($"유저 {user_id} 아이디 가져옴");
        Debug.Log("유저 아이디 가져옴:"+user_id);
    }
    public string getNickname()
    {
        Debug.Log(nickname + " 반환");
        return nickname;
    }
 

}
