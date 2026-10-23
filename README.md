# LEBC Music Ministry Registration

A small, responsive website for the LEBC Music Ministry. It introduces the ministry and directs visitors to the relevant Google Forms for music training or ministry applications.

The project uses plain HTML, CSS, and JavaScript. It is designed to be simple to host and easy to maintain.

## What it does

- Presents the Music Ministry and its purpose.
- Provides a registration link for people interested in singing, instruments, or tambourine training.
- Provides a separate application link for people interested in joining the ministry.
- Uses a baptism checkbox to control access to the ministry application link.
- Includes responsive styling for smaller screens and smooth in-page navigation.

Registration data is collected by Google Forms; this website does not store submissions in its own database.

## Built with

- HTML5
- CSS3
- JavaScript
- Google Forms
- Font Awesome icons
- Google Fonts (Poppins)

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

No build step or package installation is required.

1. Clone the repository:

   ```bash
   git clone https://github.com/Yoshi-dev-mode/LEBC-Application-Form.git
   cd LEBC-Application-Form
   ```

2. Open `index.html` in your browser.

For a more realistic local preview, use the Live Server extension in VS Code and open the project through its local server.

## Configure the registration forms

The Google Forms URLs are set in `index.html`.

Before using the site for a new registration period, check that both form links are current:

- **Music Training Application** — for visitors interested in learning singing, an instrument, or tambourine.
- **Music Ministry Application** — for visitors who want to apply to join the ministry.

If a form changes, update its `href` in `index.html` and test the link in a browser.

## Important note about eligibility

The baptism checkbox is a front-end interaction. It is not a secure verification mechanism, and it cannot prove a visitor's eligibility. If eligibility must be confirmed, that should happen as part of the actual application review process.

## Deployment

This is a static website and can be hosted using GitHub Pages or another static web host.

For GitHub Pages, open the repository's **Settings → Pages**, choose the deployment source and branch, and save. Once GitHub provides the published address, add it here:

**Live site:** Not listed yet.

## Maintenance checklist

- Confirm both Google Forms are accepting responses.
- Test the checkbox and application link after changing `js/script.js`.
- Check the page on mobile and desktop.
- Keep the logo at `assets/images/logo.png` or update its path in `index.html`.
- Avoid committing private information or form-response data to the repository.

## License

No explicit open-source license is currently specified. Contact the repository owner before reusing the project beyond its intended purpose.
