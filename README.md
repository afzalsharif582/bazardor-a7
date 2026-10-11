🛒 BazarDor (বাজার দর)
<div align="center">
Essential product prices — all at a glance.
A modern, fully responsive web application that tracks real-time market prices of everyday essentials in Bangladesh — rice, vegetables, fish, meat, and more — wrapped in a sleek, intuitive interface.

Live Demo
Next.js
Tailwind CSS
DaisyUI
MongoDB
Vercel

🌐 bazardor-a7-opal.vercel.app

</div>
📖 About The Project
BazarDor solves a simple but important everyday problem — knowing the real, current price of goods in local markets. Whether it's rice, vegetables, fish, meat, or spices, BazarDor gives users an instant snapshot of today's prices, tracks which items are trending up ▲ or down ▼, and lets users dive deep into market-specific price comparisons across multiple bazaars.

Built with performance, accessibility, and user experience in mind — BazarDor is fast, clean, and works beautifully on every screen size.

🌟 Key Features
🏠 Dynamic & Interactive Home Page
An eye-catching hero banner, an infinite-scrolling live price ticker, and smart sections like "Top Risers ▲" and "Top Fallers ▼", topped off with a fully responsive product grid.

🔎 Smart Category Browsing
Browse by category with instant sorting — Default / Low to High / High to Low — including correct numeric sorting, smooth skeleton loaders, and a friendly 404-style empty state.

📊 In-Depth Product Analytics (Protected)
Every product has a detail page with min/max/average price breakdowns and a market-by-market price comparison table — unlocked only for signed-in users.

🔐 Rock-Solid Authentication
Powered by BetterAuth with Email/Password + Google + GitHub login, protected routes, profile editing, and real-time toast notifications for every action.

📱 Pixel-Perfect Responsiveness
Designed mobile-first with Tailwind CSS + DaisyUI — the navbar, ticker, hero, and product grids all adapt flawlessly across mobile, tablet, and desktop.

🛠️ Built With
Technology	Purpose
⚛️ Next.js (App Router)	Framework, routing & dynamic [slug] pages
🎨 Tailwind CSS + DaisyUI	Styling & responsive UI components
🔑 BetterAuth	Authentication (Email/Password, Google, GitHub)
🍃 MongoDB	Database for users & authentication
🔥 react-hot-toast	Real-time toast notifications
▲ Vercel	Deployment & hosting
🗂️ API Reference
text

BASE_URL_1: https://api.api-store.workers.dev/api/bazardor
BASE_URL_2: https://api.abcz.workers.dev/api/bazardor (alternative)

Endpoint	Description
GET /products	Fetch all products
GET /products?category=chal	Filter products by category
GET /products/1	Fetch a single product
GET /categories	Fetch all categories
GET /categories/chal	Fetch a single category
🧭 Page Map
Route	Description
/	Home — Hero, Price Ticker, Risers/Fallers, All Products
/category/[slug]	Category listing with sorting & empty/loading states
/product/[slug]	🔒 Product details (protected route)
/signin	Sign In page
/signup	Sign Up page
/profile	User profile & info update
*	Custom 404 page with "Back to Home" CTA
📱 Fully Responsive
<div align="center">
📱 Mobile	📟 Tablet	💻 Desktop
✅	✅	✅
</div>
🎯 Quick Links
🔗 Live Website: bazardor-a7-opal.vercel.app

<div align="center">
Made with ❤️ to make everyday price tracking simple.
⭐ If you like this project, consider giving it a star! ⭐

</div>