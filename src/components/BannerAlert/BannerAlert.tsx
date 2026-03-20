import React from 'react'
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react'
import { Button } from '../Button'
import './BannerAlert.css'

export type BannerAlertVariant = 'informative' | 'positive' | 'notice' | 'negative'

export interface BannerAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic variant. Controls visual style, icon, and ARIA role. Defaults to 'informative'. */
  variant?: BannerAlertVariant
  /** Optional heading above the message. Keep under 50 characters. */
  title?: string
  /**
   * Message content. May include links. Required.
   * Passed as children to remain composable with inline elements.
   */
  children: React.ReactNode
  /**
   * Up to two action buttons, right-aligned below the message.
   * Use Button variant="outline" color="neutral" for primary action,
   * variant="ghost" color="neutral" for secondary.
   */
  actions?: React.ReactNode
  /**
   * Callback fired when the close button is clicked.
   * Presence of this prop renders the close button — consumer is responsible
   * for unmounting or hiding the banner in response.
   */
  onClose?: () => void
}

// Icons are fixed per variant and cannot be customised.
const VARIANT_ICONS: Record<BannerAlertVariant, React.ElementType> = {
  informative: Info,
  positive:    CheckCircle2,
  notice:      AlertTriangle,
  negative:    XCircle,
}

// role="status" + aria-live="polite"  → non-critical (informative, positive)
// role="alert"  + aria-live="assertive" → must announce immediately (notice, negative)
const VARIANT_ROLE: Record<BannerAlertVariant, 'status' | 'alert'> = {
  informative: 'status',
  positive:    'status',
  notice:      'alert',
  negative:    'alert',
}

const VARIANT_LIVE: Record<BannerAlertVariant, 'polite' | 'assertive'> = {
  informative: 'polite',
  positive:    'polite',
  notice:      'assertive',
  negative:    'assertive',
}

export const BannerAlert = React.forwardRef<HTMLDivElement, BannerAlertProps>(
  function BannerAlert(
    {
      variant  = 'informative',
      title,
      children,
      actions,
      onClose,
      className,
      ...rest
    },
    ref,
  ) {
    const Icon = VARIANT_ICONS[variant]

    return (
      <div
        ref={ref}
        role={VARIANT_ROLE[variant]}
        aria-live={VARIANT_LIVE[variant]}
        className={['banner-alert', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...rest}
      >
        {/* Variant icon — fixed, decorative */}
        <span className="banner-alert__icon" aria-hidden="true">
          <Icon />
        </span>

        {/* Content — title + message only */}
        <div className="banner-alert__content">
          {title && (
            <strong className="banner-alert__title">{title}</strong>
          )}
          <p className="banner-alert__message">{children}</p>
        </div>

        {/* Close button — only rendered when onClose is provided */}
        {onClose && (
          <Button
            variant="ghost"
            size="small"
            color="neutral"
            iconStart={<X size={14} aria-hidden="true" />}
            aria-label="Close banner"
            onClick={onClose}
            className="banner-alert__close"
          />
        )}

        {/* Actions — direct grid child so they span content + close columns */}
        {actions && (
          <div className="banner-alert__actions">{actions}</div>
        )}
      </div>
    )
  },
)
