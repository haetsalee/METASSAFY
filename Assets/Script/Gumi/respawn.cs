using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UIElements;

public class respawn : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }
    public GameObject map;
    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnCollisionEnter(Collision collision)

    {

        // 이 컴포넌트가 부착된 게임 오브젝트의 콜라이더와 충돌한 게임 오브젝트 가져오기

        var obj = collision.gameObject;

        // 특정 컴포넌트 가져오기

      

        Debug.Log("충돌!"+obj.name);

    }
    private void OnTriggerEnter(Collider other)

    {

        Debug.Log(other.name + "감지 시작!");
        var obj = other.gameObject;

        // 특정 컴포넌트 가져오기

        
        reset();
    }

    public void reset()
    {
        //모든 플레이어 중에서
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //이동한 애(=자기 자신)을 리액트에서 보내준 이름으로 설정
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                Debug.Log(players[i].transform.position + "에서 ");
                players[i].transform.position = Vector3.zero;
                
                Debug.Log(players[i].transform.position+ "이동!");
               
            }
        }
    }



    

}
