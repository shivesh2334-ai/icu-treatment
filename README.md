# ICU Diagnosis → Treatment & Order Set

A single-page Next.js tool: select ICU admission diagnoses (CAD/MI, CKD, CVA,
CLD, Fever/Pneumonia, COPD) and it generates a consolidated treatment plan
plus lab and imaging order set, including cross-cutting ICU care measures.
Includes a print/PDF button.

Stack: Next.js 14, TypeScript, Tailwind CSS (matches your standard stack —
no backend/database needed for this tool, so Supabase is not included).

## Push to GitHub (web UI / Working Copy workflow)

1. Unzip this project locally (or in Working Copy on iPad).
2. On github.com, create a new repository, e.g. `icu-diagnosis-treatment`
   (under shivesh2334-ai) — do **not** initialize it with a README.
3. Upload all files from this unzipped folder via the GitHub web UI
   ("Add file" → "Upload files"), or push via Working Copy:
   - In Working Copy: create/clone the new empty repo, copy these files in,
     commit, and push to `main`.

## Deploy to Vercel

1. Go to vercel.com → **Add New** → **Project**.
2. Import the `icu-diagnosis-treatment` GitHub repository.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Region is pinned to `bom1` (Mumbai) via `vercel.json` — matches your other
   deployments.
5. Click **Deploy**. Vercel will build and give you a live URL.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

- This is a clinical reference aid, not a prescribing tool — always verify
  doses against the individual patient's renal/hepatic function, allergies,
  and current medications.
- To add or edit the clinical content, edit `lib/clinicalData.ts` — each
  diagnosis has its own `treatment`, `labs`, and `imaging` arrays.
