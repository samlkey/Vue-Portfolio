<template>
    <button
        class="theme-toggle"
        @click="$emit('toggle')"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
        <!-- Sun icon (visible in light mode) -->
        <span class="toggle-icon toggle-sun" :class="{ visible: !isDark }" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4.5"/>
                <line x1="12" y1="2"   x2="12" y2="4.5"/>
                <line x1="12" y1="19.5" x2="12" y2="22"/>
                <line x1="2"  y1="12"  x2="4.5" y2="12"/>
                <line x1="19.5" y1="12" x2="22" y2="12"/>
                <line x1="4.93" y1="4.93" x2="6.76" y2="6.76"/>
                <line x1="17.24" y1="17.24" x2="19.07" y2="19.07"/>
                <line x1="4.93" y1="19.07" x2="6.76" y2="17.24"/>
                <line x1="17.24" y1="6.76" x2="19.07" y2="4.93"/>
            </svg>
        </span>

        <!-- Moon icon (visible in dark mode) -->
        <span class="toggle-icon toggle-moon" :class="{ visible: isDark }" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
            </svg>
        </span>
    </button>
</template>

<script>
export default {
    name: 'Toggle',
    props: ['mode'],
    emits: ['toggle'],
    computed: {
        isDark() { return this.mode === 'dark'; }
    }
}
</script>

<style src="../css/Toggle.scss" lang="scss" />
