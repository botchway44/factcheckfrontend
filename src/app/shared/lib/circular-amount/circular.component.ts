import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  @Input() height = 300;
  @Input() width = 300;
  radius = 0;
  strokeOffset = 0;
  dashArray = 0;
  centerX = 0;
  centerY = 0;

  @Input() current = 9000;
  @Input() target = 10000;

  @Input() textColor = "black";
  @Input() text = "$10000";
  @Input() colors: [z: string, y: string] = ['#E9FB4D', "#0E8698",]

  ngOnInit(): void {

    this.radius = Math.floor(this.height / 2) - 20;
    this.centerY = Math.floor(this.height / 2);
    this.centerX = Math.floor(this.width / 2);

    this.dashArray = 2 * Math.PI * this.radius
    this.strokeOffset = (this.current * this.dashArray) / this.target;
    console.log(this.strokeOffset);

  }

}
