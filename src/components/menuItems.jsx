// src/data/menuItems.js

const menuItems = [
  {
    title: "Home",
    link: "/", // Make sure this route exists in your application
  },
  {
    title: "South Delhi",
    link: "/", // Consider updating this to a specific route
    subItems: [
      { title: "Chhatarpur ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Chhatarpur DLF", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Dera Mand ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Fatehpur Ber", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Gadaipur ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Ghitorn", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Jaunapur ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Mahabalipuram", link: "/office-space-for-rent-in-gurgaon" },
      { title: "MG Road CDR Chowk to Aya Nagar ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Mother Teresa ", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Pushpanjali  ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Mother Teresa ", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Pushpanjali  ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Radhemohan Drive ", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Sainik Farm  ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Sultanpur ", link: "/office-space-for-rent-in-gurgaon" },
      { title: "Vasant Kunj  ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
      { title: "Westend Greens  ", link: "/office-space-on-rent-in-south-delhi" }, // Ensure these routes exist
     
    ],
  },
  {
    title: "Buy/Sale",
    link: "/projects", // Ensure this route exists
    subItems: [
      { title: "Gurgaon", link: "/office-space-for-rent-in-gurgaon" }, // Ensure this route exists
    ],
  },
  {
    title: "Contact",
    link: "/contact", // Ensure this route exists
  },
];

export default menuItems;
