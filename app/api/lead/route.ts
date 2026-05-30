import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, country, visa_type, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 })
  }

  const { error } = await supabase.from('leads').insert({
    name,
    email,
    phone: phone ?? null,
    country: country ?? null,
    visa_type: visa_type ?? null,
    message: message ?? null,
    source: 'website',
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
