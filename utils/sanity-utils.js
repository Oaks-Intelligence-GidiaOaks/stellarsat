import { createClient } from "@sanity/client";
import axios from "axios";

const clientConfig = {
  projectId: "5r6dhiut",
  dataset: "production",
  apiVersion: "2023-11-02",
  useCdn: false,
};

export const getBlogPosts = async (searchTitle) => {
  const client = createClient(clientConfig);

  const query = `*[_type=="post"] | order(_createdAt) {
    _id,
    title,
    content,
    "image": image.asset->url,
    "slug": slug.current,
    tag,
    _createdAt,
    author,
    "authorImg": authorImg.asset->url,
    position,
  }`;

  const searchQuery = `*[_type=="post" && title match "${searchTitle}"] | order(_createdAt)`;

  return searchTitle ? client.fetch(searchQuery) : client.fetch(query);
};

export const getBlogPost = async (slug) => {
  const client = createClient(clientConfig);

  console.log("slug", slug);

  const query = `*[_type=="post" && slug.current == $slug ] [0] {
    _id,
    title,
    content,
    "image": image.asset->url,
    "slug": slug.current,
    tag,
    _createdAt,
    author,
    "authorImg": authorImg.asset->url,
    position,
  }`;

  return client.fetch(query, { slug });
};

export const getTestimonials = async () => {
  const client = createClient(clientConfig);

  const query = `*[_type=="testimonials"] |order(_createdAt desc) {
    _id,
    name,
    content,
    "userImage": userImage.asset->url,
    testPosition,
  }`;

  return client.fetch(query);
};

export const addFormData = async (data) => {
  const client = createClient(clientConfig);
  try {
    const res = await client.create(data);

    console.log(res, "data created succesfully...");
  } catch (err) {
    console.error(`Error occurred: `, err);
  }
};
