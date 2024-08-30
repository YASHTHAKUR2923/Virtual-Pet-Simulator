document.addEventListener("DOMContentLoaded", () => {
    let hunger = 50;
    let happiness = 50;
    let energy = 50;

    const hungerElement = document.getElementById("hunger");
    const happinessElement = document.getElementById("happiness");
    const energyElement = document.getElementById("energy");

    const petElement = document.getElementById("pet");

    document.getElementById("feed").addEventListener("click", () => {
        hunger = Math.max(hunger - 10, 0);
        updateStatus();
    });

    document.getElementById("play").addEventListener("click", () => {
        happiness = Math.min(happiness + 10, 100);
        energy = Math.max(energy - 10, 0);
        updateStatus();
    });

    document.getElementById("sleep").addEventListener("click", () => {
        energy = Math.min(energy + 20, 100);
        hunger = Math.min(hunger + 5, 100);
        updateStatus();
    });

    function updateStatus() {
        hungerElement.textContent = hunger;
        happinessElement.textContent = happiness;
        energyElement.textContent = energy;

        // Example animation for pet interaction
        petElement.style.transform = `scale(${1 + happiness / 200})`;
    }
});
