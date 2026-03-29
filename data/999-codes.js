// 999 Implementation Acknowledgment Codes
// Source: X12 Standard Implementation Guide
window.EDI_CODE_SETS = window.EDI_CODE_SETS || [];

(function () {
  function e(code, category, element, description, impact, keywords, guidance, checks) {
    return { code, category, element, description, impact, keywords, guidance, checks };
  }

  var transactionStatuses = [
    e("A", "Transaction Status", "IK5 / IK501", "Accepted.", "Accept", ["accepted", "transaction set accepted", "ik501"], "The transaction set passed implementation validation.", ["Confirm downstream business edits if they exist.", "Record the acknowledged transaction control number.", "Use as baseline for clean submissions."]),
    e("E", "Transaction Status", "IK5 / IK501", "Accepted, but errors were noted.", "Accept with Errors", ["accepted with errors", "ik501", "noted"], "The transaction set was accepted, but issues were reported.", ["Review any paired IK3 or IK4 details.", "Verify whether the partner processed the transaction fully.", "Track repeat occurrences."]),
    e("M", "Transaction Status", "IK5 / IK501", "Rejected, message authentication code failed.", "Reject", ["mac", "authentication", "rejected"], "Security or authenticity validation failed.", ["Review message authentication settings.", "Validate keys and certificates.", "Confirm the transaction was not altered in transit."]),
    e("R", "Transaction Status", "IK5 / IK501", "Rejected.", "Reject", ["rejected", "transaction status"], "The transaction set did not pass implementation validation.", ["Use IK3 and IK4 loops to isolate the failure.", "Review IK5 reason codes if present.", "Correct the source transaction before resending."]),
    e("W", "Transaction Status", "IK5 / IK501", "Rejected, assurance failed validity tests.", "Reject", ["assurance", "validity tests", "rejected"], "The transaction failed additional validity or assurance checks.", ["Review partner-specific validation rules.", "Confirm compliance edits beyond basic syntax.", "Check profile-level assurance features."]),
    e("X", "Transaction Status", "IK5 / IK501", "Rejected, content after decryption could not be analyzed.", "Reject", ["decryption", "encrypted", "rejected"], "The payload could not be interpreted after decryption.", ["Verify decryption configuration and keys.", "Confirm the original payload remained intact.", "Check security options alignment."])
  ];

  var transactionErrors = [
    ["1", "Transaction set not supported.", ["not supported", "transaction set", "ik5"], "The receiver does not support this transaction type.", ["Verify ST01.", "Confirm the partner agreement supports this transaction type.", "Check companion guide version."]],
    ["2", "Transaction set trailer missing.", ["trailer missing", "se segment", "ik5"], "The SE segment is missing or the transaction ended before the trailer.", ["Confirm the SE segment exists.", "Check if the transaction was truncated.", "Validate generator logic."]],
    ["3", "Transaction set control number in header and trailer do not match.", ["control number mismatch", "st02", "se02"], "ST02 and SE02 must match.", ["Compare ST02 with SE02.", "Review envelope assembly order.", "Check for post-generation edits."]],
    ["4", "Number of included segments does not match actual count.", ["segment count", "se01", "mismatch"], "SE01 does not match the actual segment count.", ["Recount segments between ST and SE.", "Verify segments were not inserted or removed after count generation.", "Check delimiter normalization."]],
    ["5", "One or more segments are in error.", ["segments in error", "ik3", "segment syntax"], "A segment-level validation error exists.", ["Inspect IK3 segment notes.", "Review related IK4 element notes.", "Correct the transaction structure."]],
    ["6", "Missing or invalid transaction set identifier.", ["invalid transaction set identifier", "st01", "missing"], "The transaction set identifier is missing or not valid.", ["Inspect ST01.", "Confirm the intended transaction type.", "Check mapping."]],
    ["7", "Missing or invalid transaction set control number; a duplicate may have occurred.", ["invalid control number", "duplicate", "st02"], "The transaction control number is missing, malformed, or duplicated.", ["Inspect ST02 formatting.", "Verify uniqueness across retransmissions.", "Check sequence generation."]]
  ].map(function (entry) {
    return e(entry[0], "Transaction Set Error", "IK5-02 to IK5-06", entry[1], "Error", entry[2], entry[3], entry[4]);
  });

  var groupStatuses = [
    e("A", "Functional Group Status", "AK9 / AK901", "Accepted.", "Accept", ["functional group accepted", "ak9", "accepted"], "The functional group passed acknowledgment processing.", ["Confirm accepted counts in AK902 through AK904.", "Verify each transaction has the expected status.", "Use as the clean group-level outcome."]),
    e("E", "Functional Group Status", "AK9 / AK901", "Accepted, but errors were noted.", "Accept with Errors", ["functional group accepted with errors", "ak9"], "The group was accepted overall, but issues were noted.", ["Compare accepted versus received counts.", "Inspect AK9 reason codes.", "Determine if retransmission is required."]),
    e("M", "Functional Group Status", "AK9 / AK901", "Rejected, message authentication code failed.", "Reject", ["functional group mac failed", "authentication"], "Group-level security checks failed.", ["Review trading-partner security configuration.", "Confirm signing or MAC settings.", "Check for payload alteration."]),
    e("P", "Functional Group Status", "AK9 / AK901", "Partially accepted; at least one transaction set was rejected.", "Partial", ["partial", "partially accepted", "ak9"], "The group was received, but some transaction sets were rejected.", ["Review IK5 results for each transaction set.", "Compare AK903 to AK904 counts.", "Isolate rejected transactions for correction."]),
    e("R", "Functional Group Status", "AK9 / AK901", "Rejected.", "Reject", ["functional group rejected", "ak9"], "The functional group did not pass validation.", ["Review AK9 group-level reason codes.", "Check GS and GE structure.", "Validate every transaction before resending."]),
    e("W", "Functional Group Status", "AK9 / AK901", "Rejected, assurance failed validity tests.", "Reject", ["assurance", "validity", "functional group"], "The group failed additional validity tests.", ["Review partner-specific compliance edits.", "Confirm implementation guide alignment.", "Check extra validity rules."]),
    e("X", "Functional Group Status", "AK9 / AK901", "Rejected, content after decryption could not be analyzed.", "Reject", ["decryption", "functional group", "ak9"], "The receiver could not parse the group content after decryption.", ["Verify encryption and decryption configuration.", "Confirm the decrypted payload remains valid X12.", "Check for corruption during transport."])
  ];

  var groupErrors = [
    ["1", "Functional group not supported.", ["group not supported", "ak9", "gs01"], "The receiver does not support this functional group.", ["Review GS01.", "Confirm the partner supports this group.", "Check interchange profile."]],
    ["2", "Functional group version not supported.", ["group version", "gs08", "not supported"], "The receiver does not support this version.", ["Inspect GS08.", "Confirm companion guide version requirements.", "Align configurations."]],
    ["3", "Functional group trailer missing.", ["ge missing", "group trailer", "ak9"], "The GE segment is missing.", ["Confirm the GE segment exists.", "Check if the file was truncated.", "Review group trailer generation."]],
    ["4", "Group control number in the header and trailer do not agree.", ["group control number mismatch", "gs06", "ge02"], "GS06 and GE02 must match.", ["Compare GS06 with GE02.", "Check sequence generation.", "Validate no edits were applied after closure."]],
    ["5", "Number of included transaction sets does not match actual count.", ["transaction count mismatch", "ge01", "ak9"], "GE01 does not match the actual transaction set count.", ["Recount ST/SE pairs.", "Verify batching logic.", "Check if transactions were removed after count creation."]],
    ["6", "Group control number violates syntax; a duplicate may have occurred.", ["duplicate group control number", "syntax", "gs06"], "The group control number is malformed or duplicated.", ["Inspect GS06 format.", "Verify uniqueness across resends.", "Review control number sequencing."]]
  ].map(function (entry) {
    return e(entry[0], "Functional Group Error", "AK9-05 to AK9-09", entry[1], "Error", entry[2], entry[3], entry[4]);
  });

  var segmentErrors = [
    ["1", "Unrecognized segment ID.", ["unrecognized segment", "ik3", "segment id"], "An invalid segment identifier was encountered.", ["Inspect the segment name at the reported position.", "Confirm the segment is valid for the transaction version.", "Check for delimiter issues."]],
    ["2", "Unexpected segment.", ["unexpected segment", "ik3", "sequence"], "A valid segment appeared where not allowed.", ["Inspect segment order.", "Confirm loop conditions.", "Compare with the companion guide."]],
    ["3", "Mandatory segment missing.", ["mandatory segment missing", "required segment", "ik3"], "A required segment was not present.", ["Identify the missing segment.", "Review map conditions.", "Validate required usage."]],
    ["4", "Loop occurs over maximum times.", ["loop maximum", "repetition", "ik3"], "A loop repeated too many times.", ["Count loop repetitions.", "Review map logic.", "Confirm receiver limits."]],
    ["5", "Segment exceeds maximum use.", ["segment exceeds max use", "repetition", "ik3"], "A segment repeated too many times within its context.", ["Count segment repeats.", "Check conditional logic.", "Verify max-use rules."]],
    ["6", "Segment not in defined transaction set.", ["segment not defined", "invalid segment", "ik3"], "The segment is not part of the transaction set definition.", ["Confirm the transaction version.", "Check if a segment from another transaction was emitted.", "Review mapping reuse."]],
    ["7", "Segment not in proper sequence.", ["segment order", "sequence", "ik3"], "The segment is valid but out of sequence.", ["Compare emitted order with the guide.", "Inspect conditional branch ordering.", "Check for missing segments shifting sequence."]],
    ["8", "Segment has data element errors.", ["data element errors", "ik4", "segment has errors"], "The segment has one or more invalid data elements.", ["Review related IK4 element notes.", "Inspect the specific data elements.", "Correct the data values."]],
    ["511", "Trailing separators encountered.", ["trailing separators", "custom code", "delimiter"], "Extra delimiters found at the end of a segment.", ["Inspect the raw segment.", "Review serialization settings.", "Check partner tolerance."]]
  ].map(function (entry) {
    return e(entry[0], "Segment Syntax Error", "IK3 / IK304", entry[1], "Error", entry[2], entry[3], entry[4]);
  });

  var elementErrors = [
    ["1", "Mandatory data element missing.", ["mandatory element missing", "ik4", "required element"], "A required data element was missing.", ["Inspect the element referenced in IK401/IK402.", "Review map rules.", "Confirm the source application supplied the field."]],
    ["2", "Conditional required data element missing.", ["conditional required", "ik4", "missing"], "A situational element was required but not present.", ["Review surrounding qualifier and condition values.", "Validate situational rules.", "Ensure dependent elements are mapped together."]],
    ["3", "Too many data elements.", ["too many elements", "ik4", "extra data"], "More elements than the implementation allows.", ["Review the raw segment.", "Confirm the outbound schema.", "Check optional composites."]],
    ["4", "Data element is too short.", ["too short", "length", "ik4"], "The value did not meet the minimum length.", ["Compare value length with the guide.", "Check trimming logic.", "Confirm the source field."]],
    ["5", "Data element is too long.", ["too long", "length", "ik4"], "The value exceeded the maximum allowed length.", ["Compare value length to the limit.", "Inspect source-system padding.", "Truncate only if the guide permits."]],
    ["6", "Invalid character in data element.", ["invalid character", "encoding", "ik4"], "The value contains disallowed characters.", ["Inspect the raw value.", "Verify character encoding.", "Check for hidden whitespace."]],
    ["7", "Invalid code value.", ["invalid code value", "enumeration", "ik4"], "The element contains a code not allowed by the standard.", ["Compare the value to the allowed code list.", "Check crosswalk logic.", "Confirm the guide version."]],
    ["8", "Invalid date.", ["invalid date", "format", "ik4"], "The element contains a malformed date.", ["Verify element format requirements.", "Check calendar validity.", "Confirm date transformation logic."]],
    ["9", "Invalid time.", ["invalid time", "format", "ik4"], "The element contains a malformed time.", ["Verify time formatting.", "Check 24-hour clock handling.", "Confirm no timezone marker."]],
    ["10", "Exclusion condition violated.", ["exclusion condition", "situational", "ik4"], "Two or more values were supplied in a forbidden combination.", ["Review the situational rule.", "Check mutually exclusive qualifiers.", "Update mapping logic."]]
  ].map(function (entry) {
    return e(entry[0], "Element Syntax Error", "IK4 / IK403", entry[1], "Error", entry[2], entry[3], entry[4]);
  });

  window.EDI_CODE_SETS.push({
    id: "999",
    name: "999 Implementation Acknowledgment",
    shortName: "999",
    description: "Transaction-set, segment, and element validation codes used in X12 implementation acknowledgments.",
    quickTags: ["All", "Transaction Status", "Functional Group Status", "Transaction Set Error", "Functional Group Error", "Segment Syntax Error", "Element Syntax Error", "Reject", "Error"],
    detailIntro: "Select a 999 code to inspect implementation acknowledgment meaning and follow-up checks.",
    lookupPrompt: "Enter a 999 code directly and jump to the matching record.",
    lookupPlaceholder: "A, E, R, P, 1, 8, 511",
    referenceTitle: "999 Segment Reference",
    referenceItems: [
      { term: "IK5 / IK501", description: "Transaction set implementation acknowledgment status code." },
      { term: "IK5-02 to IK5-06", description: "Transaction set error reason codes." },
      { term: "AK9 / AK901", description: "Functional group status code." },
      { term: "AK9-05 to AK9-09", description: "Functional group error reason codes." },
      { term: "IK3 / IK304", description: "Segment syntax error codes." },
      { term: "IK4 / IK403", description: "Element syntax error codes." }
    ],
    stats: { families: 6, version: "X12 999" },
    codes: [].concat(transactionStatuses, transactionErrors, groupStatuses, groupErrors, segmentErrors, elementErrors)
  });
})();
