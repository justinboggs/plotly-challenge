d3.json("samples.json").then((data) => {
var trace1 = {
    x: data.id,
    y: data.age,
    type: "hbar",
    name: "ID vs Age",
    boxpoints: "all"
};

var data = [trace1];

var layout = {
    title: "Some random title",
    xaxis: {title: "ID"},
    yaxis: {title: "Age"}
};

Plotly.newPlot("bar", data, layout);

});

d3.json("samples.json").then((data) => {
    var trace1 = {
        x: data.id,
        y: data.age,
        type: "hbar",
        name: "ID vs Age",
        boxpoints: "all"
    };

    var data = [trace1];

    var layout = {
        title: "Some random title",
        xaxis: {
            title: "ID"
        },
        yaxis: {
            title: "Age"
        }
    };

    Plotly.newPlot("gauge", data, layout);

});

d3.json("samples.json").then((data) => {
    var trace1 = {
        x: data.id,
        y: data.age,
        type: "hbar",
        name: "ID vs Age",
        boxpoints: "all"
    };

    var data = [trace1];

    var layout = {
        title: "Some random title",
        xaxis: {
            title: "ID"
        },
        yaxis: {
            title: "Age"
        }
    };

    Plotly.newPlot("bubble", data, layout);

});