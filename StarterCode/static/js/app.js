// DEMOGRAPHICS DESCRIPTION
function patientDemoInfo(patientID) {

    var demographicInfoBox = d3.select("#sample-metadata");

    //have to clear existing html
    demographicInfoBox.html("");

    d3.json("samples.json").then(data => {
        var metadata = data.metadata
        var metaFilter = metadata.filter(bacteriaInfo => bacteriaInfo.id == patientID)[0]

        console.log(metaFilter)


        Object.entries(metaFilter).forEach(([key, value]) => {
            demographicInfoBox.append("p").text(`${key}: ${value}`)
        })


    })
}
// DEMOGRAPHICS
function optionChanged(patientID) {
    console.log(patientID);
    buildCharts(patientID);
    patientDemoInfo(patientID);
}

// DROPDOWN FOR DEMOINFO
function initDashboard() {
    var dropdown = d3.select("#selDataset")
    d3.json("samples.json").then(data => {
        var patientIDs = data.names;
        patientIDs.forEach(patientID => {
            dropdown.append("option").text(patientID).property("value", patientID)
        })
        buildCharts(patientIDs[0]);
        patientDemoInfo(patientIDs[0]);
    });
};

initDashboard();
  
//Charts//
function buildCharts(patientID) {
    

    // Reading the data
    d3.json("samples.json").then((data => {

        
        var samples = data.samples;
        var metadata = data.metadata;


        var filterMeta = metadata.filter(sampleObj => sampleObj.id == patientID)
    
        var filterSample = samples.filter(sampleObj => sampleObj.id == patientID)

        var results= filterSample[0];
        var results1 = filterMeta[0];

        var otuIds = results.otu_ids;

        var otuLabels = results.otu_labels;

        var sampleValues = results.sample_values;
    

        // BAR CHART
       
        var data = [{
           
            x: sampleValues.slice(0, 10).reverse(),
            
            y: otuIds.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
            
            text: otuLabels.slice(0, 10).reverse(),
            marker: {
                color: '#665191'
            },
            type: 'bar',
            orientation: 'h',
        }]
      
        var layout = {
            title: "Microbial diversity in Belly Buttons"
        };

        
        Plotly.newPlot('bar', data, layout)

        // BUBBLE CHART
        
        var bubble_data = [{
            
            x: otuIds,
            
            y: sampleValues,
           
            text: otuLabels,
            type: "bubble",
            mode: 'markers',
            marker: { 
                color: otuIds,
                size: sampleValues,
                colorscale: 'YlGnBu'
            }
        }];

        var bubble_layout = {
            title: "Bacteria Cultures per Sample",
            xaxis: { title: "OTU ID" },
            yaxis: { title: "No. of Samples" }
        };

        Plotly.newPlot('bubble', bubble_data, bubble_layout)

        // GAUGE CHART

        var washFreq = results1.wfreq

        var gauge_data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                value: washFreq,
                title: "Washing Frequency (Times per Week)",
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    bar: {color: 'white'},
                    axis: { range: [null, 9] },
                    steps: [
                        { range: [0, 1], color: 'rgb(253, 128, 128)' },
                        { range: [1, 2], color: 'rgb(153, 51, 102)' },
                        { range: [2, 3], color: 'rgb(253, 128, 128)' },
                        { range: [3, 4], color: 'rgb(153, 51, 102)' },
                        { range: [4, 5], color: 'rgb(253, 128, 128)' },
                        { range: [5, 6], color: 'rgb(153, 51, 102)' },
                        { range: [6, 7], color: 'rgb(253, 128, 128)' },
                        { range: [7, 8], color: 'rgb(153, 51, 102))' },
                        { range: [8, 9], color: 'rgb(253, 128, 128)' }
                    ],
                    
                }
            }
        ];

        var gauge_layout = { width: 500, height: 400, margin: { t: 0, b: 0 } };

        Plotly.newPlot('gauge', gauge_data, gauge_layout);
    }))
};



