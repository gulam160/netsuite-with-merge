import { MergeClient, Merge } from "@mergeapi/merge-node-client";

export const merge = new MergeClient({ apiKey: process.env.API_KEY as string });
