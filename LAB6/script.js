var count = 1;

function addFunction() {
    var btn = document.createElement("button");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", "btn_" + count);
    btn.setAttribute("class", "btn btn-outline-danger m-2");
    document.getElementById("buttonContainer").appendChild(btn);
    console.log(`新增按鈕：CLICK ME (${count})`);
    count++;
}

function delFunction() {
    if (count > 1) {
        count--;
        var btn = document.getElementById("btn_" + count);
        if (btn) {
            document.getElementById("buttonContainer").removeChild(btn);
            console.log(`刪除按鈕：CLICK ME (${count})`);
        }
    }
}
