const path = require('path');

const posix = path.posix;

function getFileName(str) {
  const reg = /([^\/\\]*\.md$)/ig;
  const res = reg.exec(str);
  if (res) {
    return res[0].replace(/\.md$/, '.html');
  }
  throw new TypeError('gitbook-glugin-noun error: Noun is illegal.');
}

module.exports = {
  // Map of new blocks
  blocks: {
    noun: {
      shortcuts: {
        parsers: ["markdown", "asciidoc", "restructuredtext"],
        start: "<n>",
        end: "<\/n>"
      },
      process: function(block) {
        const currentDir = posix.dirname(this.book.resolve(this.ctx.ctx.file.path))

        const nounPath = this.book.config.get('noun');
        const nounName = getFileName(nounPath);
        const nonuDir = posix.dirname(this.book.resolve(nounPath));

        const relativePath = posix.relative(currentDir, nonuDir);

        const content = block.body.trim();

        const link = posix.join('./', relativePath, nounName);

        return `<a href="${link}#${content}">${content}</a>`;
      }
    }
  }
};
