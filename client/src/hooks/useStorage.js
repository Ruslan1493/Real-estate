import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage = projectStorage;
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            console.log(percentage);
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, () => {
            // const url = await getDownloadURL();
            getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
                console.log('File available at ', downloadURL);
                    setUrl(downloadURL);

                });
        })
    }, [file])
    return { progress, error, url };
};

export default useStorage;