export function useDebounce(func: any, delay: any) {
  let timerId: any;
  return function () {
    const context: any = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
