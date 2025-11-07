document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-search");
    const input = document.getElementById("search");
    const result = document.getElementById("result");

    form.addEventListener("submit", async(e) => {
        e.preventDefault();
        result.innerHTML = "Loading...";

        const q = input.value.trim();
        const url = q ? `superheroes.php?query=${encodeURIComponent(q)}` : `superheroes.php`;

        const response = await fetch(url);
        const data = await response.text();

        result.innerHTML = data;
    });

});