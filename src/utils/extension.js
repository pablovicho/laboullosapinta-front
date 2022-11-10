export default function extension (media) {
        console.log(media)
        if (media === undefined || media === null || !media) return null;
        console.log("extension",media.split('.').pop().toLowerCase())
        return media.split('.').pop().toLowerCase();
}