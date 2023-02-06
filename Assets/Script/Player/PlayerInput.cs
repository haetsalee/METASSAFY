using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;

public class PlayerInput : MonoBehaviourPun
{
    public string moveAxisName = "Vertical"; // �յ� �������� ���� �Է��� �̸�
    public string rotateAxisName = "Horizontal"; // �¿� ȸ���� ���� �Է��� �̸�
    private Animator playerAnimator;


    // �� �Ҵ��� ���ο����� ����
    public float move { get; private set; } // ������ ������ �Է°�
    public float rotate { get; private set; } // ������ ȸ�� �Է°�

    private void Start()
    {
        playerAnimator = GetComponent<Animator>();
    }

    // �������� ����� �Է��� ����
    private void Update()
    {
        // ���� �÷��̾ �ƴ� ��� �Է��� ���� ����
        if (!photonView.IsMine)
        {
            return;
        }

        // move�� ���� �Է� ����
        move = Input.GetAxis(moveAxisName);

        // rotate�� ���� �Է� ����
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
