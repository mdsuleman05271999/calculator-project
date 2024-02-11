function generateUUID() {
    let number = document.getElementById("number").value;
    let uuids = [];
    for (let i = 0; i < number; i++) {
      uuids.push(crypto.getRandomValues(new Uint32Array(4)).join('-'));
    }
    let uuidList = document.getElementById("uuid-list");
    uuidList.innerHTML = "";
    uuids.forEach(function (uuid) {
      let listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(uuid));
      uuidList.appendChild(listItem);
    });
  }