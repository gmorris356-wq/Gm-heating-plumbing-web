# Enquiry form fix

The previous JavaScript intercepted the enquiry form and sent an AJAX POST to `/`.
That request was failing on the deployed site. This version removes the custom AJAX
interception and lets the browser submit the existing Netlify form normally.

## Deploy
1. Upload/commit the contents of this folder to the GitHub repository connected to Netlify.
2. Ensure the publish directory contains `index.html` at its root.
3. In Netlify, enable form detection (Forms / form detection settings) and trigger a fresh deploy.
4. Open the deployed site and submit a test enquiry.
5. Confirm `gm-enquiry` appears in Netlify Forms and the submission is recorded.
6. Configure a form notification to `gmheatingplumbing@gmail.com` and test receipt.

If Netlify still does not record submissions, the problem is likely deployment/form detection configuration rather than the client-side button. Check the deployed HTML contains `name="gm-enquiry"`, `data-netlify="true"` and the hidden `form-name` input.
