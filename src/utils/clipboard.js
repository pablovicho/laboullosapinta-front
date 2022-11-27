export default async function writeClipImg(text) {
  if ('clipboard' in navigator)
    {return await navigator.clipboard.writeText(text)
  } else {
    return document.execCommand('copy', true, text);
  }
}
  