export default function getWindowDimensions() {
  const { clientWidth: width, clientHeight: height } = document.documentElement;
  return { width, height };
}
