import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import './Accordion.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AccordionItem {
  /** Unique identifier used to track expanded state */
  value: string
  /** Header text displayed in the trigger */
  header: string
  /** Content revealed when the item is expanded */
  content: React.ReactNode
  /** Optional element rendered before the header text (e.g. an icon) */
  beforeElement?: React.ReactNode
  /** Prevents the item from being toggled */
  disabled?: boolean
}

export interface AccordionProps {
  /** Items to render */
  items: AccordionItem[]
  /** Height and typography scale */
  size?: 'small' | 'medium' | 'large'
  /** Uncontrolled: items open by default */
  defaultValue?: string[]
  /** Controlled: currently open items */
  value?: string[]
  /** Fires when open items change */
  onValueChange?: (value: string[]) => void
  className?: string
}

// ---------------------------------------------------------------------------
// Chevron icon — inline SVG keeps the component self-contained
// ---------------------------------------------------------------------------

function ChevronDown() {
  return (
    <svg
      className="accordion__chevron"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Accordion({
  items,
  size = 'medium',
  defaultValue,
  value,
  onValueChange,
  className,
}: AccordionProps) {
  const rootProps = value !== undefined
    ? { type: 'multiple' as const, value, onValueChange }
    : { type: 'multiple' as const, defaultValue }

  return (
    <RadixAccordion.Root
      {...rootProps}
      className={['accordion', className].filter(Boolean).join(' ')}
      data-size={size}
    >
      {items.map(item => (
        <RadixAccordion.Item
          key={item.value}
          value={item.value}
          className="accordion__item"
          disabled={item.disabled}
        >
          <RadixAccordion.Header className="accordion__header">
            <RadixAccordion.Trigger className="accordion__trigger">
              {item.beforeElement && (
                <span className="accordion__before" aria-hidden="true">
                  {item.beforeElement}
                </span>
              )}
              <span className="accordion__title">{item.header}</span>
              <ChevronDown />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>

          <RadixAccordion.Content className="accordion__content">
            <div className="accordion__content-inner">
              {item.content}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  )
}
