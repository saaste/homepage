window.onload = () => {
    const toggles = document.querySelectorAll(".toggle");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", onToggleClick);
    })
}

const onToggleClick = (e) => {
    e.preventDefault();
    const labelOn = e.target.dataset["labelOn"];
    const labelOff = e.target.dataset["labelOff"];
    const targetId = e.target.dataset["target"]
    const target = document.getElementById(targetId);
    const targetIsHidden = target.classList.contains("hidden");
    
    if (targetIsHidden) {
        target.classList.remove("hidden");
        e.target.innerText = labelOn;
    } else {
        target.classList.add("hidden");
        e.target.innerText = labelOff;
    }

    
}