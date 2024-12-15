// src/lib/stores/navigationStore.js
import { writable } from 'svelte/store';

const STORAGE_KEY = 'mgt_gratitude_story';

// Create a writable store with sessionStorage persistence
function createPersistedNavigationStore() {
    // Load initial value from sessionStorage if available
    const storedHistory = typeof window !== 'undefined' 
        ? JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '[]')
        : [];
        
    const store = writable(storedHistory);
    
    // Subscribe to changes and update sessionStorage
    if (typeof window !== 'undefined') {
        store.subscribe(value => {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
        });
    }
    
    return store;
}

export const navigationHistory = createPersistedNavigationStore();

// Initialize or restore the navigation tracking
export function initializeNavigationTracking() {
    if (typeof window !== 'undefined') {
        // Only add current path if it's not already the last entry
        navigationHistory.update(history => {
            const currentPath = window.location.pathname;
            if (history.length === 0 || history[history.length - 1] !== currentPath) {
                return [...history, currentPath];
            }
            return history;
        });
    }
}

// Handle navigation with timestamps and metadata
export async function handleNavigation(section) {
    // const path = section.replace(/^\//, '');

    // Only track non-empty paths
    // if (!path) return;

    navigationHistory.update(history => {
        const maxHistorySize = 50;

        const newHistory = [...history, section];
        
        // Remove oldest entries if exceeding max size
        if (newHistory.length > maxHistorySize) {
            return newHistory.slice(-maxHistorySize);
        }
        
        return newHistory;
    });
}

// Utility functions
export function clearHistory() {
    navigationHistory.set([]);
}

export function getLastNPaths(n = 5) {
    let history;
    navigationHistory.subscribe(value => history = value)();
    return history.slice(-n);
}