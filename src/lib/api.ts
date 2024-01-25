type What = "menu" | "footer" | "posts" | "comments" | "photos" | "items";

export async function fetchStuffWithDelay(what: What, delay: number = 1000) {
  console.log(`${what} in`);
  await new Promise((r) => {
    setTimeout(() => r(0), delay);
  });
  console.log(`${what} done`);

  switch (what) {
    case "menu":
      return [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "About", url: "/about" },
        { id: 3, title: "Contact", url: "/contact" },
      ];
    case "footer":
      return [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "About", url: "/about" },
        { id: 3, title: "Contact", url: "/contact" },
      ];
    case "posts":
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return { id: index, title: `My post #${index}`, url: `/post-${index}` };
      });
    case "comments":
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return {
          id: index,
          title: `My comment #${index}`,
          url: `/comment-${index}`,
        };
      });

    case "photos":
      return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
        return {
          id: index,
          title: `My photo #${index}`,
          url: `/photo-${index}`,
        };
      });

    case "items":
      return [1, 2].map((index) => {
        return {
          id: index,
          title: `My item #${index}`,
          url: `/item-${index}`,
        };
      });
  }
}
