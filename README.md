# LEBC Music Ministry Registration

A responsive registration website for the LEBC Music Ministry. Visitors can explore music training opportunities or access the ministry application form through the appropriate Google Forms link.

## Features

- Clear entry points for music training and ministry applications
- Responsive layout for desktop and mobile screens
- Checkbox-controlled access to the ministry application link
- Keyboard-visible focus states and reduced-motion support
- Google Forms integration for collecting submissions

> **Eligibility note:** The baptism checkbox is a front-end interaction only. It does not verify a visitor's eligibility; eligibility should be confirmed during the application review process.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Forms
- Google Fonts — DM Sans and Playfair Display
- Font Awesome

## Project structure

```text
LEBC-Application-Form/
├── assets/
│   └── images/
│       └── logo.png
├── css/
│   └── index.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Run locally

This is a static website, so no package installation or build step is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Yoshi-dev-mode/LEBC-Application-Form.git
   cd LEBC-Application-Form
   ```

2. Open `index.html` in your browser, or use the Live Server extension in VS Code for a local preview.

## Maintain the form links

The Google Forms destinations are configured in `index.html`. Before each registration period:

1. Confirm both forms are open and accepting responses.
2. Update the relevant link if a form has changed.
3. Test both application paths on desktop and mobile.

The site does not store form submissions in its own database; responses are handled by Google Forms.

## Deployment

The project can be hosted on GitHub Pages or another static web host. To publish with GitHub Pages, open the repository's **Settings → Pages**, select the deployment source and branch, and save the configuration.

## License

No license is currently specified. Contact the repository owner before reusing or redistributing this project.
