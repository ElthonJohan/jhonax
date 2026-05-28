import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIcon } from "@angular/material/icon";


@Component({
  selector: 'app-home-component',
  imports: [CommonModule, MatIcon],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit, OnDestroy {

  heroImages = [
    "https://i.postimg.cc/PxJrhgfV/polodepotivo.jpg",
    "https://i.postimg.cc/NFrs2RH6/ropacasual.jpg",
    "https://i.postimg.cc/Y9P2Sdhd/ropaformal.jpg"
  ];

  currentImage = 0;
  loading = true;
  error = false;
  private intervalId: any;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef // Inyectamos el detector de cambios
  ) {}

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.heroImages.length;
      this.cdr.detectChanges(); // Forzamos a Angular a renderizar el cambio
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiamos el timer al salir de la vista
    }
  }
}