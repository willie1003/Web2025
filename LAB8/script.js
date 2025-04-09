// 取得隨機小寫字母
function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// 取得 count 個隨機字母組成的字串
function getRandomLetters(count) {
    let letters = "";
    for (let i = 0; i < count; i++) {
        letters += getRandomLetter();
    }
    return letters;
}

// DOM 元素：顯示字母的容器
var container = document.getElementById('container');

// 自動取得輸入焦點
container.focus();

// 錯誤計數器
let missCount = 0;

// 重置容器：產生新的 2 個字母
function resetContainer() {
    container.textContent = getRandomLetters(2);
    missCount = 0; // 錯誤次數歸零
    container.focus(); // 每次重置都自動 focus
}

// 初始化：先顯示兩個字母
resetContainer();

// 鍵盤事件處理
window.addEventListener("keyup", function(e) {
    let currentText = container.textContent;

    if (e.key === currentText[0]) {
        // 打對了：移除第一個字母，增加 1~3 個新字母
        container.textContent = currentText.substring(1) + getRandomLetters(Math.floor(Math.random() * 3) + 1);
        missCount = 0;
    } else if (e.key === "Escape") {
        resetContainer();
    } else if (e.key === "Backspace") {
        container.textContent = currentText.slice(0, -1);
        if (container.textContent === "") {
            resetContainer();
        }
    } else {
        // 打錯了
        missCount++;
        if (missCount >= 3) {
            container.textContent += getRandomLetters(6);
            missCount = 0;
        }
    }
});
