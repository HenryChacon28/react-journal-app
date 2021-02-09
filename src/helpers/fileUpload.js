export const fileUpload = async ( file ) => {

    //URL de la api donde se alojan nuestras imagines 
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dcrcnbb0b/upload';

    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file', file );

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            return null;
        }

    } catch (err) {
        throw err;
    }


    // return url de la imagen
}