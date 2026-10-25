# Deploy to Netlify

This is a static Netlify Forms site. There is no separate server required for the public enquiry form.

## Important
1. Deploy the **contents of this folder** as the site root (not the parent folder).
2. Keep `index.html`, `thank-you.html`, `_headers` and `_redirects` at the site root.
3. The enquiry form is named `gm-enquiry`, uses `data-netlify="true"`, includes the hidden `form-name` field and posts to `/thank-you.html`.
4. In Netlify, confirm the detected form is named **gm-enquiry** under Forms.
5. If the site is connected to Git and the desired production branch is `main`, commit these files to `main` and push. Netlify should then show the deploy as the production `main` branch rather than a manual/drag-and-drop deploy.
6. Do not add a build command; this package is plain static HTML/CSS/JS.

## Image loading
Stock photos are loaded from `images.pexels.com`, which is explicitly permitted by `_headers`. Local SVG fallbacks are included for the gallery cards.


FORM NOTE
The enquiry form remains a native Netlify Form (data-netlify="true" plus hidden form-name="gm-enquiry") and is submitted with an AJAX POST to / so the custom thank-you page can be shown reliably. Keep this file in the Git repository and deploy from the production main branch.
