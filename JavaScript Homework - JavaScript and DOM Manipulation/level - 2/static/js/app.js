// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
        })
    });
};

var filters = {};

function updateFilters() {
    var changeElement = d3.select(this).select("input");
    var elementValue = changeElement.property("value");
    var filterID = changeElement.attr("id");

    if (elementValue) {
        filters[filterID] = elementValue;
    }
    else {
        delete filters[filterID];
    }

    console.log(Object.entries(filters))

    filterTable();
}

function filterTable() {
    let filterData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filterData = filterData.filter(row => row[key] === value);
    });

    buildTable(filterData);
}

d3.selectAll(".filter").on("change", updateFilters);

buildTable(tableData);
