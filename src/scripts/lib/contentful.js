import axios from 'axios'
import { generateItemObjectArray, generateItemObject } from 'contentful-response-parser'

const spaceId = `hmm6b9uhtnq1`
const accessToken = `557250e8a53605db3ca200874c38124a3d0cffdcb3d289c7c6a3230312fa3082`

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

export const getAllProjects = () => {
  const params = { content_type: 'projectPost', include: 10 }
  return contenfulAPI.get('/', {params})
    .then(response => response.data)
    .then(generateItemObjectArray)
}

export const getAllPhotography = () => {
  const params = { content_type: 'photography', include: 10 }
  return contenfulAPI.get('/', {params})
    .then(response => response.data)
    .then(generateItemObjectArray)
}

export const getAllCarouselImages = () => {
  const params = { content_type: 'carouselImages', include: 10 }
  return contenfulAPI.get('/', {params})
    .then(response => response.data)
    .then(generateItemObjectArray)
}
