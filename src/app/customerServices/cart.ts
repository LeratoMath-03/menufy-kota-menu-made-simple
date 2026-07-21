import { Injectable, signal, computed } from '@angular/core';
import {MenuItem} from './menu';

export interface CartLine 
{
  menuItem: MenuItem;
  quantity: number;
}


@Injectable({
  providedIn: 'root',
})
export class Cart 
{
  private lines = signal<CartLine[]> ([]);

  readonly items = this.lines.asReadonly();

  readonly itemCount = computed(() =>
    this.lines().reduce((sum, line) => sum + line.quantity, 0)
  );

  readonly total = computed(() =>
    this.lines().reduce((sum, line) => sum + line.menuItem.price * line.quantity, 0)
  );

  addItem(menuItem: MenuItem): void 
  {
    const existing = this.lines().find(line => line.menuItem.id === menuItem.id);
    if (existing) 
      {
        this.updateQuantity(menuItem.id, existing.quantity + 1);
      } else
      {
        this.lines.update(lines => [...lines, {menuItem, quantity: 1}]);
      }
    }

    removeItem(menuItemId: string): void 
    {
      this.lines.update(lines => lines.filter(line => line.menuItem.id !== menuItemId));
    }

    updateQuantity(menuItemId: string, quantity: number): void 
    {
      if (quantity <= 0) 
        {
          this.removeItem(menuItemId);
          return;
        }

        this.lines.update (lines => 
          lines.map(line =>
            line.menuItem.id === menuItemId ? {...line, quantity} : line
          )
        );
    }
    clear(): void 
    {
      this.lines.set([]);
    }
  }

