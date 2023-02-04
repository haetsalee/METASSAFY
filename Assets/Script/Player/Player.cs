using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using Unity.VisualScripting;
using System;

public class Player : MonoBehaviourPunCallbacks
{
    public float Speed = 10.0f;

    public float rotateSpeed = 2.0f;       // 회전 속도
    float h, v;
    private Rigidbody m_rigidbody;
    // Start is called before the first frame update
    void Start()
    {
        m_rigidbody = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
         
    }
    private void FixedUpdate()
    {
        if (photonView.IsMine)
        {
            
            Move();

        }
    }
    private void Move()
    {
        

        float x = Input.GetAxis("Horizontal") * 5f * Time.deltaTime;
        float z = Input.GetAxis("Vertical") * 5f * Time.deltaTime;
        
        transform.Translate(x, 0, z);
 
    }
   
}
