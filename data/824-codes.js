// 824 Application Advice Codes
// Source: X12 Standard Implementation Guide
window.EDI_CODE_SETS = window.EDI_CODE_SETS || [];

(function () {
  function e(code, category, element, description, impact, keywords, guidance, checks) {
    return { code, category, element, description, impact, keywords, guidance, checks };
  }

  // --- OTI01 Application Acknowledgment Codes ---
  var otiCodes = [
    e("TA", "Application Acknowledgment", "OTI01", "Transaction Set Accept. The transaction set was accepted for processing.", "Accept", ["accepted", "transaction accept", "ota", "oti"], "The transaction set passed application-level validation.", ["Confirm the transaction was processed downstream.", "Log the accepted transaction control number.", "No corrective action needed."]),
    e("TR", "Application Acknowledgment", "OTI01", "Transaction Set Reject. The transaction set was rejected at the application level.", "Reject", ["rejected", "transaction reject", "oti", "application"], "The transaction set failed application-level validation.", ["Review the associated TED segments for error details.", "Correct the transaction data and resubmit.", "Check OTI06 for the application sender's code."]),
    e("TE", "Application Acknowledgment", "OTI01", "Transaction Set Reject with Errors. The transaction was rejected and specific errors are reported.", "Reject", ["rejected with errors", "te", "oti", "errors"], "The transaction failed and error details are included.", ["Review each TED segment for specific error descriptions.", "Correct all reported errors before resubmission.", "Verify data mapping and transformation logic."]),
    e("TQ", "Application Acknowledgment", "OTI01", "Transaction Set Received but Queued. The transaction was received and is pending processing.", "Pending", ["queued", "pending", "received", "oti"], "The transaction was received but has not been processed yet.", ["Monitor for a subsequent 824 confirming final status.", "Follow up if no confirmation is received within the expected timeframe.", "No immediate corrective action needed."]),
    e("TN", "Application Acknowledgment", "OTI01", "Transaction Set Accept with Change. The transaction was accepted but modified during processing.", "Accept with Errors", ["accepted with change", "modified", "oti"], "The transaction was accepted but the application made changes.", ["Review the TED segments to understand what was changed.", "Verify downstream processing reflects the expected data.", "Update source data if needed to prevent future corrections."]),
    e("TI", "Application Acknowledgment", "OTI01", "Transaction Set Accept - No Action Taken. Accepted but no business action resulted.", "Accept", ["accepted", "no action", "informational", "oti"], "The transaction was accepted but no business-level action was required.", ["Confirm this is expected per business rules.", "Review the transaction purpose.", "No corrective action typically needed."]),
    e("AA", "Application Acknowledgment", "OTI01", "Accepted. The application accepted the entire transaction.", "Accept", ["accepted", "aa", "application accepted"], "The entire submission was accepted at the application level.", ["Confirm downstream processing occurred.", "Log the acceptance for auditing.", "No corrective action needed."]),
    e("AR", "Application Acknowledgment", "OTI01", "Accepted with Reservations. The application accepted with caveats.", "Accept with Errors", ["accepted with reservations", "ar", "caveats"], "The submission was accepted but the receiver noted reservations.", ["Review the TED segments for reservation details.", "Address any noted issues for future submissions.", "Confirm downstream processing occurred."]),
    e("AE", "Application Acknowledgment", "OTI01", "Error. The application found errors in the transaction.", "Reject", ["error", "ae", "application error"], "The application encountered errors processing the transaction.", ["Review TED segments for error details.", "Correct the errors and resubmit.", "Verify data integrity."])
  ];

  // --- TED01 Technical Error Description Codes ---
  var tedCodes = [
    e("1", "Technical Error", "TED01", "Interchange envelope error.", "Error", ["interchange", "envelope", "ted", "isa"], "An error was found in the interchange envelope.", ["Review ISA/IEA segments.", "Verify interchange control values.", "Check delimiter configuration."]),
    e("2", "Technical Error", "TED01", "Functional group error.", "Error", ["functional group", "gs", "ge", "ted"], "An error was found at the functional group level.", ["Review GS/GE segments.", "Verify group control numbers.", "Check version and group identifier."]),
    e("3", "Technical Error", "TED01", "Transaction set error.", "Error", ["transaction set", "st", "se", "ted"], "An error was found in the transaction set.", ["Review ST/SE segments.", "Verify transaction set identifiers.", "Check segment count."]),
    e("4", "Technical Error", "TED01", "Segment error.", "Error", ["segment", "ted", "segment level"], "A specific segment contains an error.", ["Review the identified segment.", "Check for required elements.", "Verify segment sequence."]),
    e("5", "Technical Error", "TED01", "Data element error.", "Error", ["data element", "ted", "element level"], "A specific data element is in error.", ["Review the identified data element.", "Verify data type and length requirements.", "Check code value validity."]),
    e("6", "Technical Error", "TED01", "Duplicate transaction set control number.", "Error", ["duplicate", "control number", "ted", "st02"], "The transaction set control number was already received.", ["Verify uniqueness of transaction control numbers.", "Check for duplicate transmissions.", "Assign a new control number and resubmit."]),
    e("7", "Technical Error", "TED01", "Missing or invalid transaction set identifier.", "Error", ["missing", "invalid", "identifier", "ted", "st01"], "The transaction set identifier (ST01) is missing or invalid.", ["Verify ST01 value.", "Confirm the correct transaction type.", "Resubmit with the correct identifier."]),
    e("8", "Technical Error", "TED01", "Missing or invalid transaction set control number.", "Error", ["missing", "invalid", "control number", "ted", "st02"], "The transaction set control number (ST02) is missing or invalid.", ["Verify ST02 formatting.", "Ensure uniqueness.", "Resubmit with a valid control number."]),
    e("9", "Technical Error", "TED01", "Unknown transaction set.", "Error", ["unknown", "transaction set", "ted", "unsupported"], "The transaction set is not recognized by the receiver.", ["Verify the transaction type.", "Confirm the receiver supports this transaction.", "Check the partner agreement."]),
    e("10", "Technical Error", "TED01", "Missing or unexpected segment.", "Error", ["missing", "unexpected", "segment", "ted"], "A required segment is missing or an unexpected segment was found.", ["Review segment ordering.", "Check for missing mandatory segments.", "Verify compliance with the implementation guide."]),
    e("11", "Technical Error", "TED01", "Unexpected or out-of-sequence segment.", "Error", ["unexpected", "out of sequence", "segment", "ted"], "A segment appeared in the wrong sequence.", ["Review the segment order against the implementation guide.", "Check for missing segments that shifted the sequence.", "Reorder segments correctly."]),
    e("12", "Technical Error", "TED01", "Loop exceeded maximum count.", "Error", ["loop", "maximum", "count", "ted"], "A loop repeated more times than allowed.", ["Count loop repetitions.", "Review the implementation guide's loop limits.", "Remove excess loops."]),
    e("13", "Technical Error", "TED01", "Duplicate segment.", "Error", ["duplicate", "segment", "ted"], "A segment appears more than the allowed number of times.", ["Remove duplicate segments.", "Verify segment repetition rules.", "Check mapping logic."]),
    e("14", "Technical Error", "TED01", "Segment exceeds maximum use.", "Error", ["exceeds", "maximum use", "segment", "ted"], "The segment was used more than the maximum allowed.", ["Review max-use rules.", "Remove excess occurrences.", "Verify the implementation guide."]),
    e("15", "Technical Error", "TED01", "End of transaction set not found.", "Error", ["end", "transaction set", "ted", "se missing"], "The SE segment was not found.", ["Verify the transaction set includes an SE segment.", "Check for truncation.", "Review the file for completeness."]),
    e("16", "Technical Error", "TED01", "Mandatory segment missing.", "Error", ["mandatory", "missing", "segment", "ted", "required"], "A required segment is missing from the transaction.", ["Identify the missing segment.", "Add the required segment.", "Verify against the implementation guide."]),
    e("17", "Technical Error", "TED01", "Security value not valid.", "Error", ["security", "invalid", "ted", "value"], "A security-related value failed validation.", ["Review security elements.", "Verify encryption or authentication settings.", "Coordinate with the trading partner."]),
    e("18", "Technical Error", "TED01", "Date/time error.", "Error", ["date", "time", "error", "ted", "format"], "A date or time value is invalid.", ["Verify date/time formatting.", "Check for invalid dates.", "Review timezone handling."]),
    e("19", "Technical Error", "TED01", "Data not valid for the implementation used.", "Error", ["data", "not valid", "implementation", "ted"], "The data does not conform to the implementation guide.", ["Review the data against the implementation guide.", "Correct values to match expected content.", "Verify code lists and value constraints."]),
    e("20", "Technical Error", "TED01", "Invalid character in component.", "Error", ["invalid character", "component", "ted", "encoding"], "An invalid character was found in a component element.", ["Inspect the raw data for special characters.", "Verify character encoding.", "Remove or replace invalid characters."]),
    e("21", "Technical Error", "TED01", "Data element too long.", "Error", ["too long", "length", "ted", "truncation"], "A data element exceeds the maximum allowed length.", ["Truncate or correct the value.", "Review max-length requirements.", "Verify source data mapping."]),
    e("22", "Technical Error", "TED01", "Data element too short.", "Error", ["too short", "length", "ted", "minimum"], "A data element is shorter than the minimum required length.", ["Pad or correct the value.", "Review min-length requirements.", "Verify source data."]),
    e("23", "Technical Error", "TED01", "Invalid code value.", "Error", ["invalid code", "code value", "ted", "enumeration"], "The element contains a code not in the valid code list.", ["Review the allowed code values.", "Correct the code.", "Verify the implementation guide version."]),
    e("24", "Technical Error", "TED01", "Mandatory data element missing.", "Error", ["mandatory", "missing", "data element", "ted"], "A required data element is not present.", ["Add the required data element.", "Review the implementation guide for requirements.", "Verify source data mapping."]),
    e("25", "Technical Error", "TED01", "Conditional data element missing.", "Error", ["conditional", "missing", "data element", "ted"], "A conditionally required data element is missing.", ["Review the conditional rules.", "Add the element when the condition is met.", "Verify dependency logic."]),
    e("26", "Technical Error", "TED01", "Duplicate data element.", "Error", ["duplicate", "data element", "ted"], "A data element appears more than allowed.", ["Remove the duplicate element.", "Verify element repetition rules.", "Check serialization logic."]),
    e("27", "Technical Error", "TED01", "Too many data elements.", "Error", ["too many", "elements", "ted", "excess"], "The segment contains more data elements than expected.", ["Review the segment structure.", "Remove excess elements.", "Verify the data model."]),
    e("28", "Technical Error", "TED01", "Too many component elements.", "Error", ["too many", "components", "ted", "composite"], "A composite element has too many components.", ["Review the composite element structure.", "Remove excess components.", "Verify against the data dictionary."]),
    e("29", "Technical Error", "TED01", "Invalid numeric value.", "Error", ["numeric", "invalid", "ted", "number"], "A numeric field contains a non-numeric value.", ["Verify the field is numeric.", "Remove alpha characters or formatting.", "Check the source data type."]),
    e("30", "Technical Error", "TED01", "Application data error.", "Error", ["application", "data", "error", "ted", "business"], "The data failed business-level application validation.", ["Review the specific business rules.", "Verify data accuracy.", "Correct and resubmit."]),
    e("31", "Technical Error", "TED01", "Subscriber or dependent not found.", "Error", ["subscriber", "dependent", "not found", "ted", "eligibility"], "The member could not be identified in the receiver's system.", ["Verify the member ID and demographics.", "Check the subscriber/dependent relationship.", "Resubmit with corrected information."]),
    e("32", "Technical Error", "TED01", "Payer/plan not found.", "Error", ["payer", "plan", "not found", "ted"], "The referenced payer or plan is not recognized.", ["Verify the payer ID.", "Confirm the plan identifier.", "Contact the receiver for valid identifiers."]),
    e("33", "Technical Error", "TED01", "Provider not found.", "Error", ["provider", "not found", "ted", "npi"], "The provider was not found in the receiver's system.", ["Verify the provider NPI.", "Confirm provider enrollment with the payer.", "Contact the payer to resolve."]),
    e("34", "Technical Error", "TED01", "Bill type is inconsistent with the type of service.", "Error", ["bill type", "type of service", "inconsistent", "ted"], "The type of bill does not match the service billed.", ["Verify the type of bill code.", "Confirm it matches the service type.", "Resubmit with the correct TOB."]),
    e("35", "Technical Error", "TED01", "Claim frequency/type is not valid for this payer.", "Error", ["claim frequency", "type", "not valid", "ted"], "The claim frequency or type is not accepted.", ["Verify the claim frequency code.", "Confirm the payer accepts this submission type.", "Resubmit with a valid claim type."]),
    e("36", "Technical Error", "TED01", "Claim received outside of the valid filing period.", "Error", ["filing period", "timely filing", "ted", "late"], "The claim was received after the filing deadline.", ["Check the payer's filing deadline.", "Provide proof of timely filing if available.", "Appeal if the claim was originally filed on time."])
  ];

  window.EDI_CODE_SETS.push({
    id: "824",
    name: "824 Application Advice",
    shortName: "824",
    description: "Application-level acknowledgment and error codes returned in response to submitted transactions.",
    quickTags: ["All", "Application Acknowledgment", "Technical Error", "Accept", "Reject", "Error"],
    detailIntro: "Select an 824 code to see the application-level feedback and recommended actions.",
    lookupPrompt: "Enter an OTI acknowledgment code or TED error code to find it.",
    lookupPlaceholder: "TA, TR, TE, 1, 15, 31",
    referenceTitle: "824 Segment Reference",
    referenceItems: [
      { term: "OTI01", description: "Application acknowledgment code indicating accept, reject, or error at the application level." },
      { term: "OTI02", description: "Reference identification qualifier identifying the original transaction." },
      { term: "TED01", description: "Technical error description code indicating the specific error found." },
      { term: "TED02", description: "Free-form message text providing additional error details." },
      { term: "Use Case", description: "824 reports application-level acceptance/rejection of previously submitted transactions like 837, 820, 834." }
    ],
    stats: { families: 2, version: "X12 824" },
    codes: [].concat(otiCodes, tedCodes)
  });
})();
