const checked = document.querySelector(".checked");
function createMessage(type, record) {
    const checked = `<div class= "message ${type}">${record}</div>`;
    return checked;
};

