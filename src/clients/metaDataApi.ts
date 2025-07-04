import axios from 'axios';
import { Movies } from '../types/movie';

export const  getMetadata = async () => {
    const response =  await axios.get<Movies>('https://tv5hn2gvyijpl76yxlmsy66jwa0nlmxn.lambda-url.us-east-1.on.aws');
    return response.data;
}