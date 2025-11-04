document.addEventListener("DOMContentLoaded", () => {
    const buttton = document.getElementById("btn");
    buttton.addEventListener("click", async () => {
        const response = await fetch("superheroes.php");
        const data = await response.text();
        alert(data);
    });


});