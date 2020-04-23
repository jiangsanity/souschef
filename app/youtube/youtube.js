import MediaUploader from './core-upload';
import TOKEN from './youtube-token';

mediaUpload = (file) => {

    // eventually this will be replaced with the user's input and all that
    var metadata = {
        snippet: {
            title: "Short pizza clip ",
            description: "How to make pizza",
            categoryId: 26
        },
        status: {
            privacyStatus: "private",
            embeddable: true,
            license: "youtube"
        }
    }

    var uploader = new MediaUploader({
        baseUrl: "https://www.googleapis.com/upload/youtube/v3/videos",
        file: file,
        token: TOKEN.access_token,
        metadata: metadata,
        id: 0,
        params: {
            part: Object.keys(metadata).join(", ")
        },
        onError: (data) => {
            console.log("error", data)
            // onError code
        },
        onProgress: (data) => {
            console.log("Progress", data);
            // onProgress code
        },
        onComplete: (data) => {
            console.log("Complete", data);
            // onComplete code
        }
    });

    uploader.upload()
}

export default mediaUpload;