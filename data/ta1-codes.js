// TA1 Interchange Acknowledgment Codes
// Source: X12 Standard Implementation Guide
window.EDI_CODE_SETS = window.EDI_CODE_SETS || [];

(function () {
  function e(code, category, element, description, impact, keywords, guidance, checks) {
    return { code, category, element, description, impact, keywords, guidance, checks };
  }

  const statusCodes = [
    e("A", "Acknowledgment Code", "TA1-04 / I17", "The interchange was accepted with no errors.", "Accept", ["accepted", "clean", "success"], "The interchange envelope passed validation. Continue with downstream acknowledgments or business checks.", ["Confirm the interchange control number was logged.", "Continue monitoring for later functional acknowledgments.", "Use this as the clean baseline when comparing failed submissions."]),
    e("E", "Acknowledgment Code", "TA1-04 / I17", "The interchange was accepted but errors were noted.", "Accept with Errors", ["warning", "accepted with errors", "noted"], "The envelope was accepted, but the receiver still reported an interchange-level issue.", ["Inspect TA1-05 for the detailed note code.", "Confirm whether the receiver fully processed the interchange.", "Track repeat occurrences to catch partner setup drift."]),
    e("R", "Acknowledgment Code", "TA1-04 / I17", "The interchange was rejected because of errors.", "Reject", ["rejected", "fatal", "failed"], "The interchange failed envelope validation and should be corrected before resubmission.", ["Use TA1-05 to pinpoint the failure reason.", "Correct the interchange envelope before resending.", "Verify sender, receiver, separators, and control values against partner specs."])
  ];

  const noteCodes = [
    ["000", "No error.", ["no error", "none", "clean"], "No interchange note error was reported.", ["Use with acknowledgment code A as the expected clean outcome.", "If paired with another status unexpectedly, verify the receiver's implementation.", "Retain as a reference value for TA1 parsing logic."]],
    ["001", "The interchange control number in the header and trailer do not match.", ["control number", "isa13", "iea02", "mismatch"], "ISA13 and IEA02 must carry the same interchange control number.", ["Compare ISA13 with IEA02.", "Verify outbound envelope assembly logic.", "Check for edits applied after trailer creation."]],
    ["002", "This standard as noted in the control standards identifier is not supported.", ["standards identifier", "isa11", "unsupported"], "The receiver does not accept the control standard identified in the interchange header.", ["Verify ISA11 against partner requirements.", "Confirm the trading partner expects X12.", "Review environment-specific envelope templates."]],
    ["003", "This version of the controls is not supported.", ["version", "isa12", "unsupported"], "The interchange control version is not accepted by the receiving partner.", ["Check ISA12 value.", "Verify partner-supported control versions.", "Align test and production envelope versions."]],
    ["004", "The segment terminator is invalid.", ["segment terminator", "delimiter", "invalid"], "The file uses an unexpected segment terminator.", ["Inspect the final character in ISA.", "Confirm delimiters match partner expectations.", "Check for file transfer transformations."]],
    ["005", "Invalid interchange ID qualifier for sender.", ["sender qualifier", "isa05", "qualifier"], "The sender qualifier in ISA05 is not valid.", ["Review ISA05.", "Compare with the partner profile.", "Verify test versus production qualifiers."]],
    ["006", "Invalid interchange sender ID.", ["sender id", "isa06", "invalid sender"], "The sender ID in ISA06 is malformed or does not match the partner setup.", ["Review ISA06 padding and length.", "Confirm the configured sender ID.", "Check for stale credentials or profile mismatch."]],
    ["007", "Invalid interchange ID qualifier for receiver.", ["receiver qualifier", "isa07", "qualifier"], "The receiver qualifier in ISA07 is not acceptable.", ["Validate ISA07.", "Check the partner agreement.", "Confirm environment-specific receiver qualifier."]],
    ["008", "Invalid interchange receiver ID.", ["receiver id", "isa08", "invalid receiver"], "The receiver ID in ISA08 is invalid for the destination partner.", ["Review ISA08 content and padding.", "Confirm the destination identifier.", "Check routing changes or migration issues."]],
    ["009", "Unknown interchange receiver ID.", ["unknown receiver", "routing", "isa08"], "The receiver could not map the interchange to a known recipient.", ["Verify ISA08 against active partner records.", "Confirm the connection targets the right mailbox.", "Check if onboarding is complete."]],
    ["010", "Invalid authorization information qualifier value.", ["authorization qualifier", "isa01", "auth"], "ISA01 contains an unsupported authorization qualifier.", ["Inspect ISA01.", "Confirm whether authorization data is expected.", "Use the partner-approved qualifier value."]],
    ["011", "Invalid authorization information value.", ["authorization information", "isa02", "auth"], "ISA02 contains an invalid authorization value or formatting.", ["Inspect ISA02 length and content.", "Check whether blanks are expected.", "Remove unsupported values."]],
    ["012", "Invalid security information qualifier value.", ["security qualifier", "isa03", "security"], "ISA03 contains an unsupported security information qualifier.", ["Inspect ISA03.", "Confirm partner expectations for security data.", "Use the correct qualifier or blanks."]],
    ["013", "Invalid security information value.", ["security information", "isa04", "security"], "ISA04 contains invalid security information content.", ["Inspect ISA04 length and value.", "Confirm whether the field should be blank.", "Check for masked or transformed values."]],
    ["014", "Invalid interchange date value.", ["date", "isa09", "invalid date"], "The interchange date is malformed or outside accepted bounds.", ["Inspect ISA09 format.", "Verify date generation timezone handling.", "Check if receiver rejects stale/future dates."]],
    ["015", "Invalid interchange time value.", ["time", "isa10", "invalid time"], "The interchange time in ISA10 is malformed.", ["Inspect ISA10 format.", "Verify 24-hour time generation.", "Check system clocks and formatting logic."]],
    ["016", "Invalid interchange standards identifier value.", ["standards identifier", "isa11", "invalid"], "The control standards identifier value does not pass validation.", ["Inspect ISA11.", "Confirm the expected identifier for this partner.", "Verify envelope template."]],
    ["017", "Invalid interchange version ID value.", ["version id", "isa12", "invalid version"], "The control version value is malformed or unsupported.", ["Inspect ISA12.", "Cross-check partner documentation.", "Ensure correct environment profile."]],
    ["018", "Invalid interchange control number value.", ["control number", "isa13", "invalid value"], "The interchange control number is not valid.", ["Inspect ISA13.", "Verify numeric formatting and padding.", "Check sequence generation and rollover logic."]],
    ["019", "Invalid acknowledgment requested value.", ["ack requested", "isa14", "acknowledgment"], "The acknowledgment request flag in ISA14 is invalid.", ["Inspect ISA14.", "Use only supported values.", "Confirm whether the partner expects TA1 acknowledgments."]],
    ["020", "Invalid test indicator value.", ["test indicator", "isa15", "production", "test"], "The usage indicator in ISA15 is invalid or does not match the environment.", ["Inspect ISA15.", "Confirm test versus production routing.", "Check deployment configuration."]],
    ["021", "Invalid number of included groups value.", ["group count", "iea01", "included groups"], "The group count in IEA01 is invalid.", ["Compare IEA01 with actual GS/GE groups.", "Verify trailer generation logic.", "Check batch splitting."]],
    ["022", "Invalid control characters.", ["control characters", "delimiters", "invalid chars"], "One or more interchange control characters are not valid.", ["Inspect delimiters and separators in ISA.", "Check for encoding conversions.", "Verify no hidden characters."]],
    ["023", "Improper premature end-of-file transmission.", ["end-of-file", "truncated", "transmission"], "The interchange appears truncated.", ["Confirm received file size matches sent file.", "Check transport logs.", "Review line ending conversion."]],
    ["024", "Invalid interchange content such as an invalid GS segment.", ["invalid content", "gs", "envelope structure"], "The interchange content is structurally invalid.", ["Inspect the first GS segment.", "Validate envelope sequencing.", "Run through an X12 parser."]],
    ["025", "Duplicate interchange control number.", ["duplicate", "control number", "isa13", "replay"], "The receiver has already seen this interchange control number.", ["Review outbound control number sequencing.", "Check whether a retry resent the same envelope.", "Coordinate with the partner before resubmitting."]],
    ["026", "Invalid data element separator.", ["data separator", "delimiter", "element separator"], "The data element separator in ISA is invalid.", ["Inspect element separator position in ISA.", "Verify file was not reformatted by middleware.", "Confirm the character is consistent throughout."]],
    ["027", "Invalid component element separator.", ["component separator", "sub-element", "delimiter"], "The component element separator is invalid.", ["Inspect component separator in ISA16.", "Confirm receiver supports the chosen character.", "Check text encoding issues."]],
    ["028", "Invalid delivery date in deferred delivery request.", ["deferred delivery", "date", "delivery request"], "A deferred delivery date is not valid.", ["Review deferred delivery settings.", "Validate requested date format.", "Confirm partner supports deferred delivery."]],
    ["029", "Invalid delivery time in deferred delivery request.", ["deferred delivery", "time", "delivery request"], "A deferred delivery time is not valid.", ["Inspect deferred delivery time value.", "Validate time formatting.", "Confirm partner supports this feature."]],
    ["030", "Invalid delivery time code in deferred delivery request.", ["delivery time code", "deferred delivery", "code"], "The deferred delivery time code is invalid.", ["Review deferred delivery code usage.", "Compare with partner specs.", "Remove unsupported values."]],
    ["031", "Invalid grade of service code.", ["grade of service", "service code", "invalid"], "The grade of service code is invalid.", ["Inspect the service code value.", "Confirm the partner expects this field.", "Remove unsupported values."]]
  ].map(function (entry) {
    return e(entry[0], "Error/Note Code", "TA1-05 / I18", entry[1], "Error", entry[2], entry[3], entry[4]);
  });

  window.EDI_CODE_SETS.push({
    id: "ta1",
    name: "TA1 Interchange Acknowledgment",
    shortName: "TA1",
    description: "Interchange-level acknowledgment and note codes for ISA/IEA envelope validation.",
    quickTags: ["All", "Acknowledgment Code", "Error/Note Code", "Reject", "Error"],
    detailIntro: "Select a TA1 code to inspect the exact meaning and follow-up checks.",
    lookupPrompt: "Enter a TA1 code directly and jump to the matching record.",
    lookupPlaceholder: "A, E, R, 001, 025",
    referenceTitle: "TA1 Segment Reference",
    referenceItems: [
      { term: "TA1-04 / I17", description: "Interchange acknowledgment code. Values are A, E, or R." },
      { term: "TA1-05 / I18", description: "Interchange note code. Values 000 through 031 explain the precise issue." },
      { term: "Use Case", description: "TA1 reports interchange-envelope acceptance or rejection before transaction-level processing." }
    ],
    stats: { families: 2, version: "X12 TA1" },
    codes: [].concat(statusCodes, noteCodes)
  });
})();
