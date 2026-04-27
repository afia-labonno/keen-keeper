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

```bash
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
```
---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper
npm install
npm run dev
http://localhost:3000

