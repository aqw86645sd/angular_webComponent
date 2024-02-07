import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  data = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 4 },
    { x: 5, y: 5 },
    { x: 6, y: 6 },
    { x: 7, y: 7 },
    { x: 8, y: 8 },
    { x: 9, y: 9 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.drawLineChart();
  }

  private drawLineChart(): void {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;
  
    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
  
    x.domain(d3.extent(this.data, d => d.x) as [number, number]);
    y.domain([0, d3.max(this.data, d => d.y) as number]);
  
    const line = d3.line<any>()
      .x((d: { x: any; }) => x(d.x))
      .y((d: { y: any; }) => y(d.y));
  
    svg.append('path')
      .data([this.data])
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('class', 'line')
      .attr('d', line);
  
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));
  
    svg.append('g')
      .call(d3.axisLeft(y));
  }

}
