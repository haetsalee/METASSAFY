using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class PlayerInput : MonoBehaviourPun
{
    public string moveAxisName = "Vertical"; // 앞뒤 움직임을 위한 입력축 이름
    public string rotateAxisName = "Horizontal"; // 좌우 회전을 위한 입력축 이름
    private Animator playerAnimator;


    // 값 할당은 내부에서만 가능
    public float move { get; private set; } // 감지된 움직임 입력값
    public float rotate { get; private set; } // 감지된 회전 입력값

    private void Start()
    {
        playerAnimator = GetComponent<Animator>();
    }

    // 매프레임 사용자 입력을 감지
    private void Update()
    {
        // 로컬 플레이어가 아닌 경우 입력을 받지 않음
        if (!photonView.IsMine)
        {
            return;
        }

        // move에 관한 입력 감지
        move = Input.GetAxis(moveAxisName);

        // rotate에 관한 입력 감지
        rotate = Input.GetAxis(rotateAxisName);

        if (move != 0 || rotate != 0)
        {
            playerAnimator.SetBool("isMove", true);
            if (Input.GetKey(KeyCode.LeftShift))
            {
                playerAnimator.SetBool("isRun", true);
            }
            else
            {
                playerAnimator.SetBool("isRun", false);
            }
        }
        else
        {
            playerAnimator.SetBool("isMove", false);
        }


    }
}
