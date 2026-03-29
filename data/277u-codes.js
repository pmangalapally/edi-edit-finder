// 277U Health Care Claim Status Notification (Unsolicited) Codes
// Source: X12 Standard Implementation Guide, WPC Claim Status Category & Code Lists
window.EDI_CODE_SETS = window.EDI_CODE_SETS || [];

(function () {
  function e(code, category, element, description, impact, keywords, guidance, checks) {
    return { code, category, element, description, impact, keywords, guidance, checks };
  }

  // --- Unsolicited Claim Status Category Codes (STC01-1 / Code Source 507) ---
  var categoryCodes = [
    // Acknowledgment Categories (Unsolicited)
    e("A1", "Unsolicited Status Category", "STC01-1", "Acknowledgment / Receipt – Claim received and accepted for processing.", "Accept", ["receipt", "received", "accepted", "unsolicited", "notification"], "Unsolicited notification that the claim was received.", ["Claim was acknowledged as received.", "No action required.", "Monitor for adjudication updates."]),
    e("A2", "Unsolicited Status Category", "STC01-1", "Acknowledgment / Acceptance into adjudication system.", "Accept", ["accepted", "adjudication", "processing", "unsolicited"], "Unsolicited notification that the claim entered adjudication.", ["Claim is now being processed.", "Monitor for payment notification.", "No corrective action needed."]),
    e("A3", "Unsolicited Status Category", "STC01-1", "Acknowledgment / Returned as unprocessable claim.", "Reject", ["unprocessable", "returned", "rejected", "unsolicited"], "Unsolicited notification that the claim cannot be processed.", ["Review the claim for completeness.", "Correct errors and resubmit.", "Check associated status codes for details."]),
    e("A6", "Unsolicited Status Category", "STC01-1", "Rejected for missing information – resubmission allowed.", "Reject", ["rejected", "missing information", "resubmission", "unsolicited"], "Unsolicited notification of rejection due to missing information.", ["Identify missing data from the status codes.", "Add the required information.", "Resubmit the corrected claim."]),
    e("A7", "Unsolicited Status Category", "STC01-1", "Rejected for invalid information – resubmission allowed.", "Reject", ["rejected", "invalid information", "resubmission", "unsolicited"], "Unsolicited notification of rejection due to invalid information.", ["Review the specific status codes for details.", "Correct the invalid information.", "Resubmit with corrected data."]),
    e("A8", "Unsolicited Status Category", "STC01-1", "Rejected – not resubmission allowed.", "Reject", ["rejected", "no resubmission", "final rejection", "unsolicited"], "Final unsolicited rejection – claim cannot be resubmitted.", ["Review the reason for final rejection.", "Consider appeal if appropriate.", "Contact the payer for clarification."]),

    // Pending Categories (Unsolicited)
    e("P0", "Unsolicited Status Category", "STC01-1", "Pending: In adjudication – no additional detail.", "Pending", ["pending", "adjudication", "processing", "unsolicited"], "Unsolicited notification that the claim is in adjudication.", ["No action needed at this time.", "Wait for further unsolicited notification.", "Follow up if no update within expected timeframe."]),
    e("P1", "Unsolicited Status Category", "STC01-1", "Pending: Additional information requested.", "Pending", ["pending", "additional information", "request", "unsolicited"], "Unsolicited request for additional information.", ["Submit the requested information promptly.", "Review the specific information request.", "Respond within the payer's deadline."]),
    e("P2", "Unsolicited Status Category", "STC01-1", "Pending: Pended for review.", "Pending", ["pending", "review", "pended", "unsolicited"], "Unsolicited notification that the claim is pended for review.", ["Monitor for the review outcome.", "Contact the payer for timeline if needed.", "Be prepared to provide documentation."]),
    e("P3", "Unsolicited Status Category", "STC01-1", "Pending: Under investigation.", "Pending", ["pending", "investigation", "audit", "unsolicited"], "Unsolicited notification of an active investigation.", ["Wait for investigation outcome.", "Provide documentation if requested.", "Contact the payer for timeline."]),
    e("P4", "Unsolicited Status Category", "STC01-1", "Pending: Waiting for related claim(s).", "Pending", ["pending", "related claim", "waiting", "unsolicited"], "Waiting for related claims before processing.", ["Identify and submit related claims.", "Verify coordination of benefits.", "Monitor for status updates."]),
    e("P5", "Unsolicited Status Category", "STC01-1", "Pending: Waiting for authorization.", "Pending", ["pending", "authorization", "prior auth", "unsolicited"], "Unsolicited notification that authorization is being verified.", ["Verify prior authorization was obtained.", "Submit authorization number if missing.", "Contact the payer if authorization is on file."]),

    // Finalized Categories (Unsolicited)
    e("F0", "Unsolicited Status Category", "STC01-1", "Finalized – no additional detail.", "Accept", ["finalized", "processed", "complete", "unsolicited"], "Unsolicited notification that the claim has been finalized.", ["Check for payment or EOB.", "Verify the final disposition.", "Review remittance advice."]),
    e("F1", "Unsolicited Status Category", "STC01-1", "Finalized/Payment. Processed as primary.", "Accept", ["finalized", "primary", "payment", "unsolicited"], "Unsolicited notification of primary payment.", ["Verify payment amount.", "Bill secondary insurance if applicable.", "Review the remittance advice."]),
    e("F2", "Unsolicited Status Category", "STC01-1", "Finalized/Payment. Processed as secondary.", "Accept", ["finalized", "secondary", "payment", "cob", "unsolicited"], "Unsolicited notification of secondary payment.", ["Verify coordination of benefits.", "Check payment amount.", "Bill patient for remaining balance."]),
    e("F4", "Unsolicited Status Category", "STC01-1", "Finalized/Denial. Denied.", "Reject", ["finalized", "denied", "denial", "unsolicited"], "Unsolicited denial notification.", ["Review denial reason codes.", "Correct and resubmit if applicable.", "File an appeal if appropriate."]),

    // Request Categories (Unsolicited)
    e("R0", "Unsolicited Status Category", "STC01-1", "Request for additional information – General.", "Pending", ["request", "additional information", "documentation", "unsolicited"], "Unsolicited request for additional information.", ["Submit requested documents.", "Respond within the payer's deadline.", "Keep copies of all submitted documentation."]),
    e("R4", "Unsolicited Status Category", "STC01-1", "Request for additional information – Documentation.", "Pending", ["request", "documentation", "medical records", "unsolicited"], "Unsolicited request for supporting documentation.", ["Submit the required documentation.", "Use the specified submission method.", "Monitor for processing after submission."]),

    // Error Categories (Unsolicited)
    e("E0", "Unsolicited Status Category", "STC01-1", "Response error on request.", "Error", ["error", "request error", "cannot respond", "unsolicited"], "Unsolicited notification of a processing error.", ["Review the error details.", "Contact the payer for clarification.", "Resubmit the claim if appropriate."]),
    e("E1", "Unsolicited Status Category", "STC01-1", "System status error.", "Error", ["error", "system", "unavailable", "unsolicited"], "Unsolicited notification of a system issue.", ["No provider action needed.", "The payer will resolve the system issue.", "Monitor for updated notification."]),

    // DR - Data Reporting Categories (277U-specific)
    e("D0", "Unsolicited Status Category", "STC01-1", "Data Reporting – Claim has been received for data capture only.", "Info", ["data reporting", "data capture", "received", "informational"], "The claim was received for data reporting purposes only.", ["No payment expected.", "Confirm data-only submission intent.", "No corrective action needed."]),
    e("DR01", "Unsolicited Status Category", "STC01-1", "Data Reporting – Encounter accepted for data reporting.", "Accept", ["data reporting", "encounter", "accepted", "informational"], "The encounter was accepted for data reporting.", ["Confirm the encounter data was submitted correctly.", "No payment expected for data-only encounters.", "Archive for records."]),
    e("DR06", "Unsolicited Status Category", "STC01-1", "Data Reporting – Encounter rejected for data reporting.", "Reject", ["data reporting", "encounter", "rejected", "error"], "The encounter was rejected for data reporting.", ["Review the rejection reason.", "Correct and resubmit the encounter data.", "Verify encounter data formatting."])
  ];

  // --- Unsolicited-Specific Status Codes (STC01-2 / Code Source 508) ---
  var statusCodes = [
    e("1", "Unsolicited Status Code", "STC01-2", "For more detailed information, see remittance advice.", "Info", ["remittance", "more detail", "835", "unsolicited"], "More details available in the 835 remittance advice.", ["Review the 835 remittance.", "Cross-reference CARC/RARC codes.", "Verify payment details."]),
    e("3", "Unsolicited Status Code", "STC01-2", "Claim adjudicated – awaiting payment cycle.", "Pending", ["adjudicated", "awaiting payment", "payment cycle", "unsolicited"], "The claim has been processed and is awaiting the next payment run.", ["Payment should arrive in the next cycle.", "Monitor payment receipt.", "No corrective action needed."]),
    e("19", "Unsolicited Status Code", "STC01-2", "Covered. Paid according to contract.", "Accept", ["covered", "paid", "contract", "unsolicited"], "Claim covered and paid per contract terms.", ["Verify the payment amount.", "Confirm contract terms were applied.", "Post payment to patient account."]),
    e("21", "Unsolicited Status Code", "STC01-2", "Not covered due to missing/invalid information.", "Reject", ["not covered", "missing", "invalid", "unsolicited"], "Service not covered due to data issues.", ["Identify missing/invalid information.", "Correct and resubmit.", "Provide the missing details."]),
    e("27", "Unsolicited Status Code", "STC01-2", "Duplicate of a previously received claim. Denied.", "Reject", ["duplicate", "denied", "previously received", "unsolicited"], "This is a duplicate claim.", ["Verify the original claim's status.", "Do not resubmit the duplicate.", "Check payment on the original."]),
    e("29", "Unsolicited Status Code", "STC01-2", "Charge exceeds allowed amount.", "Reject", ["charge", "exceeds", "allowed amount", "unsolicited"], "The billed charge is more than the allowed amount.", ["Review the fee schedule.", "Verify the billed amount.", "Check for coding errors."]),
    e("30", "Unsolicited Status Code", "STC01-2", "Pre-certification/authorization not received.", "Reject", ["precertification", "authorization", "not received", "unsolicited"], "The required prior authorization is missing.", ["Submit proof of authorization.", "Obtain retroactive authorization.", "Resubmit with authorization number."]),
    e("33", "Unsolicited Status Code", "STC01-2", "Claim not found.", "Reject", ["not found", "missing", "no record", "unsolicited"], "The claim could not be located.", ["Verify the claim control number.", "Confirm submission occurred.", "Resubmit if not previously received."]),
    e("35", "Unsolicited Status Code", "STC01-2", "Claim processed – payment denied.", "Reject", ["processed", "payment denied", "denied", "unsolicited"], "Claim was processed but payment was denied.", ["Review denial reason codes.", "Appeal if appropriate.", "Check for eligibility or coding issues."]),
    e("39", "Unsolicited Status Code", "STC01-2", "Charges covered under capitation agreement.", "Info", ["capitation", "covered", "prepaid", "unsolicited"], "Services covered by a capitation arrangement.", ["No separate payment expected.", "Verify capitation agreement.", "Review capitation terms."]),
    e("65", "Unsolicited Status Code", "STC01-2", "Claim denied – pended for review.", "Reject", ["denied", "pended", "review", "unsolicited"], "Denied and pending further review.", ["Wait for review completion.", "Prepare supporting documentation.", "Monitor for final determination."]),
    e("72", "Unsolicited Status Code", "STC01-2", "Claim has not been adjudicated.", "Pending", ["not adjudicated", "pending", "unprocessed", "unsolicited"], "The claim has not yet been adjudicated.", ["Allow additional processing time.", "Follow up if excessively delayed.", "Contact the payer for status."]),
    e("81", "Unsolicited Status Code", "STC01-2", "Claim forwarded to additional payer(s) for COB.", "Info", ["forwarded", "cob", "coordination of benefits", "unsolicited"], "Claim forwarded to additional payers.", ["Monitor for response from additional payer.", "Verify COB information.", "No provider action needed."]),
    e("100", "Unsolicited Status Code", "STC01-2", "Processed – allowed amount included as adjustments.", "Accept", ["processed", "allowed amount", "adjustments", "unsolicited"], "Claim processed with adjustment details.", ["Review adjustments on remittance.", "Verify the allowed amount.", "Bill patient for applicable portions."]),
    e("116", "Unsolicited Status Code", "STC01-2", "Crossed over claim.", "Info", ["crossover", "crossed over", "secondary", "unsolicited"], "Automatically crossed to secondary payer.", ["Monitor for secondary response.", "Verify crossover accuracy.", "No provider action needed."]),
    e("132", "Unsolicited Status Code", "STC01-2", "Claim has been re-adjudicated.", "Accept", ["readjudicated", "reprocessed", "adjustment", "unsolicited"], "The claim was reprocessed.", ["Review the new adjudication.", "Verify updated payment.", "Reconcile with previous payments."]),
    e("400", "Unsolicited Status Code", "STC01-2", "Entity not eligible.", "Reject", ["not eligible", "ineligible", "eligibility", "unsolicited"], "Member/provider is not eligible.", ["Verify eligibility for date of service.", "Check enrollment records.", "Contact payer to resolve."]),
    e("600", "Unsolicited Status Code", "STC01-2", "Additional information required from provider.", "Pending", ["additional information", "provider", "documentation", "unsolicited"], "Provider documentation is needed.", ["Submit the requested documentation.", "Respond within the deadline.", "Monitor for processing after submission."]),

    // 277U-Specific Encounter Notification Codes
    e("E:001", "Encounter Notification", "STC01-2", "Encounter accepted – submitted for risk adjustment data validation.", "Accept", ["encounter", "risk adjustment", "RADV", "accepted", "unsolicited"], "The encounter was accepted and submitted for RADV.", ["Confirm the encounter is recorded.", "Maintain supporting documentation.", "No corrective action needed."]),
    e("E:002", "Encounter Notification", "STC01-2", "Encounter accepted – chart review may be requested.", "Accept", ["encounter", "chart review", "accepted", "unsolicited"], "Encounter accepted; chart review possible.", ["Maintain charts for potential review.", "Be prepared to submit medical records.", "No immediate action needed."]),
    e("E:003", "Encounter Notification", "STC01-2", "Encounter rejected – invalid diagnosis code for date of service.", "Reject", ["encounter", "invalid diagnosis", "rejected", "unsolicited", "icd"], "Encounter rejected due to invalid diagnosis code.", ["Verify ICD code validity for the date of service.", "Update to current ICD code set.", "Resubmit with corrected diagnosis."]),
    e("E:004", "Encounter Notification", "STC01-2", "Encounter rejected – invalid procedure code for date of service.", "Reject", ["encounter", "invalid procedure", "rejected", "unsolicited", "cpt"], "Encounter rejected due to invalid procedure code.", ["Verify CPT/HCPCS code validity.", "Update to current code set.", "Resubmit with corrected procedure code."]),
    e("E:005", "Encounter Notification", "STC01-2", "Encounter data captured for quality reporting.", "Info", ["encounter", "quality reporting", "hedis", "stars", "data capture"], "The encounter data was captured for quality measures.", ["Confirm data was submitted correctly.", "Verify quality measure alignment.", "Maintain documentation."]),
    e("E:006", "Encounter Notification", "STC01-2", "Encounter accepted – submitted for risk score calculation.", "Accept", ["encounter", "risk score", "HCC", "risk adjustment", "accepted"], "The encounter was accepted for risk score/HCC calculation.", ["Confirm diagnosis coding accuracy.", "Maintain supporting documentation.", "No corrective action needed."]),
    e("E:007", "Encounter Notification", "STC01-2", "Encounter deleted per correction/void request.", "Info", ["encounter", "deleted", "voided", "correction", "unsolicited"], "The encounter data was deleted per a correction/void request.", ["Verify the void/correction was intended.", "Resubmit corrected encounter if needed.", "Update internal records."])
  ];

  window.EDI_CODE_SETS.push({
    id: "277u",
    name: "277U Health Care Claim Status (Unsolicited)",
    shortName: "277U",
    description: "Unsolicited claim status notification and encounter reporting codes returned proactively by the payer.",
    quickTags: ["All", "Unsolicited Status Category", "Unsolicited Status Code", "Encounter Notification", "Accept", "Reject", "Pending", "Error", "Info"],
    detailIntro: "Select a 277U code to see the unsolicited status details and recommended actions.",
    lookupPrompt: "Enter a status category (A1, P0, F4) or status code (1, 27, E:001) to find it.",
    lookupPlaceholder: "A1, P0, F4, 27, E:003",
    referenceTitle: "277U Segment Reference",
    referenceItems: [
      { term: "STC01-1", description: "Claim Status Category Code (ECL 507) indicating the high-level unsolicited status." },
      { term: "STC01-2", description: "Claim Status Code (ECL 508) providing additional unsolicited detail." },
      { term: "STC10", description: "Claim Status Category Code at the end of the current adjudication cycle." },
      { term: "Unsolicited", description: "Unlike 277CA (solicited), 277U is sent proactively by the payer without a prior 276 request." },
      { term: "Use Case", description: "Payers send 277U to notify providers of claim status changes, encounter outcomes, and data reporting results." }
    ],
    stats: { families: 2, version: "X12 277U" },
    codes: [].concat(categoryCodes, statusCodes)
  });
})();
