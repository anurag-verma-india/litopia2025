# 🚀 Litopia 2025 landing Page

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Abbas-Dev-786/litopia.git
```

2. Install dependencies:

```bash
cd litopia
npm install
```

## 🚀 Usage

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 💻 Code Examples

### Component Usage

```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function HeroSection() {
  return (
    <Card className="p-6">
      <h1 className="text-3xl font-bold">Welcome to Our Landing Page</h1>
      <p className="mt-2 text-gray-600">Start building something amazing!</p>
      <Button className="mt-4">Get Started</Button>
    </Card>
  );
}
```

## 🛠️ Tech Stack

Our landing page is built with modern frontend technologies:

- [![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) - React framework for production
- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) - Type-safe JavaScript
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) - Utility-first CSS framework
- [![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=react&logoColor=white)](https://ui.shadcn.com/) - Re-usable components

## 📊 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── fonts/           # Font configurations
│   │   ├── sections/        # Page sections components
│   │   │   ├── Faq.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── layout.tsx       # Root layout
│   ├── assets/              # Static assets
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   │   └── dropdown-menu.tsx
│   │   └── theme-provider.tsx
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
