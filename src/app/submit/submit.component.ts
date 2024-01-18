import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {

}
