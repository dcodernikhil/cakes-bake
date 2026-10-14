# Cakes & Bake 🍰

A modern, responsive catalogue website for a home bakery, built with **React.js, Tailwind CSS 3.x, and JavaScript**. The platform enables customers to explore bakery products, discover cakes and treats, submit custom cake requests, and place order enquiries directly through WhatsApp.

The project is designed to be lightweight, affordable to deploy, and extensible enough to support a backend, persistent order management, and an intelligent bakery chatbot in future iterations.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Objectives](#-objectives)
- [Key Features](#-key-features)
- [User Workflows](#-user-workflows)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Product Categories](#-product-categories)
- [Ordering and WhatsApp Integration](#-ordering-and-whatsapp-integration)
- [Custom Cake Requests](#-custom-cake-requests)
- [Chatbot and Customer Assistance](#-chatbot-and-customer-assistance)
- [Getting Started](#-getting-started)
- [Environment Configuration](#-environment-configuration)
- [Backend and Data Management](#-backend-and-data-management)
- [Design and Branding](#-design-and-branding)
- [Security and Validation](#-security-and-validation)
- [Deployment](#-deployment)
- [Development Roadmap](#-development-roadmap)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧁 Project Overview

Cakes & Bake is a digital storefront for a home bakery specialising in freshly prepared cakes, donuts, biscuits, cookies, and customised baked goods.

Unlike a traditional e-commerce platform, the initial version focuses on product discovery and direct customer communication rather than a complex payment and order fulfilment system.

Customers can browse the catalogue, review available products, select quantities and options, and initiate an order through WhatsApp. Customers looking for personalised cakes can submit their requirements through a dedicated custom order form.

The platform will initially be developed as a responsive website with a lightweight backend where needed.

### Project Information

| Attribute | Details |
|---|---|
| Project Name | Cakes & Bake |
| Project Type | Bakery Catalogue and Order Enquiry Platform |
| Business Type | Home Bakery |
| Primary Audience | Individual customers, families, and event planners |
| Frontend | React.js |
| Styling | Tailwind CSS 3.x |
| Programming Language | JavaScript |
| Backend | Node.js and Express.js (planned) |
| Initial Ordering Channel | WhatsApp |
| Data Storage | Local product data initially; persistent storage to be introduced as required |
| Deployment | Frontend and backend hosted separately if required |
| Branding | To be finalised |
| Project Status | Planning and initial development |

---

## 🎯 Objectives

The primary objectives of the project are to:

1. Establish an online presence for the bakery.
2. Present bakery products through an organised, visually appealing catalogue.
3. Make product discovery simple across desktop, tablet, and mobile devices.
4. Enable customers to send structured order enquiries through WhatsApp.
5. Provide a dedicated workflow for custom cakes and personalised baking requests.
6. Reduce repetitive customer enquiries by displaying product information and frequently asked questions.
7. Keep initial development and hosting costs low.
8. Establish an architecture that supports future backend services, order management, and chatbot integration.

---

## ✨ Key Features

### 1. Homepage

The homepage will introduce the bakery and guide visitors towards the product catalogue.

Planned components include:

- Hero section with a bakery introduction and primary call to action.
- Featured products and bestsellers.
- Product category navigation.
- Custom cake promotion.
- Bakery story or About section.
- Customer testimonials, when available.
- Contact information and social media links.
- Footer with navigation and business information.

### 2. Product Catalogue

The catalogue will organise bakery products into clearly defined categories.

Features include:

- Responsive product grid.
- Product images and descriptions.
- Product pricing and available variants.
- Category-based filtering.
- Product search.
- Availability indicators.
- Quick add-to-cart functionality.
- Dedicated product detail pages.

### 3. Shopping Cart

The cart will allow customers to prepare an order before contacting the bakery.

Features include:

- Add and remove products.
- Update quantities.
- Select supported product variants.
- Display item-level prices and subtotals.
- Calculate an indicative order total.
- Review the order before proceeding to WhatsApp.

The cart will initially operate on the client side. Persistent storage may be introduced for cart recovery across browser sessions.

### 4. Custom Cake Request Form

Customers will be able to request personalised cakes for birthdays, anniversaries, weddings, celebrations, and other occasions.

The form will support relevant requirements such as occasion, flavour, size, design preferences, budget, date, and reference images.

Custom cake prices may depend on the design and complexity. The final price and availability will be confirmed by the bakery.

### 5. WhatsApp Integration

The website will provide a direct communication channel between customers and the bakery.

Features include:

- Pre-filled product order summaries.
- Custom cake enquiry messages.
- General enquiry shortcuts.
- Mobile-friendly WhatsApp links.
- Structured messages containing relevant product and customer selections.

The initial integration will use WhatsApp Click to Chat. Customers must review and send the prepared message themselves.

### 6. Bakery Assistant

A lightweight customer assistance interface is planned to answer common questions about:

- Available products and flavours.
- Product pricing and sizes.
- Custom cake requests.
- Advance booking requirements.
- Pickup and delivery policies.
- Order enquiries and contact details.

The initial implementation may use predefined FAQs and guided interactions. AI-powered responses and automated messaging can be added later if the business requires them.

### 7. Responsive Design

The website will be designed for mobile-first usage, with layouts adapting to larger screens.

Responsive considerations include:

- Mobile navigation.
- Touch-friendly controls.
- Responsive product cards.
- Optimised images.
- Accessible forms.
- Consistent spacing and typography.
- Clear calls to action.

### 8. Search Engine Optimisation

The website will include foundational SEO features:

- Page-specific titles and descriptions.
- Semantic HTML.
- Descriptive image alternative text.
- Clean URLs.
- Open Graph metadata.
- Sitemap and robots configuration where appropriate.
- Structured data for the business and products when accurate information is available.

---

## 🔄 User Workflows

### Standard Product Order

1. The customer opens the website.
2. The customer browses categories or searches for a product.
3. The customer opens a product and selects the available options.
4. The customer adds the product to the cart.
5. The customer reviews the items, quantities, and indicative total.
6. The customer selects the WhatsApp ordering option.
7. The website prepares a structured order message.
8. The customer sends the message through WhatsApp.
9. The bakery confirms availability, final pricing, fulfilment arrangements, and payment.

### Custom Cake Request

1. The customer opens the custom cake request page.
2. The customer selects an occasion and preferred cake specifications.
3. The customer provides the desired design and message, if applicable.
4. The customer selects a preferred date and enters contact details.
5. The customer optionally provides a reference image.
6. The website validates the submitted information.
7. The customer sends the prepared request through WhatsApp.
8. The bakery discusses feasibility, pricing, advance payment, and confirmation.

### Customer Assistance

1. The customer opens the bakery assistant.
2. The assistant presents FAQs or supported questions.
3. The customer explores relevant information.
4. The assistant offers a route to the catalogue, custom order form, or WhatsApp.
5. The customer contacts the bakery when human assistance is required.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| Vite | Development server and production build tooling |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS 3.x | Utility-first styling |
| React Router DOM | Client-side routing |
| React Icons | Interface and social media icons |
| React Hook Form | Form state and validation |
| Context API and `useReducer` | Shared cart and application state |

Additional dependencies may be introduced when required by the implementation.

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | HTTP API and backend routing |
| CORS | Controlled cross-origin access |
| `dotenv` | Environment variable configuration |
| Validation library or explicit validation schemas | Request validation |
| SQLite or Supabase | Optional persistent data storage |

The initial backend scope will be limited to functionality that provides genuine value. Product catalogue data may remain in static files until persistent management becomes necessary.

### Integration

| Integration | Purpose |
|---|---|
| WhatsApp Click to Chat | Direct customer communication |
| Optional AI provider | Future conversational assistance |
| Optional image storage service | Product images and custom design references |
| Optional analytics | Traffic and conversion measurement |

**Version note:** The project targets Tailwind CSS 3.x. The exact compatible package versions will be pinned in the package manifest during setup.

---

## 🏗️ System Architecture

The application will follow a simple separation between the customer interface, backend services, and external communication channels.

```text
                         CUSTOMER
                            |
                            v
                  REACT FRONTEND (VITE)
                            |
             +--------------+--------------+
             |              |              |
             v              v              v
         Homepage       Catalogue       Custom Form
             |              |              |
             +--------------+--------------+
                            |
                            v
                   CART AND VALIDATION
                            |
                            v
                    ORDER SUMMARY
                            |
                            v
                    WHATSAPP HANDOFF
                            |
                            v
                    BAKERY CONFIRMATION


       REACT FRONTEND <---- HTTP API ----> EXPRESS BACKEND
                                               |
                                    +----------+----------+
                                    |          |          |
                                    v          v          v
                                Products   Enquiries   Validation
                                               |
                                               v
                                     OPTIONAL DATABASE
```

### Architectural Principles

- Keep UI components reusable and focused.
- Separate page layouts, business logic, and data access.
- Keep catalogue data independent of the presentation layer.
- Validate user input on the client and server where applicable.
- Avoid exposing secrets or privileged credentials in frontend code.
- Make external integrations replaceable without restructuring the entire application.

The WhatsApp handoff is separate from backend order persistence. Sending a customer to WhatsApp does not, by itself, register an order in the website's database.

---

## 📂 Project Structure

The planned repository structure is:

```text
cakes-bake/
│
├── frontend/
│   ├── public/
│   │   ├── images/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── products/
│   │   │   ├── cart/
│   │   │   ├── forms/
│   │   │   └── chatbot/
│   │   │
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── data/
│   │   ├── utils/
│   │   ├── config/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── repositories/
│   │   ├── config/
│   │   └── app.js
│   │
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

This is the intended structure; folders and configuration files will be created as implementation progresses.

---

## 🍪 Product Categories

The initial catalogue will support the following categories.

| Category | Example Products |
|---|---|
| Cakes | Birthday cakes, chocolate cakes, vanilla cakes, celebration cakes |
| Custom Cakes | Theme cakes, photo-inspired cakes, personalised cakes |
| Donuts | Chocolate donuts, glazed donuts, assorted donuts |
| Biscuits & Cookies | Butter biscuits, chocolate cookies, assorted cookies |
| Special Offers | Seasonal products, bundles, assorted boxes |

These are illustrative categories. Actual products, flavours, sizes, prices, images, and availability will be provided by the bakery.

### Product Data Model

A product may use the following fields:

```json
{
  "id": "cake-001",
  "slug": "chocolate-celebration-cake",
  "name": "Chocolate Celebration Cake",
  "category": "cakes",
  "description": "A chocolate cake for special occasions.",
  "image": "/images/products/chocolate-cake.webp",
  "price": 799,
  "currency": "INR",
  "unit": "cake",
  "variants": [
    {
      "name": "500 g",
      "price": 799
    },
    {
      "name": "1 kg",
      "price": 1399
    }
  ],
  "available": true,
  "featured": true
}
```

The values above are examples only and are not the bakery's actual product prices. The final schema will be adjusted to support the selected product variants and pricing rules.

---

## 💬 Ordering and WhatsApp Integration

The initial ordering process will use WhatsApp Click to Chat.

A typical URL follows this format:

```text
https://wa.me/<PHONE_NUMBER>?text=<URL_ENCODED_MESSAGE>
```

The phone number must use the international format without the `+` sign, spaces, or punctuation.

### Example Order Message

```text
Hello Cakes & Bake!

I would like to enquire about the following order:

1. Chocolate Celebration Cake
   Size: 1 kg
   Quantity: 1
   Price: ₹1,399

2. Chocolate Donuts
   Quantity: 6
   Price: ₹360

Estimated Total: ₹1,759

Preferred Date: 20 October
Fulfilment: Pickup

Please confirm availability and the final price.
Thank you!
```

This is an illustrative message; actual order details will be generated dynamically from the customer's selections.

### Integration Requirements

- Encode messages correctly before creating the WhatsApp URL.
- Validate the configured business phone number.
- Include selected product options and quantities.
- Calculate subtotals from trusted catalogue data.
- Clearly distinguish estimated totals from confirmed prices.
- Provide a fallback contact option if WhatsApp cannot be opened.

The first version will not require the WhatsApp Business Platform API. Automated messages, delivery webhooks, and business-managed messaging may require a separate integration later.

---

## 🎂 Custom Cake Requests

Custom cake enquiries will use a dedicated form with the following fields.

| Field | Purpose |
|---|---|
| Customer Name | Identify the person making the enquiry |
| Contact Number | Facilitate order-related communication |
| Occasion | Birthday, anniversary, wedding, or other event |
| Preferred Flavour | Record flavour preferences |
| Cake Size | Record weight or serving requirements |
| Design Description | Capture theme and decoration preferences |
| Message on Cake | Optional personalised message |
| Budget Range | Understand the customer's expected price |
| Required Date | Check production availability |
| Fulfilment Preference | Pickup or delivery, where supported |
| Reference Image | Optional design inspiration |
| Additional Notes | Capture other requirements |

### Validation Requirements

- Validate required fields.
- Validate contact number formats.
- Validate date selection against the bakery's booking policy.
- Restrict reference image file types and file sizes.
- Display helpful validation messages.
- Avoid promising a confirmed order before the bakery approves it.

The initial implementation may send the request through WhatsApp. A backend submission endpoint and persistent enquiry records can be added when required.

---

## 🤖 Chatbot and Customer Assistance

The chatbot will be introduced in stages to keep the initial release manageable.

### Phase 1: FAQ Assistant

A lightweight interface that provides predefined answers about:

- Product categories.
- Available flavours and sizes.
- Published prices.
- Custom cake enquiries.
- Booking lead times.
- Pickup and delivery policies.
- Bakery contact information.

### Phase 2: Guided Ordering

The assistant may help customers select a product, collect order preferences, and prepare an order summary for WhatsApp.

### Phase 3: AI-Powered Assistant

An optional AI integration may support natural-language product discovery, FAQ responses, and guided custom order enquiries.

The AI assistant must use reliable catalogue and policy information rather than invent product availability or prices. API credentials must remain on the backend, and uncertain requests should be handed off to the bakery.

---

## 🚀 Getting Started

The setup instructions below describe the intended development workflow. They will become executable once the project files and package manifests are created.

### Prerequisites

Install the following:

- Node.js LTS.
- npm.
- Git.
- A code editor such as Visual Studio Code.
- A WhatsApp account for testing the ordering flow.

### Clone the Repository

```bash
git clone https://github.com/dcodernikhil/cakes-bake.git
cd cakes-bake
```

### Install Dependencies

Once the frontend and backend package manifests have been created:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd ../backend
npm install
```

### Run the Development Servers

The exact npm scripts will be documented after setup. The intended workflow is to run the frontend development server and backend API separately.

Do not run these commands until the corresponding project scripts exist.

---

## ⚙️ Environment Configuration

Environment variables will be used for configurable application settings.

### Frontend Environment

Example `frontend/.env.example`:

```dotenv
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=
```

`VITE_WHATSAPP_NUMBER` is a public business contact setting, not a secret.

Vite exposes variables prefixed with `VITE_` to client-side code. Never place API keys, database passwords, private tokens, or privileged service credentials in these variables.

### Backend Environment

Example `backend/.env.example`:

```dotenv
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

Additional database or AI provider settings will be added only if those integrations are implemented.

The real `.env` files must remain untracked by Git.

---

## 🗄️ Backend and Data Management

The backend will initially provide only the endpoints needed by the website.

Potential API endpoints include:

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health` | Check backend availability |
| GET | `/api/products` | Retrieve catalogue products |
| GET | `/api/products/:slug` | Retrieve a product by slug |
| POST | `/api/enquiries` | Submit a custom cake enquiry, if persistence is enabled |

Additional filtering parameters, validation rules, response formats, and error handling will be defined during implementation.

### Data Strategy

**Initial release**

- Use static product data for rapid development.
- Keep cart state on the client.
- Generate WhatsApp messages from selected items.
- Avoid unnecessary infrastructure.

**Extended release**

- Add persistent product and enquiry storage.
- Provide an authenticated management interface if needed.
- Add enquiry status tracking and operational reporting.
- Introduce image storage for uploaded reference designs.

If persistent order records are introduced, backend validation must recalculate totals using trusted product data. The backend must not blindly accept prices supplied by the browser.

---

## 🎨 Design and Branding

The visual identity will be finalised after the initial project setup.

The following elements will remain configurable:

- Brand logo and favicon.
- Primary and secondary colours.
- Accent and background colours.
- Typography and font weights.
- Product photography.
- Button and form styles.
- Border radius and spacing.
- Layout breakpoints.
- Hover and transition effects.

Tailwind configuration and reusable UI components will be structured so branding changes can be applied consistently.

The final design should feel welcoming, appetising, trustworthy, and appropriate for a home bakery.

---

## 🔒 Security and Validation

The project will follow basic web application security practices.

- Validate and sanitise incoming backend data.
- Configure CORS for approved frontend origins.
- Keep private credentials on the server.
- Limit accepted file types and upload sizes.
- Avoid exposing personal customer information unnecessarily.
- Apply rate limiting to public submission endpoints where appropriate.
- Avoid logging sensitive form data.
- Use HTTPS in production.
- Validate order totals and product availability on the server whenever orders are persisted.
- Provide appropriate consent and privacy information for customer enquiries.

If a public chatbot or AI integration is introduced, rate limiting and input validation should also be applied to control misuse and operating costs.

---

## 🌐 Deployment

The frontend and backend can be deployed independently.

### Frontend

Potential hosting options:

- Vercel.
- Netlify.
- Any compatible static web hosting provider.

### Backend

Potential hosting options:

- Render.
- Another Node.js-compatible application host.
- Serverless functions if the API is adapted accordingly.

### Production Checklist

- [ ] Production build completes successfully.
- [ ] Responsive layouts work across common devices.
- [ ] All product images load correctly.
- [ ] WhatsApp messages contain the correct order details.
- [ ] Custom enquiry validation works.
- [ ] API URLs and CORS configuration are correct.
- [ ] Environment variables are configured.
- [ ] No secrets are committed to Git.
- [ ] Page titles and metadata are configured.
- [ ] Business contact details and policies are accurate.
- [ ] Production site uses HTTPS.
- [ ] Error states and unavailable products are handled gracefully.

---

## 🗺️ Development Roadmap

### Phase 1 — Foundation

- [ ] Initialise the React application with Vite.
- [ ] Configure Tailwind CSS 3.x.
- [ ] Install and configure React Router DOM and React Icons.
- [ ] Establish the project folder structure.
- [ ] Create reusable layout and UI components.

### Phase 2 — User Interface

- [ ] Build the homepage.
- [ ] Build catalogue and category pages.
- [ ] Implement product cards and product detail pages.
- [ ] Add search and filtering.
- [ ] Implement responsive navigation.
- [ ] Apply the final brand identity.

### Phase 3 — Ordering

- [ ] Implement cart state management.
- [ ] Support product variants and quantities.
- [ ] Generate order summaries.
- [ ] Integrate WhatsApp Click to Chat.
- [ ] Build the custom cake request form.
- [ ] Add form validation and feedback.

### Phase 4 — Backend

- [ ] Initialise the Express application.
- [ ] Create product API endpoints where required.
- [ ] Add server-side validation.
- [ ] Add enquiry persistence if required.
- [ ] Configure CORS and environment variables.
- [ ] Test API and frontend integration.

### Phase 5 — Customer Assistance

- [ ] Add a floating FAQ assistant.
- [ ] Implement predefined answers.
- [ ] Link answers to products and custom enquiries.
- [ ] Add a WhatsApp handoff.
- [ ] Evaluate whether AI integration is justified.

### Phase 6 — Testing and Launch

- [ ] Test product filtering and search.
- [ ] Test cart calculations.
- [ ] Test WhatsApp message generation.
- [ ] Test custom enquiry validation.
- [ ] Verify mobile responsiveness and accessibility.
- [ ] Optimise images and page performance.
- [ ] Configure SEO metadata.
- [ ] Deploy the website and verify the production flow.

---

## 🔮 Future Enhancements

Potential extensions include:

- Bakery administration dashboard.
- Product and price management.
- Persistent order and enquiry history.
- Order status tracking.
- Inventory and availability management.
- Delivery zones and pickup scheduling.
- Online payment integration.
- WhatsApp Business Platform integration.
- AI-powered product recommendations.
- Automated order notifications.
- Customer reviews and testimonials.
- Analytics for product interest and conversion rates.
- Progressive Web App support.

These enhancements are not part of the initial release unless explicitly added to the implementation scope.

---

## 🤝 Contributing

This is a small-business project intended to evolve incrementally.

Suggested contribution workflow:

1. Create a feature branch.
2. Make focused changes.
3. Test the affected functionality.
4. Check the production build.
5. Submit a pull request or merge the changes after review.

Keep components reusable, avoid unnecessary dependencies, and document any new environment variables or integrations.

---

## 📄 License

The project license has not yet been selected.

Before making the repository public or accepting external contributions, choose an appropriate license and add a corresponding `LICENSE` file.

---

**Built with ❤️ to bring a home bakery online, one order at a time.**
