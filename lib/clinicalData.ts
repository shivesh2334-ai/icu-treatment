export type DiagnosisKey =
  | "CAD_MI"
  | "CKD"
  | "CVA"
  | "CLD"
  | "FEVER_PNEUMONIA"
  | "COPD";

export interface DiagnosisInfo {
  key: DiagnosisKey;
  label: string;
  shortLabel: string;
  treatment: string[];
  labs: string[];
  imaging: string[];
}

export const DIAGNOSES: DiagnosisInfo[] = [
  {
    key: "CAD_MI",
    label: "CAD / Acute MI",
    shortLabel: "CAD/MI",
    treatment: [
      "Aspirin 162-325 mg loading, then 75-150 mg OD",
      "P2Y12 inhibitor loading dose (Clopidogrel or Ticagrelor) per ACS protocol",
      "Anticoagulation: Heparin/LMWH per ACS protocol — adjust dose for renal function",
      "High-intensity statin (Atorvastatin 80 mg)",
      "Beta-blocker if hemodynamically stable and no acute heart failure",
      "Nitrates for ongoing ischemia (avoid if hypotensive or RV infarct)",
      "ACEi/ARB once hemodynamically stable — monitor renal function closely",
      "Reperfusion strategy: primary PCI vs thrombolysis depending on timing/availability",
      "Continuous cardiac monitoring with serial troponins and ECGs",
    ],
    labs: [
      "Troponin I/T — serial at 0, 3, 6 hours",
      "CK-MB",
      "BNP / NT-proBNP",
      "Lipid profile (fasting, once stable)",
      "Coagulation profile (PT/INR, aPTT) before anticoagulation",
    ],
    imaging: [
      "12-lead ECG — serial",
      "2D-Echocardiography — LV function, wall motion, valves",
      "Coronary angiography if revascularization being considered (contrast load per renal function)",
    ],
  },
  {
    key: "CKD",
    label: "Chronic Kidney Disease",
    shortLabel: "CKD",
    treatment: [
      "Renally dose-adjust all medications",
      "Avoid nephrotoxins (NSAIDs, aminoglycosides, iodinated contrast where avoidable)",
      "Correct hyperkalemia and metabolic acidosis as needed",
      "Cautious fluid balance given cardiorenal overlap",
      "Nephrology consult for dialysis indications (refractory hyperkalemia, uremia, acidosis, volume overload)",
    ],
    labs: [
      "Urea, Creatinine, eGFR",
      "Electrolytes: Na, K, Cl, HCO3",
      "Serum phosphate, calcium",
      "Arterial blood gas for acid-base status",
    ],
    imaging: ["Renal ultrasound — size, echotexture, obstruction"],
  },
  {
    key: "CVA",
    label: "Cerebrovascular Accident (Stroke)",
    shortLabel: "CVA",
    treatment: [
      "Determine ischemic vs hemorrhagic stroke first — dictates all downstream management",
      "Ischemic: consider thrombolysis/thrombectomy within window; start antiplatelet once hemorrhage excluded",
      "Ischemic: permissive BP unless >220/120 mmHg (lower threshold if thrombolysed)",
      "Hemorrhagic: strict BP control, typically systolic <140-160 mmHg; reverse anticoagulants if applicable",
      "Neurosurgery consult if hemorrhagic and indicated",
      "Head-of-bed elevation to 30 degrees",
      "Tight glucose control",
      "DVT prophylaxis — mechanical (IPC) preferred if bleeding risk",
    ],
    labs: ["D-dimer if PE/DVT suspected given immobility", "Coagulation profile (PT/INR, aPTT)"],
    imaging: [
      "CT Brain (plain, urgent)",
      "MRI Brain with diffusion if CT inconclusive and ischemic stroke suspected",
      "CT/MR Angiography Brain if large vessel occlusion suspected",
      "Carotid Doppler — embolic source workup",
    ],
  },
  {
    key: "CLD",
    label: "Chronic Liver Disease",
    shortLabel: "CLD",
    treatment: [
      "Avoid hepatotoxic drugs and adjust sedative dosing",
      "Correct coagulopathy if bleeding or before procedures (Vitamin K, FFP as indicated)",
      "Watch for hepatic encephalopathy — Lactulose, Rifaximin",
      "Cautious diuretic use — monitor electrolytes closely",
      "Avoid NSAIDs",
      "Monitor for hypoglycemia",
    ],
    labs: [
      "LFTs: Bilirubin (total/direct), AST, ALT, ALP, GGT, Albumin",
      "PT/INR — baseline coagulation",
      "Serum ammonia if encephalopathy suspected",
      "Hepatitis panel (HBsAg, Anti-HCV) if etiology unclear",
    ],
    imaging: [
      "Abdominal ultrasound — liver echotexture, ascites, portal vein, spleen size, screen for HCC if cirrhotic",
    ],
  },
  {
    key: "FEVER_PNEUMONIA",
    label: "Fever / Pneumonia",
    shortLabel: "Fever/Pneumonia",
    treatment: [
      "Obtain cultures (blood, sputum) before starting antibiotics",
      "Empiric broad-spectrum antibiotics per local antibiogram — narrow once culture results available",
      "Renal- and hepatic-dose-adjust antibiotics",
      "Antipyretics (Paracetamol) and source control",
      "Sepsis screening and lactate monitoring if SIRS criteria met",
    ],
    labs: [
      "CBC with differential",
      "CRP, Procalcitonin",
      "Blood cultures x2 (before antibiotics)",
      "Sputum culture and Gram stain (AFB if TB suspected)",
      "Urine routine/microscopy and culture",
      "Lactate",
      "Viral panel / COVID-PCR / Influenza per local protocol",
    ],
    imaging: [
      "Chest X-ray — baseline and serial for progression",
      "HRCT chest if CXR inconclusive or atypical pattern",
    ],
  },
  {
    key: "COPD",
    label: "COPD",
    shortLabel: "COPD",
    treatment: [
      "Nebulized bronchodilators: Salbutamol + Ipratropium",
      "Short course of systemic corticosteroids for exacerbation",
      "Controlled oxygen therapy — target SpO2 88-92% if CO2-retainer risk",
      "Non-invasive ventilation (BiPAP) if respiratory acidosis present",
      "Escalate to invasive ventilation if NIV failing",
      "Antibiotics if purulent sputum or infective exacerbation (overlaps with pneumonia coverage)",
    ],
    labs: ["Arterial blood gas — baseline and serial, q6-12h during acute exacerbation"],
    imaging: ["Chest X-ray", "Pulmonary function tests — deferred until acute phase resolves"],
  },
];

export const CROSS_CUTTING = {
  treatment: [
    "DVT prophylaxis — mechanical if bleeding risk (e.g., from CVA or CLD)",
    "Stress ulcer prophylaxis",
    "Glycemic control and early enteral nutrition if tolerated",
    "Daily sedation and extubation-readiness assessment if ventilated",
    "Renal-dose all medications given CKD backdrop",
  ],
  labs: [
    "Daily: CBC, renal function, electrolytes, LFTs",
    "ABG — daily or more frequently if unstable",
    "Repeat cultures if fever persists beyond 48-72 hours on antibiotics",
  ],
  imaging: [] as string[],
};

export function getDiagnosisByKey(key: DiagnosisKey): DiagnosisInfo | undefined {
  return DIAGNOSES.find((d) => d.key === key);
}
