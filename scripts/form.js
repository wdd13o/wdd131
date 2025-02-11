const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

// Populate product dropdown
const productDropdown = document.getElementById("product");
products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productDropdown.appendChild(option);
});

// Store review count
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("reviewCount")) {
        localStorage.setItem("reviewCount", "0");
    }
});



// Function to update review count
function updateReviewCount() {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
}
document.getElementById("lastModified").textContent = new Date().toLocaleString();