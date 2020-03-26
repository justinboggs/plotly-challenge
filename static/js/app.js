d3.json("samples.json").then((data) => {
function getName(idNum) {
    return idNum.names
}
console.log(data)

    d3.selectAll("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selectOption");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property("value");

        // Initialize x and y arrays
        var x = [];

    };

    var trace1 = {
        x: data.names,
        y: data.age,
        type: "line",
        name: "ID vs Age",
        boxpoints: "all"
    };

    var data = [trace1];

    var layout = {
        title: "Some random title",
        xaxis: { title: "ID" },
        yaxis: { title: "Age" }
    };

    Plotly.newPlot("bar", data, layout);

    var trace1 = {
        x: data.names,
        y: data.age,
        type: "line",
        name: "ID vs Age",
        boxpoints: "all"
    };

    var data = [trace1];

    var layout = {
        title: "Some random title",
        xaxis: { title: "ID" },
        yaxis: { title: "Age" }
    };

    Plotly.newPlot("gauge", data, layout);

    var trace1 = {
        x: data.names,
        y: data.age,
        type: "line",
        name: "ID vs Age",
        boxpoints: "all"
    };

    var data = [trace1];

    var layout = {
        title: "Some random title",
        xaxis: { title: "ID" },
        yaxis: { title: "Age" }
    };

    Plotly.newPlot("bubble", data, layout);

});