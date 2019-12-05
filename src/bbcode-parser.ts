import XBBCODE from 'xbbcode-parser';

XBBCODE.addTags({
  b: {
    openTag: () => '<strong>',
    closeTag: () => '</strong>',
  },
  u: {
    openTag: () => '<u>',
    closeTag: () => '</u>',
  },
  i: {
    openTag: () => '<em>',
    closeTag: () => '</em>',
  },
  s: {
    openTag: () => '<s>',
    closeTag: () => '</s>',
  },
});

export default function parseBBCode(input: string): string {
  const result = XBBCODE.process({
    text: input,
    removeMisalignedTags: true,
    addInLineBreaks: false,
  });
  return result.html;
}
