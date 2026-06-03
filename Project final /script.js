let data;

// Load JSON
async function init() {
    let link = "mvc.json";
    let info = await fetch(link);
    data = await info.json();
    console.log(data);

    // Show all hotspots initially
    displayAll();
}

// Build a card for each hotspot
function card(h) {
    return `
        <div class="fitted card">
            <h3>${h.provider}</h3>
            <p><strong>Borough:</strong> ${h.borough}</p>
            <p><strong>Location:</strong> ${h.location}</p>
        </div>
    `;
}

// Show all hotspots on load
function displayAll() {
    let build = "";
    for (let h of data) {
        build += card(h);
    }
    document.getElementById("output").innerHTML = build;
}

// Filter by borough
function filterByBoro() {
    let boro = document.getElementById("borough").value;
    let build = "";

    for (let h of data) {
        if (h.borough === boro) {
            build += card(h);
        }
    }

    document.getElementById("output").innerHTML = build;
}

// Chart by provider
function ByProvider() {
    let SPECTRUM = 0;
let TRANSITWIRELESS = 0;
let HARLEM = 0;
let BPL = 0;
let OTHER = 0;

for (let h of data) {
    let p = h.provider;

    if (p === "SPECTRUM") {
        SPECTRUM++;
    }
    else if (p === "Transit Wireless") {
        TRANSITWIRELESS++;
    }
    else if (p === "Harlem") {
        HARLEM++;
    }
    else if (p === "BPL") {
        BPL++;
    }
    else {
        OTHER++;
    }
}

let chartData = [
    ["SPECTRUM", SPECTRUM],
    ["TRANSIT WIRELESS", TRANSITWIRELESS],
    ["HARLEM", HARLEM],
    ["BPL", BPL],
    ["OTHER", OTHER]
];
    let chartType = document.getElementById("chartType").value;

    c3.generate({
        bindto: "#chart",
        data: {
            columns: chartData,
            type: chartType
        }
    });
}
