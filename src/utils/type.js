export default function typeOfMedia(string) {
    const videoFormats = ["mp4", "mkv", "webm", "m4v", "mpeg4", "mpg", "mov", "mpg4"]
    const audioFormats = ["mp3", "wav", "wma", "aac", "wma", "aiff", "flac", "alac"]
    const imageFormats = ["jpg", "jpeg", "png"]

    if (string === undefined || string === null || !string) return null;

    const extension = string.split('.').pop().toLowerCase();
    
    return  videoFormats.includes(extension) ? "video" : 
            audioFormats.includes(extension) ? "audio" : 
            imageFormats.includes(extension) ? "image" :
            null
}