
function renderTable(data) {
    const tbody = document.getElementById("data-body");
    tbody.innerHTML = ""; 

    if (data.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>查無資料</td></tr>";
        return;
    }

    data.forEach(item => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.title || "無名稱";

        const locationCell = document.createElement("td");
        locationCell.textContent = item.showInfo?.[0]?.location || "無地點";

        const priceCell = document.createElement("td");
        priceCell.textContent = item.showInfo?.[0]?.price || "無票價";

        row.appendChild(nameCell);
        row.appendChild(locationCell);
        row.appendChild(priceCell);

        tbody.appendChild(row);
    });
}

fetch("https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6")
    .then(response => response.json())
    .then(data => {
        console.log("取得資料:", data);
        renderTable(data);
    })
    .catch(error => {
        console.error("資料載入失敗:", error);
        document.getElementById("data-body").innerHTML = "<tr><td colspan='3'>載入失敗</td></tr>";
    });
