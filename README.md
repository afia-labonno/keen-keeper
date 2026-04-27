This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# KeenKeeper

**KeenKeeper** is a personal relationship tracking web app that helps users to manage, organise and nurture the connections that truly matter.
---

## Live site link: 
- 
---

## Features

- Add and manage friends and contacts
- Timeline of interactions
- Search Functionality for quick fltering
- Sort Timeline (Newest / Oldest)
- Tags-based categorization
- Status-based tracking (e.g, who needs attention)
- Fully Responsive UI (mobile + desktop)

---

## Tech Stack

- **Frontend:** Next.js (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **State Management:** React Context API
- **Icons:** React Icons
- **Chart:** Recharts
- **Storage:** LocalStorage

---

## Project Structure

src/
│
├── app/
|   ├── [id]/
|   |      ├──page.jsx
|   |       ├──loading.jsx
|   |      ├──not-found.jsx
|   |
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   ├── timeline/
│   │   └── page.jsx
│   ├── stats/
│   │   └── page.jsx
|   ├── not-found.js
|   ├── loading.jsx
│
├── components/
│   ├── Homepage/
│   ├── Shared/
│   ├── FriendInteraction/
|
├── context/
│   ├──TimelineContext.jsx
│   ├──FriendContext.jsx
├── assets/
│   └── img/

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
npm run dev
http://localhost:3000








```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
