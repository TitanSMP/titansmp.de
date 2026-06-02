# TitanSMP Web

Welcome to the official website for TitanSMP.

## About the Project

This is a modern web application built with [Next.js](https://nextjs.org), designed to deliver a fast, accessible, and user-friendly experience. It uses Tailwind CSS for styling, Radix UI components for accessible UI elements, and MDX for content-driven pages.

## Getting Started

### Prerequisites

Make sure you have Node.js installed. The latest LTS version is recommended.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will automatically reload as you make changes.

## Project Structure

The project follows the Next.js App Router conventions:

- **`src/app/`**: Main application pages and layouts
  - `page.tsx`: Homepage
  - `layout.tsx`: Root layout
  - `robots.ts`: SEO robots configuration
  - `sitemap.ts`: XML sitemap generation
- **`src/components/`**: Reusable React components and UI primitives
- **`src/lib/`**: Shared utilities and content helpers
- **`content/`**: MDX content for docs and legal pages
- **`public/`**: Static assets

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Technology Stack

- **Framework:** Next.js 16.2.2 (App Router)
- **UI Library:** React 19.2.4
- **Component Library:** Radix UI
- **Styling:** Tailwind CSS 4 with PostCSS
- **Content:** MDX
- **Icons:** Lucide React
- **Language:** TypeScript
- **Linting:** ESLint

## Key Features

- Modern React architecture with server and client components
- Fully responsive design with mobile-first approach
- SEO-optimized metadata with sitemap and robots support
- Accessible UI components powered by Radix UI
- Content-driven docs powered by MDX
- Fast page loads with Next.js optimizations

## Contributing

Contributions are welcome. Please open an issue or submit a pull request to discuss improvements.

## License

This project is licensed under the GNU GPLv3. See the [LICENSE](LICENSE) file for details.

## Support

If you have questions or feedback, please use the contact page on the website or open an issue.
