using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Photon.Pun;
using UnityStandardAssets.Utility;

public class PlayerMovement : MonoBehaviourPun
{
    public float moveSpeed = 1f; // 앞뒤 움직임의 속도
    public float runSpeed = 10f;
    public float rotateSpeed = 80f; // 좌우 회전 속도
    public float jumpPower = 5.0f;

    
    private PlayerInput playerInput; // 플레이어 입력을 알려주는 컴포넌트
    private Animator playerAnimator; // 플레이어 캐릭터의 애니메이터
    private Rigidbody playerRigidbody; // 플레이어 캐릭터의 리지드바디

    RaycastHit hit;

    void Start()
    {
        // 사용할 컴포넌트들의 참조를 가져오기
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

    // FixedUpdate는 물리 갱신 주기에 맞춰 실행됨
    void FixedUpdate()
    {
        // 로컬 플레이어냐?
        if (!photonView.IsMine)
        {
            return;
        }
    
        // 회전 실행
        Rotate();
        // 움직임 실행
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

    // 입력값에 따라 캐릭터를 앞뒤로 움직임
    void Move()
    {

        // 상대적으로 이동할 거리 계산
        Vector3 moveDistance =
            playerInput.move * transform.forward * moveSpeed * Time.deltaTime;

        // 리지드바디를 통해 게임 오브젝트 위치 변경
        playerRigidbody.MovePosition(playerRigidbody.position + moveDistance);
        


    }

    // 입력값에 따라 캐릭터를 좌우로 회전
    void Rotate()
    {
        // 상대적으로 회전할 수치 계산
        float turn = playerInput.rotate * rotateSpeed * Time.deltaTime;
        // 리지드바디를 통해 게임 오브젝트 회전 변경
        playerRigidbody.rotation =
            playerRigidbody.rotation * Quaternion.Euler(0, turn, 0f);
    }
}
