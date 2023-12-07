---
title: MD Markup Guide
description: Here is the basic of markup MD files
author: John Doe
date: 2023-12-07
tags: astro, starlight, documentation
keywords: md files, frontmatter
---

An MD document has a frontmatter in top that has mandatory and optional fields:
You can use --- as fances before an after field enumeration. 


**mandatory fields**

* title: MD Markup Guide
* description: Here is the basic of markup MD files

**optional fields**

* author: John Doe
* date: 2023-12-07
* tags: astro, starlight, documentation
* keywords: md files, frontmatter


## Basic MD Markup

Markdown is a lightweight markup language that allows you to format text and structure documents in a simple and easy-to-read way. It's widely used for creating documentation, blogs, and other text-based content. Here's a breakdown of the basic markups in MD:

**Text formatting:**

* **Bold:** Use `**bold text**` or `__bold text__` to make text bold.
* **Italic:** Use `*italic text*` or `_italic text_` to italicize text.
* **Strikethrough:** Use `~~strikethrough text~~` to strikethrough text.
* **Code:** Use `inline code` for short code snippets.
* **Preformatted text:** Use indented code blocks or fenced code blocks (```) for longer code snippets or text that needs to be displayed verbatim.

**Headings:**

* Use # for the main heading (H1), ## for subheadings (H2), and so on.

**Lists:**

* Use `*` or `-` for unordered lists and numbers for ordered lists:
    * Item 1
    * Item 2
    * Item 3
1. Item 1
2. Item 2
3. Item 3

**Links:**

* Use `[link text](https://example.com)` to create a hyperlink.

**Images:**

* Use `![alt text](image.jpg)` to embed an image.

**Blockquotes:**

* Use `> blockquote text` to create a blockquote.

**Horizontal rule:**

* Use `---` to create a horizontal rule.

**Other basic markups:**

* `\`: Escape special characters like *, _, #, etc.
* `[]`: Use brackets for inline links or images with alternate text.
* `():`: Use parentheses for parenthetical text.

These are just the basic markups in MD. There are many other features available, such as tables, footnotes, and emoji support. You can find more information and examples in the Markdown Guide: https://www.markdownguide.org/

Here are some additional things to keep in mind:

* MD is case-insensitive.
* Whitespace is important for formatting.
* There are different markdown flavors with slightly different syntax.

## Table 

 one | two | three
-----|-----|-----------
this | this| this

**Read more:**

* Markdoc frontmatter documentation: https://markdoc.dev/docs/frontmatter
* Advanced MD topics document: https://www.markdownguide.org/extended-syntax/
* Using frontmatter in Astro: https://docs.astro.build/en/guides/configuring-astro/