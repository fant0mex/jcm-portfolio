import axios from 'axios'
import { generateItemObjectArray, generateItemObject } from 'contentful-response-parser'

const spaceId = `we4yhyd6uzsm`
const accessToken = `0b5f0c65cef31feb9dafa2010cc916fbefe54dacbbba8890adca1f9e097eefc7`

const contenfulAPI = axios.create({
  method: 'get',
  baseURL: `https://cdn.contentful.com/spaces/${spaceId}/entries`,
  headers: { Authorization: `Bearer ${accessToken}` }
})

export const getAllBlogPosts = () => {
  const params = { content_type: 'blogPost', include: 10 }
  return contenfulAPI.get('/', {params})
    .then(response => response.data)
    .then(generateItemObjectArray)
}

export const getBlogPost = (postSlug) => {
  const params = { content_type: 'blogPost', include: 10, 'fields.slug': postSlug }
  return contenfulAPI.get('/', {params})
    .then(response => response.data)
    .then(generateItemObject)
}
