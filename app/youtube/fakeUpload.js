// just since we have only 6 uploads a day i figured this would be useful
import sampleResponse from './example_response';

const fakeUpload = (file) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(sampleResponse);
        }, 500);
    });
}

export default fakeUpload;