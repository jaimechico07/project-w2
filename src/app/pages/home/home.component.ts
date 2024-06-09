import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pages-home',
  standalone: true,
  imports: [ RouterLink,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {

}
