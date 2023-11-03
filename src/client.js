import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "uismb98i",
  dataset: "production",
  useCdn: false,
  apiVersion: "default",
});

export default client;
