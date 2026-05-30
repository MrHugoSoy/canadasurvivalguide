# Canada Survival Guide

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Copiar variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tus keys de Supabase

# 3. Crear tablas en Supabase
# Abre Supabase > SQL Editor > pega el contenido de supabase-migration.sql

# 4. Dev server
npm run dev
```

## Deploy en Vercel

```bash
git init
git add .
git commit -m "init"
gh repo create canadasurvivalguide --public --push
# Conecta el repo en vercel.com > New Project
# Agrega las env vars en Vercel (mismas que .env.local)
```

## Estructura de contenido

Los artículos van en `/content/{categoria}/{slug}.mdx` con este frontmatter:

```mdx
---
title: "How to get your SIN number in one day"
description: "Step-by-step guide to getting your Social Insurance Number as a new immigrant."
date: "2024-06-01"
readTime: "5 min read"
---

Your article content here...
```

## Monetización

- **Afiliados activos**: iTalki, Wise, SafetyWing, Preply
- **Email list**: Brevo (conectar en `/app/api/subscribe/route.ts`)
- **Leads RCIC**: tabla `leads` en Supabase → notificar a consultores
