import axios from 'axios'

export const getAcrticles = async () => {
    var responce = await axios({
        url : `https://localhost:7243/api/Article/GetArticles`,
        method : 'GET',
    })
    return responce.data;
}

export const getAcrticlesWithoutPhoto = async () => {
    var responce = await axios({
        url : `https://localhost:7243/api/Article/GetArticles?IncludePhoto=false`,
        method : 'GET',
    })
    return responce.data;
}

export const createArticle = async (data) => {
    var responce = await axios({
        url : `https://localhost:7243/api/Article/Create?name=${data.name}&price=${data.price}&category=${data.category}&description=${data.description}&ProductCountry=${data.ProductCountry}&shortDescription=${data.shortDescription}`,
        method : 'POST',
        data : data.avatar,
    })
    return responce;
}

export const deleteArticle = async (id) => {
    var responce = await axios({
        url : `https://localhost:7243/api/Article/Delete?id=${id}`,
        method : 'DELETE',
    })
    return responce;
}