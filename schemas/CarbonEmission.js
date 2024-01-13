// carbonEmission.js

export default {
  name: 'carbonEmission',
  title: 'Carbon Emission',
  type: 'document',
  fields: [
    {
      name: 'activityType',
      title: 'Activity Type',
      type: 'string',
      validation: Rule => Rule.required(),
      // You might want to use an enumeration for activity types
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: Rule => Rule.required().positive(),
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
    // Add other fields as needed for specific activity types
  ],
};
