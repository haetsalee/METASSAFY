// server.js
const express = require("express");
const http = require("http");
const port = 5000; // 서버를 열 포트 번호
// const port = 8080; // 서버를 열 포트 번호
const app = express();

const server = http.createServer(app);

app.get("/", function (req, res) {
  res.send("<h1>Welcome to Metassafy</h1>");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true,
  },
});

const clients = {};

io.on("connection", (client) => {
  // socket.io에 누군가 새 접속을 했다는 이벤트(connection)를 들으면,
  // client라는 데이터가 넘어오는데(이름 변경 가능. socket으로 쓰는 경우도 많은듯),
  // 그걸 함수에서 어떻게 사용할 것인가?

  console.log(
    "User " +
      client.id +
      " connected, there are " +
      io.engine.clientsCount +
      " clients connected"
  );
  // 새 사람이 들어오면, client라는 데이터에 들어있는 정보값 id를
  // console창에 출력한다.
  // 현재 몇 명의 client가 접속중인지는 io.engine을 통해 확인하여
  // 함께 출력한다

  clients[client.id] = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
  };
  // clients라는 오브젝트에(server에서 선언됨) 받아온 client 데이터의 id를 key값으로
  // 포지션과 로테이션 값을 넣어준다.
  // (최초 생성시의 기본값이라 보면 될듯)

  //Make sure to send the client it's ID
  client.emit(
    "introduction",
    client.id,
    io.engine.clientsCount,
    Object.keys(clients)
  );
  // 클라이언트(접속자)에게 'introduction'이라는 이벤트를 보내며
  // 동시에 client의 id와 현재 접속자 수와, clients라는 오브젝트의 key를 배열로 전달

  //Update everyone that the number of users has changed
  io.sockets.emit(
    "newUserConnected",
    io.engine.clientsCount,
    client.id,
    Object.keys(clients)
  );
  // io에서 sockets(접속자들)에게 전체 emit한다. 무엇을?
  // newUserConnected라는 이벤트를.
  // 그리고 현재의 접속자수와 지금 접속한 client의 id 그리고 현재 clients의 key 배열을
  // 데이터로 전달한다.

  client.on("move", (posrot) => {
    // client로부터 move라는 이벤트를 들으면
    // pos라는 데이터를 함께 받아오는데, 이걸 어떻게 쓰는가...

    clients[client.id].position = posrot.pos;
    clients[client.id].rotation = posrot.rot;
    // server의 clients라는 오브젝트에서 move라는 이벤트를 보낸 client의 id를 찾아
    // 해당 key의 position의 값을 받아온 pos로 바꾼다.
    // console.log(pos)
    // 해서 내용 확인해보는 것도 좋다.
    // console.log(clients)
    //에서는 현재 clients 오브젝트의 전체 client의
    // position과 rotation을 확인할 수 있다.

    io.sockets.emit("userPositions", clients);
    // 이후 io를 통해 sockets(접속자들)에게 전체 emit한다. 무엇을?
    // userPositions라는 이벤트를.
    // 그리고 clients라는 오브젝트를 데이터로 전달한다.
  });

  //Handle the disconnection
  client.on("disconnect", () => {
    // client로부터 떠났다는 disconnect 이벤트를 들으면,

    //Delete this client from the object
    delete clients[client.id];
    // clients 오브젝트에서 해당 client의 id를 key로 가진 값을 삭제한다.
    // 그렇게 되면 떠난 client를 제외한 접속자들의 데이터만 오브젝트에 남게 될 것.

    io.sockets.emit(
      "userDisconnected",
      io.engine.clientsCount,
      client.id,
      Object.keys(clients)
    );
    // 이후 sockets(접속자들)에게 전체 emit을 한다. 무엇을?
    // userDiscconnected라는 이벤트를.
    // 그리고 현재 접속자 수, 접속자의 id, clients에 남은 접속자들의 key(id)값 배열을
    // 데이터로 전달한다.

    console.log(
      "User " +
        client.id +
        " dissconeted, there are " +
        io.engine.clientsCount +
        " clients connected"
    );
    // console에 떠난 client의 id를 출력하며 떠났음을 고지한다.
    // 동시에 남은 client의 수를 알려준다.
  });
});

server.on("error", (err) => {
  console.error("Server error: ", err);
});
server.listen(port, () => console.log(`Listening on port ${port}`));
