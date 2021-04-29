import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';

// const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');
// const postNewsBlog = (sentData) => PostAPI('posts', sentData);
// const deleteNewsBlog = (deletedData) => DeleteAPI('posts', deletedData);

const getStudents = () => GetAPI('students?_sort=id&_order=asc');
const postStudents = (sentData) => PostAPI('students', sentData);
const deleteStudents = (deletedData) => DeleteAPI('students', deletedData);


const API = { getStudents, postStudents, deleteStudents }

export default API