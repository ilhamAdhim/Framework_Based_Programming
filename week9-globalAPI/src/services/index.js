import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
const postNewsBlog = (sentData) => PostAPI('posts', sentData);
const deleteNewsBlog = (deletedData) => DeleteAPI('posts', deletedData);


const API = { getNewsBlog, postNewsBlog, deleteNewsBlog }
export default API