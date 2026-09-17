# Chai, Coffee aur Gupshup

Apurva Dange's standalone personal scheduling page. It mirrors the portfolio's **Let's Talk** experience, checks live Google Calendar availability, creates a Google Meet event, and emails the invitation to the guest.

## Hosting

- Website: GitHub Pages
- Private calendar service: Google Apps Script, running under Apurva's Google account
- Google credentials: never stored in this repository or sent to the browser

GitHub Pages is static, so the companion Apps Script handles private Calendar operations.

## One-time Google Apps Script setup

1. Visit [script.google.com](https://script.google.com) while signed into the Google account that owns or can edit `adange@asu.edu`.
2. Create a project named `Chai Coffee aur Gupshup`.
3. Replace the editor's code with `apps-script/Code.gs`.
4. In **Project Settings**, enable **Show appsscript.json manifest file in editor**, then replace the manifest with `apps-script/appsscript.json`.
5. In **Services**, confirm that **Google Calendar API v3** is enabled.
6. Select **Deploy → New deployment → Web app**.
7. Choose **Execute as: Me** and **Who has access: Anyone**, authorize Calendar access, and deploy.
8. Copy the deployment URL ending in `/exec`.

If the ASU Google Workspace account blocks public web apps, create the script from a personal Google account and share the `adange@asu.edu` calendar with that account with permission to make changes to events.

## GitHub Pages setup

1. Open **Settings → Secrets and variables → Actions → Variables** in this repository.
2. Add `BOOKING_API_URL` with the Apps Script `/exec` URL as its value.
3. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Run the **Deploy to GitHub Pages** workflow or push to `main`.

Public URL: `https://apurva-dange.github.io/Chai-Coffee-aur-Gupshup/`

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Booking rules

- Phoenix time (MST / UTC−7 year-round)
- Monday–Friday, 8:00 AM–7:00 PM
- 24-hour minimum notice
- Availability through the end of the second following month
- 15-minute buffer around busy events
- 15-minute intro chats and 45-minute deep dives

The invitation wording is in `apps-script/Code.gs` inside `create_` and can be revised independently of the website.
