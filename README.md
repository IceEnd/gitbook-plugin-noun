# gitbook-plugin-noun

Convert nouns to links.

[![npm](https://img.shields.io/npm/v/gitbook-plugin-noun.svg?style=for-the-badge)](https://www.npmjs.com/package/gitbook-plugin-noun)

## Install

Use it for your book, by adding to your book.json:

```json
{
    "noun": "Noun.md", // Nouns file path
    "plugins": ["noun"]
}
```

Then run `gitbook install`.

## Usage

In Noun.md, each title is a noun：

```markdown
# gitbook

GitBook makes it easy for your team to write and maintain high-quality documentation.
```

Using plugins:

```markdown
<n> gitbook </n>
```

After build:

```
<a href="./Nonu.html#gitbook">gitbook</a>
```
