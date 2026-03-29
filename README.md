# EDI Edit Finder

Browser-based lookup for EDI X12 edit and acknowledgment codes. Covers TA1, 999, 835, 824, 277CA, 277U transaction types and state MMIS edit codes in a single tabbed application.

## Code sets

The app ships with seven code sets, each in its own data file under `data/`:

| Tab | File | Description | Codes |
|-----|------|-------------|-------|
| TA1 | `data/ta1-codes.js` | Interchange Acknowledgment (TA1-04 status, TA1-05 note codes) | ~35 |
| 999 | `data/999-codes.js` | Implementation Acknowledgment (IK5, AK9, IK3, IK4 families) | ~45 |
| 835 | `data/835-codes.js` | Claim Payment/Remittance (CARCs, RARCs, Group Codes, PLB) | ~95 |
| 824 | `data/824-codes.js` | Application Advice (OTI acknowledgment, TED technical errors) | ~45 |
| 277CA | `data/277ca-codes.js` | Claim Acknowledgment (Status Category, Claim Status codes) | ~65 |
| 277U | `data/277u-codes.js` | Unsolicited Claim Status (Status categories, Encounter Notification) | ~56 |
| State MMIS | `data/state-mmis.js` | State Medicaid edits (NY, CA, TX, FL, OH, PA, IL, MI, GA + cross-state) | ~55 |

Each entry includes:

1. Code and category
2. Segment/element reference
3. Description
4. Impact level (Accept, Reject, Error, Pending, Info, etc.)
5. Practical guidance and validation checks

## How to use

1. Open `index.html` in any modern browser.
2. Switch transaction types using the tab bar in the header.
3. Search by code, description, impact, keyword, or segment element.
4. Use the **global search** box to search across all code sets at once.
5. Filter by category or impact using the dropdowns.
6. Click quick-tag pills for common slices (reject, error, etc.).
7. Click any table row to view full code details.

No build step, server, or package install is required.

## Data sources

- X12 standard implementation guides (TA1, 999, 835, 824, 277CA, 277U)
- [x12.org/codes](https://x12.org/codes) — CARCs, RARCs, Claim Status codes
- State Medicaid Management Information Systems (eMedNY, Medi-Cal, TMHP, FMMIS, OH MMIS, PROMISe, IL HFS, CHAMPS, GAMMIS)

## Architecture

The app uses a modular data architecture:

- `index.html` — application shell with all CSS, HTML, and JS logic
- `data/*.js` — each file registers its code set via `window.EDI_CODE_SETS.push()`

Data files are plain JavaScript using an IIFE pattern — no bundler or module loader needed. The app dynamically builds tab navigation and category/impact filters from whatever code sets are loaded.

## Extending the app

To add a new code set:

1. Create `data/<name>-codes.js` following the existing pattern.
2. Push a code-set object onto `window.EDI_CODE_SETS` with `id`, `name`, `shortName`, `description`, `codes[]`, etc.
3. Add a `<script src="data/<name>-codes.js"></script>` tag in `index.html` before the main script block.

The tab bar, dropdowns, and search automatically pick up new code sets.

## Files

```
index.html              Main application
README.md               This file
data/
  ta1-codes.js          TA1 Interchange Acknowledgment codes
  999-codes.js          999 Implementation Acknowledgment codes
  835-codes.js          835 Claim Payment / Remittance codes
  824-codes.js          824 Application Advice codes
  277ca-codes.js        277CA Claim Acknowledgment codes
  277u-codes.js         277U Unsolicited Claim Status codes
  state-mmis.js         State MMIS edit codes (9 states + cross-state)
```
