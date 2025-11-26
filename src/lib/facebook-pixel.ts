// Facebook Pixel event tracking utility

declare global {
  interface Window {
    fbq: {
      (...args: any[]): void;
      loaded?: boolean;
      version?: string;
      queue?: any[];
      callMethod?: (...args: any[]) => void;
      push?: (...args: any[]) => void;
    };
  }
}

/**
 * Track a standard Facebook Pixel event
 * @param eventName - The name of the event (e.g., 'Lead', 'Contact', 'Purchase')
 * @param eventData - Optional event parameters
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData || {});
  }
}

/**
 * Track a custom conversion event
 * @param eventName - The name of the custom event
 * @param eventData - Optional event parameters
 */
export function trackCustomEvent(eventName: string, eventData?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, eventData || {});
  }
}

/**
 * Track a lead conversion (when someone clicks WhatsApp button)
 */
export function trackLead(source?: string) {
  trackEvent('Lead', {
    content_name: 'WhatsApp Contact',
    content_category: 'Contact',
    source: source || 'website',
  });
}

/**
 * Track a contact conversion
 */
export function trackContact(method?: string) {
  trackEvent('Contact', {
    content_name: method || 'Contact Form',
    content_category: 'Contact',
  });
}

/**
 * Track when someone views the menu
 */
export function trackMenuView() {
  trackEvent('ViewContent', {
    content_name: 'Menu',
    content_category: 'Menu',
    content_type: 'product',
  });
}

/**
 * Track when someone clicks on location
 */
export function trackLocationClick(locationType: 'outlet' | 'dapur') {
  trackCustomEvent('LocationClick', {
    location_type: locationType,
  });
}

/**
 * Track when someone clicks on social media link
 */
export function trackSocialClick(platform: string) {
  trackCustomEvent('SocialClick', {
    platform: platform,
  });
}

