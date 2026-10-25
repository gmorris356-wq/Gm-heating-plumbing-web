# GM Heating & Plumbing — launch checklist

This is a static website package for Netlify. The checks below separate items tested in the files from items that require access or decisions from the business owner.

## Before publishing

- [ ] Replace the legal identity placeholder in `privacy.html` with the correct legal owner/entity and a suitable business correspondence address. Do not publish with square-bracket placeholders. If you do not want a home address shown publicly, get appropriate advice on a suitable business address and disclosure obligations.
- [ ] Review the privacy notice against the actual data flow. The enquiry form uses Netlify Forms; it is not an email-client-only form. Review Netlify’s current data-processing terms, who can access submissions, and how long enquiries will be retained.
- [ ] Review `service-terms.html` and `terms.html` for your actual quoting, payment, cancellation, deposit, warranty and complaint process. These pages are templates, not legal advice. Make sure customers receive the required pre-contract and cancellation information where applicable.
- [ ] Confirm the listed services match the work you are legally qualified, competent and insured to undertake. Gas work, boiler servicing and heat-pump work are explicitly excluded in this version.
- [ ] Confirm phone `07988 150927` and `gmheatingplumbing@gmail.com` are correct and monitored.

## Netlify steps (owner access required)

- [ ] Deploy the **contents** of this folder as the site root. No build command is needed.
- [ ] In Netlify, confirm the form `gm-enquiry` is detected under Forms.
- [ ] Configure form email notifications to the business email and send a test enquiry from a different email/device. Verify it appears in Netlify Forms and the notification arrives. A successful on-screen thank-you page alone does not prove notification delivery.
- [ ] Check spam/junk folders and test the form on mobile data as well as Wi-Fi.
- [ ] Connect your chosen custom domain, enable/verify HTTPS, and confirm both the root domain and `www` behave as intended.
- [ ] After the final domain is known, create/update `sitemap.xml` and add the real sitemap URL to `robots.txt`. The placeholder sitemap has been removed so search engines are not given a fake URL.
- [ ] Test every navigation link, phone link, email link, service page and legal-page footer on mobile and desktop.
- [ ] Check the live site’s image loading, especially third-party Pexels photos; local SVG fallbacks are included.
- [ ] Ask a trusted person to review the wording and enquiry experience before promoting the site.

## Important limits

- The website files can be inspected and statically checked here, but the live Netlify form, email notifications, domain, HTTPS, hosting configuration and actual delivery cannot be certified without access to your live Netlify account and a real submission test.
- The employee/staff portal is not included in this public launch package. Do not expose a staff portal or customer database until server-side authentication and permissions are implemented and independently tested.
- Do not claim trade registrations, insurance, guarantees or qualifications that you cannot evidence.
