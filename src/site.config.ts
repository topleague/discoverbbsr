export const SITE = {
  name: "Discover Bhubaneswar",
  tagline: "Discover the people, places, stories and culture of Bhubaneswar.",
  description: "Discover Bhubaneswar — stories, people, places and culture from the city.",
  author: "Discover Bhubaneswar",
  authorAvatar: "", // optional URL — falls back to initials circle if blank
  authorBio: "Stories, people, places and happenings from Bhubaneswar and Odisha.",
  email: "you@example.com",
  social: [
    // { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
  ] as { label: string; href: string }[],
  gallery: [
    // Add image URLs to show in the footer's gallery column.
    // "https://example.com/photo1.jpg",
  ] as string[],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Categories", href: "/categories/" },
  { label: "Tags", href: "/tags/" },
] as const;
