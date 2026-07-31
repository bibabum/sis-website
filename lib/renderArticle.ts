/**
 * Minimal markdown renderer for article content in data/articles.ts.
 *
 * Supports the subset actually used there: ##/### headings, - bullets,
 * 1. numbered items, **bold** and paragraphs. The leading # title is
 * dropped because the article hero already renders it.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Escapes, then turns **text** into bold. */
function inline(text: string): string {
  return escapeHtml(text).replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-bold text-navy-600">$1</strong>'
  );
}

export function renderArticle(markdown: string): string {
  const out: string[] = [];
  let items: string[] = [];
  let listTag: 'ul' | 'ol' | null = null;
  // The first paragraph, before any subheading, is styled as a lead.
  let seenHeading = false;
  let leadUsed = false;

  const flushList = () => {
    if (!listTag) return;
    const cls =
      listTag === 'ul'
        ? 'list-disc pl-xl space-y-sm my-lg text-text-secondary'
        : 'list-decimal pl-xl space-y-md my-lg text-text-secondary';
    out.push(`<${listTag} class="${cls}">${items.join('')}</${listTag}>`);
    items = [];
    listTag = null;
  };

  for (const raw of markdown.split('\n')) {
    const line = raw.trim();

    if (line === '') {
      flushList();
      continue;
    }

    // Hero already shows the title, so skip the top-level heading.
    if (line.startsWith('# ')) {
      flushList();
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      seenHeading = true;
      out.push(
        `<h3 class="text-xl font-sans font-bold text-navy-600 mt-xl mb-sm">${inline(
          line.slice(4)
        )}</h3>`
      );
      continue;
    }

    if (line.startsWith('## ')) {
      flushList();
      seenHeading = true;
      out.push(
        `<h2 class="text-2xl font-serif font-bold text-navy-600 mt-2xl mb-md">${inline(
          line.slice(3)
        )}</h2>`
      );
      continue;
    }

    if (line.startsWith('- ')) {
      if (listTag !== 'ul') {
        flushList();
        listTag = 'ul';
      }
      items.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    const numbered = line.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      if (listTag !== 'ol') {
        flushList();
        listTag = 'ol';
      }
      items.push(`<li>${inline(numbered[1])}</li>`);
      continue;
    }

    flushList();

    if (!seenHeading && !leadUsed) {
      leadUsed = true;
      out.push(
        `<p class="text-xl text-text leading-relaxed border-l-4 border-gold-600 pl-lg my-xl">${inline(
          line
        )}</p>`
      );
      continue;
    }

    out.push(`<p class="text-text-secondary my-md">${inline(line)}</p>`);
  }

  flushList();
  return out.join('');
}
