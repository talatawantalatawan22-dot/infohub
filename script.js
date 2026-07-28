function searchSite() {
    let input = document.querySelector("input").value.toLowerCase();

    if (input.includes("mobile")) {
        window.location.href = "mobiles.html";
    } else if (input.includes("car")) {
        window.location.href = "cars.html";
    } else if (input.includes("technology") || input.includes("tech")) {
        window.location.href = "technology.html";
    } else if (input.includes("news")) {
        window.location.href = "news.html";
    } else if (input.includes("ai")) {
        window.location.href = "ai.html";
    } else if (input.includes("health")) {
        window.location.href = "health.html";
    } else if (input.includes("education")) {
        window.location.href = "education.html";
    } else {
        alert("No matching page found.");
    }
}

document.querySelector("button").onclick = searchSite;