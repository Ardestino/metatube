import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Link } from './link';
import { Node, APP_CONFIG } from './node';
import { ForceDirectedGraph } from "./force-directed-graph";


@Component({
  selector: 'app-grafo-dirigido',
  templateUrl: './grafo-dirigido.component.html',
  styleUrls: ['./grafo-dirigido.component.scss'],
})
export class GrafoDirigidoComponent {

  nodes: Node[] = [];
  links: Link[] = [];
  sg: ForceDirectedGraph;


  private data = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
  ];
  private svg;
  private margin = 50;
  private width = 800 - this.margin * 2;
  private height = 600 - this.margin * 2;

  constructor() {}

  ngOnInit(): void {
    //this.createSvg();
    //this.drawBars(this.data);

    this.chart();
  }

  private createSvg(): void {
    this.svg = d3.select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    // Create the Y-axis band scale
    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append('g').call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.Framework))
      .attr('y', (d) => y(d.Stars))
      .attr('width', x.bandwidth())
      .attr('height', (d) => this.height - y(d.Stars))
      .attr('fill', '#d04a35');
  }

  private chart(): SVGSVGElement {
    function linkArc(d) {
      const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
      return `
        M${d.source.x},${d.source.y}
        A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
      `;
    }

    function drag(simulation) {
      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3
        .drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    const data = {
      nodes: [
        {
          id: "Microsoft"
        },
        {
          id: "Amazon"
        },
        {
          id: "HTC"
        },
        {
          id: "Samsung"
        },
        {
          id: "Apple"
        },
        {
          id: "Motorola"
        },
        {
          id: "Nokia"
        },
        {
          id: "Kodak"
        },
        {
          id: "Barnes & Noble"
        },
        {
          id: "Foxconn"
        },
        {
          id: "Oracle"
        },
        {
          id: "Google"
        },
        {
          id: "Inventec"
        },
        {
          id: "LG"
        },
        {
          id: "RIM"
        },
        {
          id: "Sony"
        },
        {
          id: "Qualcomm"
        },
        {
          id: "Huawei"
        },
        {
          id: "ZTE"
        },
        {
          id: "Ericsson"
        }
      ],
      links: [
        {
          source: "Microsoft",
          target: "Amazon",
          type: "licensing"
        },
        {
          source: "Microsoft",
          target: "HTC",
          type: "licensing"
        },
        {
          source: "Samsung",
          target: "Apple",
          type: "suit"
        },
        {
          source: "Motorola",
          target: "Apple",
          type: "suit"
        },
        {
          source: "Nokia",
          target: "Apple",
          type: "resolved"
        },
        {
          source: "HTC",
          target: "Apple",
          type: "suit"
        },
        {
          source: "Kodak",
          target: "Apple",
          type: "suit"
        },
        {
          source: "Microsoft",
          target: "Barnes & Noble",
          type: "suit"
        },
        {
          source: "Microsoft",
          target: "Foxconn",
          type: "suit"
        },
        {
          source: "Oracle",
          target: "Google",
          type: "suit"
        },
        {
          source: "Apple",
          target: "HTC",
          type: "suit"
        },
        {
          source: "Microsoft",
          target: "Inventec",
          type: "suit"
        },
        {
          source: "Samsung",
          target: "Kodak",
          type: "resolved"
        },
        {
          source: "LG",
          target: "Kodak",
          type: "resolved"
        },
        {
          source: "RIM",
          target: "Kodak",
          type: "suit"
        },
        {
          source: "Sony",
          target: "LG",
          type: "suit"
        },
        {
          source: "Kodak",
          target: "LG",
          type: "resolved"
        },
        {
          source: "Apple",
          target: "Nokia",
          type: "resolved"
        },
        {
          source: "Qualcomm",
          target: "Nokia",
          type: "resolved"
        },
        {
          source: "Apple",
          target: "Motorola",
          type: "suit"
        },
        {
          source: "Microsoft",
          target: "Motorola",
          type: "suit"
        },
        {
          source: "Motorola",
          target: "Microsoft",
          type: "suit"
        },
        {
          source: "Huawei",
          target: "ZTE",
          type: "suit"
        },
        {
          source: "Ericsson",
          target: "ZTE",
          type: "suit"
        },
        {
          source: "Kodak",
          target: "Samsung",
          type: "resolved"
        },
        {
          source: "Apple",
          target: "Samsung",
          type: "suit"
        },
        {
          source: "Kodak",
          target: "RIM",
          type: "suit"
        },
        {
          source: "Nokia",
          target: "Qualcomm",
          type: "suit"
        }
      ]
    }

    this.links = data.links.map(x => new Link(x.source,x.target,x.type));
    this.nodes = data.nodes.map(x => new Node(x.id));

    const types = ['licensing', 'suit', 'resolved'];
    const color = d3.scaleOrdinal(types, d3.schemeCategory10);

    const simulation = d3
      .forceSimulation(this.nodes)
      .force(
        'link',
        d3.forceLink<Node,Link>(this.links).id((d) => d.id)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('x', d3.forceX())
      .force('y', d3.forceY());

    const svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .attr('viewBox', [-this.width / 2, -this.height / 2, this.width, this.height])
      .style('font', '12px sans-serif');

    // Per-type markers, as they don't inherit styles.
    svg
      .append('defs')
      .selectAll('marker')
      .data(types)
      .join('marker')
      .attr('id', (d) => `arrow-${d}`)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 15)
      .attr('refY', -0.5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('fill', color)
      .attr('d', 'M0,-5L10,0L0,5');


    const link = svg
      .append('g')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(this.links)
      .join('path')
      .attr('stroke', (d) => color(d.type))
      .attr("marker-end", "url(#end)");
      // .attr(
      //   'marker-end',
      //   (d) => `url(${new URL(`#arrow-${d.type}`, location)})`
      // )
      ;

    const node = svg
      .append('g')
      .attr('fill', 'currentColor')
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .selectAll('g')
      .data(this.nodes)
      .join('g')
      //.call(drag(simulation))
      ;

    node
      .append('circle')
      .attr('stroke', 'white')
      .attr('stroke-width', 1.5)
      .attr('r', 4);

    node
      .append('text')
      .attr('x', 8)
      .attr('y', '0.31em')
      .text((d) => d.id)
      .clone(true)
      .lower()
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 3);

    simulation.on('tick', () => {
      link.attr('d', linkArc);
      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

    //invalidation.then(() => simulation.stop());

    return svg.node();
  }
}
