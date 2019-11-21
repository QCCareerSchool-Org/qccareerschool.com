import XBBCODE from 'xbbcode-parser';

export default function parseBBCode(input: string): string {
  const result = XBBCODE.process({
    text: input,
    removeMisalignedTags: false,
    addInLineBreaks: false,
  });
  return result.html;
}
