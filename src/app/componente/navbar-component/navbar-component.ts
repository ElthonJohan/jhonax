import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [CommonModule, RouterModule,
     MatIconModule,
      MatToolbarModule,
       MatMenuModule,
        MatButtonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  userName: string = '';
  cartItemCount: number = 0; // cantidad inicial del carrito
  showMenu = false;

  constructor(private router: Router) {
    this.userName = localStorage.getItem('user') || '';
  } 

  ngOnInit() {}


toggleMenu() {
  this.showMenu = !this.showMenu;
  this.toggleBodyScroll();
}

closeMenu() {
  this.showMenu = false;
  this.toggleBodyScroll();
}

private toggleBodyScroll() {
  if (this.showMenu) {
    // Bloquear scroll
    document.body.style.overflow = 'hidden';
  } else {
    // Restaurar scroll
    setTimeout(() => {
      document.body.style.overflow = 'visible';
      document.body.style.removeProperty('overflow');
    }, 300); // Pequeño delay para que coincida con la animación
  }
}
  // ==================== SOLUCIÓN AL ERROR ====================
  @HostListener('document:keydown.escape')
  onEscKeydown() {
    this.closeMenu();
  }


}
