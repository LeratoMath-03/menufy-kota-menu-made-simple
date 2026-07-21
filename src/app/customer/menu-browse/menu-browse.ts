import { Component, inject, signal, OnInit } from '@angular/core';
import { Menu, MenuItem } from '../../customerServices/menu';
import { Cart } from '../../customerServices/cart';

@Component({
  selector: 'app-menu-browse',
  imports: [],
  templateUrl: './menu-browse.html',
  styleUrl: './menu-browse.css',
})
export class MenuBrowse implements OnInit {
  private menuService = inject(Menu);
  cart = inject(Cart);

  items = signal<MenuItem[]>([]);
  loading = signal(true);
  selectedCategory = signal<string>('All');
  categories = signal<string[]>(['All']);

  ngOnInit(): void {
    this.loadMenu();
  }

  private async loadMenu(): Promise<void> {
    const data = await this.menuService.getMenuItems();
    this.items.set(data);

    const uniqueCategories = [...new Set(data.map(item => item.category))];
    this.categories.set(['All', ...uniqueCategories]);

    this.loading.set(false);
  }

  filteredItems() {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.items();
    }
    return this.items().filter(item => item.category === category);
  }

  addToCart(item: MenuItem) {
    this.cart.addItem(item);
  }
}
