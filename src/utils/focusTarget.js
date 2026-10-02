/**
 * Move keyboard / screen-reader focus to a non-interactive element (a page
 * section or <main>) after jumping to it, so the next Tab continues from
 * there instead of from the link that was activated.
 *
 * The temporary tabindex is removed again on blur, so later mouse clicks on
 * the section's text don't keep focusing the whole section.
 */
const focusTarget = (el) => {
  if (!el) return;
  if (!el.hasAttribute('tabindex')) {
    el.setAttribute('tabindex', '-1');
    el.addEventListener('blur', () => el.removeAttribute('tabindex'), { once: true });
  }
  el.focus({ preventScroll: true });
};

export default focusTarget;
