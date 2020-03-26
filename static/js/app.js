d3.json("samples.json").then((data) => {
function getName(idNum) {
    return idNum.names
}
console.log(data)

    d3.selectAll("#selDataset").on("change", updatePlotly);

    function updatePlotly() {
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var dataset = dropdownMenu.property(idNum.names);


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