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
