function loadSessions() {
    const saved = localStorage.getItem("studylog-sessions");
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}

function saveSessions(sessions) {
    localStorage.setItem("studylog-sessions", JSON.stringify(sessions));
}

const form = document.getElementById("session-form");

if (form !== null) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const session = {
            id: Date.now(),
            subject: document.getElementById("subject").value,
            minutes: Number(document.getElementById("minutes").value),
            date: document.getElementById("date").value,
            note: document.getElementById("note").value
        };
