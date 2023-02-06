using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using UnityStandardAssets.Utility;

public class PlayerMovement : MonoBehaviourPun
{
    public float moveSpeed = 1f; // �յ� �������� �ӵ�
    public float runSpeed = 10f;
    public float rotateSpeed = 80f; // �¿� ȸ�� �ӵ�
    public float jumpPower = 5.0f;

    
    private PlayerInput playerInput; // �÷��̾� �Է��� �˷��ִ� ������Ʈ
    private Animator playerAnimator; // �÷��̾� ĳ������ �ִϸ�����
    private Rigidbody playerRigidbody; // �÷��̾� ĳ������ ������ٵ�

    RaycastHit hit;

    void Start()
    {
        // ����� ������Ʈ���� ������ ��������
        playerInput = GetComponent<PlayerInput>();
        playerRigidbody = GetComponent<Rigidbody>();
        playerAnimator = GetComponent<Animator>();

        if (photonView.IsMine)
        {
            Camera.main.GetComponent<SmoothFollowCam>().target = transform.Find("CamPivot").transform;
        }
        else
        {
            playerRigidbody.isKinematic = true;
        }
    }

    // FixedUpdate�� ���� ���� �ֱ⿡ ���� �����
    void FixedUpdate()
    {
        // ���� �÷��̾��?
        if (!photonView.IsMine)
        {
            return;
        }
    
        // ȸ�� ����
        Rotate();
        // ������ ����
        Move();



        Debug.DrawRay(transform.position, -transform.up * 0.6f, Color.green);
        if (Input.GetKeyDown(KeyCode.Backspace))
        {
            if (Physics.Raycast(transform.position, -transform.up, out hit, 0.6f))
            {
                playerRigidbody.AddForce(Vector3.up * jumpPower, ForceMode.Impulse);
            }
        }



    }

    // �Է°��� ���� ĳ���͸� �յڷ� ������
    void Move()
    {

        // ��������� �̵��� �Ÿ� ���
        Vector3 moveDistance =
            playerInput.move * transform.forward * moveSpeed * Time.deltaTime;

        // ������ٵ� ���� ���� ������Ʈ ��ġ ����
        playerRigidbody.MovePosition(playerRigidbody.position + moveDistance);
        


    }

    // �Է°��� ���� ĳ���͸� �¿�� ȸ��
    void Rotate()
    {
        // ��������� ȸ���� ��ġ ���
        float turn = playerInput.rotate * rotateSpeed * Time.deltaTime;
        // ������ٵ� ���� ���� ������Ʈ ȸ�� ����
        playerRigidbody.rotation =
            playerRigidbody.rotation * Quaternion.Euler(0, turn, 0f);
    }
}
