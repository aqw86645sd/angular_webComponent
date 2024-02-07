import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {
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
    this.drawHistogram();
  }

  private drawHistogram(): void {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    // 過濾掉 undefined 值
    const filteredData = this.data.filter(d => typeof d.x === 'number' && typeof d.y === 'number');

    x.domain(filteredData.map(d => d.x.toString()) as string[]);  // 將數字轉換為字符串
    y.domain([0, d3.max(filteredData, d => d.y as number) as number]);

    svg.selectAll('.bar')
      .data(filteredData)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.x.toString()) as number)  // 將數字轉換為字符串
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.y as number))
      .attr('height', d => height - y(d.y as number));

    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }
}
