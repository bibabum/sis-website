'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DesignSystemPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-surface to-surface-alt pt-20 pb-3xl">
      <div className="container-responsive">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-3xl"
        >
          <motion.h1 variants={itemVariants} className="mb-lg">
            Design System
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-text-secondary max-w-2xl">
            Comprehensive showcase of the SIS design language — luxury refinement meets modern efficiency.
          </motion.p>
        </motion.div>

        {/* SECTION 1: Typography */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Typography</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Playfair Display for headings (serif elegance) paired with DM Sans for body text (modern readability). A balance between tradition and contemporary design.
          </motion.p>

          <div className="space-y-3xl">
            {/* Heading Levels */}
            <div className="card-base p-2xl space-y-lg">
              <motion.h1 variants={itemVariants}>Heading 1 — 48px Playfair Display Bold</motion.h1>
              <motion.h2 variants={itemVariants}>Heading 2 — 32px Playfair Display Bold</motion.h2>
              <motion.h3 variants={itemVariants}>Heading 3 — 20px DM Sans Bold</motion.h3>
              <motion.h4 variants={itemVariants}>Heading 4 — 18px DM Sans Bold</motion.h4>
              <motion.p variants={itemVariants} className="text-base">
                Body text — 16px DM Sans Regular. This is the primary body font for long-form content. Notice the generous line-height (1.5) for readability and luxury feel.
              </motion.p>
              <motion.p variants={itemVariants} className="text-sm text-text-secondary">
                Secondary text — 14px DM Sans Regular with reduced opacity. Used for descriptions, captions, and secondary information.
              </motion.p>
            </div>

            {/* Typography Hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {[
                { size: 'xl', label: 'Extra Large', className: 'text-xl font-bold' },
                { size: 'lg', label: 'Large', className: 'text-lg font-bold' },
                { size: 'base', label: 'Base / Body', className: 'text-base' },
                { size: 'sm', label: 'Small', className: 'text-sm text-text-secondary' },
              ].map((level, idx) => (
                <motion.div key={idx} variants={itemVariants} className="card-base p-lg">
                  <p className={level.className}>The quick brown fox jumps</p>
                  <p className="text-xs text-text-secondary mt-md">{level.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SECTION 2: Color Palette */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Color Palette</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            A refined palette combining navy authority with gold luxury. Navy commands trust; gold signals premium value. Cream and white backgrounds create sophisticated breathing room.
          </motion.p>

          <div className="space-y-2xl">
            {/* Navy Scale */}
            <div>
              <motion.h3 variants={itemVariants} className="mb-md">Navy (Primary)</motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-md">
                {[
                  { name: 'Navy-900', color: '#0a1824', hex: '#0a1824' },
                  { name: 'Navy-800', color: '#0f2236', hex: '#0f2236' },
                  { name: 'Navy-700', color: '#152d48', hex: '#152d48' },
                  { name: 'Navy-600', color: '#1b3a5c', hex: '#1b3a5c' },
                  { name: 'Navy-500', color: '#2a5a8c', hex: '#2a5a8c' },
                  { name: 'Navy-50', color: '#f8f9fc', hex: '#f8f9fc' },
                ].map((shade, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <div
                      className="w-full h-24 rounded-lg shadow-soft border border-border mb-sm"
                      style={{ backgroundColor: shade.color }}
                    />
                    <p className="text-xs font-bold text-navy-600">{shade.name}</p>
                    <p className="text-xs text-text-secondary">{shade.hex}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gold Scale */}
            <div>
              <motion.h3 variants={itemVariants} className="mb-md">Gold (Accent)</motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-md">
                {[
                  { name: 'Gold-900', color: '#584e04', hex: '#584e04' },
                  { name: 'Gold-800', color: '#705c05', hex: '#705c05' },
                  { name: 'Gold-600', color: '#a07809', hex: '#a07809' },
                  { name: 'Gold-500', color: '#b8860b', hex: '#b8860b' },
                  { name: 'Gold-400', color: '#d4a574', hex: '#d4a574' },
                  { name: 'Gold-50', color: '#fefef8', hex: '#fefef8' },
                ].map((shade, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <div
                      className="w-full h-24 rounded-lg shadow-soft border border-border mb-sm"
                      style={{ backgroundColor: shade.color }}
                    />
                    <p className="text-xs font-bold text-navy-600">{shade.name}</p>
                    <p className="text-xs text-text-secondary">{shade.hex}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Semantic Colors */}
            <div>
              <motion.h3 variants={itemVariants} className="mb-md">Semantic Colors</motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                {[
                  { name: 'Success', color: '#2e7d4f', usage: 'Positive actions, confirmations' },
                  { name: 'Alert', color: '#b83232', usage: 'Errors, warnings, problems' },
                  { name: 'Info', color: '#5a8ac4', usage: 'Information, neutral actions' },
                ].map((semantic, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="card-base p-lg">
                    <div
                      className="w-full h-16 rounded-lg mb-md shadow-soft"
                      style={{ backgroundColor: semantic.color }}
                    />
                    <p className="font-bold text-navy-600 mb-sm">{semantic.name}</p>
                    <p className="text-sm text-text-secondary">{semantic.usage}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 3: Buttons & CTAs */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Buttons & CTAs</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Four button types for different hierarchy levels. Primary for main actions, secondary for alternatives, ghost for minimal impact, and disabled for unavailable actions.
          </motion.p>

          <div className="space-y-2xl">
            <div className="card-base p-2xl">
              <motion.h4 variants={itemVariants} className="mb-lg">Primary Button</motion.h4>
              <div className="flex flex-wrap gap-md">
                <motion.button variants={itemVariants} className="btn-primary">
                  Primary Action
                </motion.button>
                <motion.button variants={itemVariants} className="btn-primary hover:bg-navy-700">
                  Hover State
                </motion.button>
                <motion.button variants={itemVariants} className="btn-primary opacity-50 cursor-not-allowed">
                  Disabled
                </motion.button>
              </div>
              <motion.p variants={itemVariants} className="text-sm text-text-secondary mt-lg">
                Navy background, white text, 44px minimum height. Used for primary CTAs like "Schedule Consultation", "Submit Form", "Invest Now".
              </motion.p>
            </div>

            <div className="card-base p-2xl">
              <motion.h4 variants={itemVariants} className="mb-lg">Secondary Button</motion.h4>
              <div className="flex flex-wrap gap-md">
                <motion.button variants={itemVariants} className="btn-secondary">
                  Secondary Action
                </motion.button>
                <motion.button variants={itemVariants} className="btn-secondary hover:bg-navy-50">
                  Hover State
                </motion.button>
              </div>
              <motion.p variants={itemVariants} className="text-sm text-text-secondary mt-lg">
                Navy border, white background, navy text. Used for alternative actions like "Learn More", "Go Back", "Skip".
              </motion.p>
            </div>

            <div className="card-base p-2xl">
              <motion.h4 variants={itemVariants} className="mb-lg">Ghost Button</motion.h4>
              <div className="flex flex-wrap gap-md">
                <motion.button variants={itemVariants} className="btn-ghost">
                  Ghost Action
                </motion.button>
                <motion.button variants={itemVariants} className="btn-ghost hover:text-gold-700">
                  Hover State
                </motion.button>
              </div>
              <motion.p variants={itemVariants} className="text-sm text-text-secondary mt-lg">
                Gold text, no background. Used for tertiary actions like "Download PDF", "View More", "Read Article".
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 4: Card Components */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Card Components</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Refined cards with subtle shadows, gentle borders, and hover elevation. Used for features, testimonials, projects, and information blocks.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {[
              {
                icon: '📊',
                title: 'Feature Card',
                description: 'Used for service features, benefits, or capabilities. Includes icon, title, and description.',
              },
              {
                icon: '💰',
                title: 'Investment Card',
                description: 'Displays project information: location, investment amount, ROI, and timeline.',
              },
              {
                icon: '✨',
                title: 'Testimonial Card',
                description: 'Shows client quotes with avatar, name, and title. Builds social proof.',
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-base p-lg hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-md">{card.icon}</div>
                <h3 className="mb-md group-hover:text-gold-600 transition-colors">{card.title}</h3>
                <p className="text-sm text-text-secondary">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 5: Forms & Inputs */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Forms & Inputs</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Clean, accessible form inputs with clear focus states and error handling. Designed for mobile touch and desktop precision.
          </motion.p>

          <div className="card-base p-2xl max-w-lg space-y-lg">
            <div>
              <motion.label variants={itemVariants} className="block text-sm font-medium text-navy-600 mb-sm">
                Text Input
              </motion.label>
              <motion.input
                variants={itemVariants}
                type="text"
                placeholder="Enter your name"
                className="input-base"
              />
              <motion.p variants={itemVariants} className="text-xs text-text-secondary mt-sm">
                Helper text explaining the field purpose or validation rules.
              </motion.p>
            </div>

            <div>
              <motion.label variants={itemVariants} className="block text-sm font-medium text-navy-600 mb-sm">
                Select Dropdown
              </motion.label>
              <motion.select variants={itemVariants} className="input-base">
                <option>Choose an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </motion.select>
            </div>

            <div>
              <motion.label variants={itemVariants} className="block text-sm font-medium text-navy-600 mb-sm">
                Radio Button Group
              </motion.label>
              <div className="space-y-sm">
                {['Option A', 'Option B', 'Option C'].map((option, idx) => (
                  <motion.label key={idx} variants={itemVariants} className="flex items-center cursor-pointer">
                    <input type="radio" name="radio-group" className="w-4 h-4 cursor-pointer" />
                    <span className="ml-md text-text">{option}</span>
                  </motion.label>
                ))}
              </div>
            </div>

            <div>
              <motion.label variants={itemVariants} className="flex items-center cursor-pointer">
                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                <span className="ml-md text-text">I agree to the terms and conditions</span>
              </motion.label>
            </div>
          </div>
        </motion.section>

        {/* SECTION 6: Spacing & Layout */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Spacing System</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Consistent spacing creates rhythm and luxury. Our system uses 8px baseline with scales from 4px to 64px.
          </motion.p>

          <div className="space-y-lg">
            {[
              { name: 'XS', value: '4px', usage: 'Micro spacing' },
              { name: 'SM', value: '8px', usage: 'Small gaps' },
              { name: 'MD', value: '16px', usage: 'Standard padding' },
              { name: 'LG', value: '24px', usage: 'Section spacing' },
              { name: 'XL', value: '32px', usage: 'Large blocks' },
              { name: '2XL', value: '48px', usage: 'Major sections' },
            ].map((space, idx) => (
              <motion.div key={idx} variants={itemVariants} className="space-y-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-navy-600">{space.name}</p>
                    <p className="text-sm text-text-secondary">{space.usage}</p>
                  </div>
                  <p className="text-sm text-gold-600 font-bold">{space.value}</p>
                </div>
                <div
                  className="h-2 bg-gold-100 rounded-full"
                  style={{ width: space.value }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 7: Shadows & Elevation */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Shadows & Elevation</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Subtle shadows create depth and hierarchy without being obvious. Multiple shadow levels for different use cases.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {[
              { name: 'Soft', shadow: 'shadow-soft', usage: 'Subtle elevation' },
              { name: 'Card', shadow: 'shadow-card', usage: 'Primary cards' },
              { name: 'Large', shadow: 'shadow-lg', usage: 'Hero elements' },
            ].map((elevation, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`${elevation.shadow} p-lg rounded-lg bg-white border border-border`}
              >
                <p className="font-bold text-navy-600 mb-sm">{elevation.name}</p>
                <p className="text-sm text-text-secondary">{elevation.usage}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 8: Animation Principles */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Motion & Animation</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Smooth animations powered by Framer Motion. Adds delight without distraction. Staggered reveals create visual hierarchy.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {[
              {
                name: 'Fade In',
                animation: 'animate-fade-in-0',
                duration: '600ms',
                usage: 'Page load, content reveal',
              },
              {
                name: 'Slide Up',
                animation: 'animate-slide-up-0',
                duration: '700ms',
                usage: 'Scroll triggers, section reveals',
              },
              {
                name: 'Hover Lift',
                animation: 'hover:shadow-card',
                duration: '200ms',
                usage: 'Card interactions, buttons',
              },
              {
                name: 'Float',
                animation: 'animate-float',
                duration: '3s infinite',
                usage: 'Background elements, icons',
              },
            ].map((anim, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-base p-lg"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gold-600 mb-lg ${anim.animation}`}
                />
                <p className="font-bold text-navy-600 mb-sm">{anim.name}</p>
                <p className="text-sm text-text-secondary mb-sm">{anim.usage}</p>
                <p className="text-xs text-gold-600">{anim.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SECTION 9: Responsive Breakpoints */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-3xl space-y-lg"
        >
          <motion.h2 variants={itemVariants}>Responsive Design</motion.h2>
          <motion.p variants={itemVariants} className="text-text-secondary max-w-2xl">
            Mobile-first approach. All layouts tested and refined for every screen size. Touch-friendly on mobile, elegant on desktop.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {[
              { name: 'Mobile', breakpoint: '320-639px', icon: '📱' },
              { name: 'Tablet', breakpoint: '640-1023px', icon: '📱' },
              { name: 'Laptop', breakpoint: '1024-1535px', icon: '💻' },
              { name: 'Desktop', breakpoint: '1536px+', icon: '🖥️' },
            ].map((bp, idx) => (
              <motion.div key={idx} variants={itemVariants} className="card-base p-lg text-center">
                <p className="text-3xl mb-md">{bp.icon}</p>
                <p className="font-bold text-navy-600 mb-sm">{bp.name}</p>
                <p className="text-xs text-text-secondary">{bp.breakpoint}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-navy-600 to-navy-800 text-white rounded-xl p-3xl text-center space-y-lg"
        >
          <motion.h2 variants={itemVariants} className="text-white">
            See the Design in Action
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/80 max-w-2xl mx-auto">
            This design system powers every page of the SIS website. Consistent, refined, and built for conversion.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-md justify-center">
            <Link href="/" className="btn-primary">
              Visit Homepage
            </Link>
            <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white/10">
              See It in Action
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
