Using Node.js 20, Tailwind CSS v3.4.19, and Vite v7.2.4

Tailwind CSS has been set up with the shadcn theme

Setup complete: /mnt/okcomputer/output/app

Components (40+):
  accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
  button-group, button, calendar, card, carousel, chart, checkbox, collapsible,
  command, context-menu, dialog, drawer, dropdown-menu, empty, field, form,
  hover-card, input-group, input-otp, input, item, kbd, label, menubar,
  navigation-menu, pagination, popover, progress, radio-group, resizable,
  scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
  spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

Usage:
  import { Button } from '@/components/ui/button'
  import { Card, CardHeader, CardTitle } from '@/components/ui/card'

Structure:
  src/sections/        Page sections (Hero, About, Projects, Experience, Skills, Contact, Footer)
  src/components/      Reusable components (Navigation + UI library)
  src/hooks/           Custom hooks (use-mobile)
  src/lib/             Utility functions
  src/App.css          App-specific styles (minimal, unused currently)
  src/App.tsx          Root React component
  src/index.css        Global styles and Tailwind configuration
  src/main.tsx         Application entry point
  public/              Static assets (images)
  index.html           HTML template
  tailwind.config.js   Tailwind theme and plugin configuration
  vite.config.ts       Vite build and dev server settings
  postcss.config.js    CSS post-processing configuration