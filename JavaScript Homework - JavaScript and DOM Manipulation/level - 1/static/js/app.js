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

function handleClick() {
    var date = d3.select("#datetime").property("value");
    let filterData = tableData;

    console.log(d3.select("#datetime"))
    console.log(d3.select("#datetime").property("value"))

    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    }

    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
