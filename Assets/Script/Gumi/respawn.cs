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

        // �� ������Ʈ�� ������ ���� ������Ʈ�� �ݶ��̴��� �浹�� ���� ������Ʈ ��������

        var obj = collision.gameObject;

        // Ư�� ������Ʈ ��������

      

        Debug.Log("�浹!"+obj.name);

    }
    private void OnTriggerEnter(Collider other)

    {

        Debug.Log(other.name + "���� ����!");
        var obj = other.gameObject;

        // Ư�� ������Ʈ ��������

        
        reset();
    }

    public void reset()
    {
        //��� �÷��̾� �߿���
        GameObject[] players = GameObject.FindGameObjectsWithTag("Player");
        for (int i = 0; i < players.Length; i++)
        {    //�̵��� ��(=�ڱ� �ڽ�)�� ����Ʈ���� ������ �̸����� ����
            if (players[i].GetComponent<PhotonView>().IsMine)
            {
                Debug.Log(players[i].transform.position + "���� ");
                players[i].transform.position = Vector3.zero;
                
                Debug.Log(players[i].transform.position+ "�̵�!");
               
            }
        }
    }



    

}
