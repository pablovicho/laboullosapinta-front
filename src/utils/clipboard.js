export default async function writeClipImg(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  }
  }
  