# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this project, I have built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Requirements:
 The following tools/libraries were used for this project:

1. D3 library to read in `samples.json`.

2. Plotly.js:
 i) to build a horizontal bar chart with a dropdown menu that displays the top 10         OTUs found in that individual.
 ii) to build a bubble chart that displays each sample.
 iii) the sample metadata, i.e., an individual's demographic information is displayed       as in a box.
 iv) each key-value pair from the metadata JSON object is displayed in the page.

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)

## Deployment

* The app built with the interactive dashboard was deployed to a free static page hosting service(GitHub Pages).

