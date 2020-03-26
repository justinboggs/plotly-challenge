d3.json("samples.json").then((data) => {
function getName(idNum) {
    return idNum.names
}
console.log(data)

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















// // charts
// d3.json("samples.json").then((data) => {
// var trace1 = {
//     x: data.id,
//     y: data.age,
//     type: "hbar",
//     name: "ID vs Age",
//     boxpoints: "all"


// };

// var data = [trace1];

// var layout = {
//     title: "Some random title",
//     xaxis: {title: "ID"},
//     yaxis: {title: "Age"}
// };

// Plotly.newPlot("bar", data, layout);

// });

// d3.json("samples.json").then((data) => {
//     var trace1 = {
//         x: data.id,
//         y: data.age,
//         type: "hbar",
//         name: "ID vs Age",
//         boxpoints: "all"
//     };

//     var data = [trace1];

//     var layout = {
//         title: "Some random title",
//         xaxis: {
//             title: "ID"
//         },
//         yaxis: {
//             title: "Age"
//         }
//     };

//     Plotly.newPlot("gauge", data, layout);

// });

// d3.json("samples.json").then((data) => {
//     var trace1 = {
//         x: data.id,
//         y: data.age,
//         type: "hbar",
//         name: "ID vs Age",
//         boxpoints: "all"
//     };

//     var data = [trace1];

//     var layout = {
//         title: "Some random title",
//         xaxis: {
//             title: "ID"
//         },
//         yaxis: {
//             title: "Age"
//         }
//     };

//     Plotly.newPlot("bubble", data, layout);

// });