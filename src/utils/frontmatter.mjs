import getReadingTime from 'reading-time';
import {toString} from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const text = toString(tree);
    data.astro.frontmatter.readingTime = Math.ceil(getReadingTime(text).minutes);
  };
}
