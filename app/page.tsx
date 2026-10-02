"use client";

import { useMemo, useState } from "react";
import {
  DIAGNOSES,
  CROSS_CUTTING,
  type DiagnosisKey,
} from "@/lib/clinicalData";

export default function Home() {
  const [selected, setSelected] = useState<Set<DiagnosisKey>>(new Set());

  const toggle = (key: DiagnosisKey) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const selectedDiagnoses = useMemo(
    () => DIAGNOSES.filter((d) => selected.has(d.key)),
    [selected]
  );

  const hasSelection = selectedDiagnoses.length > 0;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-clinical-100 pb-6">
        <h1 className="text-2xl font-semibold text-clinical-900 sm:text-3xl">
          ICU Diagnosis → Treatment &amp; Order Set
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Select the admitting diagnoses to generate a consolidated treatment
          plan and lab/imaging order set. This is a clinical reference aid —
          individualize for severity, hemodynamics, and organ function of the
          specific patient.
        </p>
      </header>

      <section className="mb-8 no-print">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-clinical-700">
          Admission Diagnoses
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DIAGNOSES.map((d) => {
            const active = selected.has(d.key);
            return (
              <button
                key={d.key}
                type="button"
                onClick={() => toggle(d.key)}
                className={`rounded-lg border px-3 py-3 text-left text-sm font-medium transition ${
                  active
                    ? "border-clinical-600 bg-clinical-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-clinical-600"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>
        {hasSelection && (
          <button
            type="button"
            onClick={() => setSelected(new Set())}
            className="mt-3 text-xs text-slate-500 underline hover:text-slate-700"
          >
            Clear selection
          </button>
        )}
      </section>

      {hasSelection && (
        <section className="space-y-8">
          <div className="flex justify-end no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-md border border-clinical-600 px-4 py-2 text-sm font-medium text-clinical-700 hover:bg-clinical-50"
            >
              Print / Save as PDF
            </button>
          </div>

          {selectedDiagnoses.map((d) => (
            <article
              key={d.key}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold text-clinical-900">
                {d.label}
              </h3>

              <OrderBlock title="Treatment Plan" items={d.treatment} />
              <OrderBlock title="Lab Orders" items={d.labs} />
              <OrderBlock title="Imaging Orders" items={d.imaging} />
            </article>
          ))}

          <article className="rounded-xl border border-slate-200 bg-clinical-50 p-5">
            <h3 className="mb-4 text-lg font-semibold text-clinical-900">
              Cross-Cutting ICU Care
            </h3>
            <OrderBlock title="General Measures" items={CROSS_CUTTING.treatment} />
            <OrderBlock title="Monitoring Labs" items={CROSS_CUTTING.labs} />
          </article>

          <p className="text-xs text-slate-500">
            This tool generates a general reference order set, not a
            prescription. Verify every dose and drug choice against the
            patient's renal function, hepatic function, hemodynamics,
            allergies, and current medications before ordering.
          </p>
        </section>
      )}

      {!hasSelection && (
        <p className="text-sm text-slate-500">
          Select one or more diagnoses above to generate the plan.
        </p>
      )}
    </main>
  );
}

function OrderBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h4>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
