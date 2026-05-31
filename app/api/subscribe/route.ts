import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  console.log('URL configured:', !!process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log('Key configured:', !!process.env.SUPABASE_SERVICE_ROLE_KEY)

  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const { error } = await supabase
    .from('subscribers')
    .insert({ email, source: 'website' })

  if (error) {
    console.error('Supabase error:', JSON.stringify(error))
    if (error.code === '23505') {
      // duplicate — treat as success
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: error.message, code: error.code }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
