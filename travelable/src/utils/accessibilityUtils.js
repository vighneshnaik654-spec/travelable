export const FEATURES = { wheelchair: "Wheelchair access", ramps: "Ramp", elevator: "Elevator", accessibleToilet: "Accessible toilet", accessibleParking: "Accessible parking", stepFreeAccess: "Step-free access", assistanceStaff: "Assistance staff", audioAssistance: "Audio assistance", hearingAssistance: "Hearing assistance", visualAssistance: "Visual assistance", braille: "Braille / signage" };
const WEIGHTS = { wheelchair: 20, ramps: 15, elevator: 15, accessibleToilet: 15, accessibleParking: 10, stepFreeAccess: 10, assistanceStaff: 5 };
const OTHER = ["audioAssistance", "hearingAssistance", "visualAssistance", "braille"]; // any one = 10 points
export const accessibilityScore = (a = {}) => Object.entries(WEIGHTS).reduce((s, [k, w]) => s + (a[k] ? w : 0), 0) + (OTHER.some((k) => a[k]) ? 10 : 0);
// % of the user's chosen requirements that this listing's data satisfies (null if nothing chosen)
export const matchPercent = (a = {}, prefs = []) => (prefs.length ? Math.round((prefs.filter((p) => a[p]).length / prefs.length) * 100) : null);
