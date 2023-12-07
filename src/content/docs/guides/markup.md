---
title: Markup Guide
description: Here is the basic of markup MD, MDX files
author: Bard/Gemini
date: 2023-12-07
tags: astro, starlight, documentation
keywords: md files, mdx, frontmatter
---

An MD document has a frontmatter in top that has mandatory and optional fields:
You can use --- as fences before an after field enumeration. This document explain the fields and the purpose of each field then explain MD syntax and MDX syntax.


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

## MD Tables 

 one | two | three
-----|-----|-----------
this | this| this
this | this| this
this | this| this

**Read more:**

* Markdoc frontmatter documentation: https://markdoc.dev/docs/frontmatter
* Advanced MD topics document: https://www.markdownguide.org/extended-syntax/
* Using frontmatter in Astro: https://docs.astro.build/en/guides/configuring-astro/

<hr>

## What is MDX?

MDX, an extension of Markdown, offers several features that enhance the capabilities of basic MD. These features allow for greater flexibility, interactivity, and expressiveness in your documentation. Here's an overview of the key features:

**1. Components:**

* Embed React, Vue, Svelte, and Solid components directly into your MDX files.
* Build interactive elements like forms, charts, and maps.
* Create complex layouts and dynamic content.

**2. JSX syntax:**

* Combine HTML and JavaScript within your MDX content for easier and more concise component creation.
* Leverage JSX features like props, state, and lifecycle methods.
* Enhance your documentation with interactive elements and user-driven functionalities.

**3. Data fetching:**

* Utilize built-in data fetching capabilities to retrieve data from APIs or local files.
* Dynamically populate your MDX content with real-time data.
* Create powerful and informative documentation that reflects the latest information.

**4. Custom syntax extensions:**

* Create your own custom MDX extensions to add new syntax and functionalities specific to your needs.
* Extend the core MDX capabilities to suit your project's unique requirements.
* Build a customized documentation experience for your users.

**5. Global scope and context:**

* Define global variables and functions accessible throughout your MDX files.
* Share context and state across different components within your documentation.
* Simplify component development and maintain consistency across your content.

**6. Code highlighting and snippets:**

* Enjoy built-in code highlighting for various programming languages.
* Display code snippets with proper syntax highlighting for clarity and readability.
* Enhance the technical aspects of your documentation for developers.

**7. Live editing and hot reloading:**

* Experience live editing and hot reloading capabilities for immediate feedback and faster development.
* See your changes reflected instantly without the need to rebuild your documentation.
* Streamline your workflow and improve your productivity.

**Benefits of using MDX:**

* **Interactivity and engagement:** Make your documentation more engaging and interactive for users.
* **Dynamic content:** Display dynamic content based on data or user interaction.
* **Flexibility and customization:** Extend MDX with custom components and functionalities.
* **Improved developer experience:** Enhance your documentation with code snippets and live editing features.
* **Increased productivity:** Streamline your workflow with live updates and hot reloading.

In comparison to basic MD, MDX provides a more powerful and versatile platform for creating documentation. It allows you to integrate code, build interactive elements, and create complex layouts, making your documentation more engaging and informative for your users.

