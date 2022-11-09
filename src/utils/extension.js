export default function extension ({media}) {
        if (media === undefined || media === null || !media) return null;
        return media.split('.').pop().toLowerCase();
}