// State-Specific MMIS (Medicaid Management Information System) Edit Codes
// Sources: Various state Medicaid provider manuals and companion guides
window.EDI_CODE_SETS = window.EDI_CODE_SETS || [];

(function () {
  function e(code, category, element, description, impact, keywords, guidance, checks) {
    return { code, category, element, description, impact, keywords, guidance, checks };
  }

  var codes = [
    // --- New York (NYS eMedNY) ---
    e("00301", "NY eMedNY", "Claim Edit", "Member not found/not eligible on date of service.", "Reject", ["new york", "ny", "emedny", "eligibility", "member not found", "mmis"], "NYS Medicaid cannot locate the member for the service date.", ["Verify the member's CIN (Client Identification Number).", "Confirm eligibility on the date of service via ePACES.", "Check for retroactive eligibility issues."]),
    e("00365", "NY eMedNY", "Claim Edit", "Service requires prior authorization.", "Reject", ["new york", "ny", "emedny", "prior auth", "authorization", "mmis"], "The service requires a prior authorization number.", ["Obtain prior authorization from NYS.", "Submit the PA number on the claim.", "Verify the PA covers the billed service."]),
    e("00410", "NY eMedNY", "Claim Edit", "Duplicate claim/service.", "Reject", ["new york", "ny", "emedny", "duplicate", "already billed", "mmis"], "A duplicate claim or service line was detected.", ["Verify the original claim status.", "Do not resubmit duplicates.", "Adjust dates/codes if this is a distinct service."]),
    e("01266", "NY eMedNY", "Claim Edit", "NDC code is missing or invalid.", "Reject", ["new york", "ny", "emedny", "ndc", "drug", "national drug code", "mmis"], "The National Drug Code is required but missing or invalid.", ["Add the correct 11-digit NDC code.", "Verify the NDC is valid for the date of service.", "Include the proper NDC qualifier."]),
    e("00330", "NY eMedNY", "Claim Edit", "Provider not enrolled/not eligible to bill this service.", "Reject", ["new york", "ny", "emedny", "provider enrollment", "not enrolled", "mmis"], "The provider is not enrolled or not authorized to bill this service.", ["Verify provider enrollment status.", "Confirm the provider type can bill for the service.", "Contact eMedNY provider enrollment."]),
    e("07036", "NY eMedNY", "Claim Edit", "Claim exceeds timely filing limit.", "Reject", ["new york", "ny", "emedny", "timely filing", "late", "deadline", "mmis"], "The claim was submitted beyond the filing deadline.", ["NYS Medicaid requires submission within 90 days.", "Request a timely filing override if applicable.", "Submit proof of timely filing."]),
    e("01089", "NY eMedNY", "Claim Edit", "Invalid or missing referring provider NPI.", "Reject", ["new york", "ny", "emedny", "referring", "npi", "provider", "mmis"], "The referring provider NPI is required but missing or invalid.", ["Add the correct referring provider NPI.", "Verify the NPI is active in NPPES.", "Confirm the provider is enrolled in NY Medicaid."]),

    // --- California (Medi-Cal) ---
    e("0521", "CA Medi-Cal", "Claim Edit", "Recipient not eligible for the month of service.", "Reject", ["california", "ca", "medi-cal", "eligibility", "not eligible", "mmis"], "The Medi-Cal beneficiary is not eligible for the service month.", ["Verify eligibility via the Medi-Cal Eligibility Verification system.", "Check for share of cost requirements.", "Confirm the correct Medi-Cal ID number."]),
    e("0522", "CA Medi-Cal", "Claim Edit", "Recipient has other health coverage.", "Reject", ["california", "ca", "medi-cal", "other coverage", "tpl", "third party", "mmis"], "The beneficiary has other insurance (TPL).", ["Bill the primary insurance first.", "Submit the primary EOB with the Medi-Cal claim.", "Verify third-party liability information."]),
    e("0711", "CA Medi-Cal", "Claim Edit", "TAR (Treatment Authorization Request) required.", "Reject", ["california", "ca", "medi-cal", "tar", "authorization", "treatment authorization", "mmis"], "A Treatment Authorization Request is required for this service.", ["Obtain a TAR before or retrospectively.", "Include the TAR number on the claim.", "Verify the TAR covers the billed codes."]),
    e("0611", "CA Medi-Cal", "Claim Edit", "Duplicate billing.", "Reject", ["california", "ca", "medi-cal", "duplicate", "billing", "mmis"], "A duplicate claim was detected.", ["Check the original claim status.", "Do not resubmit duplicates.", "Adjust if this is a distinct service."]),
    e("0456", "CA Medi-Cal", "Claim Edit", "Provider number not valid for service billed.", "Reject", ["california", "ca", "medi-cal", "provider number", "not valid", "enrollment", "mmis"], "The provider number is not valid for the billed service.", ["Verify Medi-Cal provider enrollment.", "Confirm the provider type and specialty.", "Contact Medi-Cal provider enrollment."]),
    e("0101", "CA Medi-Cal", "Claim Edit", "Procedure code not valid for date of service.", "Reject", ["california", "ca", "medi-cal", "procedure code", "invalid", "date of service", "mmis"], "The procedure code is not valid for the date of service.", ["Verify the code is active for the DOS.", "Update to the current code set.", "Check for code changes or replacements."]),

    // --- Texas (TMHP) ---
    e("350", "TX TMHP", "Claim Edit", "Claim received outside timely filing period.", "Reject", ["texas", "tx", "tmhp", "timely filing", "late", "deadline", "mmis"], "The claim was received after the filing deadline.", ["Texas Medicaid requires filing within 95 days.", "Request a filing extension if applicable.", "Submit proof of timely submission."]),
    e("301", "TX TMHP", "Claim Edit", "Client not eligible on date of service.", "Reject", ["texas", "tx", "tmhp", "eligibility", "not eligible", "client", "mmis"], "The client is not eligible on the date of service.", ["Verify Texas Medicaid eligibility.", "Check the client's Medicaid ID.", "Confirm eligibility via TMHP portal."]),
    e("410", "TX TMHP", "Claim Edit", "Prior authorization required and not found.", "Reject", ["texas", "tx", "tmhp", "prior authorization", "required", "missing", "mmis"], "Prior authorization is required but was not found.", ["Obtain prior authorization from TMHP.", "Submit the PA number on the claim.", "Request retroactive authorization if applicable."]),
    e("402", "TX TMHP", "Claim Edit", "Duplicate claim.", "Reject", ["texas", "tx", "tmhp", "duplicate", "claim", "mmis"], "A duplicate claim was identified.", ["Verify the original claim status via TMHP.", "Do not resubmit duplicates.", "Adjust if this is a separate service."]),
    e("205", "TX TMHP", "Claim Edit", "Invalid procedure code.", "Reject", ["texas", "tx", "tmhp", "invalid", "procedure code", "cpt", "mmis"], "The procedure code is invalid or not recognized.", ["Verify the CPT/HCPCS code.", "Confirm the code is covered by TX Medicaid.", "Update to the current code set."]),
    e("302", "TX TMHP", "Claim Edit", "Client is in a managed care plan.", "Reject", ["texas", "tx", "tmhp", "managed care", "hmo", "star", "mmis"], "The client is enrolled in a managed care plan.", ["Bill the managed care organization directly.", "Verify the client's managed care enrollment.", "Do not bill fee-for-service."]),

    // --- Florida (FMMIS) ---
    e("0100", "FL FMMIS", "Claim Edit", "Recipient not eligible.", "Reject", ["florida", "fl", "fmmis", "eligibility", "not eligible", "recipient", "mmis"], "The recipient is not eligible in the Florida MMIS.", ["Verify eligibility via the FL Medicaid portal.", "Check the recipient's Medicaid ID.", "Confirm enrollment status."]),
    e("0300", "FL FMMIS", "Claim Edit", "Provider not enrolled or not active.", "Reject", ["florida", "fl", "fmmis", "provider", "not enrolled", "not active", "mmis"], "The provider is not enrolled or not active in FL Medicaid.", ["Verify FL Medicaid provider enrollment.", "Contact AHCA provider enrollment.", "Ensure the provider type is correct."]),
    e("0700", "FL FMMIS", "Claim Edit", "Service requires authorization.", "Reject", ["florida", "fl", "fmmis", "authorization", "prior auth", "required", "mmis"], "The service requires prior authorization.", ["Obtain authorization before or retrospectively.", "Submit the authorization number.", "Verify the authorized service matches the billed service."]),
    e("0500", "FL FMMIS", "Claim Edit", "Duplicate claim.", "Reject", ["florida", "fl", "fmmis", "duplicate", "claim", "mmis"], "A duplicate claim was submitted.", ["Check the original claim status.", "Do not resubmit duplicates.", "Adjust if this is a unique service."]),
    e("0210", "FL FMMIS", "Claim Edit", "Claim exceeds timely filing.", "Reject", ["florida", "fl", "fmmis", "timely filing", "late", "deadline", "mmis"], "The claim was filed after the deadline.", ["FL Medicaid requires filing within 365 days.", "Submit a timely filing waiver if applicable.", "Provide proof of timely filing."]),
    e("0810", "FL FMMIS", "Claim Edit", "Invalid diagnosis code.", "Reject", ["florida", "fl", "fmmis", "diagnosis", "invalid", "icd", "mmis"], "The diagnosis code is invalid.", ["Verify the ICD-10-CM code.", "Ensure it's valid for the service date.", "Resubmit with the correct code."]),

    // --- Ohio (OH MMIS / Medicaid) ---
    e("4010", "OH MMIS", "Claim Edit", "Consumer not eligible on the date of service.", "Reject", ["ohio", "oh", "mmis", "eligibility", "not eligible", "consumer", "medicaid"], "The Ohio Medicaid consumer is not eligible on the DOS.", ["Verify eligibility via OH MITS portal.", "Check the consumer's Medicaid ID.", "Confirm enrollment status."]),
    e("4025", "OH MMIS", "Claim Edit", "Prior authorization required.", "Reject", ["ohio", "oh", "mmis", "prior authorization", "required", "missing", "medicaid"], "The service requires prior authorization.", ["Obtain authorization from OH Medicaid.", "Include the PA number on the claim.", "Verify coverage for the billed service."]),
    e("4050", "OH MMIS", "Claim Edit", "Duplicate claim.", "Reject", ["ohio", "oh", "mmis", "duplicate", "claim", "medicaid"], "A duplicate claim was detected in OH MMIS.", ["Verify the original claim status.", "Do not resubmit duplicates.", "Adjust if a distinct service."]),
    e("4065", "OH MMIS", "Claim Edit", "Provider not enrolled.", "Reject", ["ohio", "oh", "mmis", "provider", "not enrolled", "enrollment", "medicaid"], "The provider is not enrolled in OH Medicaid.", ["Verify provider enrollment status.", "Enroll/re-enroll with OH Medicaid.", "Contact OH Medicaid provider services."]),

    // --- Pennsylvania (PROMISe) ---
    e("V5001", "PA PROMISe", "Claim Edit", "Recipient ineligible for date of service.", "Reject", ["pennsylvania", "pa", "promise", "eligibility", "ineligible", "recipient", "mmis"], "The PA Medicaid recipient is not eligible on the service date.", ["Verify eligibility via PA PROMISe.", "Check the recipient's MA ID.", "Confirm enrollment status."]),
    e("V5010", "PA PROMISe", "Claim Edit", "Provider not enrolled in MA program.", "Reject", ["pennsylvania", "pa", "promise", "provider", "not enrolled", "ma program", "mmis"], "The provider is not enrolled in PA Medical Assistance.", ["Verify enrollment via PROMISe.", "Complete enrollment with DHS.", "Ensure the correct provider ID is used."]),
    e("V5025", "PA PROMISe", "Claim Edit", "Prior authorization required.", "Reject", ["pennsylvania", "pa", "promise", "prior authorization", "required", "mmis"], "Prior authorization is needed for this service.", ["Obtain authorization.", "Submit the PA number.", "Verify authorization covers the billed service."]),
    e("V5050", "PA PROMISe", "Claim Edit", "Duplicate claim submission.", "Reject", ["pennsylvania", "pa", "promise", "duplicate", "submission", "mmis"], "This is a duplicate of a previously submitted claim.", ["Check the original claim status.", "Do not resubmit duplicates.", "Adjust if a distinct service."]),

    // --- Illinois (HFS) ---
    e("HFS001", "IL HFS", "Claim Edit", "Recipient not eligible.", "Reject", ["illinois", "il", "hfs", "eligibility", "not eligible", "recipient", "mmis"], "The IL Medicaid recipient is not eligible.", ["Verify eligibility via the MEDI system.", "Check the recipient's RIN.", "Confirm enrollment on the DOS."]),
    e("HFS010", "IL HFS", "Claim Edit", "Provider not certified/enrolled.", "Reject", ["illinois", "il", "hfs", "provider", "not certified", "not enrolled", "mmis"], "The provider is not enrolled with IL HFS.", ["Verify enrollment with IL HFS.", "Complete enrollment if needed.", "Ensure the correct provider ID is used."]),
    e("HFS030", "IL HFS", "Claim Edit", "Prior approval required.", "Reject", ["illinois", "il", "hfs", "prior approval", "authorization", "required", "mmis"], "Prior approval is required for this service.", ["Obtain prior approval from IL HFS.", "Include the approval number.", "Verify the approved service."]),
    e("HFS050", "IL HFS", "Claim Edit", "Timely filing limit exceeded.", "Reject", ["illinois", "il", "hfs", "timely filing", "late", "deadline", "mmis"], "The claim was submitted past the filing deadline.", ["IL Medicaid filing deadline varies by claim type.", "Request a timely filing waiver.", "Provide proof of timely submission."]),

    // --- Michigan (CHAMPS) ---
    e("C001", "MI CHAMPS", "Claim Edit", "Beneficiary not eligible on date of service.", "Reject", ["michigan", "mi", "champs", "eligibility", "not eligible", "beneficiary", "mmis"], "The MI Medicaid beneficiary is not eligible.", ["Verify eligibility via CHAMPS.", "Check the beneficiary's Medicaid ID.", "Confirm enrollment for the DOS."]),
    e("C010", "MI CHAMPS", "Claim Edit", "Provider not enrolled.", "Reject", ["michigan", "mi", "champs", "provider", "not enrolled", "enrollment", "mmis"], "The provider is not enrolled in MI Medicaid.", ["Verify CHAMPS enrollment status.", "Complete enrollment if needed.", "Ensure the correct provider ID."]),
    e("C020", "MI CHAMPS", "Claim Edit", "Prior authorization required.", "Reject", ["michigan", "mi", "champs", "prior authorization", "required", "missing", "mmis"], "Prior authorization is required.", ["Obtain authorization via CHAMPS.", "Submit the PA number.", "Verify coverage for the service."]),
    e("C030", "MI CHAMPS", "Claim Edit", "Duplicate claim.", "Reject", ["michigan", "mi", "champs", "duplicate", "claim", "mmis"], "A duplicate claim was detected.", ["Check the original claim in CHAMPS.", "Do not resubmit.", "Adjust if a distinct service."]),

    // --- Georgia (GAMMIS) ---
    e("GA100", "GA GAMMIS", "Claim Edit", "Member not eligible.", "Reject", ["georgia", "ga", "gammis", "eligibility", "not eligible", "member", "mmis"], "The GA Medicaid member is not eligible.", ["Verify eligibility via GAMMIS.", "Check the member's Medicaid ID.", "Confirm enrollment status."]),
    e("GA200", "GA GAMMIS", "Claim Edit", "Provider not active.", "Reject", ["georgia", "ga", "gammis", "provider", "not active", "enrollment", "mmis"], "The provider is not active in GA Medicaid.", ["Verify provider enrollment.", "Re-enroll if necessary.", "Contact GA Medicaid provider enrollment."]),
    e("GA300", "GA GAMMIS", "Claim Edit", "Authorization required.", "Reject", ["georgia", "ga", "gammis", "authorization", "required", "prior auth", "mmis"], "Authorization is required for this service.", ["Obtain prior authorization.", "Submit the authorization reference number.", "Verify the authorized service."]),
    e("GA400", "GA GAMMIS", "Claim Edit", "Duplicate claim submission.", "Reject", ["georgia", "ga", "gammis", "duplicate", "submission", "mmis"], "A duplicate claim was found.", ["Check the original claim.", "Do not resubmit.", "Verify the Service Date and procedure."]),

    // --- Common Cross-State MMIS Edits ---
    e("MMIS-ELIG", "Cross-State MMIS", "Common Edit", "Member/recipient not eligible on date of service. (Common across all state MMIS systems)", "Reject", ["cross-state", "eligibility", "not eligible", "mmis", "common", "all states"], "Member not eligible – this is the most common MMIS rejection.", ["Verify eligibility via the state's eligibility system.", "Confirm the member's Medicaid ID.", "Check for retroactive eligibility changes."]),
    e("MMIS-AUTH", "Cross-State MMIS", "Common Edit", "Prior authorization required but not found. (Common across all state MMIS systems)", "Reject", ["cross-state", "prior authorization", "required", "mmis", "common", "all states"], "Authorization is required – present in virtually all state MMIS systems.", ["Obtain prior authorization before/after service.", "Submit the authorization number on the claim.", "Verify the authorization covers the billed service."]),
    e("MMIS-DUPE", "Cross-State MMIS", "Common Edit", "Duplicate claim. (Common across all state MMIS systems)", "Reject", ["cross-state", "duplicate", "claim", "mmis", "common", "all states"], "Duplicate detected – common across all state MMIS.", ["Verify status of the original claim.", "Do not resubmit duplicates.", "Modify identifiers if this is a distinct service."]),
    e("MMIS-ENRL", "Cross-State MMIS", "Common Edit", "Provider not enrolled or enrollment expired. (Common across all state MMIS systems)", "Reject", ["cross-state", "provider", "enrollment", "expired", "mmis", "common", "all states"], "Provider enrollment issue – common across all state MMIS.", ["Verify provider enrollment with the state.", "Re-enroll if enrollment has lapsed.", "Use the correct provider ID/NPI."]),
    e("MMIS-FILE", "Cross-State MMIS", "Common Edit", "Claim exceeds timely filing limit. (Common across all state MMIS systems)", "Reject", ["cross-state", "timely filing", "deadline", "late", "mmis", "common", "all states"], "Timely filing exceeded – deadlines vary by state (90-365 days).", ["Check the state's specific filing deadline.", "Request a timely filing waiver or extension.", "Provide proof of timely submission if applicable."]),
    e("MMIS-NDC", "Cross-State MMIS", "Common Edit", "NDC code required but missing or invalid. (Common for pharmacy/drug claims)", "Reject", ["cross-state", "ndc", "national drug code", "pharmacy", "mmis", "common"], "NDC code requirement – standard across state drug claims.", ["Add the correct 11-digit NDC code.", "Include the NDC qualifier.", "Verify the NDC is active for the date of service."]),
    e("MMIS-DIAG", "Cross-State MMIS", "Common Edit", "Invalid or missing diagnosis code. (Common across all state MMIS systems)", "Reject", ["cross-state", "diagnosis", "icd", "invalid", "missing", "mmis", "common"], "Diagnosis code issue – common across all state MMIS.", ["Verify the ICD-10-CM code.", "Ensure specificity to the highest level.", "Confirm the code is valid for the DOS."]),
    e("MMIS-MCO", "Cross-State MMIS", "Common Edit", "Member enrolled in managed care – bill the MCO. (Common across all state MMIS systems)", "Reject", ["cross-state", "managed care", "mco", "hmo", "mmis", "common", "all states"], "Member in managed care – FFS billing not applicable.", ["Identify the member's managed care plan.", "Bill the MCO directly.", "Do not bill fee-for-service Medicaid."]),
    e("MMIS-COB", "Cross-State MMIS", "Common Edit", "Third-party liability – other insurance must be billed first. (Common across all state MMIS systems)", "Reject", ["cross-state", "tpl", "third party", "other insurance", "cob", "mmis", "common"], "TPL/COB requirement – Medicaid is the payer of last resort.", ["Bill the primary insurance first.", "Submit the primary EOB with the Medicaid claim.", "Verify third-party liability information."])
  ];

  window.EDI_CODE_SETS.push({
    id: "state-mmis",
    name: "State MMIS Edit Codes",
    shortName: "State MMIS",
    description: "State-specific Medicaid Management Information System (MMIS) claim edit codes from major state programs.",
    quickTags: ["All", "NY eMedNY", "CA Medi-Cal", "TX TMHP", "FL FMMIS", "OH MMIS", "PA PROMISe", "IL HFS", "MI CHAMPS", "GA GAMMIS", "Cross-State MMIS"],
    detailIntro: "Select a state MMIS edit code to see the rejection reason and corrective actions.",
    lookupPrompt: "Enter a state code, MMIS code, or keyword to find it.",
    lookupPlaceholder: "00301, 0521, 350, eligibility, prior auth",
    referenceTitle: "State MMIS Reference",
    referenceItems: [
      { term: "NY eMedNY", description: "New York State Medicaid electronic billing system – uses 5-digit denial/edit codes." },
      { term: "CA Medi-Cal", description: "California Medicaid – uses 4-digit edit codes with denial/adjustment reasons." },
      { term: "TX TMHP", description: "Texas Medicaid & Healthcare Partnership – processes TX Medicaid claims." },
      { term: "FL FMMIS", description: "Florida Medicaid Management Information System – Florida AHCA managed." },
      { term: "OH MMIS", description: "Ohio Medicaid Information Technology System (MITS) – OH JFS managed." },
      { term: "PA PROMISe", description: "Pennsylvania Provider Reimbursement and Operations Management Information System in an Electronic Environment." },
      { term: "IL HFS", description: "Illinois Department of Healthcare and Family Services – manages IL Medicaid." },
      { term: "MI CHAMPS", description: "Michigan Community Health Automated Medicaid Processing System." },
      { term: "GA GAMMIS", description: "Georgia Medicaid Management Information System." },
      { term: "Cross-State", description: "Common edit patterns shared across most/all state MMIS platforms." }
    ],
    stats: { families: 10, version: "Multi-State MMIS" },
    codes: codes
  });
})();
