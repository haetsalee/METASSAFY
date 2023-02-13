using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Emoji : MonoBehaviourPunCallbacks
{

    public GameObject[] emojis = new GameObject[12];

    private int action;
    private float timer;


    void Start() {

        if (photonView != null)
        {
            //내가 로컬 플레이어일까?
            if (photonView.IsMine)
            {
                timer = 2.0f;
                action = 0;
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        // setEmoji();
        setEmoji(1);
        setEmoji(2);
        setEmoji(3);
        setEmoji(4);
        setEmoji(5);
        setEmoji(6);
        setEmoji(7);
        setEmoji(8);
        setEmoji(9);
        setEmoji(10);
        setEmoji(11);
        setEmoji(12);

    }

    private void setEmoji(int idx) {
        if (photonView.IsMine)
        {
            if (idx == 1)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F1))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 2)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F2))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 3)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F3))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 4)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F4))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 5)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F5))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 6)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F6))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 7)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F7))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 8)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F8))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 9)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F9))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 10)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F10))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 11)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F11))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }
            else if (idx == 12)
            {
                if (action == 0 && Input.GetKeyDown(KeyCode.F12))
                {
                    emojis[idx].SetActive(true);
                    action = idx;
                }
            }



            if (action != idx) return;

            if (action > 0)
            {


                timer -= Time.deltaTime;

                if (timer < 0)
                {
                    action = 0;
                    timer = 2.0f;
                    emojis[idx].SetActive(false);
                }


            }
        }
    }
}
