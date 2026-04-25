import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_links')
      .select('key, url');

    if (error) {
      console.error('Supabase error fetching links:', error);
      return NextResponse.json({ error: 'Failed to fetch links' }, { status: 500 });
    }

    // Convert array to object: { schedule_call: '...', pitch_deck: '...', resume: '...' }
    const links = data.reduce((acc: Record<string, string>, item) => {
      acc[item.key] = item.url;
      return acc;
    }, {});

    return NextResponse.json(links);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
