# WE MART — Wholesale & Retail

A lightweight React + Vite + Tailwind storefront for the shop in Om Vihar, Uttam Nagar. Static hosting only; no database, API keys, checkout or server required.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Publish on GitHub Pages

1. Create a GitHub repository and push these files to its `main` branch. Include `package-lock.json`; do not include `node_modules` or `dist`.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, or push a commit to `main`.
4. When the workflow finishes, the deployment URL appears under **Settings → Pages** and on the workflow deployment.

The included `.github/workflows/deploy.yml` builds and publishes automatically. Vite uses `base: './'`, so assets work at both `username.github.io/repository/` and a custom domain. Navigation uses section anchors, avoiding refresh/404 problems on Pages.

To build manually, run `npm run build`. The ready-to-host output is `dist/`.

## Update the shop or catalogue

- Edit `src/data.js` for contact details, address, category names, product descriptions and image paths.
- Replace local images in `public/images/`. Keep images compressed and retain their filenames, or update the data file.
- Products deliberately have no invented prices, stock counts, hours or brand commitments. Photos illustrate product types. Confirm brands, pack sizes, availability and rates with the shop.
- The phone number is taken from the supplied banner. WhatsApp links use that number with India's `91` country code; the account's WhatsApp registration needs owner confirmation.
- Directions and the embedded map search the full banner address, as requested. No precise coordinates or verified shop pin are claimed. Replace the map and directions URLs with a confirmed Maps place link when available.
- The shop address, contact name, phone number, GST and branding are transcribed from the supplied banner. The About section now features the supplied owners’ illustration.

## Languages

Use the English / हिन्दी control in the header to switch the full interface, catalogue and WhatsApp enquiry messages. The preference is saved in the customer’s browser. Search matches English and Hindi names and the listed bread brands. Add translations to `src/i18n.js` when adding catalogue content.

## Cake and egg prices

In `src/data.js`, the `eggs` and `cake` entries have `price: null` and `priceUnit: ''`. They show “Price coming soon” (or the Hindi translation) and keep their WhatsApp enquiry buttons. Replace `null` with a numeric INR price when ready, and optionally set the confirmed unit or pack size.

## Owners, branded products and calling

The About section displays the owners’ illustration supplied by the user. The original banner is retained as a reference asset in `public/images/shop-banner.jpg`.

The header and contact Call buttons use `tel:+917011639263` to open the visitor’s installed calling application. The website does not start a call automatically.

Branded product photos are saved locally. Current stock, flavours and sizes remain subject to enquiry. Image sources:

- Good Day: https://www.britannia.co.in/product/good-day
- Jim Jam: https://www.britannia.co.in/product/jim-jam
- Crax: https://crax.in/ (Tangy Tomato Rings pack)
- Amul Taaza: https://www.bigbasket.com/pd/40090894/amul-taaza-500-ml-pouch/
- Uncle Chipps: https://www.cartly.ca/products/uncle-chips-60g
- Lay's: https://www.swiggy.com/stores/instamart/p/lay%27s-potato-chips-classic-salted-RL5Q04VT83

## Images

Local photos downloaded from Unsplash (illustrative, not photographs of the shop's actual stock):

- Eggs: `photo-1518569656558-1f25e69d93d7`
- Cookies: `photo-1499636136210-6f4ee915583e`
- Chips: `photo-1566478989037-eec170784d0b`
- Drinks: `photo-1622483767028-3f66f32aef97`
- Cake: `photo-1578985545062-69928b1d9587`
- Milk: `photo-1563636619-e9143da7973b`

Google Maps requires an internet connection. WhatsApp opens an external app or WhatsApp Web; enquiries are sent only after the customer chooses to send them.

Packaged bread product images (`bread.png`, `brown-bread.png`, `sandwich-bread.png`) are sourced from the official English Oven product catalogue: https://www.englishoven.co/products . They illustrate branded ready-made bread sold by WE MART. Brand range (Harvest Gold, English Oven, Britannia) is based on the shop owner’s supplied information; specific variants remain subject to enquiry. WE MART is a retailer and wholesaler, not a bread bakery.
