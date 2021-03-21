var margin = {top: 10, right: 40, bottom: 30, left: 30},
    width = 700 - margin.left - margin.right,
    height = 670 - margin.top - margin.bottom;

var sVg_1 = d3.select("#scatter_area_popular_classic")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 25)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data_girls.csv", function(data) {
  var x = d3.scaleLinear()
  .domain([-1.5, 1])
  .range([0, width]);
  
  sVg_1
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisBottom(x).tickSize(-height*1.3).tickFormat(function(d) { return d + "%"; }).ticks(5))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");
  
  var y = d3.scaleLinear()
  .domain([0, 5])
  .range([height, 0]);

  sVg_1
  .append('g')
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");

  sVg_1.selectAll(".tick line").attr("stroke", "black")

  var color = d3.scaleOrdinal()
  .domain(['no', 'arab'])
  .range(['#FFAFDA', "#00B0B1"])

  sVg_1.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)
    .style('fill', '#FFAFDA')
    .style('stroke', function(d) {
      if (d.x < -0.05)
        if (d.y >= 1) {return "black"}})
    .style("opacity", function(d) {
      if (d.x < -0.05)
        if (d.y >= 1) {return 1}
        else {return 0.65}
      else 	{return 0.65}})

  sVg_1.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 15)
  .attr('font-weight', 'lighter')
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
    .attr("x", d => x(d.x) + 7)
    .attr("y", d => y(d.y))
    .text(function(d) {
      if (d.x < -0.05)
        if (d.y >= 1) {return d.name}
    });

  sVg_1.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(0))
  .attr("y2", y(5.07))
  .attr("x1", x(0))
  .attr("x2", x(0))

  sVg_1.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(1))
  .attr("y2", y(1))
  .attr("x1", x(-1.5))
  .attr("x2", x(1.25))

  sVg_1.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 565)
    .attr("y", height + margin.top + 25)
    .text("→ стали чаще называть");

  sVg_1.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 355)
    .attr("y", height + margin.top + 25)
    .text("стали реже называть ←");

  sVg_1.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -520)
    .text("редкие ←")

  sVg_1.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -388)
    .text("→ популярные")

})

var sVg = d3.select("#scatter_area_new_trends")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 25)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data_girls.csv", function(data) {
  var x = d3.scaleLinear()
  .domain([-1.5, 1])
  .range([0, width]);
  
  sVg
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisBottom(x).tickSize(-height*1.3).tickFormat(function(d) { return d + "%"; }).ticks(5))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");
  
  var y = d3.scaleLinear()
  .domain([0, 5])
  .range([height, 0]);

  sVg
  .append('g')
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");

  sVg.selectAll(".tick line").attr("stroke", "black")

  var color = d3.scaleOrdinal()
  .domain(['no', 'arab'])
  .range(['#FFAFDA', "#00B0B1"])

  sVg.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)
    .style('fill', '#FFAFDA')
    .style('stroke', function(d) {
      if (d.x > 0.01)
        if (d.y >= 1) {return "black"}})
    .style("opacity", function(d) {
      if (d.x > 0.01)
        if (d.y >= 1) {return 1}
        else {return 0.65}
      else 	{return 0.65}})

  sVg.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 15)
  .attr('font-weight', 'lighter')
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
    .attr("x", d => x(d.x) + 7)
    .attr("y", d => y(d.y))
    .text(function(d) {
      if (d.x > 0.01)
        if (d.y >= 1) {return d.name}
    });

  sVg.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(0))
  .attr("y2", y(5.07))
  .attr("x1", x(0))
  .attr("x2", x(0))

  sVg.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(1))
  .attr("y2", y(1))
  .attr("x1", x(-1.5))
  .attr("x2", x(1.25))

  sVg.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 565)
    .attr("y", height + margin.top + 25)
    .text("→ стали чаще называть");

  sVg.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 355)
    .attr("y", height + margin.top + 25)
    .text("стали реже называть ←");

  sVg.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -520)
    .text("редкие ←")

  sVg.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -388)
    .text("→ популярные")

})

var sVg_2 = d3.select("#scatter_area_not_so_rare_anymore")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 25)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data_girls.csv", function(data) {
  var x = d3.scaleLinear()
  .domain([-1.5, 1])
  .range([0, width]);
  
  sVg_2
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisBottom(x).tickSize(-height*1.3).tickFormat(function(d) { return d + "%"; }).ticks(5))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");
  
  var y = d3.scaleLinear()
  .domain([0, 5])
  .range([height, 0]);

  sVg_2
  .append('g')
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");

  sVg_2.selectAll(".tick line").attr("stroke", "black")

  var color = d3.scaleOrdinal()
  .domain(['no', 'arab'])
  .range(['#FFAFDA', "#00B0B1"])

  sVg_2.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)
    .style('fill', '#FFAFDA')
    .style('stroke', function(d) {
      if (d.cat == 'no')
        if (d.x > 0.28)
          if (d.y < 1) {return "black"}})
    .style("opacity", function(d) {
      if (d.cat == 'no')
        if (d.x > 0.28)
          if (d.y < 1) {return 1}
          else {return 0.65}
        else 	{return 0.65}
      else {return 0.65}})

  sVg_2.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 15)
  .attr('font-weight', 'lighter')
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
    .attr("x", d => x(d.x) + 7)
    .attr("y", d => y(d.y) + 15)
    .text(function(d) {
      if (d.cat == 'no')
        if (d.x > 0.28)
          if (d.y < 1) {return d.name}
    });

  sVg_2.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(0))
  .attr("y2", y(5.07))
  .attr("x1", x(0))
  .attr("x2", x(0))

  sVg_2.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(1))
  .attr("y2", y(1))
  .attr("x1", x(-1.5))
  .attr("x2", x(1.25))

  sVg_2.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 565)
    .attr("y", height + margin.top + 25)
    .text("→ стали чаще называть");

  sVg_2.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 355)
    .attr("y", height + margin.top + 25)
    .text("стали реже называть ←");

  sVg_2.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -520)
    .text("редкие ←")

  sVg_2.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -388)
    .text("→ популярные")

})

var sVg_3 = d3.select("#scatter_area_arabic_names")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 25)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data_girls.csv", function(data) {
  var x = d3.scaleLinear()
  .domain([-1.5, 1])
  .range([0, width]);
  
  sVg_3
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisBottom(x).tickSize(-height*1.3).tickFormat(function(d) { return d + "%"; }).ticks(5))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");
  
  var y = d3.scaleLinear()
  .domain([0, 5])
  .range([height, 0]);

  sVg_3
  .append('g')
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");

  sVg_3.selectAll(".tick line").attr("stroke", "black")

  var color = d3.scaleOrdinal()
  .domain(['no', 'arab'])
  .range(['#FFAFDA', "#00B0B1"])

  sVg_3.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)
    .style('fill', function(d) {return color(d.cat)})
    .style('stroke', function(d) {
      if (d.cat == 'arab')
        if (d.x > 0.2)
          if (d.y < 1) {return "black"}})
    .style("opacity", function(d) {
      if (d.cat == 'no')
        if (d.x > 0.2)
          if (d.y < 1) {return 1}
          else {return 0.65}
        else 	{return 0.65}
      else {return 0.65}})

  sVg_3.append("g")
  .attr("font-family", "sans-serif")
  .attr("font-size", 15)
  .attr('font-weight', 'lighter')
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
    .attr("x", d => x(d.x) + 7)
    .attr("y", d => y(d.y))
    .text(function(d) {
      if (d.cat == 'arab')
        if (d.x > 0.2)
          if (d.y < 1) {return d.name}
    });

  sVg_3.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(0))
  .attr("y2", y(5.07))
  .attr("x1", x(0))
  .attr("x2", x(0))

  sVg_3.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(1))
  .attr("y2", y(1))
  .attr("x1", x(-1.5))
  .attr("x2", x(1.25))

  sVg_3.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 565)
    .attr("y", height + margin.top + 25)
    .text("→ стали чаще называть");

  sVg_3.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 355)
    .attr("y", height + margin.top + 25)
    .text("стали реже называть ←");

  sVg_3.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -520)
    .text("редкие ←")

  sVg_3.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -388)
    .text("→ популярные")

})

var sVg_4 = d3.select("#scatter_area_all_names")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 25)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data_girls.csv", function(data) {
  var x = d3.scaleLinear()
  .domain([-1.5, 1])
  .range([0, width]);
  
  sVg_4
  .append('g')
  .attr("transform", "translate(0," + height + ")")
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisBottom(x).tickSize(-height*1.3).tickFormat(function(d) { return d + "%"; }).ticks(5))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");
  
  var y = d3.scaleLinear()
  .domain([0, 5])
  .range([height, 0]);

  sVg_4
  .append('g')
  .attr("stroke", "currentColor")
  .attr("stroke-opacity", 0.2)
  .call(d3.axisLeft(y).tickSize(-width*1.3).ticks(7))
  .selectAll(".tick text")
    .attr("font-family", "sans-serif")
    .attr("font-size","15");

  sVg_4.selectAll(".tick line").attr("stroke", "black")

  var tooltip = d3.select("#scatter_area_all_names")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style('width', '150px')

  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
  }

  var mousemove = function(d) {
    tooltip
      .html(d.name)
      .style("top", d3.select(this).attr("cy") + "px")
      .style("left", d3.select(this).attr("cx") + "px")
  }

  var mouseleave = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  var color = d3.scaleOrdinal()
  .domain(['no', 'arab'])
  .range(['#FFAFDA', "#00B0B1"])

  sVg_4.append('g')
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(d.x) })
    .attr("cy", function(d) { return y(d.y) })
    .attr("r", 5)
    .style('fill', function(d) {return color(d.cat)})
    .style("opacity", 0.65)
  .on("mouseover", mouseover )
  .on("mousemove", mousemove )
  .on("mouseleave", mouseleave );

  sVg_4.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(0))
  .attr("y2", y(5.07))
  .attr("x1", x(0))
  .attr("x2", x(0))

  sVg_4.append("line")
  .style("fill", "none")
  .style("stroke", "black")
  .style("stroke-width", "1px")
  .attr("y1", y(1))
  .attr("y2", y(1))
  .attr("x1", x(-1.5))
  .attr("x2", x(1.25))

  sVg_4.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 565)
    .attr("y", height + margin.top + 25)
    .text("→ стали чаще называть");

  sVg_4.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')
    .attr("text-anchor", "end")
    .attr("x", 355)
    .attr("y", height + margin.top + 25)
    .text("стали реже называть ←");

  sVg_4.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -520)
    .text("редкие ←")

  sVg_4.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 15)
    .attr('font-weight', 'lighter')  
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 680)
    .attr("x", -388)
    .text("→ популярные")

})