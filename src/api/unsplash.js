import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID _l8Ap2dXnt2zy3YXJI5uvmiUsJK-Swb3EY9N3Zjcn10'
     } 
})