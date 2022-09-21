import { unref, onMounted, onUnmounted } from 'vue';

export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}

export function useClickOutside(ref, cb) {
  let target = null;

  const listener = (event) => {
    if (!target) target = unref(ref);
    if (!(target === event.target || target.contains(event.target))) cb();
  };

  useEventListener(document.body, 'click', listener);
}