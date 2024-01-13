// communityForumPost.js

export default {
  name: 'communityForumPost',
  title: 'Community Forum Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    },
    // Add other fields like tags, comments, etc.
  ],
};
