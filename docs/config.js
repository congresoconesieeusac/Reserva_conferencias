/**
 * config.js - Centralized Web Application Configuration
 * CONESIEE 2026 - University of San Carlos of Guatemala
 */

const APP_CONFIG = {
  // =========================================================================
  // REQUIRED BOOKMARK: Paste here the URL of the Web App deployed in Apps Script
  // Example: "https://script.google.com/macros/s/AKfycbx.../exec"
  // =========================================================================
  API_URL: 'https://script.google.com/macros/s/AKfycby3dcrSMsFnarjslQ0xlnmFS6QuqscFqLe-5xBX0bdeDUQ1BiJsNDqeBtnhQxuks4Vg/exec',

  // Automatic polling interval in milliseconds (20 seconds)
  POLLING_INTERVAL_MS: 20000,

  // Event Details
  EVENT_NAME: 'CONESIEE 2026',
  EVENT_FULL_NAME: 'XXV National Congress of Students of Mechanical, Electrical, and Electronic Engineering',
  EVENT_DATES: 'September 28 to October 2, 2026',
  INSTITUTION: 'School of Mechanical and Electrical Engineering (EIME), University of San Carlos of Guatemala (USAC)',
  VENUE_DEFAULT: 'USAC Central Library',
  TIMEZONE: 'America/Guatemala',

  // =========================================================================
  // Official contact email of the organizing committee
  // =========================================================================
  COMMITTEE_EMAIL: 'congresoconesieeusa@ingenieria.usac.edu.gt',
  PORTAL_URL: 'https://jordyventurar.github.io/Web-para-CONESIEE-2027',

  // Visual Identity Routes
  LOGO_OFFICIAL: 'assets/logo/conesiee-2026.png',
  LOGO_FALLBACK: 'assets/logo/conesiee-logo.svg',

  // Participation methods
  MODALITIES: {
    individual: {
      id: 'individual',
      name: 'Individual Conference',
      Description: 'One person uses the entire space for 1 hour.'
    },
    panel_2voces: {
      id: 'panel_2voces',
      name: 'Two-voice panel',
      Description: 'Two speakers share the 1-hour space with a joint presentation.'
    },
    split_block: {
      id: 'divided_block',
      name: 'Split block',
      Description: 'Two speakers present complementary topics for 30 minutes each.'
    }
  },

  // Allowed states
  STATUSES: {
    Available: {
      key: 'Available',
      label: 'Available',
      badgeClass: 'status-badge--available',
      canBook: true
    },
    Reserved: {
      key: 'Reserved',
      label: 'Reserved',
      badgeClass: 'status-badge--reserved',
      canBook: false
    },
    Blocked: {
      key: 'Locked',
      label: 'Blocked',
      badgeClass: 'status-badge--blocked',
      canBook: false
    },
    Cancelled: {
      key: 'Cancelled',
      label: 'Cancelled',
      badgeClass: 'status-badge--cancelled',
      canBook: false
    }
  },

  // Error codes translated for the user
  ERROR_MESSAGES: {
    SLOT_NOT_AVAILABLE: 'The selected time slot has just been booked by another user. Please select another time slot.'
    SLOT_NOT_FOUND: 'The requested time slot does not exist or has been removed from the system.'
    RESERVATIONS_DISABLED: 'The reservations system is temporarily closed by the committee.'
    RATE_LIMITED: 'You have reached the limit of allowed attempts. Please wait one minute before trying again.'
    SERVER_BUSY: 'The server is processing another concurrent request. Please try sending again.'
    VALIDATION_ERROR: 'Please check the data entered in the form.'
    NETWORK_ERROR: 'Unable to connect to the server. Check your internet connection.'
    SERVER_ERROR: 'An error occurred on the server. Please try again in a few moments.'
  }
};

// Freeze settings to prevent accidental changes
if (typeof Object.freeze === 'function') {
  Object.freeze(APP_CONFIG);
  Object.freeze(APP_CONFIG.MODALITIES);
  Object.freeze(APP_CONFIG.STATUSES);
  Object.freeze(APP_CONFIG.ERROR_MESSAGES);
}