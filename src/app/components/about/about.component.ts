import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  email = 'fahdasif51@gmail.com';
  instagram = 'fahd_asif';
  userCount=0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.incrementUserCount();
  }

  incrementUserCount(): void {
    const apiUrl = 'https://api.countapi.xyz/update/test?amount=1';
    this.http.get<{ value: number }>(apiUrl).subscribe((data) => {
      this.userCount = data.value;
    });
  }
}
