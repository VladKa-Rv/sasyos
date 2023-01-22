export const getImgBase64Src = (base64) => {
    return `data:image/png;base64,${base64}`;
};

export const base64toFile = (base64String, filename) => {
    const byteCharacters = Buffer.from(base64String, 'base64');
    return new File([byteCharacters], filename);
};