import { Injectable, inject } from '@angular/core';
import { Supabase } from '../core/supabase';
import { environment } from '../../environments/environment';

export interface MenuItem 
{
  id: string;
  business_id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class Menu 
{
  private supabase = inject(Supabase);

  async getMenuItems(): Promise<MenuItem[]> 
  {
    const { data, error } = await this.supabase.client
    .from('menu_items')
    .select('*')
    .eq('business_id', environment.businessId)
    .order('category', {ascending: true});

    if (error) 
      {
        console.error('Error fetching menu items', error);
        return [];
      }

      return data ?? [];

  }
}
