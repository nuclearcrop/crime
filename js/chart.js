// =============================
// CrimeLens India - chart.js
// =============================

document.addEventListener("DOMContentLoaded", () => {

    initializeSearch();
    animateKPICards();
    initializeCrimeChart();

});

// =============================
// Search Function
// =============================

function initializeSearch() {

    const searchButtons = document.querySelectorAll("button");

    searchButtons.forEach(button => {

        if (button.innerText.toLowerCase().includes("search")) {

            button.addEventListener("click", () => {

                const input =
                    button.parentElement.querySelector("input");

                if (!input) return;

                const query = input.value.trim();

                if (query === "") {
                    alert("Please enter a search term");
                    return;
                }

                alert("Searching for: " + query);

                // Future:
                // API Search
                // State Search
                // Police Station Search

            });

        }

    });

}

// =============================
// KPI Counter Animation
// =============================

function animateKPICards() {

    const cards = document.querySelectorAll(".card h2");

    cards.forEach(card => {

        let originalText = card.innerText;

        let value =
            parseInt(originalText.replace(/[^0-9]/g, ""));

        if (isNaN(value)) return;

        let count = 0;

        let speed = Math.max(10, value / 100);

        const interval = setInterval(() => {

            count += speed;

            if (count >= value) {

                card.innerText = originalText;

                clearInterval(interval);

            } else {

                card.innerText =
                    Math.floor(count).toLocaleString();

            }

        }, 15);

    });

}

// =============================
// Crime Trend Chart
// =============================

function initializeCrimeChart() {

    const canvas = document.getElementById("crimeChart");

    if (!canvas) return;

    new Chart(canvas, {

        type: "line",

        data: {

            labels: [
                "2020",
                "2021",
                "2022",
                "2023",
                "2024",
                "2025",
                "2026"
            ],

            datasets: [{

                label: "Crime Reports",

                data: [
                    3200000,
                    3500000,
                    3900000,
                    4100000,
                    4500000,
                    4800000,
                    5200000
                ],

                borderColor: "#38bdf8",

                backgroundColor:
                    "rgba(56,189,248,0.15)",

                tension: 0.4,

                fill: true

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {

                        color: "#ffffff"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "#94a3b8"

                    }

                },

                y: {

                    ticks: {

                        color: "#94a3b8"

                    }

                }

            }

        }

    });

}

// =============================
// Table Filter
// =============================

function filterTable(searchTerm, tableId) {

    const table =
        document.getElementById(tableId);

    if (!table) return;

    const rows =
        table.querySelectorAll("tbody tr");

    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(searchTerm.toLowerCase())
                ? ""
                : "none";

    });

}

// =============================
// Export CSV
// =============================

function exportTableToCSV(tableId, filename) {

    const table =
        document.getElementById(tableId);

    if (!table) return;

    let csv = [];

    const rows =
        table.querySelectorAll("tr");

    rows.forEach(row => {

        let cols =
            row.querySelectorAll("td, th");

        let rowData = [];

        cols.forEach(col => {

            rowData.push(
                '"' + col.innerText + '"'
            );

        });

        csv.push(rowData.join(","));

    });

    const csvFile =
        new Blob([csv.join("\n")], {
            type: "text/csv"
        });

    const downloadLink =
        document.createElement("a");

    downloadLink.download = filename;

    downloadLink.href =
        window.URL.createObjectURL(csvFile);

    downloadLink.style.display = "none";

    document.body.appendChild(downloadLink);

    downloadLink.click();

}

// =============================
// Generate PDF Placeholder
// =============================

function generatePDFReport() {

    alert(
        "PDF generation will be connected to backend later."
    );

}

// =============================
// API Status Checker
// =============================

async function checkAPIStatus() {

    try {

        console.log(
            "Checking NCRB / Data.gov.in status..."
        );

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}

// =============================
// Dark Theme Utility
// =============================

function toggleTheme() {

    document.body.classList.toggle("light-theme");

}

// =============================
// Future CrimeLens APIs
// =============================

// getStateData()
// getDistrictData()
// getPoliceStationData()
// getCrimeStatistics()
// getScamReports()
// getFIRMetadata()
// getTransparencyData()

console.log(
    "CrimeLens chart.js loaded successfully."
);
