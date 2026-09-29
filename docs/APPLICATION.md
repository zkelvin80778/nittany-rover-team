# Microsoft Forms setup

Create a group form in the team’s Penn State Microsoft 365 environment when group ownership is available. Restrict responses to people in the organization. Restrict form editing, responses and stored files to designated reviewers; never share a response-summary link publicly.

Title: **Nittany Rover Team — Founding Team Application**

Introduction: “For enrolled Penn State University Park students with relevant experience. Tell us what you have worked on and how you hope to contribute to Project Sunrise.”

## Section 1 — Contact & academic information

All required: full name (text), Penn State email (text), campus (choice: University Park / Another Penn State campus), major or program (text), expected graduation (text, month and year), contribution area (multiple-choice: Mechanical & fabrication; Electrical & power; Software & autonomy; Science & mission planning).

University Park eligibility is reviewed from the campus answer; organization sign-in is not a campus check. Do not infer eligibility from the email address alone.

## Section 2 — Your contribution

Required long answer:

“What relevant experience would you bring to Nittany Rover Team, and what do you hope to contribute or learn through Project Sunrise?”

Help text: “Aim for 150–300 words. Be specific about your experience and the contribution you hope to make.” No hard minimum word count.

## Section 3 — Supporting materials

- Résumé: required file upload; PDF only; one file; 10 MB maximum.
- LinkedIn profile URL: required text.
- Portfolio or GitHub URL: optional text.

Collection notice: “We collect this information to evaluate your interest and qualifications for Nittany Rover Team. Access is restricted to designated application reviewers. For questions about your submission, contact [verified team email].” Replace the bracketed text before opening the form. Do not publish an unspecified retention promise.

Confirmation: “Thank you. Your application to Nittany Rover Team has been received.” No promised decision or response date.

## Before activating the website link

Test with a non-owner Penn State account and an explicitly disposable sample PDF. Confirm required fields, organization sign-in, rejection of disallowed file types and excess files, the 10 MB limit, submission confirmation, reviewer access, and inability to view other applicants’ answers or files. Check the unauthenticated experience. Verify that sign-in does not inadvertently expose response summaries.

Record the real form URL and reviewer email in `src/data/site.ts`. Open applications only after these checks. Live submission and privacy testing have not been performed because no form/account was provided.

References:
- https://accessibility.psu.edu/forms/microsoftforms/
- https://support.microsoft.com/en-us/forms/add-questions-that-allow-for-file-uploads-in-microsoft-forms
