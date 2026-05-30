# Canada Survival Guide — estructura del proyecto

canadasurvivalguide/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── globals.css
│   ├── (content)/
│   │   ├── before-you-go/
│   │   │   └── [slug]/page.tsx     # Artículos: trámites, qué llevar
│   │   ├── first-90-days/
│   │   │   └── [slug]/page.tsx     # Banco, SIN, celular, renta
│   │   └── work-and-money/
│   │       └── [slug]/page.tsx     # Trabajo, taxes, cultura laboral
│   ├── free-guide/
│   │   └── page.tsx                # Landing del PDF lead magnet
│   └── api/
│       ├── subscribe/route.ts      # Email list → Supabase
│       └── lead/route.ts           # Formulario → consultores RCIC
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── EmailCapture.tsx            # CTA email en artículos
│   ├── LeadForm.tsx                # Formulario para consultores RCIC
│   └── AffiliateCallout.tsx        # Bloque de afiliados en artículos
├── content/
│   ├── before-you-go/
│   │   ├── documents-checklist.mdx
│   │   ├── what-to-pack.mdx
│   │   └── banking-before-you-leave.mdx
│   ├── first-90-days/
│   │   ├── open-canadian-bank-account.mdx
│   │   ├── get-sin-number.mdx
│   │   └── find-apartment.mdx
│   └── work-and-money/
│       ├── how-taxes-work-canada.mdx
│       ├── workplace-culture-differences.mdx
│       └── improve-english-fast.mdx
├── lib/
│   ├── mdx.ts                      # Leer y parsear archivos MDX
│   ├── supabase.ts                 # Cliente Supabase
│   └── affiliates.ts               # Links y configs de afiliados
└── public/
    └── og/                         # Imágenes Open Graph por artículo
